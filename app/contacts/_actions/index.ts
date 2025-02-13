"use server";

import { ContactFormSchema } from "@/app/contacts/_schemas";
import { prisma } from "@/db/prisma";
import { replaceVariables } from "@/lib/mails/helper";
import { sendEmail } from "@/lib/mails/send-email";

export async function sendMessage(contactData: ContactFormSchema) {
  const { isAccept, ...others } = contactData;

  try {
    const createdMessage = await prisma.$transaction(
      async (prismaTransaction) => {
        const createdMessage = await prismaTransaction.contactMessage.create({
          data: {
            ...others,
          },
        });

        const emailValues = {
          website_name: process.env.NEXT_PUBLIC_WEBSITE_TITLE as string,
          website_url: process.env.NEXT_PUBLIC_SITE_URL as string,
          current_year: new Date().getFullYear().toString() as string,
          firstName: contactData.firstName,
          lastName: contactData.lastName,
          email: contactData.email,
          message: contactData.message,
          website_email: process.env.NEXT_PUBLIC_SITE_URL as string,
          support_email: process.env.ADMIN_SUPPORT_EMAIL as string,
          support_phone: process.env.ADMIN_SUPPORT_PHONE as string,
        };

        const emailTemplate = await prisma.emailTemplate.findFirst({
          where: { key: "contacts-email" },
        });

        if (!emailTemplate || !emailTemplate.code) {
          throw new Error("Имейл темплейтът не е намерен");
        }

        const replacedHtml = replaceVariables(emailTemplate.code, emailValues);

        if (!replacedHtml.success) {
          throw new Error(replacedHtml.result);
        }

        const result = await sendEmail({
          to: [contactData.email, process.env.ADMIN_SUPPORT_EMAIL as string],
          subject: "Запитване от сайта",
          html: replacedHtml.result,
          allowReply: false,
        });

        if (result.error) {
          throw new Error(result.error);
        }

        return createdMessage;
      }
    );

    return { createdMessage, message: "Съобщението беше изпратено." };
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    } else {
      return { error: "Нещо се обърка." };
    }
  }
}
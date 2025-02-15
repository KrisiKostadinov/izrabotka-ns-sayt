"use server";

import { ContactFormSchema } from "@/app/contacts/_schemas";
import { prisma } from "@/db/prisma";
import { replaceVariables } from "@/lib/mails/helper";
import { sendEmail } from "@/lib/mails/send-email";
import { formatPhoneNumber } from "@/lib/utils";

export async function sendMessage(contactData: ContactFormSchema) {
  try {
    const createdMessage = await prisma.contactMessage.create({
      data: {
        email: contactData.email,
        firstName: contactData.firstName,
        lastName: contactData.lastName,
        message: contactData.message,
      },
    });

    await Promise.all([
      await prepareAndSendToAdminEmail(
        contactData.firstName,
        contactData.lastName,
        contactData.email,
        contactData.message
      ),
      await prepareAndSendToCustomerEmail(contactData.email),
    ]);
    
    return { createdMessage, message: "Съобщението беше изпратено." };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Нещо се обърка.");
    }
  }
}

const prepareAndSendToAdminEmail = async (
  firstName: string,
  lastName: string,
  email: string,
  message: string
) => {
  const emailValues = {
    website_name: process.env.NEXT_PUBLIC_WEBSITE_TITLE as string,
    website_url: process.env.NEXT_PUBLIC_SITE_URL as string,
    current_year: new Date().getFullYear().toString() as string,
    firstName: firstName,
    lastName: lastName,
    email: email,
    message: message,
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
    to: [process.env.ADMIN_SUPPORT_EMAIL as string],
    subject: "Запитване от сайта",
    html: replacedHtml.result,
    allowReply: false,
  });

  if (result.error) {
    throw new Error(result.error);
  }
};

const prepareAndSendToCustomerEmail = async (email: string) => {
  const emailValues = {
    website_name: process.env.NEXT_PUBLIC_WEBSITE_TITLE as string,
    website_url: process.env.NEXT_PUBLIC_SITE_URL as string,
    support_email: process.env.NEXT_PUBLIC_ADMIN_SUPPORT_EMAIL as string,
    facebook: process.env.NEXT_PUBLIC_SOCIAL_ACCOUNT_FACEBOOK as string,
    support_phone: formatPhoneNumber(process.env.NEXT_PUBLIC_ADMIN_SUPPORT_PHONE as string),
  };

  const emailTemplate = await prisma.emailTemplate.findFirst({
    where: { key: "contact_formcustomer_confirmation" },
  });

  if (!emailTemplate || !emailTemplate.code) {
    throw new Error("Имейл темплейтът не е намерен");
  }

  const replacedHtml = replaceVariables(emailTemplate.code, emailValues);

  if (!replacedHtml.success) {
    throw new Error(replacedHtml.result);
  }

  const result = await sendEmail({
    to: [email],
    subject: "Потвърждение за получено запитване",
    html: replacedHtml.result,
    allowReply: true,
  });

  if (result.error) {
    throw new Error(result.error);
  }
};

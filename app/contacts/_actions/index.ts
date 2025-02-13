"use server";

import { ContactFormSchema } from "@/app/contacts/_schemas";
import { prisma } from "@/db/prisma";

export async function sendMessage(contactData: ContactFormSchema) {
  const { isAccept, ...others } = contactData;

  const createdMessage = await prisma.contactMessage.create({
    data: {
      ...others,
    }
  });

  return { createdMessage, message: "Съобщението беше изпратено." }
}

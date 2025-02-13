import * as z from "zod";

export const contactFormSchema = z.object({
  firstName: z.string().min(1, { message: "Това поле е задължително." }),
  lastName: z.string().min(1, { message: "Това поле е задължително." }),
  message: z.string().min(1, { message: "Това поле е задължително." }),
  email: z.string().email({ message: "Въведете валиден имейл адрес." }),
  isAccept: z.enum(["yes", "no"]),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;

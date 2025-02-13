import * as z from "zod";

export const forgotPasswordFormSchema = z.object({
  email: z.string().email({ message: "Въведете валиден имейл адрес." }),
});

export type ForgotPasswordFormSchema = z.infer<typeof forgotPasswordFormSchema>;
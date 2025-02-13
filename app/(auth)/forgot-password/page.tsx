import { Metadata } from "next";

import PageWrapper from "@/components/page-wrapper";
import ForgotPasswordForm from "@/app/(auth)/forgot-password/_components/forgot-password";
import AuthWrapper from "@/app/(auth)/_components/auth-wrapper";

export const metadata: Metadata = {
  title: `Забравена парола ${process.env.SEPARATOR} ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
  description:
    "Попълнете полето за да получите линк по имейл за смяна на паролата.",
  openGraph: {
    title: `Забравена парола ${process.env.SEPARATOR} ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
    description:
      "Попълнете полето за да получите линк по имейл за смяна на паролата.",
  },
};

export default function ForgotPassword() {
  return (
    <>
      <PageWrapper>
        <AuthWrapper
          title="Забравена парола"
          message="Попълнете полето за да получите линк по имейл за смяна на паролата."
        >
          <ForgotPasswordForm />
        </AuthWrapper>
      </PageWrapper>
    </>
  );
}

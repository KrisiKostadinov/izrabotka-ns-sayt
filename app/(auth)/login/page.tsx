import { Metadata } from "next";

import PageWrapper from "@/components/page-wrapper";
import LoginForm from "@/app/(auth)/login/_components/login-form";
import AuthWrapper from "@/app/(auth)/_components/auth-wrapper";

export const metadata: Metadata = {
  title: `Влизане в профила ${process.env.SEPARATOR} ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
  description: "Попълнете полетата за да достъпите профила си.",
  openGraph: {
    title: `Влизане в профила ${process.env.SEPARATOR} ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
    description: "Попълнете полетата за да достъпите профила си.",
  },
};

export default function Login() {
  return (
    <>
      <PageWrapper>
        <AuthWrapper
          title="Влизане в акаунта"
          message="Попълнете полетата за да достъпите профила си."
        >
          <LoginForm />
        </AuthWrapper>
      </PageWrapper>
    </>
  );
}

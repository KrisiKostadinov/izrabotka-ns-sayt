import { Metadata } from "next";

import PageWrapper from "@/components/page-wrapper";
import RegisterForm from "@/app/(auth)/register/_components/register-form";
import AuthWrapper from "@/app/(auth)/_components/auth-wrapper";

export const metadata: Metadata = {
  title: `Създаване на профил ${process.env.SEPARATOR} ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
  description: "Попълнете полетата за да създадете своя профил на сайта.",
  openGraph: {
    title: `Създаване на профил ${process.env.SEPARATOR} ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
    description: "Попълнете полетата за да създадете своя профил на сайта.",
  },
};

export default function Register() {
  return (
    <>
      <PageWrapper>
        <AuthWrapper
          title="Създаване на профил"
          message="Попълнете полетата за да създадете своя профил на сайта."
        >
          <RegisterForm />
        </AuthWrapper>
      </PageWrapper>
    </>
  );
}

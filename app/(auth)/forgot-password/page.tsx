import { Metadata } from "next";

import PageWrapper from "@/components/page-wrapper";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ForgotPasswordForm from "@/app/(auth)/forgot-password/_components/forgot-password";

export const metadata: Metadata = {
  title: `Влизане в профила ${process.env.SEPARATOR} ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
  description: "Попълнете полетата за да достъпите профила си.",
  openGraph: {
    title: `Влизане в профила ${process.env.SEPARATOR} ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
    description: "Попълнете полетата за да достъпите профила си.",
  }
}

export default function Login() {
  return (
    <>
      <PageWrapper>
        <Card className="max-w-sm mx-auto mt-10 shadow-2xl shadow-black-100 border border-black-100">
          <CardHeader>
            <h1 className="text-center text-3xl font-semibold">
              Забравена парола
            </h1>
          </CardHeader>
          <Separator />
          <CardContent className="mt-5">
            <ForgotPasswordForm />
          </CardContent>
        </Card>
      </PageWrapper>
    </>
  );
}

import { Metadata } from "next";

import PageWrapper from "@/components/page-wrapper";
import RegisterForm from "@/app/(auth)/register/_components/register-form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: `Създаване на профил ${process.env.SEPARATOR} ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
  description: "Попълнете полетата за да създадете своя профил на сайта.",
  openGraph: {
    title: `Създаване на профил ${process.env.SEPARATOR} ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
    description: "Попълнете полетата за да създадете своя профил на сайта.",
  }
}

export default function Register() {
  return (
    <>
      <PageWrapper>
        <Card className="max-w-sm mx-auto mt-10 shadow-2xl shadow-black-100 border border-black-100">
          <CardHeader>
            <h1 className="text-center text-3xl font-semibold">
              Създаване на профил
            </h1>
          </CardHeader>
          <Separator />
          <CardContent className="mt-5">
            <RegisterForm />
          </CardContent>
        </Card>
      </PageWrapper>
    </>
  );
}

import { Metadata } from "next";

import PageWrapper from "@/components/page-wrapper";
import DisplayCells from "@/app/contacts/_components/display-cells";
import ContactForm from "@/app/contacts/_components/contact-form";

export const metadata: Metadata = {
  title: `Контакти ${process.env.SEPARATOR} ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
  description: `Можете да се свържете с мен по някой от следните възможности: тел: ${process.env.NEXT_PUBLIC_ADMIN_SUPPORT_PHONE}, имейл: ${process.env.NEXT_PUBLIC_ADMIN_SUPPORT_EMAIL} или от формата за на сайта.`,
  keywords:
    "изработка на сайт, модерен уебсайт, уеб програмист, фрийланс програмист, уеб разработка, уеб дизайн, създаване на сайт, freelance уеб програмист, Кристиан програмист, разработка на сайтове",
  openGraph: {
    title: `Контакти ${process.env.SEPARATOR} ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
    description: `Можете да се свържете с мен по някой от следните възможности: тел: ${process.env.NEXT_PUBLIC_ADMIN_SUPPORT_PHONE}, имейл: ${process.env.NEXT_PUBLIC_ADMIN_SUPPORT_EMAIL} или от формата за на сайта.`,
  },
};

export default function Projects() {
  return (
    <PageWrapper>
      <main className="space-y-10 py-10">
        <section className="container mx-auto text-center space-y-5">
          <h1 className="text-3xl font-semibold">Контакти</h1>
          <p className="max-w-lg mx-auto text-muted-foreground text-lg">
            Можете да се свържете с мен по някой от следните начини или да
            използвате формата по-долу на уеб сайта.
          </p>
        </section>
        <section className="container mx-auto">
          <DisplayCells />
        </section>
        <section className="container mx-auto">
          <ContactForm />
        </section>
      </main>
    </PageWrapper>
  );
}

import { Metadata } from "next";

import PageWrapper from "@/components/page-wrapper";

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
      <main>
        <section className="container mx-auto text-center mt-5">
          <h1 className="text-3xl font-semibold">Контакти</h1>
        </section>
      </main>
    </PageWrapper>
  );
}
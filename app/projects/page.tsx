import { Metadata } from "next";

import PageWrapper from "@/components/page-wrapper";

export const metadata: Metadata = {
  title: `Мойте проекти ${process.env.SEPARATOR} ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
  description:
    "Здравейте! Аз съм Кристиан, уеб програмист на свободна практика.",
  keywords:
    "изработка на сайт, модерен уебсайт, уеб програмист, фрийланс програмист, уеб разработка, уеб дизайн, създаване на сайт, freelance уеб програмист, Кристиан програмист, разработка на сайтове",
  openGraph: {
    title: `Мойте проекти ${process.env.SEPARATOR} ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
    description:
      "Здравейте! Аз съм Кристиан, уеб програмист на свободна практика.",
  },
};

export default function Projects() {
  return (
    <PageWrapper>
      <main>
        <section className="container mx-auto text-center mt-5">
          <h1 className="text-3xl font-semibold">Мойте проекти</h1>
        </section>
      </main>
    </PageWrapper>
  );
}

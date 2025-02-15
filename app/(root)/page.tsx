import { Metadata } from "next";

import PageWrapper from "@/components/page-wrapper";
import Hero from "@/app/(root)/_components/hero";
import WhyMe from "@/app/(root)/_components/why-me";
import Advantages from "@/app/(root)/_components/advantages";
import Services from "@/app/(root)/_components/services";
import WhyIsTheCustomer from "@/app/(root)/_components/who-is-the-customer";

export const metadata: Metadata = {
  title: "Изработка на модерен сайт",
  description: "Здравейте! Аз съм Кристиан, уеб програмист на свободна практика.",
  keywords: "изработка на сайт, модерен уебсайт, уеб програмист, фрийланс програмист, уеб разработка, уеб дизайн, създаване на сайт, freelance уеб програмист, Кристиан програмист, разработка на сайтове",
  openGraph: {
    title: "Изработка на модерен сайт",
    description: "Здравейте! Аз съм Кристиан, уеб програмист на свободна практика.",
  },
};

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <Advantages />
      <Services />
      <WhyMe />
      <WhyIsTheCustomer />
    </PageWrapper>
  );
}
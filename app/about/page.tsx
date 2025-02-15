import { Metadata } from "next";

import PageWrapper from "@/components/page-wrapper";
import Presentation from "@/app/about/_components/presentation";
import DisplaySkills from "@/app/about/_components/display-skills";
import WorkProcess from "@/app/about/_components/work-process";
import Maintance from "@/app/about/_components/maintenance";

export const metadata: Metadata = {
  title: `За мен ${process.env.SEPARATOR} ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
  description:
    "Здравейте! Аз съм Кристиан, уеб програмист на свободна практика, фокусиран върху изграждането на ефективни, иновативни и персонализирани уеб решения.",
  keywords:
    "изработка на сайт, модерен уебсайт, уеб програмист, фрийланс програмист, уеб разработка, уеб дизайн, създаване на сайт, freelance уеб програмист, Кристиан програмист, разработка на сайтове",
  openGraph: {
    title: `За мен ${process.env.SEPARATOR} ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
    description:
      "Здравейте! Аз съм Кристиан, уеб програмист на свободна практика, фокусиран върху изграждането на ефективни, иновативни и персонализирани уеб решения.",
  },
};

export default function About() {
  return (
    <PageWrapper>
      <main>
        <Presentation />
        <DisplaySkills />
        <WorkProcess />
        <Maintance />
      </main>
    </PageWrapper>
  );
}

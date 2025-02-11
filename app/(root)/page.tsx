import { Metadata } from "next";

import Hero from "@/app/(root)/_components/hero";
import NavigationBar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Изработка на модерен сайт",
  description: "Здравейте! Аз съм Кристиан, уеб програмист на свободна практика.",
  keywords: "изработка на сайт, модерен уебсайт, уеб програмист, фрийланс програмист, уеб разработка, уеб дизайн, създаване на сайт, freelance уеб програмист, Кристиан програмист, разработка на сайтове",
  openGraph: {
    title: "Изработка на модерен сайт",
    description: "Здравейте! Аз съм Кристиан, уеб програмист на свободна практика.",
  }
};

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col justify-between items-center overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <NavigationBar />
        <Hero />
      </div>
    </main>
  );
}

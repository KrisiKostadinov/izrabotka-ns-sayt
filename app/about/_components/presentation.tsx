import { Button } from "@/components/ui/button";
import { PhoneIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Presentation() {
  return (
    <section className="bg-white text-primary min-h-80 shadow-lg rounded-md shadow-primary px-0 overflow-hidden grid lg:grid-cols-2 items-center">
      <article className="bg-blue-500 flex justify-center items-center w-full h-full py-10">
        <Image
          src={"/images/Kristian.png"}
          alt="Кристиан Костадинов"
          width={400}
          height={300}
          priority
          className="rounded-full shadow-md"
          title="Създаване на сайтове и приложения"
        />
      </article>
      <article className="text-lg space-y-5 py-5 lg:py-10 px-5 lg:px-10">
        <p>
          Здравейте! Аз съм Кристиан, уеб програмист на свободна практика,
          фокусиран върху изграждането на ефективни, иновативни и
          персонализирани уеб решения. Работя с Next.js, React и TypeScript, за
          да създавам бързи, сигурни и добре оптимизирани приложения, без
          ограниченията на готовите CMS платформи.
        </p>
        <p>
          Моят подход се отличава с индивидуален дизайн, високоефективен код и
          модерна архитектура, които гарантират по-добра производителност и
          по-голяма гъвкавост спрямо традиционните WordPress сайтове. Вместо да
          разчитам на готови теми и плъгини, изграждам специфични за вашите
          нужди решения, които осигуряват по-добра скорост, сигурност и лесно
          разширяване в бъдеще.
        </p>
        <p>
          Ако цените уникалността и дългосрочната устойчивост на своя уебсайт,
          ще се радвам да работим заедно! 🚀
        </p>
        <div className="text-white mt-5 flex gap-5 items-center">
          <PhoneIcon className="w-10 h-10 text-black" />
          <Button asChild variant={"outline"} className="max-sm:flex-1">
            <Link href={"/contacts"}>Свържете се с мен</Link>
          </Button>
        </div>
      </article>
    </section>
  );
}
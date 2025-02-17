import { Metadata } from "next";
import Link from "next/link";

import PageWrapper from "@/components/page-wrapper";
import { formatPhoneNumber } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Политика на бисквитки",
};

export default function CookiePolicy() {
  return (
    <PageWrapper>
      <h1 className="text-3xl font-semibold text-center my-10">
        Политика на бисквитки
      </h1>
      <div className="container mx-auto space-y-5 p-5 mb-10 rounded bg-black text-lg">
        <p>Последна актуализация: 17.02.2025</p>
        <p>
          Тази Политика за бисквитките обяснява какви бисквитки използваме на
          нашия уебсайт за тапицерски услуги, както и целта, за която те се
          използват. Сайтът не събира потребителски данни, като използването на
          бисквитки е насочено единствено към осигуряване на основната
          функционалност и подобряване на потребителското изживяване.
        </p>
        <h2 className="text-2xl font-semibold my-5">
          1. Какво представляват бисквитките?
        </h2>
        <p>
          Бисквитките са малки текстови файлове, които се съхраняват на
          устройството Ви (компютър, таблет или смартфон) при посещение на
          уебсайт. Те позволяват на сайта да &quot;запомни&quot; вашите действия и
          предпочитания (като език или регион) за определен период от време,
          така че да не се налага да ги въвеждате отново при всяко посещение.
        </p>

        <h2 className="text-2xl font-semibold my-5">
          2. Какви бисквитки използваме?
        </h2>
        <p>
          Нашият уебсайт използва само необходимите бисквитки, които са от
          съществено значение за правилната работа на сайта. Те се използват за:
        </p>
        <ul className="list-disc ml-10 space-y-2">
          <li>Поддържане на сесията Ви по време на посещението.</li>
          <li>Обезпечаване на основната функционалност и навигация в сайта.</li>
        </ul>
        <p>
          <strong>Забележка</strong>: Нашият сайт не използва аналитични,
          маркетингови или рекламни бисквитки, нито събира информация за
          потребителските дейности, тъй като не се извършва събиране на
          потребителски данни.
        </p>
        <h2 className="text-2xl font-semibold my-5">
          3. Управление и изтриване на бисквитките
        </h2>
        <p>
          Можете да контролирате и/или изтривате бисквитките според
          предпочитанията си чрез настройките на браузъра. Обърнете внимание, че
          деактивирането на необходимите бисквитки може да повлияе негативно на
          работата на сайта и да ограничи функционалността му. Някои връзки към
          ръководства за управление на бисквитките по най-популярните браузъри:
        </p>
        <ul className="list-disc ml-10 space-y-2">
          <li>
            <Link
              href="https://policies.google.com/technologies/cookies?hl=bg"
              target="_blank"
              className="hover:underline hover:text-blue-500"
            >
              Google Chrome
            </Link>
          </li>
          <li>
            <Link
              href="https://support.mozilla.org/en-US/kb/third-party-cookies-firefox-tracking-protection"
              target="_blank"
              className="hover:underline hover:text-blue-500"
            >
              Mozilla Firefox
            </Link>
          </li>
          <li>
            <Link
              href="https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use-168dab11-0753-043d-7c16-ede5947fc64d"
              target="_blank"
              className="hover:underline hover:text-blue-500"
            >
              Microsoft Edge
            </Link>
          </li>
          <li>
            <Link
              href="https://help.apple.com/safari/mac/8.0/en.lproj/sfri11471.html"
              target="_blank"
              className="hover:underline hover:text-blue-500"
            >
              Safari
            </Link>
          </li>
        </ul>
        <h2 className="text-2xl font-semibold my-5">
          4. Промени в тази политика
        </h2>
        <p>
          Можем да обновяваме тази Политика за бисквитките от време на време.
          Всички промени ще бъдат публикувани на тази страница с актуализирана
          дата на последна промяна. Препоръчваме Ви периодично да проверявате
          тази страница за да сте запознати с последните актуализации.
        </p>
        <h2 className="text-2xl font-semibold my-5">
          5. Информация за контакти
        </h2>
        <p>
          Ако имате въпроси или коментари относно нашата Политика за
          бисквитките, моля, свържете се с нас на:
        </p>
        <ul className="list-disc ml-10 space-y-2">
          <li>Имейл: {process.env.ADMIN_SUPPORT_EMAIL}</li>
          <li>
            Телефон:{" "}
            {formatPhoneNumber(process.env.ADMIN_SUPPORT_PHONE as string)}
          </li>
          <li>Име: Кристиан Костадинов</li>
        </ul>
        <p>
          С използването на нашия уебсайт, вие се съгласявате с нашата Политика
          за бисквитките. Ако не сте съгласни с използването на необходимите
          бисквитки, моля, настройте браузъра си съответно или се свържете с нас
          за допълнителна информация.
        </p>
      </div>
    </PageWrapper>
  );
}

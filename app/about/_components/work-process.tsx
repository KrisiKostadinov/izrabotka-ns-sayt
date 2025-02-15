import * as LucideIcons from "lucide-react";

import { ClientIcon } from "@/components/ui/client-icon";

export default function WorkProcess() {
  return (
    <section className="text-xl">
      <h2 className="py-10 text-3xl font-semibold text-center text-white bg-black-100 dark:bg-black-100">
        Моят подход към разработката
      </h2>
      <div className="space-y-10 py-10 container mx-auto">
        <p className="text-center max-w-2xl mx-auto">
          Създаването на уебсайт или уеб приложение е процес, който изисква
          добра комуникация, стратегическо планиране и внимание към детайлите.
          Ето как протича моята работа:
        </p>
        <ul className="grid md:md:grid-cols-2 xl:grid-cols-3 gap-5">
          <DisplayItem
            heading="Консултация и анализ"
            iconName="PhoneIcon"
            description="На този етап провеждам среща с клиента, за да разбера целите на проекта, целевата аудитория и ключовите функционалности."
          />
          <DisplayItem
            heading="Проучване и анализ"
            iconName="TextIcon"
            description="Правя проучване на конкуренцията и събирам идеи за най-доброто потребителско изживяване."
          />
          <DisplayItem
            heading="Структура и дизайн"
            iconName="BrushIcon"
            description="Създавам схема (wireframe) на страниците и структурирам съдържанието."
          />
          <DisplayItem
            heading="UI/UX дизайн"
            iconName="PaintBucketIcon"
            description="Работя върху визуалния стил, за да съответства на бранда и да е удобен за потребителите."
          />
          <DisplayItem
            heading="Фронтенд и бекенд програмиране"
            iconName="LaptopIcon"
            description="Кодирам дизайна в интерактивен уебсайт, използвайки най-добрите технологии (HTML, CSS, JavaScript, React, Vue и др.)."
          />
          <DisplayItem
            heading="Интеграция с база данни и API"
            iconName="DatabaseIcon"
            description="Създавам динамични уеб решения с PHP, Node.js или Python и осигурявам връзка с външни услуги."
          />
          <DisplayItem
            heading="Тестване на функционалността"
            iconName="TestTubesIcon"
            description="Проверявам дали всичко работи безпроблемно на различни устройства и браузъри."
          />
          <DisplayItem
            heading="Оптимизация за скорост и SEO"
            iconName="SearchIcon"
            description="Подобрявам зареждането на страниците и прилагам добри практики за SEO."
          />
          <DisplayItem
            heading="Качване на сайта онлайн"
            iconName="UploadIcon"
            description="Осигурявам хостинг, домейн и пускане на уебсайта в интернет."
          />
        </ul>
      </div>
    </section>
  );
}

type DisplayItemProps = {
  iconName: keyof typeof LucideIcons;
  heading: string;
  description: string;
};

const DisplayItem = ({ iconName, heading, description }: DisplayItemProps) => {
  return (
    <li className="border-4 border-gray-100 dark:border-gray-900 hover:border-black-100 rounded-md overflow-hidden p-10 flex flex-col items-center gap-5 hover:text-white hover:bg-black dark:hover:text-white dark:hover:bg-gray-900 duration-200">
      <ClientIcon
        name={iconName}
        className="w-32 h-32 text-white bg-green-500 border-4 border-green-400 rounded-full p-5"
      />
      <h2 className="text-2xl font-semibold text-center">{heading}</h2>
      <p className="text-center">{description}</p>
    </li>
  );
};

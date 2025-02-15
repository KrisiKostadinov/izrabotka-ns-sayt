import Image from "next/image";

export default function Services() {
  return (
    <section>
      <h2 className="py-10 text-3xl font-semibold text-center text-white bg-black dark:bg-black">
        Как мога да помогна на Вашия бизнес?
      </h2>
      <div className="bg-white dark:bg-black-100">
        <div className="container mx-auto py-10">
          <p className="text-center text-lg max-w-4xl mx-auto">
            В дигиталния свят Вашият уебсайт не е просто визитка – той е ключов
            инструмент за развитието на бизнеса Ви. Аз създавам модерни, бързи и
            надеждни уебсайтове и уеб приложения, които не само изглеждат добре,
            но и работят ефективно.
          </p>
        </div>
      </div>
      <article className="py-10 container mx-auto grid lg:grid-cols-2 gap-10 justify-between items-center">
        <Image
          src="/images/home-services.png"
          alt="Изработка на уебсайтове и уеб приложения"
          width={600}
          height={400}
          className="dark:border-4 dark:rounded-md dark:shadow-md dark:shadow-black-100"
        />
        <div className="space-y-5 max-md:text-center">
          <h2 className="text-3xl font-semibold">
            Изработка на уебсайтове и уеб приложения
          </h2>
          <p className="text-lg max-w-4xl mx-auto">
            Разработвам персонализирани уеб решения с Next.js, React и
            TypeScript, без използване на готови CMS платформи като WordPress.
            Всеки проект е уникален, съобразен с вашите нужди и насочен към
            висока скорост, добра SEO оптимизация и сигурност.
          </p>
          <p className="text-lg font-semibold">Мога да изградя:</p>
          <ul className="flex flex-col gap-2 list-disc pl-10 text-left">
            <li>
              <p>
                <strong>Бизнес уебсайтове</strong>
                <span> – стилни, професионални и представителни</span>
              </p>
            </li>
            <li>
              <p>
                <strong>Лендинг страници</strong>
                <span> – конвертиращи и бързи, създадени за резултати</span>
              </p>
            </li>
            <li>
              <p>
                <strong>Уеб приложения</strong>
                <span>
                  {" "}
                  – интерактивни, динамични и напълно функционалниРаботя
                </span>
              </p>
            </li>
          </ul>
          <p className="text-lg">
            Работя с фокус върху потребителското изживяване, бързината и лесната
            поддръжка, за да получите уебсайт, който ще ви отличи от
            конкуренцията.
          </p>
        </div>
      </article>
    </section>
  );
}
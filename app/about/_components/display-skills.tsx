import Image from "next/image";

export default function DisplaySkills() {
  return (
    <section>
      <h2 className="py-10 text-3xl font-semibold text-center text-white bg-black-100 dark:bg-black-100">
        Моите умения и технологии
      </h2>
      <div className="bg-white py-10">
        <ul className="container mx-auto grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-10">
          <DisplaySkill
            src="/logos/react.png"
            alt="React.js"
            title="Създаване на приложения с React.js"
          />
          <DisplaySkill
            src="/logos/next.png"
            alt="Next.js"
            title="Създаване на динамични сайтове с Next.js"
          />
          <DisplaySkill
            src="/logos/typescript.png"
            alt="TypeScript"
            title="Статически типизиран JavaScript с TypeScript"
          />
          <DisplaySkill
            src="/logos/tailwind.png"
            alt="Tailwind CSS"
            title="Стилизиране с Tailwind CSS"
          />
          <DisplaySkill
            src="/logos/nodejs.png"
            alt="Node.js"
            title="Сървърни приложения с Node.js"
          />
          <DisplaySkill
            src="/logos/rest-api.png"
            alt="REST API"
            title="Създаване на REST API"
          />
          <DisplaySkill
            src="/logos/mysql.png"
            alt="MySQL"
            title="Работа с релационни бази данни (MySQL)"
          />
          <DisplaySkill
            src="/logos/mongodb.png"
            alt="MongoDB"
            title="Работа с NoSQL бази данни (MongoDB)"
          />
          <DisplaySkill
            src="/logos/html5.png"
            alt="HTML5"
            title="Основи на уеб разработката с HTML5"
          />
          <DisplaySkill
            src="/logos/css.png"
            alt="CSS3"
            title="Стилизиране на уеб страници с CSS3"
          />
          <DisplaySkill
            src="/logos/seo.png"
            alt="Оптимизация за търсачки"
            title="Техники за SEO оптимизация"
          />
          <DisplaySkill
            src="/logos/javascript.png"
            alt="JavaScript"
            title="Динамично уеб програмиране с JavaScript"
          />
        </ul>
      </div>
    </section>
  );
}

type DisplaySkillProps = {
  src: string;
  alt: string;
  title: string;
};

const DisplaySkill = ({ src, alt, title }: DisplaySkillProps) => {
  return (
    <li className="border-4 border-gray-100 rounded-2xl p-5">
      <Image
        src={src}
        alt={alt}
        width={300}
        height={200}
        priority
        className="w-full h-full object-contain"
        title={title}
      />
    </li>
  );
};
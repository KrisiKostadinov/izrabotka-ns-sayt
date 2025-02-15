import Image from "next/image";
import Link from "next/link";

export default function Advantages() {
  return (
    <section>
      <h2 className="py-10 text-3xl font-semibold text-center text-white bg-black dark:bg-black">
        Предимства на персонализираните Уеб Решенията
      </h2>
      <div className="bg-white dark:bg-black-100 py-10">
        <div className="space-y-10 container mx-auto">
          <p className="text-center text-xl max-w-2xl mx-auto">
            В днешния дигитален свят готовите CMS платформи като WordPress може
            да изглеждат като лесно решение, но те често водят до компромиси в
            скоростта, сигурността и гъвкавостта. С персонализирана разработка
            получавате напълно персонализирано, бързо и мащабируемо решение,
            съобразено с вашите нужди.
          </p>
          <ul className="grid md:md:grid-cols-2 xl:grid-cols-3 gap-10">
            <DisplayItem
              heading="По-бърза скорост и висока производителност"
              description="Готовите платформи разчитат на множество плъгини и тежки теми, които забавят зареждането на страниците. При custom разработка кодът е оптимизиран и лек, което води до по-добро потребителско изживяване и по-висок рейтинг в Google."
              imageUrl="/images/rocket.png"
            />
            <DisplayItem
              heading="Максимална сигурност"
              description="WordPress и други CMS често стават обект на хакерски атаки заради използването на уязвими плъгини. Custom уебсайтът не разчита на външни зависимости, което минимизира рисковете и гарантира по-висока защита на данните."
              imageUrl="/images/cyber-security.png"
            />
            <DisplayItem
              heading="Уникален дизайн и функционалност"
              description="Готовите теми ограничават възможностите за персонализация и често водят до еднообразни сайтове. Custom решение означава изцяло персонализиран дизайн и функционалности, изградени спрямо конкретните ви бизнес нужди."
              imageUrl="/images/web-design.png"
            />
            <DisplayItem
              heading="По-добра SEO-оптимизация"
              description="CMS платформите генерират ненужен код и забавят зареждането, което влияе негативно на SEO. При custom разработка сайтът е оптимизиран за търсачките, което помага за по-добро класиране в Google и повече органичен трафик."
              imageUrl="/images/seo.png"
            />
            <DisplayItem
              heading="Гъвкавост и лесно разширяване"
              description="При стандартните CMS, ако искате нови функционалности, често сте ограничени от възможностите на плъгините. Custom решенията дават пълна свобода за добавяне и мащабиране на функциите, без да зависите от външен софтуер."
              imageUrl="/images/jigsaw.png"
            />
            <DisplayItem
              heading="По-ниски дългосрочни разходи"
              description="Макар че първоначалната инвестиция в custom сайт може да е по-висока, в дългосрочен план спестявате разходи за платени плъгини, ненужни обновления и хостинг с високи изисквания."
              imageUrl="/images/save-money.png"
            />
          </ul>
          <p className="text-center text-xl max-w-4xl mx-auto">
            Персонализираните уеб решения са по-бързи, по-сигурни, по-ефективни
            и напълно съобразени с вашите бизнес нужди. Ако искате модерен,
            уникален и устойчив уебсайт, който да ви отличава от конкуренцията –{" "}
            <Link href={"/contacts"} className="hover:underline text-blue-500">
              свържете се с мен
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

type DisplayItemProps = {
  imageUrl: string;
  heading: string;
  description: string;
};

const DisplayItem = ({ imageUrl, heading, description }: DisplayItemProps) => {
  return (
    <li className="border-4 border-gray-100 dark:border-gray-900 hover:border-black-100 rounded-md overflow-hidden p-10 flex flex-col items-center gap-5 hover:text-white hover:bg-black dark:hover:text-white dark:hover:bg-black duration-200">
      <Image
        src={imageUrl}
        alt={heading}
        title={heading}
        width={400}
        height={300}
        className="w-60 h-60 object-cover"
      />
      <h2 className="text-2xl font-semibold text-center">{heading}</h2>
      <p className="text-center text-lg">{description}</p>
    </li>
  );
};

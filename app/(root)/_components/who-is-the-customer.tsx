import Image from "next/image";

export default function WhyIsTheCustomer() {
  return (
    <section className="bg-white dark:bg-black-100">
      <div className="py-10 space-y-5 text-center text-white bg-black dark:bg-black">
        <h2 className="text-3xl font-semibold">За кого са моите услуги?</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Ако търсите модерен, бърз и персонализиран уебсайт или уеб приложение,
          значи сте на правилното място! Моите услуги са подходящи за бизнеси,
          предприемачи и организации, които искат да се отличават онлайн.
        </p>
      </div>
      <div className="container mx-auto mt-10">
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <DisplayItem
            heading="Малки и средни бизнеси"
            description="Изграждам представителни уебсайтове, които вдъхват доверие и помагат за привличането на нови клиенти."
            imageUrl="/images/handshake.png"
          />
          <DisplayItem
            heading="Стартиращи компании (Startups)"
            description="Създавам бързи, интерактивни и мащабируеми уеб приложения, които могат да растат заедно с вашия бизнес."
            imageUrl="/images/acquisition.png"
          />
          <DisplayItem
            heading="Фирми, които искат по-добро решение от WordPress"
            description="Ако сте уморени от ограниченията на готовите CMS платформи, ще ви предложа персонализирано, оптимизирано и сигурно уеб решение."
            imageUrl="/images/rising.png"
          />
          <DisplayItem
            heading="Агенции и фрийлансъри"
            description="Ако имате нужда от технически партньор за изпълнение на проекти с Next.js и React, мога да помогна с фронтенд или бекенд разработка."
            imageUrl="/images/tax-inspector.png"
          />
        </ul>
      </div>
    </section>
  );
}

type DisplayItemProps = {
  heading: string;
  description: string;
  imageUrl: string;
};

const DisplayItem = ({ heading, description, imageUrl }: DisplayItemProps) => {
  return (
    <li className="bg-white dark:bg-black-100 shadow-lg rounded-2xl p-6 text-center space-y-4 border-2 border-gray-100 dark:border-gray-900 hover:shadow-xl transition-shadow duration-300">
      <Image
        src={imageUrl}
        alt={heading}
        width={100}
        height={100}
        className="mx-auto"
      />
      <h3 className="text-2xl font-bold">{heading}</h3>
      <p>{description}</p>
    </li>
  );
};
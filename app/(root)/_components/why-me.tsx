import { CheckIcon } from "lucide-react";

export default function WhyMe() {
  return (
    <section>
      <h2 className="py-10 text-3xl font-semibold text-center text-white bg-black dark:bg-black">
        Защо да изберете мен?
      </h2>
      <div className="bg-white text-primary">
        <div className="container mx-auto py-10">
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <DisplayItem heading="Индивидуален подход" />
            <DisplayItem heading="Съвременни технологии" />
            <DisplayItem heading="Оптимизация за всички устройства" />
            <DisplayItem heading="Дългосрочна поддръжка" />
          </ul>
        </div>
      </div>
    </section>
  );
}

type DisplayItemProps = {
  heading: string;
}

const DisplayItem = ({ heading }: DisplayItemProps) => {
  return (
    <li className="border-4 border-gray-100 rounded-md p-10 flex flex-col items-center gap-5">
      <CheckIcon className="text-white bg-green-500 border-4 border-green-400 rounded-full w-20 h-20 p-5" />
      <h2 className="text-2xl font-semibold text-center">
        {heading}
      </h2>
    </li>
  );
};

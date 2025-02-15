import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Maintenance() {
  return (
    <section className="bg-white text-black-100">
      <div className="container mx-auto grid md:grid-cols-2 items-center gap-5 rounded-md overflow-hidden">
        <article>
          <Image
            src={"/images/maintenance.png"}
            alt="Поддръжка и надграждане на сайта"
            width={400}
            height={300}
            className="max-w-md w-full h-full"
          />
        </article>
        <article className="w-full h-full text-xl space-y-10 bg-gray-100 dark:text-white dark:bg-black p-10 dark:rounded-none rounded-xl overflow-hidden">
          <h2 className="text-3xl font-semibold">Поддръжка и надграждане</h2>
          <p>
            Сайтът не спира да се развива след старта – осигурявам редовни
            актуализации, мониторинг за сигурност и техническа поддръжка. Ако
            бизнесът ви се разраства, мога да добавя нови функционалности, да
            подобря производителността и да адаптирам сайта към новите тенденции
            и нужди на потребителите. Така Вашият уебсайт остава винаги
            актуален, бърз и надежден. 🚀
          </p>
          <Button asChild className="w-full text-white bg-blue-500">
            <Link href={"/contacts"}>Свържете се с мен</Link>
          </Button>
        </article>
      </div>
    </section>
  );
}

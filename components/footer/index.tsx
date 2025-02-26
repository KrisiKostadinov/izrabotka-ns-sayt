import { formatPhoneNumber } from "@/lib/utils";
import {
  ArrowRight,
  MailIcon,
  PhoneIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-black">
      <section className="container mx-auto grid md:grid-cols-2 xl:grid-cols-4 gap-10 py-10">
        <article>
          <div className="space-y-2 max-w-60">
            <h2 className="text-2xl font-semibold">Изработка на сайт</h2>
            <p>Креативни и функционални уеб решения за Вашия бизнес</p>
          </div>
        </article>
        <article>
          <h3 className="text-2xl font-semibold mb-5">Бързи връзки</h3>
          <ul className="flex flex-col gap-2 text-lg">
            <li>
              <Link href={"/"} className="flex items-center gap-2">
                <ArrowRight />
                <span>Начало</span>
              </Link>
            </li>
            <li>
              <Link href={"/about"} className="flex items-center gap-2">
                <ArrowRight />
                <span>За мен</span>
              </Link>
            </li>
            <li>
              <Link href={"/contacts"} className="flex items-center gap-2">
                <ArrowRight />
                <span>Контакти</span>
              </Link>
            </li>
          </ul>
        </article>
        <article>
          <h3 className="text-2xl font-semibold mb-5">Правни</h3>
          <ul className="flex flex-col gap-2 text-lg">
            <li>
              <Link
                href={"/privacy-policy"}
                className="flex items-center gap-2"
              >
                <ArrowRight />
                <span>Политика на поверителност</span>
              </Link>
            </li>
            <li>
              <Link href={"/cookie-policy"} className="flex items-center gap-2">
                <ArrowRight />
                <span>Политика на бисквитки</span>
              </Link>
            </li>
            <li>
              <Link href={"/terms"} className="flex items-center gap-2">
                <ArrowRight />
                <span>Общи условия</span>
              </Link>
            </li>
          </ul>
        </article>
        <article>
          <h3 className="text-2xl font-semibold mb-5">За контакти</h3>
          <ul className="flex flex-col gap-2 text-lg">
            <li>
              <Link
                href={`tel:${process.env.NEXT_PUBLIC_ADMIN_SUPPORT_PHONE}`}
                className="flex items-center gap-2"
              >
                <PhoneIcon />
                <span>
                  {formatPhoneNumber(
                    process.env.NEXT_PUBLIC_ADMIN_SUPPORT_PHONE as string
                  )}
                </span>
              </Link>
            </li>
            <li>
              <Link
                href={`mailto:${process.env.NEXT_PUBLIC_ADMIN_SUPPORT_EMAIL}`}
                className="flex items-center gap-2"
              >
                <MailIcon />
                <span>{process.env.NEXT_PUBLIC_ADMIN_SUPPORT_EMAIL}</span>
              </Link>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <UserIcon />
                <span>Кристиан</span>
              </div>
            </li>
          </ul>
        </article>
      </section>
      <ul>
        <li></li>
      </ul>
      <p className="bg-black-200 py-5 text-center text-lg">
        &copy; {currentYear} Всички права запазени.
      </p>
    </footer>
  );
}

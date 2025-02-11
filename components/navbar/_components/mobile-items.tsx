"use client";

import Link from "next/link";
import { ComponentPropsWithoutRef, useState } from "react";

import { cn } from "@/lib/utils";
import { ClientIcon } from "@/components/ui/client-icon";
import { NavigationItem } from "@/components/navbar/_types";
import { MenuIcon, X } from "lucide-react";

type MobileNavbarProps = {
  items: NavigationItem[];
  className: string;
} & ComponentPropsWithoutRef<"div">;

export default function MobileNavbar({
  items,
  className,
  ...props
}: MobileNavbarProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div {...props}>
      <div
        className={cn(
          "fixed top-0 left-0 w-full min-h-screen z-30 duration-200",
          open
            ? "bg-slate-100 dark:bg-slate-900 pointer-events-auto opacity-90"
            : "bg-transparent pointer-events-none opacity-100"
        )}
        onClick={() => setOpen(!open)}
      >
        <button
          className={cn(
            "absolute top-2 right-2 hover:bg-slate-900 z-40 cursor-pointer",
            open
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          )}
          onClick={() => setOpen(!open)}
        >
          <X size={32} />
        </button>
      </div>
      <button
        className="absolute top-2 left-2 z-40 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <MenuIcon size={32} />
      </button>
      <nav
        className={cn(
          "w-2/3 min-h-screen border border-slate-100 dark:border-slate-800 shadow-md z-40 fixed top-0 left-0 bg-white dark:bg-slate-900 duration-200",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <ul className="flex flex-col items-start">
          {items.map((navigationItem, index) => (
            <li key={index} className="w-full">
              <Link
                href={navigationItem.link}
                className={cn(
                  "py-5 px-6 w-full flex items-center gap-2 hover:bg-white dark:hover:bg-black-100 duration-100"
                )}
              >
                <ClientIcon name={navigationItem.icon} />
                <div className="text-lg">{navigationItem.title}</div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

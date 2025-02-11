"use client";

import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";
import { ClientIcon } from "@/components/ui/client-icon";
import { NavigationItem } from "@/components/navbar/_types";

type DesktopNavbarProps = {
  items: NavigationItem[];
} & ComponentPropsWithoutRef<"ul">;

export default function DesktopNavbar({ items, ...props }: DesktopNavbarProps) {
  if (typeof window === "undefined") return null;

  return (
    <nav {...props}>
      <ul className="flex justify-center gap-5">
        {items.map((navigationItem, index) => (
          <li key={index}>
            <Link
              href={navigationItem.link}
              className={cn(
                "py-5 flex flex-col items-center justify-center gap-2 hover:scale-105 duration-100"
              )}
            >
              <ClientIcon name={navigationItem.icon} />
              <div className="text-lg">{navigationItem.title}</div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
"use client";

import { useMediaQuery } from "react-responsive";

import DesktopNavbar from "@/components/navbar/_components/desktop-items";
import MobileNavbar from "@/components/navbar/_components/mobile-items";
import DisplayLogo from "@/components/navbar/_components/display-logo";
import { NavigationItem } from "@/components/navbar/_types";

type NavigationBarClientProps = {
  navigationItems: NavigationItem[];
}

export default function NavigationBarClient({ navigationItems }: NavigationBarClientProps) {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div className="flex items-center justify-between py-5 bg-black-100 z-20">
      <DisplayLogo />
      {!isMobile ? (
        <DesktopNavbar items={navigationItems} className="z-20 max-md:hidden" />
      ) : (
        <MobileNavbar
          items={navigationItems}
          adminSupportPhone={
            process.env.NEXT_PUBLIC_ADMIN_SUPPORT_PHONE as string
          }
        />
      )}
    </div>
  );
}
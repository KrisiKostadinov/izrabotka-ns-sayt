"use client";

import { useMediaQuery } from "react-responsive";

import { navigationItems } from "@/data";
import DesktopNavbar from "@/components/navbar/_components/desktop-items";
import MobileNavbar from "@/components/navbar/_components/mobile-items";

export default function NavigationBar() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div>
      <nav>
        {!isMobile ? (
          <DesktopNavbar items={navigationItems} className="max-md:hidden" />
        ) : (
          <MobileNavbar items={navigationItems} className="md:hidden" />
        )}
      </nav>
    </div>
  );
}

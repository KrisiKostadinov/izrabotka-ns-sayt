"use client";

import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

import { navigationItems } from "@/components/navbar/data";
import DesktopNavbar from "@/components/navbar/_components/desktop-items";
import MobileNavbar from "@/components/navbar/_components/mobile-items";

export default function NavigationBar() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      {!isMobile ? (
        <DesktopNavbar items={navigationItems} className="max-md:hidden" />
      ) : (
        <MobileNavbar
          items={navigationItems}
          adminSupportPhone={process.env.NEXT_PUBLIC_ADMIN_SUPPORT_PHONE as string}
        />
      )}
    </div>
  );
}
import NavigationBarClient from "@/components/navbar/_components/client-component";
import { navigationItems } from "@/components/navbar/_data";

export default function NavigationBar() {
  return (
    <NavigationBarClient navigationItems={navigationItems} />
  );
}

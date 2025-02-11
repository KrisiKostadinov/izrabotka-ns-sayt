import * as LucideIcons from "lucide-react";

export type NavigationItem = {
  title: string;
  link: string;
  icon: keyof typeof LucideIcons;
};
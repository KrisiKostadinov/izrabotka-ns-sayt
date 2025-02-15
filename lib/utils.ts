import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, "");

  if (cleaned.length === 10) {
    return `(${cleaned.substring(0, 3)}) ${cleaned.substring(
      3,
      6
    )}-${cleaned.substring(6)}`;
  } else if (cleaned.length === 11 && cleaned.startsWith("1")) {
    return `+1 (${cleaned.substring(1, 4)}) ${cleaned.substring(
      4,
      7
    )}-${cleaned.substring(7)}`;
  }

  return phone;
}
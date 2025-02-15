import * as LucideIcons from "lucide-react";
import Link from "next/link";

import { Card, CardHeader } from "@/components/ui/card";
import { ClientIcon } from "@/components/ui/client-icon";
import { formatPhoneNumber } from "@/lib/utils";

export default function DisplayCells() {
  const phoneNumber = process.env.NEXT_PUBLIC_ADMIN_SUPPORT_PHONE as string;
  const emailAddress = process.env.NEXT_PUBLIC_ADMIN_SUPPORT_EMAIL as string;

  return (
    <ul className="grid lg:grid-cols-3 gap-10">
      <DisplayCell
        text={formatPhoneNumber(phoneNumber)}
        icon="PhoneIcon"
        link={`tel:${phoneNumber}`}
      />
      <DisplayCell
        text={emailAddress}
        icon="MailIcon"
        link={`mailto:${emailAddress}`}
      />
      <DisplayCell text="Дупница" icon="LocateIcon" />
    </ul>
  );
}

type DisplayCellProps = {
  text: string;
  link?: string;
  icon: keyof typeof LucideIcons;
};

const DisplayCell = ({ text, icon, link }: DisplayCellProps) => {
  return (
    <li>
      <Card className="border-2 shadow-2xl shadow-black-100">
        <CardHeader className="flex justify-center text-center">
          <ClientIcon className="w-10 h-10 mx-auto" name={icon} />
          {link ? (
            <Link href={link}>
              <span className="text-xl">{text}</span>
            </Link>
          ) : (
            <span className="text-xl">{text}</span>
          )}
        </CardHeader>
      </Card>
    </li>
  );
};
import * as LucideIcons from "lucide-react";

import { Card, CardHeader } from "@/components/ui/card";
import { ClientIcon } from "@/components/ui/client-icon";
import { formatPhoneNumber } from "@/lib/utils";

export default function DisplayCells() {
  const phoneNumber = process.env.NEXT_PUBLIC_ADMIN_SUPPORT_PHONE as string;
  const emailAddress = process.env.NEXT_PUBLIC_ADMIN_SUPPORT_EMAIL as string;

  return (
    <ul className="grid lg:grid-cols-3 gap-10">
      <DisplayCell text={formatPhoneNumber(phoneNumber)} icon="PhoneIcon" />
      <DisplayCell text={emailAddress} icon="MailIcon" />
      <DisplayCell text="Дупница" icon="LocateIcon" />
    </ul>
  );
}

type DisplayCellProps = {
  text: string;
  icon: keyof typeof LucideIcons;
};

const DisplayCell = ({ text, icon }: DisplayCellProps) => {
  return (
    <li>
      <Card className="border-2 shadow-2xl shadow-black-100">
        <CardHeader className="flex justify-center text-center">
          <ClientIcon className="w-10 h-10 mx-auto" name={icon} />
          <span className="text-xl">{text}</span>
        </CardHeader>
      </Card>
    </li>
  );
};

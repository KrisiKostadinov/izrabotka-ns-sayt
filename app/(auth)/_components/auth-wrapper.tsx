import { ReactNode } from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type AuthWrapperProps = {
  title: string;
  message?: string;
  children: ReactNode;
};

export default function AuthWrapper({
  title,
  message,
  children,
}: AuthWrapperProps) {
  return (
    <Card className="max-w-sm mx-auto mt-10 border-2 shadow-2xl shadow-black-100">
      <CardHeader className="space-y-5">
        <h1 className="text-center text-3xl font-semibold">{title}</h1>
        {message && (
          <p className="text-muted-foreground text-center">{message}</p>
        )}
      </CardHeader>
      <Separator />
      <CardContent className="mt-5">{children}</CardContent>
    </Card>
  );
}

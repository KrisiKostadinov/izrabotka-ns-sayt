"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { EyeIcon, EyeOffIcon, LogInIcon } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { loginFormSchema, LoginFormSchema } from "@/app/(auth)/login/schemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: LoginFormSchema) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Имейл адрес</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Въведете имейл адресът си"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="relative">
              {!showPassword ? (
                <EyeIcon
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute bottom-[46px] right-4 text-muted-foreground cursor-pointer"
                />
              ) : (
                <EyeOffIcon
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute bottom-[46px] right-4 text-muted-foreground cursor-pointer"
                />
              )}
              <FormLabel className="text-lg">Парола</FormLabel>
              <FormControl>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Въведете силна паролата си"
                  {...field}
                />
              </FormControl>
              <div className="text-right">
                <FormMessage />
                <Link
                  href={"/forgot-password"}
                  className="inline-block hover:text-muted-foreground"
                >
                  Забравена парола
                </Link>
              </div>
            </FormItem>
          )}
        />
        <div className="space-y-5">
          <Button variant={"outline"} type="submit" className="w-full">
            <LogInIcon />
            <span>Вход</span>
          </Button>
          <Button
            asChild
            variant={"outline"}
            type="button"
            className="w-full border-none bg-primary"
          >
            <Link href={"/register"}>Създаване на профил</Link>
          </Button>
        </div>
      </form>
    </Form>
  );
}

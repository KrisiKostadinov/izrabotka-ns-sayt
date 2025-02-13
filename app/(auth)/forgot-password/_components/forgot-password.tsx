"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LogInIcon } from "lucide-react";
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
import { forgotPasswordFormSchema, ForgotPasswordFormSchema } from "@/app/(auth)/forgot-password/schemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ForgotPasswordForm() {
  const form = useForm<z.infer<typeof forgotPasswordFormSchema>>({
    resolver: zodResolver(forgotPasswordFormSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: ForgotPasswordFormSchema) {
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
        <div className="space-y-5">
          <Button variant={"outline"} type="submit" className="w-full">
            <LogInIcon />
            <span>Изпращане на линк</span>
          </Button>
          <Button
            asChild
            variant={"outline"}
            type="button"
            className="w-full border-none bg-primary"
          >
            <Link href={"/login"}>Спомних си паролата</Link>
          </Button>
        </div>
      </form>
    </Form>
  );
}

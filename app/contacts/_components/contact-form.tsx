"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Link from "next/link";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ContactFormSchema, contactFormSchema } from "@/app/contacts/_schemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ExternalLink, SendIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sendMessage } from "@/app/contacts/_actions";
import Loading from "@/components/loading";

export default function ContactForm() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      isAccept: "no",
    },
  });

  async function onSubmit(values: ContactFormSchema) {
    if (values.isAccept !== "yes") {
      toast.error("Трябва да се съгласите с Политиката за поверителност и Общите условия.");
      return;
    }

    try {
      const result = await sendMessage(values);
      toast.success(result.message);
      form.reset();
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Нещо се обърка.");
      }
    }
  }

  return (
    <Card className="border-2 shadow-2xl shadow-black-100">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-center">
          Изпращане на съобщение
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Име</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Въведете малкото си име..."
                      {...field}
                      disabled={form.formState.isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Фамилия</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Въведете фамилията си..."
                      {...field}
                      disabled={form.formState.isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
                      disabled={form.formState.isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Съобщение</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Опишете проекта си..."
                      {...field}
                      rows={10}
                      disabled={form.formState.isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="text-lg">
              <div>
                Ако изпратите настоящият онлайн формуляр, Вие се съгласявате с
                нашите Политика на поверителност и Общи условия.
              </div>
              <ul className="flex flex-col gap-2 mt-5 list-disc ml-10">
                <li>
                  <Link
                    href={"/privacy-policy"}
                    target="_blank"
                    className="hover:underline font-semibold hover:text-muted-foreground flex items-center gap-2"
                  >
                    <span>Политика на поверителност</span>
                    <ExternalLink className="mr-2" />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/terms"}
                    target="_blank"
                    className="hover:underline font-semibold hover:text-muted-foreground flex items-center gap-2"
                  >
                    <span>Общи условия</span>
                    <ExternalLink className="mr-2" />
                  </Link>
                </li>
              </ul>
            </div>
            <FormField
              control={form.control}
              name="isAccept"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">
                    Потвърждавам, че съгласен/а с настоящите Политика на
                    поверителност и Общи условия
                  </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      disabled={form.formState.isSubmitting}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Съгласие" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem className="text-lg" value="yes">
                          Да
                        </SelectItem>
                        <SelectItem className="text-lg" value="no">
                          Не
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="space-y-5">
              <Button variant={"outline"} type="submit" className="w-full">
                <SendIcon />
                <span>Изпращане на съобщението</span>
              </Button>
            </div>
          </form>
        </Form>
        {form.formState.isSubmitting && <Loading />}
      </CardContent>
    </Card>
  );
}

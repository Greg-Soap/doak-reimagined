"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 6 characters.",
  }),
  email: z.string().email({
    message: "Provide a valid email address.",
  }),
  feedback: z.string().min(20, {
    message: "Input must be at least 20 characters long.",
  }),
});

export default function ConatctForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      feedback: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 md:p-[54px] md:border border-border rounded-[10px] bg-white w-full md:w-[546px]"
      >
        {formField.map((item: IProps, index: number) => (
          <FormField
            key={index}
            control={form.control}
            name={item.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs text-primary font-medium">
                  {item.label}
                </FormLabel>
                <FormControl>
                  {item.name === "feedback" ? (
                    <Textarea
                      placeholder={item.placeholder}
                      {...field}
                      className="rounded-[5px] py-[10px] px-[14px] h-[161px] bg-[#FCFCFC]"
                    />
                  ) : (
                    <Input
                      placeholder={item.placeholder}
                      {...field}
                      className="rounded-[5px] py-[10px] px-[14px] bg-[#FCFCFC] h-11"
                    />
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button variant={`black`} type="submit">
          Send Message
        </Button>
      </form>
    </Form>
  );
}

const formField: IProps[] = [
  {
    name: "name",
    label: "What's your full name?",
    placeholder: "Enter Full Name",
  },
  {
    name: "email",
    label: "What's your email address?",
    placeholder: "Enter Email Address",
  },
  {
    name: "feedback",
    label: "How can we help you?",
    placeholder: "Type your message",
  },
];

interface IProps {
  name: "name" | "email" | "feedback";
  label: string;
  placeholder: string;
}

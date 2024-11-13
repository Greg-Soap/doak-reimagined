"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  card_number: z.number().min(12, {
    message: "Card number must be at least 12 characters long.",
  }),
  cvv: z.number().min(3, {
    message: "CVV must be at least 3 characters long.",
  }),
  expiry_date: z.number().min(4, {
    message: "Expiry date must be at least 4 characters long.",
  }),
});

export default function CardPaymentTab() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      card_number: undefined,
      cvv: undefined,
      expiry_date: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="flex flex-col gap-10 min-w-full">
      <p className="text-primary font-medium text-lg">Card Payment</p>
    </div>
  );
}

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
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
import { Checkbox } from "@/components/ui/checkbox";
import { FormatNaira } from "@/utils/format-currency";

import CartSummary from "@/app/cart/sections/cart-summary";
import VoucherCodeForm from "../../components/voucher-code-form";

const formSchema = z.object({
  card_number: z.string().min(12, {
    message: "Card number must be 12 characters long.",
  }),
  cvv: z
    .string()
    .max(3, {
      message: "CVV must be 3 characters long.",
    })
    .min(3, {
      message: "CVV must be 3 characters long.",
    }),
  expiry_date: z
    .string()
    .max(4, {
      message: "Expiry date must be 4 characters long.",
    })
    .min(4, {
      message: "Expiry date must be 4 characters long.",
    }),
  one_time_usage: z.boolean().default(false).optional(),
});

export default function CardPaymentTab() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      card_number: "",
      cvv: "",
      expiry_date: "",
      one_time_usage: false,
    },
  });

  const [checked, setChecked] = useState<boolean>(false);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    form.reset();
  }

  return (
    <div className="flex flex-col gap-7 min-w-full">
      <p className="text-primary font-medium text-lg">Card Payment</p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
          <div className="w-full grid grid-cols-2 gap-7 border border-border rounded-[10px] p-4 md:p-9">
            <FormField
              control={form.control}
              name="card_number"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel className="text-xs font-medium text-primary">
                    Card Number
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="xxxx - xxxx- xxxx- xxxx"
                      {...field}
                      className="placeholder:text-secondary"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cvv"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs font-medium text-primary">
                    CVV
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="***"
                      {...field}
                      className="placeholder:text-secondary"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="expiry_date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs font-medium text-primary">
                    Expiry Date
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="xx/xx"
                      {...field}
                      className="placeholder:text-secondary"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="one_time_usage"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={(value) => {
                        field.onChange(value);
                        setChecked(!checked);
                      }}
                      className="border-border"
                    />
                  </FormControl>
                  <FormLabel
                    className={`text-xs font-medium ${
                      checked ? "text-primary" : "text-secondary"
                    } transition-colors duration-200`}
                  >
                    One Time Use
                  </FormLabel>
                </FormItem>
              )}
            />
          </div>

          <VoucherCodeForm type />

          <CartSummary type="small-screen-payment">
            <Button variant={`black`}>Pay {FormatNaira(3003000)}</Button>
          </CartSummary>

          <Button
            type="submit"
            variant={`black`}
            className="w-full h-11 font-bold hidden md:flex"
          >
            Pay {FormatNaira(3000000)}
          </Button>
        </form>
      </Form>
    </div>
  );
}

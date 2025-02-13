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
import ArrowRightIcon from "@/components/icons/arrow-right";
import GreenTick from "@/components/icons/green-tick";
import clsx from "clsx";
import { DiscountDetails } from "../../../components/custom/cart-summary";
import { useState } from "react";

const formSchema = z.object({
  promo_code: z
    .string()
    .min(7, {
      message: "Promo code must be at least 7 characters.",
    })
    .optional(),
});

export default function VoucherCodeForm({ type }: { type?: boolean }) {
  const [validCode, setValidCode] = useState<"success" | "error" | "">("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { promo_code: "" },
  });

  const handlePromoSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    setValidCode("success");
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handlePromoSubmit)}
        className={`${
          type ? "flex md:hidden" : "hidden md:flex"
        } border-b border-border pb-6 w-full`}
      >
        <FormField
          control={form.control}
          name="promo_code"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2 w-full">
              <FormLabel>PROMO CODE</FormLabel>
              <FormControl>
                <div
                  className={clsx(
                    "flex items-center gap-2 px-2.5 py-1.5 border bg-[#F5F5F5] rounded-lg w-full",
                    {
                      "border-border":
                        validCode === "success" || validCode === "",
                      "border-[#991F17]": validCode === "error",
                    }
                  )}
                >
                  <Input
                    placeholder="Enter promo code..."
                    {...field}
                    className="border-none p-0 text-sm shadow-none"
                  />
                  {validCode === "success" ? (
                    <GreenTick />
                  ) : (
                    <Button
                      type="submit"
                      className="p-2 bg-transparent hover:bg-transparent shadow-none"
                    >
                      <ArrowRightIcon />
                    </Button>
                  )}
                </div>
              </FormControl>

              {validCode === "error" && (
                <p className="text-xs font-medium text-[#991F17] -mt-3">
                  Promo code is invalid
                </p>
              )}

              {validCode === "success" && (
                <DiscountDetails discountAmount={9780} discountPercent={25} />
              )}
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

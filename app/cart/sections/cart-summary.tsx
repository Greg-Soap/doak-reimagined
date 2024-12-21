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
import { useState } from "react";
import clsx from "clsx";
import { FormatNaira } from "@/utils/format-currency";

const formSchema = z.object({
  promo_code: z
    .string()
    .min(7, {
      message: "Promo code must be at least 7 characters.",
    })
    .or(z.literal("").optional())
    .optional(),
});

export default function CartSummary({ type, children }: CartSummaryProps) {
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
    <div
      className={clsx(
        "px-5 w-[90%] md:w-full col-span-4 lg:col-span-1 flex-col border border-border p-4 pt-6 rounded-[10px] gap-6 h-fit",
        {
          "ml-[0%]": type !== "payment",
          "w-full": type === "payment" || type === "small-screen-payment",
          "hidden md:flex":
            type === "cart" || type === "checkout" || type === "payment",
          "flex md:hidden":
            type === "delivery" || type === "small-screen-payment",
          flex: type !== "cart" && type !== "checkout" && type !== "delivery",
        }
      )}
    >
      <p className="text-primary text-lg font-semibold">Cart Summary</p>

      <CartDetails itemCount={3} totalAmount={3000000} />

      <DeliveryFeeNotice />

      {type === "payment" && (
        <PromoCodeForm
          form={form}
          onSubmit={handlePromoSubmit}
          validCode={validCode}
          setValidCode={setValidCode}
        />
      )}

      <TotalAmount totalAmount={3000000} />
      {children}
    </div>
  );
}

function CartDetails({
  itemCount,
  totalAmount,
}: {
  itemCount: number;
  totalAmount: number;
}) {
  return (
    <div className="w-full flex items-center justify-between text-primary text-sm font-medium">
      <p>{itemCount} Items</p>
      <p>{FormatNaira(totalAmount)}</p>
    </div>
  );
}

function DeliveryFeeNotice() {
  return (
    <p className="text-xs text-primary border-b pb-6 border-border">
      Delivery fees are not included
    </p>
  );
}

function PromoCodeForm({
  form,
  onSubmit,
  validCode,
  setValidCode,
}: {
  form: ReturnType<typeof useForm<z.infer<typeof formSchema>>>;
  onSubmit: (values: z.infer<typeof formSchema>) => void;
  validCode: "success" | "error" | "";
  setValidCode: React.Dispatch<React.SetStateAction<"success" | "error" | "">>;
}) {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="hidden md:flex border-b border-border pb-6 w-full"
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
                    className="border-none p-0 text-sm"
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

export function DiscountDetails({
  discountAmount,
  discountPercent,
}: {
  discountAmount: number;
  discountPercent: number;
}) {
  return (
    <div className="w-full flex items-center justify-between">
      <p className="text-sm font-medium text-primary">DISCOUNT</p>
      <p className="text-sm font-medium text-primary">
        -{FormatNaira(discountAmount)}{" "}
        <span className="text-[#991F17]">({discountPercent}% off)</span>
      </p>
    </div>
  );
}

function TotalAmount({ totalAmount }: { totalAmount: number }) {
  return (
    <div className="w-full flex items-center justify-between">
      <p className="text-primary">Total</p>
      <p className="text-primary font-bold">{FormatNaira(totalAmount)}</p>
    </div>
  );
}

type CartSummaryProps = {
  type:
    | "checkout"
    | "cart"
    | "delivery"
    | "payment"
    | "small-screen-payment"
    | "summary";
  children?: React.ReactNode;
};

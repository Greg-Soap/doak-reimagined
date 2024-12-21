"use client";

import { FormatNaira } from "@/utils/format-currency";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import GreenTick from "@/components/icons/green-tick";
import ArrowRightIcon from "@/components/icons/arrow-right";
import clsx from "clsx";
import { DiscountDetails } from "@/app/cart/sections/cart-summary";

const formSchema = z.object({
  sender_name: z.string().min(6, {
    message: "Name must be atleast 6 characters long.",
  }),
  amount_sent: z.string().min(4, {
    message: "Amount must be atleast 4 characters long.",
  }),
  promo_code: z
    .string()
    .min(7, {
      message: "Promo code must be at least 7 characters.",
    })
    .or(z.literal("").optional())
    .optional(),
});

export default function TransferTab() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sender_name: "",
      amount_sent: FormatNaira(3000300),
    },
  });

  const [validCode, setValidCode] = useState<"success" | "error" | "">("");

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="flex flex-col gap-7 items-center justify-center">
      <PromoCodeForm
        form={form}
        onSubmit={onSubmit}
        validCode={validCode}
        setValidCode={setValidCode}
      />

      <div className="flex flex-col gap-4 md:items-center w-full">
        <p className="text-primary text-lg">
          Transfer <strong>{FormatNaira(3000300)}</strong> to:
        </p>

        <div className="flex flex-col items-center p-[14px] rounded-[10px] bg-[#F5F5F5] gap-2.5 w-full md:w-[284px]">
          <p className="text-xs text-primary">
            Account number:{" "}
            <span className="text-base font-bold">2124430318</span>
          </p>
          <div className="flex gap-2 items-center text-xs text-primary">
            Bank:{" "}
            <Select>
              <SelectTrigger className="w-fit gap-2 font-bold">
                <SelectValue placeholder="Select a bank" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel className="text-xs text-primary">
                    Banks
                  </SelectLabel>
                  <SelectItem value="Opay">Opay</SelectItem>
                  <SelectItem value="Kuda MFB">Kuda MFB</SelectItem>
                  <SelectItem value="Moniepoint">Moniepoint</SelectItem>
                  <SelectItem value="UBA">
                    United Bank of Africa (UBA)
                  </SelectItem>
                  <SelectItem value="Zenith">Zenith</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <p className="text-xs text-primary">
            Bank Name: <span className="text-base font-bold">DOAK & LTD</span>
          </p>
        </div>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="min-w-[357px] space-y-5"
        >
          <FormField
            control={form.control}
            name="sender_name"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel className="text-xs font-medium text-primary">
                  Name of Sender
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="eg. John Doe"
                    {...field}
                    className="placeholder:text-secondary text-primary h-11"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="amount_sent"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-medium text-primary">
                  Amount Sent
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="***"
                    {...field}
                    className="placeholder:text-secondary h-11 font-medium"
                    readOnly
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            variant={`black`}
            className="w-full h-11 font-bold"
          >
            Complete Order
          </Button>
        </form>
      </Form>
    </div>
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
        className="flex flex-col md:hidden w-full"
      >
        <FormField
          control={form.control}
          name="promo_code"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2">
              <FormLabel className="font-medium text-primary">
                Voucher
              </FormLabel>
              <FormControl>
                <div
                  className={clsx(
                    "flex md:hidden items-center gap-2 px-2.5 py-1.5 border bg-[#F5F5F5] rounded-lg",
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

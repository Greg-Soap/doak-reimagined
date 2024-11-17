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

const formSchema = z.object({
  sender_name: z.string().min(6, {
    message: "Name must be atleast 6 characters long.",
  }),
  amount_sent: z.string().min(4, {
    message: "Amount must be atleast 4 characters long.",
  }),
});

export default function TransferTab() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sender_name: "",
      amount_sent: FormatNaira(3000300),
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="flex flex-col gap-7 items-center justify-center">
      <div className="flex flex-col gap-4 items-center">
        <p className="text-primary text-lg">
          Transfer <strong>{FormatNaira(3000300)}</strong> to:
        </p>

        <div className="flex flex-col items-center p-[14px] rounded-[10px] bg-[#F5F5F5] gap-2.5 w-[284px]">
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

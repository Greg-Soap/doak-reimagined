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
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import NotificationIcon from "@/components/icons/notification-icon";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const FormSchema = z.object({
  email: z.string().email({
    message: "Username must be at least 2 characters.",
  }),
});

export default function Newsletter() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <section className="w-full max-w-[1400px] lg:max-w-[1400px] flex lg:grid grid-cols-3 items-center py-20">
      <div className="border-t border-border h-[1px] w-[5%] md:w-[10%] lg:w-full" />
      <div className="w-[90%] md:w-[80%] lg:w-full flex flex-col items-center py-8 px-6 gap-5 border border-border rounded-[10px]">
        <p className="text-primary text-lg md:text-2xl font-bold text-center">
          Subscribe to our <span className="text-[#FF3426]">newsletter</span>
        </p>

        <p className="text-primary text-sm text-center max-w-[481px]">
          Join 3,000+ people and get notifications on drinks new in stock and
          discounts messages during events or smth. Expect 1-2 emails per month.
        </p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex w-full items-center border border-border rounded-[5px] py-[5px] pl-[14px] pr-[5px]"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-[90%] md:w-[80%]">
                  <FormControl>
                    <Input
                      placeholder="eg. daniellaokere445@gmail.com"
                      {...field}
                      className="ring-0 ring-none p-0 bg-transparent text-sm border-none outline-none w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              variant={`black`}
              type="submit"
              className="px-[14px] py-[10px] gap-[5px] hidden md:flex"
            >
              Subscribe
              <NotificationIcon className="stroke-white w-5 h-5" />
            </Button>
            <Button
              variant={`black`}
              type="submit"
              className="px-[14px] py-[10px] gap-[5px] flex md:hidden"
            >
              <ArrowRightIcon color="white" />
            </Button>
          </form>
        </Form>
      </div>
      <div className="border-t border-border h-[1px] w-[5%] md:w-[10%] lg:w-full" />
    </section>
  );
}

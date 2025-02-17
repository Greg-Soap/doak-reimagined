"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import TabSections from "../components/tab-sections";
import {
  HelpCenterChats,
  help_center_chats,
} from "@/app/data/help-center-chats";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

const FormSchema = z.object({
  message: z
    .string()
    .min(10, {
      message: "Message must be at least 10 characters.",
    })
    .max(160, {
      message: "Message must not be longer than 30 characters.",
    }),
});

export default function HelpCenterTab({
  setIsContentTabHidden,
}: {
  setIsContentTabHidden: (isContentTabHidden: boolean) => void;
}) {
  return (
    <TabSections
      buttonFunction={() => setIsContentTabHidden(true)}
      name="Chat Support"
    >
      <div className="flex flex-col justify-end px-0 md:px-8 max-md:min-h-[calc(100vh-200px)] max-h-[700px] md:max-h-[450px] gap-7 pt-7 pb-5">
        <div className="flex flex-col gap-5 max-h-[calc(100%-50px)] overflow-y-auto">
          {help_center_chats.map((item: HelpCenterChats) => (
            <MessageBlock key={item.message} {...item} />
          ))}
        </div>
        <MessageInput />
      </div>
    </TabSections>
  );
}

function MessageBlock({ sender, time, message }: HelpCenterChats) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex items-center gap-2.5">
        <p className="text-xs font-bold text-primary">{sender}</p>
        <p className="text-[11px] text-[#FF3426] font-light">{time}</p>
      </div>

      <p className="text-sm text-primary">{message}</p>
    </div>
  );
}

function MessageInput() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(values: z.infer<typeof FormSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-6 sticky sticky:bottom-5 bg-white"
      >
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="hidden">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter your message here."
                  className="resize-none h-[90px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant={`black`} type="submit">
          Send Message
        </Button>
      </form>
    </Form>
  );
}

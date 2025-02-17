"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const formSchema = z.discriminatedUnion("submissionType", [
  z.object({
    submissionType: z.literal("predefined"),
    type: z.enum(
      [
        "I accidentally placed this order",
        "I did not make this order",
        "Delivery was more expensive than I anticipated",
        "Delivery date is too far away",
      ],
      {
        required_error: "You need to select a reason.",
      }
    ),
    reason: z.string().optional(),
  }),
  z.object({
    submissionType: z.literal("custom"),
    type: z.string().optional(),
    reason: z.string().min(10, {
      message: "Custom reason must be at least 10 characters.",
    }),
  }),
]);

export default function OrderCancellationDialog() {
  const [open, setOpen] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      submissionType: "predefined",
      reason: "",
    },
  });

  const reasonText = form.watch("reason");

  useEffect(() => {
    if (reasonText && reasonText.length > 0) {
      form.setValue("submissionType", "custom");
    } else {
      form.setValue("submissionType", "predefined");
    }
  }, [reasonText, form]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    form.reset();
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button variant={`outline`} className="flex items-center gap-2">
          <span className="text-[#FF3426] text-xs font-bold">X</span>
          Cancel Order
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col items-center">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-center">
            Order Cancellation
          </DialogTitle>
          <DialogDescription className="text-primary text-center">
            We are sad to see you cancel your order. Could tell us why?, Please
            select as many reasons that apply.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 w-full"
          >
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="hidden">
                    Select a reason for cancelling
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={(value) => {
                        field.onChange(value);
                        form.setValue("submissionType", "predefined");
                        form.setValue("reason", "");
                      }}
                      defaultValue={field.value}
                      className="flex flex-col space-y-4"
                    >
                      {radioReasons.map((item) => (
                        <FormItem
                          key={item}
                          className="flex items-center space-x-3 space-y-0 p-2.5 border border-border rounded-[10px]"
                        >
                          <FormControl>
                            <RadioGroupItem value={item} />
                          </FormControl>
                          <FormLabel
                            className={`font-normal ${
                              field.value === item
                                ? "text-primary"
                                : "text-[#9B9B9B]"
                            }`}
                          >
                            {item}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="reason"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Other</FormLabel>
                  <FormControl>
                    <Textarea
                      className="h-[115px]"
                      placeholder="Enter reason here"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full flex items-center justify-between">
              <Button
                type="button"
                variant={`outline`}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-[#FF3426]"
              >
                Dont Cancel
              </Button>

              <Button variant={`black`} type="submit">
                Cancel Order
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

const radioReasons = [
  "I accidentally placed this order",
  "I did not make this order",
  "Delivery was more expensive than I anticipated",
  "Delivery date is too far away",
];

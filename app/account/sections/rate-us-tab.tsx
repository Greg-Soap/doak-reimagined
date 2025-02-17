"use client";

import TabSections from "../components/tab-sections";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { StarIcon } from "@radix-ui/react-icons";
import EmptyState from "../components/empty-component";
import Link from "next/link";
import Image from "next/image";
import { cartWhiteIcon } from "@/components/icons";

const formSchema = z.object({
  rating: z.string(),
  display_name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  feedback_message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long." }),
});

export default function RateUsTab({
  setIsContentTabHidden,
}: {
  setIsContentTabHidden: (isContentTabHidden: boolean) => void;
}) {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  return (
    <TabSections
      buttonFunction={() => setIsContentTabHidden(true)}
      name="Review Our Services"
    >
      {isSubmitted ? (
        <div className="w-full h-full flex items-center justify-center">
          <SubmittedFormState />
        </div>
      ) : (
        <FeedbackForm setIsSubmitted={setIsSubmitted} />
      )}
    </TabSections>
  );
}

function FeedbackForm({
  setIsSubmitted,
}: {
  setIsSubmitted: (isSubmitted: boolean) => void;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rating: "",
      display_name: "Gbemisola Adigun",
      feedback_message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsSubmitted(true);
  }

  const [selectedRating, setSelectedRating] = useState("");

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center space-y-8 px-5 md:px-8 py-7"
      >
        <FormField
          control={form.control}
          name="rating"
          render={({ field }) => (
            <FormItem className="w-fit flex flex-col items-center">
              <FormLabel className="text-primary font-semibold">
                Rating
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={(value) => {
                    setSelectedRating(value);
                    field.onChange(value);
                  }}
                  value={selectedRating}
                  className="flex space-x-2"
                >
                  {[1, 2, 3, 4, 5].map((value) => (
                    <FormItem key={value}>
                      <FormControl>
                        <RadioGroupItem
                          value={value.toString()}
                          className="hidden"
                        />
                      </FormControl>
                      <StarIcon
                        className={`cursor-pointer h-[30px] w-[30px] ${
                          selectedRating >= value.toString()
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-gray-400"
                        }`}
                        onClick={() => setSelectedRating(value.toString())}
                      />
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="display_name"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-primary text-xs font-medium">
                Display Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="shadcn"
                  {...field}
                  className="text-sm bg-[#F7F7F7] h-[41px]"
                  readOnly
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="feedback_message"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-primary text-xs font-medium">
                Review
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter your message here."
                  {...field}
                  className="text-sm bg-[#F7F7F7] h-[145px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant={`black`} type="submit" className="self-start">
          Submit Review
        </Button>
      </form>
    </Form>
  );
}

function SubmittedFormState() {
  return (
    <EmptyState
      type="feedback"
      image="/assets/account/ratings.png"
      alt="Thumbs up"
      title="Your review has been submitted"
      caption="Thank you for rating our services"
    />
  );
}

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
import TabSections from "../components/tab-sections";
import EditDialog from "@/components/custom/edit-dialog";

const formSchema = z.object({
  first_name: z.string().min(2, {
    message: "First name must be at least 3 characters.",
  }),
  last_name: z.string().min(2, {
    message: "Last name must be at least 3 characters.",
  }),
  email: z.string().email({
    message: "Provide a valid email address.",
  }),
  phone: z
    .string()
    .min(5, {
      message: "Provide a valid phone number.",
    })
    .max(14, {
      message: "Phone number too long.",
    }),
});

export default function ProfileTab({
  setIsContentTabHidden,
}: {
  setIsContentTabHidden: (isContentTabHidden: boolean) => void;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <TabSections
      name="Profile Settings"
      buttonFunction={() => setIsContentTabHidden(true)}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full grid md:grid-cols-2 px-5 py-7 md:px-10 md:py-8 gap-7"
        >
          {formDetails.map((item: FormProps, index: number) => (
            <FormField
              key={index}
              control={form.control}
              name={item.name}
              render={({ field }) => (
                <FormItem className="flex flex-col gap-0">
                  <FormLabel className="text-primary fornt-medium text-xs">
                    {item.label}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={item.placeholder}
                      {...field}
                      className="h-10 rounded-[5px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <EditDialog type="profile-address" />

          <Button
            variant={`black`}
            type="submit"
            className="w-fit h-10 text-sm"
          >
            Update
          </Button>
        </form>
      </Form>
    </TabSections>
  );
}

const formDetails: FormProps[] = [
  { name: "first_name", label: "First Name", placeholder: "Enter First Name" },
  { name: "last_name", label: "Last Name", placeholder: "Enter Last Name" },
  { name: "email", label: "Email Address", placeholder: "Examle@gmail.com" },
  { name: "phone", label: "Phone Number", placeholder: "08012345678" },
];

interface FormProps {
  name: "first_name" | "last_name" | "email" | "phone";
  label: string;
  placeholder: string;
}

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { AuthInputField } from "./register";
import { useState } from "react";

const formSchema = z.object({
  email: z.string().email({
    message: "Provide a valid email address.",
  }),
  verification_code: z
    .string()
    .min(6, {
      message: "Code must be at least 6 characters long.",
    })
    .max(6, {
      message: "Code must be at most 6 characters long.",
    }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." })
    .max(16, { message: "Password too long." }),
  confirm_password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." })
    .max(16, { message: "Password too long." }),
});

export default function ResetPasswordForm() {
  const [formPage, setFormPage] = useState<number>(1);

  if (formPage === 1) {
    return <FirstForm setFormPage={setFormPage} />;
  } else if (formPage === 2) {
    return <SecondForm />;
  } else setFormPage(1);
}

function FirstForm({
  setFormPage,
}: {
  setFormPage: (formPage: number) => void;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      verification_code: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setFormPage(2);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col w-full gap-4"
      >
        {formInputs.slice(0, 2).map((item, index) => (
          <AuthInputField
            key={item.name}
            readOnly={index === 0}
            item={item}
            form={form}
          />
        ))}

        <Button variant={`black`} className="w-full h-[41px]" type="submit">
          Reset Password
        </Button>
      </form>
    </Form>
  );
}

function SecondForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirm_password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {formInputs.slice(2).map((item, index) => (
          <AuthInputField
            key={item.name}
            readOnly={index === 0}
            item={item}
            form={form}
          />
        ))}

        <Button variant={`black`} className="w-full h-[41px]" type="submit">
          Save New Password
        </Button>
      </form>
    </Form>
  );
}

const formInputs: FormInputs[] = [
  { name: "email", label: "Email Address", placeholder: "Your Email Address" },
  {
    name: "verification_code",
    label: "Enter Verification Code sent to",
    placeholder: "Enter Verification Code",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your desired password",
  },
  {
    name: "confirm_password",
    label: "Confirm Password",
    placeholder: "Confirm password",
  },
];

interface FormInputs {
  name: "email" | "password" | "confirm_password" | "verification_code";
  label: string;
  placeholder: string;
}

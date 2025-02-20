"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { AuthInputField } from "./register";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const formSchema = z
  .object({
    email: z.string().email({
      message: "Provide a valid email address.",
    }),
    verification_code: z.string().length(6, {
      message: "Code must be exactly 6 characters long.",
    }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long." })
      .max(16, { message: "Password too long." }),
    confirm_password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long." })
      .max(16, { message: "Password too long." }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match.",
    path: ["confirm_password"],
  });

export default function ResetPasswordForm() {
  const [formPage, setFormPage] = useState<number>(2);
  const [email, setEmail] = useState<string>("");

  if (formPage === 1) {
    return <FirstForm setEmail={setEmail} setFormPage={setFormPage} />;
  } else if (formPage === 2) {
    return <SecondForm setFormPage={setFormPage} email={email} />;
  } else if (formPage === 3) {
    return <ThirdForm email={email} />;
  } else setFormPage(1);
}

function FirstForm({
  setFormPage,
  setEmail,
}: {
  setFormPage: (formPage: number) => void;
  setEmail: (email: string) => void;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setFormPage(2);
    setEmail(values.email);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col w-full gap-4"
      >
        <TabDetails>
          <p className="text-primary text-xs">
            Enter your email address for password reset
          </p>
        </TabDetails>

        {formInputs.slice(0, 1).map((item, index) => (
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

function SecondForm({
  email,
  setFormPage,
}: {
  email: string;
  setFormPage: (formPage: number) => void;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: email,
      verification_code: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setFormPage(3);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col w-full gap-4"
      >
        <TabDetails>
          <p className="text-primary text-xs">
            Enter your email address for password reset
          </p>
        </TabDetails>

        <AuthInputField readOnly={true} item={formInputs[0]} form={form} />

        <FormField
          control={form.control}
          name={formInputs[1].name}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-medium">
                {formInputs[1].label}{" "}
                <span className="font-semibold">{email}</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={formInputs[1].placeholder}
                  {...field}
                  className="h-[41px] shadow-none border-border"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button variant={`black`} className="w-full h-[41px]" type="submit">
          Reset Password
        </Button>
      </form>
    </Form>
  );
}

function ThirdForm({ email }: { email: string }) {
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
        <TabDetails>
          <p className="text-primary text-xs">
            Password reset for <span className="font-semibold">{email}</span>
          </p>
        </TabDetails>

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

function TabDetails({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex flex-col gap-0.5 items-center">
      <p className="text-primary text-lg font-semibold">Reset your password</p>

      {children}
    </div>
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

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
import { useState } from "react";

const formSchema = z
  .object({
    first_name: z.string().min(3, {
      message: "First name must be at least 3 characters.",
    }),
    last_name: z.string().min(3, {
      message: "Last name must be at least 3 characters.",
    }),
    email: z.string().email({
      message: "Provide a valid email address.",
    }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long." })
      .max(16, { message: "Password too long." }),
    confirm_password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long." })
      .max(16, { message: "Password too long." }),
    verification_code: z.string().length(6, {
      message: "Code must be exactly 6 characters long.",
    }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match.",
    path: ["confirm_password"],
  });

export default function RegisterForm() {
  const [formPage, setFormPage] = useState<number>(1);
  const [email, setEmail] = useState<string>("");

  if (formPage === 1) {
    return <FirstForm setEmail={setEmail} setFormPage={setFormPage} />;
  } else if (formPage === 2) {
    return <SecondForm setFormPage={setFormPage} email={email} />;
  } else if (formPage === 3) {
    return <ThirdForm email={email} />;
  } else {
    setFormPage(1);
  }
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
      first_name: "",
      last_name: "",
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {formInputs.slice(0, 3).map((item) => (
          <AuthInputField key={item.name} item={item} form={form} />
        ))}
        <Button variant={`black`} className="w-full h-[41px]" type="submit">
          Continue
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
      password: "",
      confirm_password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setFormPage(3);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {formInputs.slice(2, 5).map((item, index) => (
          <AuthInputField
            key={item.name}
            readOnly={index === 0}
            item={item}
            form={form}
          />
        ))}
        <Button variant={`black`} className="w-full h-[41px]" type="submit">
          Send Verification Code
        </Button>
      </form>
    </Form>
  );
}

function ThirdForm({ email }: { email: string }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      verification_code: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col w-full gap-4"
      >
        <FormField
          control={form.control}
          name={formInputs[5].name}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-medium">
                {formInputs[5].label}{" "}
                <span className="font-semibold">{email}</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={formInputs[5].placeholder}
                  {...field}
                  className="h-[41px] shadow-none border-border"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex w-full items-center justify-center gap-3 text-sm">
          <p>Didn&apos;t get the code?</p>

          <Button
            type="button"
            className="p-0 w-fit h-fit font-semibold underline bg-transparent hover:bg-transparent text-primary hover:text-primary shadow-none"
          >
            Send Code Again
          </Button>
        </div>

        <Button
          variant={`black`}
          className="w-full h-[41px] mt-7"
          type="submit"
        >
          Create Account
        </Button>
      </form>
    </Form>
  );
}

export function AuthInputField({
  item,
  form,
  readOnly = false,
}: {
  item: FormInputs;
  form: any;
  readOnly?: boolean;
}) {
  return (
    <FormField
      key={item.name}
      control={form.control}
      name={item.name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-xs font-medium">{item.label}</FormLabel>
          <FormControl>
            <Input
              type={
                item.name === "password" || item.name === "confirm_password"
                  ? "password"
                  : "text"
              }
              readOnly={readOnly}
              placeholder={item.placeholder}
              {...field}
              className="h-[41px] shadow-none border-border"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

const formInputs: FormInputs[] = [
  { name: "first_name", label: "First Name", placeholder: "Your First Name" },
  { name: "last_name", label: "Last Name", placeholder: "Your Last Name" },
  { name: "email", label: "Email Address", placeholder: "Your Email Address" },
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
  {
    name: "verification_code",
    label: "Enter Verification Code sent to",
    placeholder: "Enter Verification Code",
  },
];

interface FormInputs {
  name:
    | "first_name"
    | "last_name"
    | "email"
    | "password"
    | "confirm_password"
    | "verification_code";
  label: string;
  placeholder: string;
}

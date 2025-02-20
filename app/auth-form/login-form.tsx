"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { AuthInputField } from "./register";

const formSchema = z.object({
  email: z.string().email({
    message: "Provide a valid email address.",
  }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." })
    .max(16, { message: "Password too long." }),
});

export default function LogInForm({
  setActiveTab,
}: {
  setActiveTab: (activeTab: string) => void;
}) {
  return (
    <>
      <RenderLoginForm setActiveTab={setActiveTab} />
    </>
  );
}

function RenderLoginForm({
  setActiveTab,
}: {
  setActiveTab: (activeTab: string) => void;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
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
        {formFields.slice(0, 2).map((item, index) => (
          <AuthInputField
            key={item.name}
            readOnly={index === 0}
            item={item}
            form={form}
          />
        ))}

        <Button
          type="button"
          onClick={() => setActiveTab("reset-password")}
          className="p-0 w-fit h-fit bg-transparent hover:bg-transparent text-[#0094FF] hover:text-[#0094FF] text-xs -mt-3 font-medium shadow-none"
        >
          Forgot password?
        </Button>

        <Button variant={`black`} className="w-full h-[41px]" type="submit">
          Login
        </Button>
      </form>
    </Form>
  );
}

const formFields: FormInputs[] = [
  { name: "email", label: "Email Address", placeholder: "Your Email Address" },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your desired password",
  },
];

interface FormInputs {
  name: "email" | "password" | "confirm_password" | "verification_code";
  label: string;
  placeholder: string;
}

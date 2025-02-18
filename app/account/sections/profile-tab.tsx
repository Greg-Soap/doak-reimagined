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
import { Street, street } from "@/app/data/address";
import AddressDetails from "@/components/custom/address-details";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

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
  default_address: z.enum(
    street.map((item) => item.address) as [string, ...string[]],
    {
      required_error: "You need to select a default address.",
    }
  ),
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
      default_address: street[0]?.address,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form submitted with values:", values);
  }

  return (
    <TabSections
      name="Profile Settings"
      buttonFunction={() => setIsContentTabHidden(true)}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full grid md:grid-cols-2 px-0 py-7 md:px-10 md:py-8 gap-7"
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

          {street.length === 0 ? (
            <EditDialog type="profile-address" />
          ) : (
            <DefaultAddress item={street[0]} />
          )}

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

function DefaultAddress({ item }: { item: Street }) {
  return (
    <div className="md:col-span-2 flex items-center justify-between border border-border px-7 py-3 rounded-[10px]">
      <div className="flex flex-col gap-2">
        <AddressDetails item={item} />
      </div>

      {street.length > 1 && <ChangeDefaultAddressDialog />}
    </div>
  );
}

function ChangeDefaultAddressDialog() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      default_address: street[0].address,
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
    <Dialog>
      <DialogTrigger className="bg-transparent hover:bg-transparent p-1 w-fit h-fit text-sm text-[#FF3426] shadow-none">
        Change
      </DialogTrigger>
      <DialogContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle className="text-xl text-primary font-semibold">
                Select Default Address
              </DialogTitle>
              <DialogDescription className="sr-only">
                This will change the default address your drinks will be
                delivered to.
              </DialogDescription>
            </DialogHeader>

            <FormField
              control={form.control}
              name="default_address"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="sr-only">Default Address</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      {street.map((item: Street) => (
                        <FormItem
                          key={item.name}
                          className="flex space-x-3 space-y-0"
                        >
                          <FormControl>
                            <RadioGroupItem value={item.address} />
                          </FormControl>
                          <FormLabel
                            className={`w-full flex flex-col gap-2 px-5 py-3 border rounded-[10px] ${
                              field.value === item.address
                                ? "border-black"
                                : "border-border"
                            }`}
                          >
                            <AddressDetails item={item} />
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="mt-4">
              Save Changes
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
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

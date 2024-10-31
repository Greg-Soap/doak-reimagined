"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormReturn } from "react-hook-form";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";
import { States, states } from "@/app/data/states";
import { Street } from "../sections/delivery-tab";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(6, {
    message: "Name must be at least 6 characters.",
  }),
  number: z.number().min(11, {
    message: "Phone number must be at least 11 characters.",
  }),
  address: z
    .string()
    .min(10, {
      message: "Address must be at least 10 characters.",
    })
    .max(160, {
      message: "Address must not be longer than 100 characters.",
    }),
  city: z.string().min(3, {
    message: "City must be at least 3 characters.",
  }),
  state: z.string().min(3, {
    message: "Please select a state.",
  }),
});

export default function EditDialog({
  type,
  selectedAddress,
}: {
  type?: boolean;
  selectedAddress: Street;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: selectedAddress.name,
      number: selectedAddress.number,
      address: selectedAddress.address,
      city: selectedAddress.city,
      state: selectedAddress.state,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const [isChanged, setIsChanged] = useState<boolean>(false);

  return (
    <Dialog>
      <DialogTrigger
        type="button"
        className={`${
          type ? "hidden" : "flex"
        } p-2 rounded-[4px] hover:bg-transparent bg-transparent text-sm text-[#FF3426] shadow-none`}
      >
        Edit
      </DialogTrigger>
      <DialogContent className="border-none p-8 flex flex-col gap-6 rounded-[10px]">
        <DialogHeader>
          <DialogTitle className="text-primary text-xl font-medium">
            Edit Address
          </DialogTitle>
          <DialogDescription>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                onChange={() => setIsChanged(true)}
                className="grid lg:grid-cols-2 gap-5"
              >
                {fields.map((item: Fields) => (
                  <ShadcnFormField form={form} data={item} />
                ))}
                <Button
                  variant={`black`}
                  type="submit"
                  className="py-[10px] px-[18px] max-w-fit"
                  disabled={!isChanged}
                >
                  Save
                </Button>
              </form>
            </Form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

function ShadcnFormField({ form, data }: ComponentProps) {
  return (
    <FormField
      control={form.control}
      name={data.name}
      render={({ field }) => (
        <FormItem
          className={`${
            data.type === "small" ? "col-span-1" : "lg:col-span-2"
          } flex flex-col justify-start`}
        >
          <FormLabel className="text-xs text-primary font-medium max-w-fit">
            {data.label}
          </FormLabel>
          {data.name === "state" ? (
            <Select
              onValueChange={field.onChange}
              //defaultValue={field.value.toString()}
              value={field.value.toString()}
            >
              <FormControl>
                <SelectTrigger
                  ref={field.ref}
                  className="border-border py-[10px] px-[14px] h-[41px]"
                >
                  <SelectValue placeholder={data.placeholder} />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectGroup>
                  {states.map((state: States) => (
                    <SelectItem
                      key={state.value}
                      value={state.value}
                      className="hover:bg-slate-100"
                    >
                      {state.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          ) : (
            <FormControl>
              {data.name === "address" ? (
                <Textarea
                  placeholder={data.placeholder}
                  className="resize-none border border-border rounded-[5px] col-span-2 py-[10px] px-[14px] text-sm text-primary font-medium w-full h-[83px]"
                  {...field}
                />
              ) : (
                <Input
                  type={data.name === "number" ? "number" : "text"}
                  placeholder={data.placeholder}
                  {...field}
                  className="border border-border rounded-[5px] py-[10px] px-[14px] bg-transparent text-primary text-sm font-medium w-full h-[41px]"
                />
              )}
            </FormControl>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

const fields: Fields[] = [
  { name: "name", type: "small", label: "Name", placeholder: "eg. John Doe" },
  {
    name: "number",
    type: "small",
    label: "Phone Number",
    placeholder: "+2341234567890",
  },
  {
    name: "address",
    type: "address",
    label: "Address",
    placeholder: "eg. No 14, 19th street BDPA, Ugbowo",
  },
  { name: "city", type: "small", label: "City/Town", placeholder: "eg. Tanke" },
  {
    name: "state",
    type: "small",
    label: "State",
    placeholder: "eg. Oyo State",
  },
];

interface Fields {
  name: "name" | "number" | "address" | "city" | "state";
  type: "small" | "address";
  label: string;
  placeholder: string;
}

interface ComponentProps {
  form: UseFormReturn<z.infer<typeof formSchema>>;
  data: Fields;
}

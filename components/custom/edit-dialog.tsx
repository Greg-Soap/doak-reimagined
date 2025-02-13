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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";
import { States, states } from "@/app/data/states";
import { useState } from "react";
import clsx from "clsx";

const formSchema = z.object({
  name: z.string().min(6, {
    message: "Name must be at least 6 characters.",
  }),
  number: z
    .string()
    .min(11, {
      message: "Phone number must be at least 11 characters.",
    })
    .max(14, {
      message: "Phone number too long.",
    }),
  address: z
    .string()
    .min(10, {
      message: "Address must be at least 10 characters.",
    })
    .max(100, {
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
  type: "new-address" | "edit-address" | "profile-address";
  selectedAddress?: ModifiedStreet;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: selectedAddress ? selectedAddress.name : "",
      number: selectedAddress ? selectedAddress.number?.toString() : "",
      address: selectedAddress ? selectedAddress.address : "",
      city: selectedAddress ? selectedAddress.city : "",
      state: selectedAddress ? selectedAddress.state?.toLocaleLowerCase() : "",
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
        className={clsx("flex shadow-none", {
          "p-2 rounded-[4px] hover:bg-transparent bg-transparent text-sm text-[#FF3426]":
            type === "edit-address",
          "w-fit h-[41px] text-[#FF3426] font-medium text-sm border-2 bg-transparent hover:bg-transparent ml-9 -mt-4 py-[10px] px-[14px] border-border rounded-[5px]":
            type === "new-address",
          "md:col-span-2 w-full ml-0 mt-2 text-primary flex items-center justify-center border-2 h-11 rounded-[7px]":
            type === "profile-address",
        })}
      >
        {type === "edit-address" ? "Edit" : "+ Add New Address"}
      </DialogTrigger>
      <DialogContent className="border-none p-8 flex flex-col gap-6 rounded-[10px]">
        <DialogHeader>
          <DialogTitle className="text-primary text-xl font-medium">
            {type === "edit-address" ? "Edit Address" : "Add New Address"}
          </DialogTitle>
          <DialogDescription>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                onChange={() => setIsChanged(true)}
                className="grid lg:grid-cols-2 gap-5"
              >
                {form_feilds.map((item: FormProps) => (
                  <FormField
                    key={item.name}
                    control={form.control}
                    name={item.name}
                    render={({ field }) => (
                      <FormItem
                        className={`${
                          item.name === "address"
                            ? "col-span-1 md:col-span-2"
                            : "col-span-1"
                        } flex flex-col justify-start`}
                      >
                        <FormLabel className="text-xs text-primary font-medium max-w-fit">
                          {item.label}
                        </FormLabel>
                        {item.name === "state" ? (
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <FormControl>
                              <SelectTrigger className="border-border py-[10px] px-[14px] h-[41px] text-primary font-medium">
                                <SelectValue placeholder="eg. Oyo State" />
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
                            {item.name === "address" ? (
                              <Textarea
                                placeholder="eg. No 14, 19th street BDPA, Ugbowo"
                                className="resize-none border border-border rounded-[5px] col-span-2 py-[10px] px-[14px] text-sm text-primary font-medium w-full h-[83px]"
                                {...field}
                              />
                            ) : (
                              <Input
                                type={
                                  item.name === "number" ? "number" : "text"
                                }
                                placeholder={item.placeHolder}
                                {...field}
                                onChange={(e) =>
                                  field.onChange(e.target.value.toString())
                                }
                                className="border border-border rounded-[5px] py-[10px] px-[14px] bg-transparent text-primary text-sm font-medium w-full h-[41px]"
                              />
                            )}
                          </FormControl>
                        )}

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ))}

                <Button
                  variant={`black`}
                  type="submit"
                  className="py-[10px] px-[18px] max-w-fit"
                  disabled={!isChanged}
                >
                  {type === "edit-address" ? "Save" : "Save Address"}
                </Button>
              </form>
            </Form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

const form_feilds: FormProps[] = [
  { name: "name", label: "Name", placeHolder: "eg. John Doe" },
  { name: "number", label: "Phone Number", placeHolder: "eg. 2348012345678" },
  {
    name: "address",
    label: "Address",
    placeHolder: "eg. No 14, 19th street BDPA, Ugbowo",
  },
  { name: "city", label: "City / Town", placeHolder: "eg. Lekki" },
  { name: "state", label: "State", placeHolder: "eg. Oyo State" },
];

interface FormProps {
  name: "name" | "number" | "address" | "city" | "state";
  label: string;
  placeHolder: string;
}

interface ModifiedStreet {
  value: string;
  name?: string;
  address?: string;
  number?: number;
  type?: "Door delivery" | "Pickup";
  city?: string;
  state?: string;
}

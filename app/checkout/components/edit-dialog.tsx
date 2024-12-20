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
import { ModifiedStreet } from "../sections/delivery-tab";
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
  type: "new-address" | "edit-address";
  selectedAddress?: ModifiedStreet;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: selectedAddress ? selectedAddress.name : "",
      number: selectedAddress ? selectedAddress.number : undefined,
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
        className={`flex ${
          type === "edit-address"
            ? "p-2 rounded-[4px] hover:bg-transparent bg-transparent text-sm text-[#FF3426]"
            : "w-fit text-[#FF3426] font-medium text-sm border-2 bg-transparent hover:bg-transparent ml-9 -mt-4 py-[10px] px-[14px] border-border rounded-[5px]"
        }  shadow-none`}
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
                <FormField
                  control={form.control}
                  name={`name`}
                  render={({ field }) => (
                    <FormItem
                      className={`col-span-1 flex flex-col justify-start`}
                    >
                      <FormLabel className="text-xs text-primary font-medium max-w-fit">
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="eg. John Doe"
                          {...field}
                          className="border border-border rounded-[5px] py-[10px] px-[14px] bg-transparent text-primary text-sm font-medium w-full h-[41px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`number`}
                  render={({ field }) => (
                    <FormItem
                      className={`col-span-1 flex flex-col justify-start`}
                    >
                      <FormLabel className="text-xs text-primary font-medium max-w-fit">
                        Phone Number
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="eg. 2341234567890"
                          {...field}
                          className="border border-border rounded-[5px] py-[10px] px-[14px] bg-transparent text-primary text-sm font-medium w-full h-[41px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`address`}
                  render={({ field }) => (
                    <FormItem
                      className={`col-span-2 flex flex-col justify-start`}
                    >
                      <FormLabel className="text-xs text-primary font-medium max-w-fit">
                        Address
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="eg. No 14, 19th street BDPA, Ugbowo"
                          className="resize-none border border-border rounded-[5px] col-span-2 py-[10px] px-[14px] text-sm text-primary font-medium w-full h-[83px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`city`}
                  render={({ field }) => (
                    <FormItem
                      className={`col-span-1 flex flex-col justify-start`}
                    >
                      <FormLabel className="text-xs text-primary font-medium max-w-fit">
                        City / Town
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="eg. 2341234567890"
                          {...field}
                          className="border border-border rounded-[5px] py-[10px] px-[14px] bg-transparent text-primary text-sm font-medium w-full h-[41px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`state`}
                  render={({ field }) => (
                    <FormItem
                      className={`col-span-1 flex flex-col justify-start`}
                    >
                      <FormLabel className="text-xs text-primary font-medium max-w-fit">
                        State
                      </FormLabel>
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
                      <FormMessage />
                    </FormItem>
                  )}
                />

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

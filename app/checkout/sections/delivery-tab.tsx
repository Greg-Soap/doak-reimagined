"use client";

import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormReturn } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import EditDialog from "../components/edit-dialog";
import { street } from "@/app/data/address";

const FormSchema = z.object({
  address: z.enum(["option-one", "option-two"], {
    required_error: "You need to select an address.",
  }),
  type: z.enum(["delivery", "pickup"], {
    required_error: "You need to select a delivery method.",
  }),
});

export default function DeliveryTab() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-10 w-full"
      >
        {street.length === 0 ? (
          <EmptyState />
        ) : (
          <DeliveryTabSection
            name="Street Address"
            formName="address"
            form={form}
            data={street}
          />
        )}

        <DeliveryTabSection
          name="Select Delivery Method"
          formName="type"
          form={form}
          type
          data={method}
        />

        <Button
          type={`submit`}
          variant={`black`}
          className={`hidden sm:flex w-[90%] text-white font-bold h-11`}
        >
          Proceed to Summary
        </Button>
      </form>
    </Form>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <p className="text-[#9B9B9B] text-[15px]">
        -You do not have an address saved-
      </p>
      <Button className="w-full sm:w-fit text-[#FF3426] font-medium text-sm border-2 bg-transparent hover:bg-transparent py-[10px] px-[14px] border-border rounded-[5px] shadow-none">
        + Add New Address
      </Button>
    </div>
  );
}

function DeliveryTabSection({
  type,
  formName,
  name,
  data,
  form,
}: DeliveryTabProp) {
  const [selectedValue, setSelectedValue] = useState<string>("");

  return (
    <FormField
      control={form.control}
      name={formName}
      render={({ field }) => (
        <FormItem
          className={`${
            type ? "pt-10 border-t w-full px-[5%]" : "w-[90%]"
          } border-border space-y-3`}
        >
          <FormLabel className={`text-lg text-primary font-semibold w-[90%]`}>
            {name}
          </FormLabel>
          <FormControl className="w-[95%] ml-[2.5%]">
            <RadioGroup
              onValueChange={(value) => {
                field.onChange(value);
                setSelectedValue(value);
              }}
              className="flex flex-col space-y-1"
            >
              {data.map((item) => (
                <FormItem className="flex space-x-5 space-y-0" key={item.value}>
                  <FormControl>
                    <RadioGroupItem value={item.value} className="mt-3" />
                  </FormControl>
                  <FormLabel
                    className={`flex w-full items-end sm:items-center justify-between border ${
                      selectedValue === item.value
                        ? "border-primary"
                        : "border-[#C5C5C5]"
                    } rounded-[10px] py-3 pl-[18px] pr-7 data-[state=selected]:border-[#FF3426] transition-all duration-300`}
                  >
                    <div className="flex flex-col gap-2">
                      <p className="text-primary font-semibold text-sm">
                        {type ? item.type : item.name}
                      </p>

                      {!type && (
                        <p className="text-primary text-sm">
                          {`${item.address}, ${item.city}, ${item.state}`}
                        </p>
                      )}

                      {type && (
                        <p className="text-primary text-sm">
                          {item.type === "Door delivery"
                            ? "To be delivered between"
                            : "Available for pickup between"}{" "}
                          <span className="font-semibold">
                            {item.dates?.[0]}
                          </span>{" "}
                          and{" "}
                          <span className="font-semibold">
                            {item.dates?.[1]}
                          </span>
                          {item.time && (
                            <>
                              {" from "}
                              <span className="font-semibold">
                                {item.time[0]}
                              </span>{" "}
                              to{" "}
                              <span className="font-semibold">
                                {item.time[1]}
                              </span>
                            </>
                          )}
                        </p>
                      )}

                      <p
                        className={`${
                          type
                            ? "text-[#FF3426] font-semibold"
                            : "text-primary text-sm"
                        }`}
                      >
                        {type ? item.price : `+${item.number}`}
                      </p>
                    </div>

                    <EditDialog
                      isNotAddress={type}
                      type="edit-address"
                      selectedAddress={item}
                    />
                  </FormLabel>
                </FormItem>
              ))}
              <EditDialog isNotAddress={type} type="new-address" />
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

const method: Method[] = [
  {
    value: "delivery",
    type: "Door delivery",
    dates: ["Wenesday 22 Mar", " Friday 26 Mar"],
    price: "N2,500",
  },
  {
    value: "pickup",
    type: "Pickup",
    dates: ["Wenesday 22 Mar", " Friday 26 Mar"],
    time: ["10:00am", "4pm."],
    price: "Free within opening hours",
  },
];

interface Method {
  value: "delivery" | "pickup";
  type: "Door delivery" | "Pickup";
  dates: string[];
  time?: string[];
  price: string;
}

export interface ModifiedStreet {
  value: string;
  name?: string;
  address?: string;
  number?: number;
  type?: "Door delivery" | "Pickup";
  dates?: string[];
  time?: string[];
  city?: string;
  state?: string;
  price?: string;
}

interface DeliveryTabProp {
  type?: boolean;
  formName: "address" | "type";
  name: string;
  data: ModifiedStreet[];
  form: UseFormReturn<z.infer<typeof FormSchema>>;
}

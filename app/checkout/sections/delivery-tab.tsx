/*import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

export default function DeliveryTab() {
  return (
    <div className="flex flex-col w-full">
      <DeliveryTabSection name="Street Address" data={street} />
      <DeliveryTabSection
        name="Select Delivery Method"
        defaultValue="delivery"
        type
        data={method}
      />
    </div>
  );
}

function DeliveryTabSection({
  type,
  defaultValue,
  name,
  data,
}: {
  type?: boolean;
  defaultValue?: string;
  name: string;
  data: Street[];
}) {
  return (
    <div
      className={`${
        type ? "py-10" : "border-b"
      } flex flex-col items-center w-full gap-5 pb-7 border-[#C5C5C5]`}
    >
      <p className="text-lg text-primary font-semibold w-[90%]">{name}</p>

      <div className="flex flex-col gap-5 w-[90%]">
        <RadioGroup
          defaultValue={defaultValue ? defaultValue : "option-one"}
          className="[85%] gap-5"
        >
          {data.map((item: Street) => (
            <div className="flex space-x-5" key={item.value}>
              <RadioGroupItem
                value={item.value}
                id={item.value}
                className="group mt-5"
              />
              <Label
                htmlFor={item.value}
                className="flex w-full items-center justify-between border border-primary rounded-[10px] py-3 pl-[18px] pr-7 data-[state=selected]:border-[#FF3426]"
              >
                <div className="flex flex-col gap-2">
                  <p className="text-primary font-semibold text-sm">
                    {type ? item.type : item.name}
                  </p>
                  <p className={type ? "hidden" : "text-primary text-sm"}>
                    {item.address}
                  </p>
                  <p className={type ? "text-primary text-sm" : "hidden"}>
                    {item.type === "Door delivery"
                      ? "To be delivered between"
                      : "Available for pickup between"}{" "}
                    <span className="font-semibold">{item.dates?.[0]}</span> and{" "}
                    <span className="font-semibold">{item.dates?.[1]}</span>{" "}
                    {item.time && (
                      <>
                        from{" "}
                        <span className="font-semibold">{item.time[0]}</span> to{" "}
                        <span className="font-semibold">{item.time[1]}</span>
                      </>
                    )}
                  </p>
                  <p
                    className={`${
                      type
                        ? "text-[#FF3426] font-semibold"
                        : "text-primary text-sm"
                    }`}
                  >
                    {type ? item.price : item.number}
                  </p>
                </div>

                <Button
                  className={`${
                    type ? "hidden" : "flex"
                  } p-2 rounded-[4px] hover:bg-transparent bg-transparent text-sm text-[#FF3426] shadow-none`}
                >
                  Edit
                </Button>
              </Label>
            </div>
          ))}
        </RadioGroup>

        <Button
          variant={type ? "black" : "default"}
          className={`${
            type
              ? "w-full text-white font-bold h-11 mt-5"
              : "w-fit text-[#FF3426] font-medium text-sm border-2 bg-transparent hover:bg-transparent shadow-none ml-9"
          } py-[10px] px-[14px] border-[#C5C5C5]`}
        >
          {type ? "Proceed to Summary" : "+ Add New Address"}
        </Button>
      </div>
    </div>
  );
}

const street: Street[] = [
  {
    value: "option-one",
    name: "Omonaluse Ohkuehne",
    address: "No 14, 19th street BDPA, Ugbowo, Benin City, Oyo State",
    number: "+2348180281937",
  },
  {
    value: "option-two",
    name: "Chukwufumnanya Ochei",
    address:
      "No 5, Emerald street Suncity Estate, Ikate, Lekki-Ajah, Oyo State",
    number: "+2349030383868",
  },
];

const method: Street[] = [
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

interface Street {
  value: string;
  name?: string;
  address?: string;
  number?: string;
  type?: "Door delivery" | "Pickup";
  dates?: string[];
  time?: string[];
  price?: string;
}
*/

"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

export default function DeliveryTab() {
  return (
    <div className="flex flex-col w-full">
      <DeliveryTabSection name="Street Address" data={street} />
      <DeliveryTabSection
        name="Select Delivery Method"
        defaultValue="delivery"
        type
        data={method}
      />
    </div>
  );
}

function DeliveryTabSection({
  type,
  defaultValue,
  name,
  data,
}: {
  type?: boolean;
  defaultValue?: string;
  name: string;
  data: Street[];
}) {
  const [selectedValue, setSelectedValue] = useState<string>(
    defaultValue || ""
  );

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div
      className={`${
        type ? "py-10 pb-0 sm:pb-7" : "sm:border-b"
      } flex flex-col items-center w-full gap-5 sm:pb-7 border-[#C5C5C5]`}
    >
      <p className="text-lg text-primary font-semibold w-[90%]">{name}</p>

      <div className="flex flex-col gap-5 w-[90%]">
        <RadioGroup
          defaultValue={defaultValue || "option-one"}
          className="[85%] gap-5"
          onValueChange={handleRadioChange}
        >
          {data.map((item: Street) => (
            <div className="flex space-x-5" key={item.value}>
              <RadioGroupItem
                value={item.value}
                id={item.value}
                className="group mt-5"
              />
              <Label
                htmlFor={item.value}
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
                  <p className={type ? "hidden" : "text-primary text-sm"}>
                    {item.address}
                  </p>
                  <p className={type ? "text-primary text-sm" : "hidden"}>
                    {item.type === "Door delivery"
                      ? "To be delivered between"
                      : "Available for pickup between"}{" "}
                    <span className="font-semibold">{item.dates?.[0]}</span> and{" "}
                    <span className="font-semibold">{item.dates?.[1]}</span>{" "}
                    {item.time && (
                      <>
                        from{" "}
                        <span className="font-semibold">{item.time[0]}</span> to{" "}
                        <span className="font-semibold">{item.time[1]}</span>
                      </>
                    )}
                  </p>
                  <p
                    className={`${
                      type
                        ? "text-[#FF3426] font-semibold"
                        : "text-primary text-sm"
                    }`}
                  >
                    {type ? item.price : item.number}
                  </p>
                </div>

                <Button
                  className={`${
                    type ? "hidden" : "flex"
                  } p-2 rounded-[4px] hover:bg-transparent bg-transparent text-sm text-[#FF3426] shadow-none`}
                >
                  Edit
                </Button>
              </Label>
            </div>
          ))}
        </RadioGroup>

        <Button
          variant={type ? "black" : "default"}
          className={`${
            type
              ? "hidden sm:flex w-full text-white font-bold h-11 mt-5"
              : "w-fit text-[#FF3426] font-medium text-sm border-2 bg-transparent hover:bg-transparent shadow-none ml-9"
          } py-[10px] px-[14px] border-[#C5C5C5]`}
        >
          {type ? "Proceed to Summary" : "+ Add New Address"}
        </Button>
      </div>
    </div>
  );
}

const street: Street[] = [
  {
    value: "option-one",
    name: "Omonaluse Ohkuehne",
    address: "No 14, 19th street BDPA, Ugbowo, Benin City, Oyo State",
    number: "+2348180281937",
  },
  {
    value: "option-two",
    name: "Chukwufumnanya Ochei",
    address:
      "No 5, Emerald street Suncity Estate, Ikate, Lekki-Ajah, Oyo State",
    number: "+2349030383868",
  },
];

const method: Street[] = [
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

interface Street {
  value: string;
  name?: string;
  address?: string;
  number?: string;
  type?: "Door delivery" | "Pickup";
  dates?: string[];
  time?: string[];
  price?: string;
}

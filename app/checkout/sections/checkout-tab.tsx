"use client";

import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { CustomTabTriggers } from "@/app/[productId]/sections/product-tabs";
import DeliveryTab from "./delivery-tab";
import SummaryTab from "./summary-tab";
import PaymentTab from "./payment-tab";
import CartSummary from "@/app/cart/sections/cart-summary";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function CheckoutTab() {
  const [activeTab, setActiveTab] = useState<string>("delivery");

  return (
    <div className="grid grid-cols-4 gap-5">
      <div className="col-span-4 lg:col-span-3">
        <Tabs
          defaultValue={`description`}
          value={activeTab}
          onValueChange={setActiveTab}
          className="min-w-full sm:border border-border sm:rounded-[10px]"
        >
          <TabsList className="border-b border-border w-full rounded-b-none bg-transparent px-5 sm:px-0 sm:py-7 gap-7 justify-between sm:justify-center">
            {tabTriggers.map((item: TabTriggers, index: number) => (
              <CustomTabTriggers
                key={index}
                name={item.name}
                value={item.value}
                className="w-fit"
              />
            ))}
          </TabsList>
          <TabsContent value="delivery">
            <div className="py-4 sm:py-10 flex flex-col gap-7 items-center w-full">
              <DeliveryTab setActiveTab={setActiveTab} />
            </div>
          </TabsContent>
          <TabsContent value="summary">
            <div className="p-5 sm:p-10 flex flex-col gap-7 items-center w-full">
              <SummaryTab setActiveTab={setActiveTab} />
            </div>
          </TabsContent>
          <TabsContent value="payment">
            <div className="p-5 sm:px-10 sm:py-8 flex flex-col gap-7 items-center w-full">
              <PaymentTab />
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <CartSummary type="checkout">
        {activeTab === "payment" ? undefined : (
          <Button
            asChild
            className={`hidden md:flex border border-black rounded-[5px] text-black font-semibold bg-transparent hover:bg-transparent`}
          >
            <Link href={`/cart`}>Edit Items</Link>
          </Button>
        )}
      </CartSummary>
    </div>
  );
}

const tabTriggers: TabTriggers[] = [
  { name: "DELIVERY", value: "delivery" },
  { name: "SUMMARY", value: "summary" },
  { name: "PAYMENT", value: "payment" },
];

interface CheckoutTabProps {
  tabTriggers: TabTriggers[];
  activeTab: string;
  setActiveTab: (activeTab: string) => void;
}

interface TabTriggers {
  name: string;
  value: string;
}

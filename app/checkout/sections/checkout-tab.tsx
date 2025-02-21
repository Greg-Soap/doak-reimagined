"use client";

import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import CustomTabTriggers from "@/components/custom/custom-tag-trigger";
import DeliveryTab from "./delivery-tab";
import SummaryTab from "./summary-tab";
import PaymentTab from "./payment-tab";
import CartSummary from "@/components/custom/cart-summary";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function CheckoutTab() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentTab = searchParams.get("checkoutTab") || "delivery";

  const [activeTab, setActiveTab] = useState<string>("delivery");

  useEffect(() => {
    setActiveTab(currentTab);
  }, [currentTab]);

  const handleTabChange = (value: string) => {
    router.push(`/checkout?checkoutTab=${value}`);
    setActiveTab(value);
  };

  return (
    <div className="grid grid-cols-4 gap-5">
      <div className="col-span-4 lg:col-span-3">
        <Tabs
          defaultValue={`delivery`}
          value={activeTab}
          onValueChange={handleTabChange}
          className="min-w-full sm:border border-border sm:rounded-[10px]"
        >
          <TabsList className="border-b border-border w-full rounded-b-none bg-transparent px-5 sm:px-0 sm:py-7 gap-7 justify-between sm:justify-center">
            {tabTriggers.map((item: TabTriggers, index: number) => (
              <CustomTabTriggers
                key={index}
                name={item.name}
                value={item.value}
                className="w-fit"
                disabled={true}
              />
            ))}
          </TabsList>
          <TabsContent value="delivery">
            <div className="py-4 sm:py-10 flex flex-col gap-7 items-center w-full">
              <DeliveryTab setActiveTab={handleTabChange} />
            </div>
          </TabsContent>
          <TabsContent value="summary">
            <div className="p-5 sm:p-10 flex flex-col gap-7 items-center w-full">
              <SummaryTab setActiveTab={handleTabChange} />
            </div>
          </TabsContent>
          <TabsContent value="payment">
            <div className="p-5 sm:px-10 sm:py-8 flex flex-col gap-7 items-center w-full">
              <PaymentTab />
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <CartSummary
        type={activeTab === "payment" ? "payment" : undefined}
        className={`hidden md:flex ${
          activeTab === "payment" ? "w-full" : "ml-[0%]"
        }`}
      >
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

interface TabTriggers {
  name: string;
  value: string;
}

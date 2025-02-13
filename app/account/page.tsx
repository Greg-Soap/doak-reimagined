"use client";

import AddressIcon from "@/components/icons/address";
import MessageIcon from "@/components/icons/message";
import NotificationIcon from "@/components/icons/notification-icon";
import OrderIcon from "@/components/icons/order";
import RateUsIcon from "@/components/icons/rate";
import UserIcon from "@/components/icons/user";
import VoucherIcon from "@/components/icons/voucher";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ReactElement } from "react";
import OrderTab from "./sections/order-tab";
import NotificationTab from "./sections/notification-tab";
import AddressTab from "./sections/address-tab";
import VoucherTab from "./sections/voucher-tab";
import { useState } from "react";
import ProfileTab from "./sections/profile-tab";
import OrderDetailsTab from "./sections/order-details-tab";

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState<string>("profile");
  const [selectedOrder, setSelectedOrder] = useState<string>("");
  const [isTabContentHidden, setIsTabContentHidden] = useState<boolean>(true);

  const tabContents: TabContents[] = [
    {
      value: "profile",
      element: <ProfileTab setIsContentTabHidden={setIsTabContentHidden} />,
    },
    {
      value: "orders",
      element: (
        <OrderTab
          setIsContentTabHidden={setIsTabContentHidden}
          setSelectedOrder={setSelectedOrder}
          setActiveTab={setActiveTab}
        />
      ),
    },
    {
      value: "notifications",
      element: (
        <NotificationTab setIsContentTabHidden={setIsTabContentHidden} />
      ),
    },
    {
      value: "addresses",
      element: <AddressTab setIsContentTabHidden={setIsTabContentHidden} />,
    },
    {
      value: "vouchers",
      element: <VoucherTab setIsContentTabHidden={setIsTabContentHidden} />,
    },
    {
      value: "order-details",
      element: (
        <OrderDetailsTab setActiveTab={setActiveTab} orderId={selectedOrder} />
      ),
    },
  ];

  return (
    <section className="md:container w-full flex justify-center md:py-12 lg:py-24 bg-[#f7f7f7]">
      <Tabs
        defaultValue="profile"
        value={activeTab}
        onValueChange={setActiveTab}
        orientation="vertical"
        className="flex gap-5 py-5 md:py-0 lg:gap-20 w-full xl:w-fit min-h-fit bg-white md:bg-transparent"
      >
        <TabsList
          className={`${
            isTabContentHidden ? "flex" : "max-md:hidden"
          } flex flex-col bg-transparent gap-5 w-full md:w-[260px] h-fit px-6 md:px-0 bg-white rounded-[10px] md:border border-border`}
        >
          <p className="w-full md:text-center py-3 text-primary font-semibold border-b border-border">
            My Doak Account
          </p>
          <div className="flex flex-col items-start gap-5 pb-6 md:px-5 w-full border-b border-border">
            {tabTriggers.slice(0, 5).map((item: TabTriggers) => (
              <TabsTrigger
                onClick={() => setIsTabContentHidden(false)}
                key={item.value}
                value={item.value}
                className="group flex items-center max-md:px-0 gap-2.5 text-secondary data-[state=active]:text-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                {item.icon}
                {item.label}
              </TabsTrigger>
            ))}
          </div>
          <div className="flex flex-col items-start gap-5 pb-3 md:px-5 w-full border-b border-border">
            {tabTriggers.slice(5, 8).map((item: TabTriggers) => (
              <TabsTrigger
                key={item.value}
                value={item.value}
                className="group flex items-center max-md:px-0 gap-2.5 text-secondary data-[state=active]:text-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                {item.icon}
                {item.label}
              </TabsTrigger>
            ))}
          </div>

          <Button
            variant={`outline`}
            className="w-full md:w-[90%] py-2.5 font-semibold border-black text-black mb-2"
          >
            Log Out
          </Button>
        </TabsList>
        {tabContents.map((item: TabContents) => (
          <TabsContent
            key={item.value}
            value={item.value}
            className={`${
              isTabContentHidden ? "max-md:hidden" : ""
            } w-full md:w-[90%] xl:w-[842px] rounded-[10px] bg-white md:border border-border mt-0`}
          >
            {item.element}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}

const tabTriggers: TabTriggers[] = [
  {
    value: "profile",
    icon: (
      <UserIcon className="w-6 h-6 stroke-secondary group-data-[state=active]:stroke-primary transition-colors duration-300" />
    ),
    label: "Profile",
  },
  {
    value: "orders",
    icon: (
      <OrderIcon className="w-5 h-5 stroke-secondary group-data-[state=active]:stroke-primary transition-colors duration-300" />
    ),
    label: "Orders",
  },
  {
    value: "notifications",
    icon: (
      <NotificationIcon className="w-5 h-5 stroke-secondary group-data-[state=active]:stroke-primary transition-colors duration-300" />
    ),
    label: "Notifications",
  },
  {
    value: "addresses",
    icon: (
      <AddressIcon className="w-5 h-5 stroke-secondary group-data-[state=active]:stroke-primary transition-colors duration-300" />
    ),
    label: "Addresses",
  },
  {
    value: "vouchers",
    icon: (
      <VoucherIcon className="w-5 h-5 stroke-secondary group-data-[state=active]:stroke-primary transition-colors duration-300" />
    ),
    label: "Vouchers",
  },
  {
    value: "rate_our_services",
    icon: (
      <RateUsIcon className="w-5 h-5 stroke-secondary group-data-[state=active]:stroke-primary transition-colors duration-300" />
    ),
    label: "Rate Doak Services",
  },
  {
    value: "help_center",
    icon: (
      <MessageIcon className="w-5 h-5 stroke-secondary group-data-[state=active]:stroke-primary transition-colors duration-300" />
    ),
    label: "Help Center",
  },
];

interface TabTriggers {
  value: string;
  icon: ReactElement;
  label: string;
}

interface TabContents {
  value: string;
  element: ReactElement;
}

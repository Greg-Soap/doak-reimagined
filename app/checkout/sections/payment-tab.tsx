import Cards from "@/components/icons/cards";
import SendMoneyIcon from "@/components/icons/send-money";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ReactElement } from "react";
import CardPaymentTab from "./payment-tabs/card-payment";
import TransferTab from "./payment-tabs/transfer";

export default function PaymentTab() {
  return (
    <Tabs
      defaultValue="card"
      className="w-full flex flex-col justify-center items-center gap-10"
    >
      <TabsList className="w-fit h-fit gap-5 p-0 bg-transparent">
        {paymentMethods.map((item: PaymentMethod) => (
          <TabsTrigger
            key={item.name}
            value={item.name}
            className=" flex flex-col gap-2 text-[10px] text-border border border-border w-[88px] h-[76px] rounded-[5px] data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:font-medium data-[state=active]:shadow-none transition-all duration-300 group"
          >
            {item.icon}
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="card" className="w-full">
        <div className="w-full h-fit flex">
          <CardPaymentTab />
        </div>
      </TabsContent>
      <TabsContent value="transfer" className="w-full">
        <div className="w-full h-fit flex justify-center">
          <TransferTab />
        </div>
      </TabsContent>
    </Tabs>
  );
}

const paymentMethods: PaymentMethod[] = [
  {
    name: "card",
    label: "Pay with Card",
    icon: (
      <Cards className="w-8 h-8 stroke-border group-data-[state=active]:stroke-black transition-all duration-300" />
    ),
  },
  {
    name: "transfer",
    label: "Transfer/USSD",
    icon: (
      <SendMoneyIcon className="w-8 h-8 stroke-border group-data-[state=active]:stroke-black transition-all duration-300" />
    ),
  },
];

interface PaymentMethod {
  icon: ReactElement;
  name: "card" | "transfer" | "paypal";
  label: string;
}

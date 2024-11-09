import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PaymentTab() {
  return (
    <>
      <Tabs
        defaultValue="card"
        className="w-full flex flex-col justify-center items-center gap-20"
      >
        <TabsList className="w-fit h-fit gap-5 p-0 bg-transparent">
          {paymentMethods.map((item: PaymentMethod) => (
            <TabsTrigger
              key={item.name}
              value={item.name}
              className="text-[10px] text-border border border-border w-[88px] h-[76px] rounded-[5px] data-[state=active]:border-2 data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:font-medium data-[state=active]:shadow-none transition-all duration-300"
            >
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="card">
          <p>Helo</p>
        </TabsContent>
        <TabsContent value="transfer">
          <p>Helo</p>
        </TabsContent>
        <TabsContent value="paypal">
          <p>Helo</p>
        </TabsContent>
      </Tabs>
    </>
  );
}

function CardTab() {
  return <></>;
}

const paymentMethods: PaymentMethod[] = [
  { name: "card", label: "Pay with Card" },
  { name: "transfer", label: "Transfer/USSD" },
  { name: "paypal", label: "Paypal" },
];

interface PaymentMethod {
  name: "card" | "transfer" | "paypal";
  label: string;
}

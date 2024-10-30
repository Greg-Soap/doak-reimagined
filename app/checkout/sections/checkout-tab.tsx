import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { CustomTabTriggers } from "@/app/[productId]/sections/product-tabs";
import DeliveryTab from "./delivery-tab";

export default function CheckoutTab() {
  return (
    <div className="col-span-4 lg:col-span-3">
      <Tabs
        defaultValue="delivery"
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
        <TabsContent
          value="delivery"
          className="py-4 sm:py-10 flex flex-col gap-7 items-center"
        >
          <DeliveryTab />
        </TabsContent>
        <TabsContent value="summary" className="p-10">
          Change your password here.
        </TabsContent>
        <TabsContent value="payment" className="p-10">
          Change your password here.
        </TabsContent>
      </Tabs>
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

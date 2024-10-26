import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomTabTriggers } from "@/app/[productId]/sections/product-tabs";

export default function CheckoutTab() {
  return (
    <div className="col-span-3">
      <Tabs
        defaultValue="delivery"
        className="min-w-full border border-border rounded-[10px]"
      >
        <TabsList className="border-b border-border w-full rounded-b-none bg-transparent py-7 gap-7">
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
          className="p-4 sm:p-10 flex flex-col gap-5"
        >
          <p>
            Consectetur venenatis cursus consequat turpis ornare odio ultricies
            nisl ipsum. Arcu adipiscing erat tortor justo ac. Sed nunc dui eu
            volutpat facilisis. Ultrices egestas libero vitae in lacus volutpat
            arcu fusce elit. Sed augue tristique nisl ipsum. A cras in tempus
            cursus diam ut pulvinar dolor eget. In enim habitasse
          </p>
          <p>
            Consectetur venenatis cursus consequat turpis ornare odio ultricies
            nisl ipsum. Arcu adipiscing erat tortor justo ac. Sed nunc dui eu
            volutpat facilisis. Ultrices egestas libero vitae in lacus volutpat
            arcu fusce elit. Sed augue tristique nisl ipsum. A cras in tempus
            cursus diam ut pulvinar dolor eget. In enim habitasse
          </p>
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

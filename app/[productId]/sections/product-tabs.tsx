import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import CustomTagTrigger from "@/components/custom/custom-tag-trigger";

export default function ProductTabs() {
  return (
    <Tabs
      defaultValue="description"
      className="min-w-full border border-border rounded-[10px]"
    >
      <TabsList className="border-b border-border w-full rounded-b-none bg-transparent py-7">
        {tabTriggers.map((item: TabTriggers, index: number) => (
          <CustomTagTrigger key={index} name={item.name} value={item.value} />
        ))}
      </TabsList>
      <TabsContent
        value="description"
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
      <TabsContent value="product-details" className="p-10">
        Change your password here.
      </TabsContent>
    </Tabs>
  );
}

const tabTriggers: TabTriggers[] = [
  { name: "DESCRIPTION", value: "description" },
  { name: "PRODUCT DETAILS", value: "product-details" },
];

interface TabTriggers {
  name: string;
  value: string;
}

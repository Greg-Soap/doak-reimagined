import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProductTabs() {
  return (
    <Tabs
      defaultValue="description"
      className="min-w-full border border-border rounded-[10px]"
    >
      <TabsList className="border-b border-border w-full rounded-b-none bg-transparent py-7">
        <TabsTrigger
          value="description"
          className="w-1/2 flex flex-col text-center text-xs text-secondary font-bold data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary group"
        >
          DESCRIPTION
          <span className="w-6 h-0.5 bg-transparent group-data-[state=active]:bg-[#FF3426]" />
        </TabsTrigger>
        <TabsTrigger
          value="product-details"
          className="w-1/2 flex flex-col text-center text-xs text-secondary font-bold data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary group"
        >
          PRODUCT DETAILS
          <span className="w-6 h-0.5 bg-transparent group-data-[state=active]:bg-[#FF3426]" />
        </TabsTrigger>
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

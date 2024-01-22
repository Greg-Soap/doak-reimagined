import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function FilterBar() {
  return (
    <aside className="w-[260px] flex flex-col  border border-input rounded-xl">
      <div className="flex justify-between items-center px-5  py-3 font-bold border-b border-input">
        Filter{" "}
        <Button variant={"outline"} size={"sm"} className="rounded-full">
          Reset
        </Button>
      </div>
      <FilterAccordion />
    </aside>
  );
}

function FilterAccordion() {
  return (
    <Accordion type="multiple" className="w-full">
      {filters.map((filter, idx) => (
        <AccordionItem value={`${idx}`} key={idx}>
          <AccordionTrigger>{filter.label}</AccordionTrigger>
          <AccordionContent className="flex  flex-col gap-4">
            {filter.options.map((option, idx) => (
              <p
                className="flex items-center gap-[10px] text-[#656565]"
                key={idx}
              >
                <Checkbox />
                {option}
              </p>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

const filters: filterProps[] = [
  {
    label: "Category",
    options: [
      "All",
      "Wine",
      "Champagne",
      "Beer",
      "Whiskey",
      "Brandy",
      "Liqueur",
      "Spirit",
    ],
  },
  { label: "Drink Sizes", options: ["All", "100ml", "200ml", "300ml"] },
  { label: "Brand", options: ["All", "Star", "Gulder", "Trophy", "33 Export"] },
];

interface filterProps {
  label: string;
  options: string[];
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function FilterBar() {
  return (
    <aside className="w-full lg:w-[260px] h-fit flex flex-col  border border-input rounded-xl">
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
      {filters.map((filter: filterProps, idx: number) => (
        <AccordionItem value={`${idx}`} key={idx} className="last:border-none">
          <AccordionTrigger className="px-5">{filter.label}</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 px-5">
            {filter.options.map((option, idx) => (
              <Label
                htmlFor={option}
                className="flex cursor-pointer items-center gap-[10px] text-[#656565]"
                key={idx}
              >
                <Checkbox id={option} />
                {option}
              </Label>
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

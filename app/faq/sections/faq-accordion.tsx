import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQsAccordion() {
  return (
    <section className="container py-24 flex justify-center">
      <Accordion
        type="single"
        collapsible
        className="lg:w-[840px] rounded-[10px] border border-border py-3"
      >
        {faqContent.map((item: FaqProps, index: number) => (
          <AccordionItem
            key={index}
            value={`item-${index + 1}`}
            className="group last:border-none px-7"
          >
            <AccordionTrigger className="text-primary md:text-lg font-semibold group-data-[state=open]:text-[#FF3426] hover:no-underline">
              {item.trigger}
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-base text-primary">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

const faqContent: FaqProps[] = [
  {
    trigger: "How do I handle wholesale",
    content: `You can either send an email to DOAK explaining the amount and details of your order and DOAK would get back to you within 2 working days. Or you can fill the wholesale request form stating the drinks you want to order and their amounts and DOAK would send an email response.`,
  },
  {
    trigger: "Does DOAK deliver outside Oyo State?",
    content: `You can either send an email to DOAK explaining the amount and details of your order and DOAK would get back to you within 2 working days. Or you can fill the wholesale request form stating the drinks you want to order and their amounts and DOAK would send an email response.`,
  },
  {
    trigger: "Does DOAK have a walk in store?",
    content: `You can either send an email to DOAK explaining the amount and details of your order and DOAK would get back to you within 2 working days. Or you can fill the wholesale request form stating the drinks you want to order and their amounts and DOAK would send an email response.`,
  },
  {
    trigger: "How do I get dicounts and deals from shopping with DOAK",
    content: `You can either send an email to DOAK explaining the amount and details of your order and DOAK would get back to you within 2 working days. Or you can fill the wholesale request form stating the drinks you want to order and their amounts and DOAK would send an email response.`,
  },
];

interface FaqProps {
  trigger: string;
  content: string;
}

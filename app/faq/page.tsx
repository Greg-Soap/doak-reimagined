import FAQsAccordion from "./sections/faq-accordion";

export default function FAQsPage() {
  return (
    <>
      <section className="container w-full flex items-center justify-center h-[189px] lg:h-[300px] bg-small-contact-bg lg:bg-contact-bg bg-center bg-cover bg-no-repeat">
        <div className="flex items-center justify-center bg-white p-7 md:p-0 min-h-fit lg:min-h-[177px] min-w-fit mlg:min-w-[478px]">
          <p className="text-2xl md:text-4xl font-bold text-primary text-center">
            Frequently asked <br /> questions.
          </p>
        </div>
      </section>

      <FAQsAccordion />
    </>
  );
}

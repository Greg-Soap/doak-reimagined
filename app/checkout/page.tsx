import CheckoutTab from "./sections/checkout-tab";

export default function CheckoutPage() {
  return (
    <section className="md:container flex flex-col gap-7 py-10 md:py-10 lg:py-20">
      <p className="ml-7 md:ml-0 text-primary text-xl md:text-[32px] font-semibold">
        Check Out
      </p>

      <CheckoutTab />
    </section>
  );
}

import CartSummary from "../cart/sections/cart-summary";
import CheckoutTab from "./sections/checkout-tab";

export default function CheckoutPage() {
  return (
    <>
      <section className="container flex flex-col gap-7 py-20">
        <p className="text-primary text-[32px] font-semibold">Check Out</p>

        <div className="grid grid-cols-4 gap-5">
          <CheckoutTab />

          <CartSummary type="checkout" />
        </div>
      </section>
    </>
  );
}

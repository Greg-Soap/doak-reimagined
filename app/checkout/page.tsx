import SimilarProducts from "../[productId]/sections/similar-drinks";
import CheckoutCart from "./sections/checkout-cart";

export default function CheckoutPage() {
  return (
    <>
      <CheckoutCart />

      <SimilarProducts name="Customers Also Purchased" length={12} />
    </>
  );
}

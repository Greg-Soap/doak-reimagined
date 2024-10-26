import SimilarProducts from "../[productId]/sections/similar-drinks";
import ShoppingCart from "./sections/cart-list";

export default function CartPage() {
  return (
    <>
      <ShoppingCart />

      <SimilarProducts name="Customers Also Purchased" length={12} />
    </>
  );
}

"use client";

import { IProductWithCount, useCart } from "@/app/hooks/cart-context";

export function CartTotal(delivery_fee?: number) {
  const { cartItems } = useCart();
  const fee = delivery_fee ? delivery_fee : 0;

  return cartItems.reduce((acc: number, item: IProductWithCount) => {
    const price = item.discount_price ? item.discount_price : item.price;

    return acc + price * (item.count || 1) + fee;
  }, 0);
}

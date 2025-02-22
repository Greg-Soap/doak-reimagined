"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { IProduct } from "@/types/products";
import { FormatNaira } from "@/utils/format-currency";
import Link from "next/link";
import { Button } from "../ui/button";
import { useCart } from "@/app/hooks/cart-context";

export default function ProductCard({
  name,
  image,
  type,
  badge,
  discount_price,
  price,
  id,
}: IProduct) {
  const { addToCart, cartItems, removeFromCart } = useCart();

  const cartProduct = cartItems.find((item) => item.id === id);

  return (
    <div className="flex flex-col gap-2 bg-card rounded-xl border overflow-hidden">
      <Link href={`/${id}`} className="flex flex-col relative">
        {badge && (
          <Badge
            variant={badge === "sale" ? "sale" : "seller"}
            className="absolute top-[13px] left-[13px]"
          >
            {badge}
          </Badge>
        )}
        <Image
          src={image}
          alt="product"
          className="w-full"
          width={200}
          height={200}
        />
        <div className="flex flex-col pt-[10px] px-4">
          <p className="text-[12px] text-[#9B9B9B] font-normal">{type}</p>
          <h6 className="text-base">{name}</h6>
          <div className="flex gap-1 items-center pt-4">
            <h3 className="font-extrabold text-xl ">{FormatNaira(price)}</h3>
            {discount_price && (
              <span className="text-[#9B9B9B] text-[12px] line-through">
                {FormatNaira(discount_price)}
              </span>
            )}
          </div>
        </div>
      </Link>

      <div className="flex flex-col px-4 pb-5">
        {cartProduct ? (
          <Button
            className="w-full h-11 px-5 py-[10px] font-bold border-primary bg-transparent mt-2"
            variant={`outline`}
            onClick={() => removeFromCart(id)}
          >
            Remove from cart
          </Button>
        ) : (
          <Button
            className="w-full h-11 px-5 py-[10px] font-bold mt-2"
            variant={`black`}
            onClick={() => addToCart(id)}
          >
            Add to cart
          </Button>
        )}
      </div>
    </div>
  );
}

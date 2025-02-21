"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import ProductTabs from "./product-tabs";
import { IProduct } from "@/types/products";
import { FormatNaira } from "@/utils/format-currency";
import clsx from "clsx";
import QuantityControl from "@/components/custom/quantity-control";
import { useCart } from "@/app/hooks/cart-context";

export default function ProductInformation({ product }: { product: IProduct }) {
  const [sizes, setSizes] = useState<DrinkSizes[]>(drinkSizes);
  const { addToCart, cartItems, removeFromCart } = useCart();

  const cartProduct = cartItems.find((item) => item.id === product.id);

  function handleClick(index: number) {
    const updatedList = drinkSizes.map((item: DrinkSizes, i: number) => ({
      ...item,
      isActive: i === index,
    }));

    setSizes(updatedList);
  }

  return (
    <section className="container flex items-center justify-center lg:items-start lg:flex-row flex-wrap gap-5 w-full lg:max-w-[900px] py-10 md:py-20">
      <div className="grid md:grid-cols-2 gap-5">
        <Image
          src={product.image}
          alt="Product"
          width={446}
          height={611}
          className="rounded-[10px] h-full"
        />

        <div className="w-full max-w-[426px] flex flex-col sm:border gap-7 border-border bg-transparent md:bg-[#FCFCFC] rounded-[10px] sm:px-[25px] sm:py-[30px]">
          <div className="flex flex-col">
            <p className="text-[#FF3426] text-sm font-semibold">
              {product.type}
            </p>
            <p className="text-base sm:text-2xl text-primary font-semibold">
              {product.name}
            </p>
          </div>

          <div className="flex flex-col gap-[14px]">
            <p className="text-primary font-semibold text-sm">BOTTLE SIZE:</p>

            <div className="flex gap-[13px]">
              {sizes.map((item: DrinkSizes, index: number) => (
                <Button
                  key={index}
                  onClick={() => handleClick(index)}
                  className={clsx(
                    "py-[10px] px-[14px] rounded-[5px] transition-all duration-300",
                    {
                      "text-white bg-black hover:bg-black": item.isActive,
                      "text-secondary bg-transparent hover:bg-[#000000cc] hover:text-white":
                        !item.isActive,
                    }
                  )}
                >
                  {item.size}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-[14px]">
            <p className="text-primary font-semibold text-sm">QUANTITY:</p>

            <QuantityControl
              id={product.id}
              count={cartProduct ? cartProduct.count : 1}
              type="product"
            />
          </div>

          <div className="flex flex-col gap-[14px]">
            <p className="text-primary font-semibold text-sm">PRICE:</p>

            <div className="flex items-center gap-5">
              <p className="text-primary font-extrabold text-[32px] leading-[48px]">
                {FormatNaira(product.price)}
              </p>
              {product.discount_price && (
                <p className="text-secondary line-through">
                  {FormatNaira(product.discount_price)}
                </p>
              )}
            </div>
          </div>

          {cartProduct ? (
            <Button
              className="w-full h-11 px-5 py-[10px] font-bold border-primary bg-transparent"
              variant={`outline`}
              onClick={() => removeFromCart(product.id)}
            >
              Remove from cart
            </Button>
          ) : (
            <Button
              className="w-full h-11 px-5 py-[10px] font-bold"
              variant={`black`}
              onClick={() => addToCart(product.id)}
            >
              Add to cart
            </Button>
          )}
        </div>
      </div>

      <ProductTabs />
    </section>
  );
}

const drinkSizes: DrinkSizes[] = [
  { size: "60cl", isActive: true },
  { size: "73cl", isActive: false },
  { size: "125cl", isActive: false },
];

interface DrinkSizes {
  size: string;
  isActive: boolean;
}

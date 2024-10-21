"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import ProductTabs from "./product-tabs";
import { IProduct } from "@/types/products";
import { FormatNaira } from "@/utils/format-currency";

export default function ProductInformation({ product }: { product: IProduct }) {
  const [count, setCount] = useState<number>(1);
  const [sizes, setSizes] = useState<DrinkSizes[]>(drinkSizes);

  function handleClick(index: number) {
    const updatedList = drinkSizes.map((item: DrinkSizes, i: number) => ({
      ...item,
      isActive: i === index,
    }));

    setSizes(updatedList);
  }

  return (
    <section className="container flex items-center justify-center lg:items-start lg:flex-row flex-wrap gap-5 w-full lg:max-w-[872px] py-10 md:py-20">
      <Image
        src={product.image}
        alt="Product"
        width={426}
        height={611}
        className="rounded-[10px]"
      />

      <div className="w-full max-w-[426px] flex flex-col sm:border gap-7 border-border bg-[#FCFCFC] rounded-[10px] sm:px-[25px] sm:py-[30px]">
        <div className="flex flex-col">
          <p className="text-[#FF3426] text-sm font-semibold">{product.type}</p>
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
                className={`py-[10px] px-[14px] rounded-[5px] transition-all duration-300 ${
                  item.isActive
                    ? "text-white bg-black hover:bg-black"
                    : "text-secondary bg-transparent hover:bg-[#000000cc] hover:text-white"
                }`}
              >
                {item.size}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-[14px]">
          <p className="text-primary font-semibold text-sm">QUANTITY:</p>

          <QuantityControl count={count} setCount={setCount} />
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
            {/**<p className="bg-[#FFD9DA] p-0.5 text-[#FF3426]"></p> */}
          </div>
        </div>

        <Button
          className="w-full h-11 px-5 py-[10px] font-bold"
          variant={`black`}
        >
          Add to cart
        </Button>
      </div>

      <ProductTabs />
    </section>
  );
}

export function QuantityControl({
  count,
  setCount,
}: {
  count: number;
  setCount: (count: number) => void;
}) {
  return (
    <div className="flex items-center gap-5">
      <Button
        variant={`default`}
        onClick={() => setCount(count - 1)}
        disabled={count === 1}
        className="text-primary bg-transparent hover:bg-transparent"
      >
        -
      </Button>
      <p className="border border-black py-[10px] px-[18px] text-primary font-semibold rounded-[5px]">
        {count}
      </p>
      <Button
        variant={`default`}
        onClick={() => setCount(count + 1)}
        className="text-primary bg-transparent hover:bg-transparent"
      >
        +
      </Button>
    </div>
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

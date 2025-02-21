"use client";

import { clsx } from "clsx";
import { Button } from "../ui/button";
import { useCart } from "@/app/hooks/cart-context";

export default function QuantityControl({
  type,
  id,
  count,
}: {
  type: "cart" | "product";
  id: number;
  count: number;
}) {
  const { decreaseProductCount, addToCart } = useCart();

  return (
    <div className="flex items-center gap-4 md:gap-5">
      <Button
        onClick={() => decreaseProductCount(id)}
        disabled={count === 1}
        className={clsx(
          "text-primary bg-transparent hover:bg-transparent shadow-none",
          {
            "h-6 w-6 border border-border px-2 py-1 md:h-9 md:w-auto md:px-4 md:py-2":
              type === "cart",
          }
        )}
      >
        -
      </Button>
      <p className="border border-black py-[10px] px-[18px] text-primary font-semibold rounded-[5px]">
        {count}
      </p>
      <Button
        onClick={() => addToCart(id)}
        className={clsx(
          "text-primary bg-transparent hover:bg-transparent shadow-none",
          {
            "h-6 w-6 border border-border px-2 py-1 md:h-9 md:w-auto md:px-4 md:py-2":
              type === "cart",
          }
        )}
      >
        +
      </Button>
    </div>
  );
}

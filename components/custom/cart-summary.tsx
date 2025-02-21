"use client";

import clsx from "clsx";
import { FormatNaira } from "@/utils/format-currency";
import VoucherCodeForm from "../../app/checkout/components/voucher-code-form";
import { useCart } from "@/app/hooks/cart-context";
import { CartTotal } from "@/utils/cart-total";

export default function CartSummary({
  type,
  children,
  className,
}: CartSummaryProps) {
  const { cartItems } = useCart();
  let delivery_fee = 2500;

  return (
    <div
      className={clsx(
        "px-5 w-[90%] md:w-full col-span-4 lg:col-span-1 flex-col border border-border p-4 pt-6 rounded-[10px] gap-6 h-fit",
        {
          [className ?? ""]: className,
        }
      )}
    >
      <p className="text-primary text-lg font-semibold">Cart Summary</p>

      <CartDetails itemCount={cartItems.length} totalAmount={CartTotal()} />

      <DeliveryFeeNotice
        delivery_fee={type === "payment" ? delivery_fee : undefined}
      />

      {type === "payment" && <VoucherCodeForm />}

      <TotalAmount
        totalAmount={CartTotal(type === "payment" ? delivery_fee : undefined)}
      />
      {children}
    </div>
  );
}

function CartDetails({
  itemCount,
  totalAmount,
}: {
  itemCount: number;
  totalAmount: number;
}) {
  return (
    <div className="w-full flex items-center justify-between text-primary text-sm font-medium">
      <p>{itemCount} Items</p>
      <p>{FormatNaira(totalAmount)}</p>
    </div>
  );
}

function DeliveryFeeNotice({ delivery_fee }: { delivery_fee?: number }) {
  return (
    <div className="flex w-full items-center justify-between border-b pb-6 border-border font-medium text-sm text-primary">
      <p>{delivery_fee ? "Delivery Fee:" : "Delivery fees are not included"}</p>

      {delivery_fee && <p>{FormatNaira(delivery_fee)}</p>}
    </div>
  );
}

export function DiscountDetails({
  discountAmount,
  discountPercent,
}: {
  discountAmount: number;
  discountPercent: number;
}) {
  return (
    <div className="w-full flex items-center justify-between">
      <p className="text-sm font-medium text-primary">DISCOUNT</p>
      <p className="text-sm font-medium text-primary">
        -{FormatNaira(discountAmount)}{" "}
        <span className="text-[#991F17]">({discountPercent}% off)</span>
      </p>
    </div>
  );
}

function TotalAmount({ totalAmount }: { totalAmount: number }) {
  return (
    <div className="w-full flex items-center justify-between">
      <p className="text-primary">Subtotal</p>
      <p className="text-primary font-bold">{FormatNaira(totalAmount)}</p>
    </div>
  );
}

type CartSummaryProps = {
  type?:
    | "checkout"
    | "cart"
    | "delivery"
    | "payment"
    | "small-screen-payment"
    | "summary";
  children?: React.ReactNode;
  className?: string;
};

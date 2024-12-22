"use client";

import clsx from "clsx";
import { FormatNaira } from "@/utils/format-currency";
import VoucherCodeForm from "../../checkout/components/voucher-code-form";

export default function CartSummary({ type, children }: CartSummaryProps) {
  return (
    <div
      className={clsx(
        "px-5 w-[90%] md:w-full col-span-4 lg:col-span-1 flex-col border border-border p-4 pt-6 rounded-[10px] gap-6 h-fit",
        {
          "ml-[0%]": type !== "payment",
          "w-full": type === "payment" || type === "small-screen-payment",
          "hidden md:flex":
            type === "cart" || type === "checkout" || type === "payment",
          "flex md:hidden":
            type === "delivery" || type === "small-screen-payment",
          flex: type !== "cart" && type !== "checkout" && type !== "delivery",
        }
      )}
    >
      <p className="text-primary text-lg font-semibold">Cart Summary</p>

      <CartDetails itemCount={3} totalAmount={3000000} />

      <DeliveryFeeNotice />

      {type === "payment" && <VoucherCodeForm />}

      <TotalAmount totalAmount={3000000} />
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

function DeliveryFeeNotice() {
  return (
    <p className="text-xs text-primary border-b pb-6 border-border">
      Delivery fees are not included
    </p>
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
      <p className="text-primary">Total</p>
      <p className="text-primary font-bold">{FormatNaira(totalAmount)}</p>
    </div>
  );
}

type CartSummaryProps = {
  type:
    | "checkout"
    | "cart"
    | "delivery"
    | "payment"
    | "small-screen-payment"
    | "summary";
  children?: React.ReactNode;
};

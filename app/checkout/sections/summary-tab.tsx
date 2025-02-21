"use client";

import { Button } from "@/components/ui/button";
import { IProduct } from "@/types/products";
import { FormatNaira } from "@/utils/format-currency";
import { useRouter } from "next/navigation";
import CartItems from "@/components/custom/cart-item";
import AddressDetails from "@/components/custom/address-details";
import { street } from "@/app/data/address";
import { IProductWithCount, useCart } from "@/app/hooks/cart-context";

export default function SummaryTab({
  setActiveTab,
}: {
  setActiveTab: (activeTab: string) => void;
}) {
  const router = useRouter();
  const { cartItems } = useCart();

  return (
    <>
      <p className="text-primary text-lg font-medium w-full">Order summary</p>

      <SummaryTabSections
        name="Cart Items"
        editFunction={() => router.push(`/cart`)}
      >
        {cartItems.map((item: IProductWithCount, index: number) => (
          <CartItems key={index} item={item} />
        ))}
      </SummaryTabSections>

      <SummaryTabSections
        name="Address"
        editFunction={() => setActiveTab("delivery")}
      >
        <AddressDetails item={street[0]} />
      </SummaryTabSections>

      <SummaryTabSections
        name="Delivery"
        editFunction={() => setActiveTab("delivery")}
      >
        <p className="text-primary text-sm font-semibold">Door Delivery</p>
        <p className="text-primary text-sm">
          To be delivered between{" "}
          <span className="font-semibold">Wenesday 22 Mar</span> and{" "}
          <span className="font-semibold">Friday 26 Mar</span>
        </p>
        <p className="text-[#FF3426] text-sm font-semibold">
          {FormatNaira(2500)}
        </p>
      </SummaryTabSections>

      <Button
        type={`submit`}
        variant={`black`}
        className={`flex w-full text-white font-bold h-11`}
        onClick={() => setActiveTab("payment")}
      >
        Proceed to Payment
      </Button>
    </>
  );
}

function SummaryTabSections({
  children,
  name,
  editFunction,
}: {
  children: React.ReactNode;
  name: "Cart Items" | "Address" | "Delivery";
  editFunction: () => void;
}) {
  return (
    <div className="flex flex-col w-full min-h-fit border border-border rounded-[10px]">
      <div className="flex w-full items-center justify-between border-b border-border px-5 py-4">
        <p className="text-lg font-medium text-primary">{name}</p>

        <Button
          onClick={editFunction}
          className="p-2 rounded-[4px] hover:bg-transparent bg-transparent text-lg font-medium text-[#FF3426] shadow-none"
        >
          Edit
        </Button>
      </div>
      <div
        className={`flex flex-col px-5 py-4 ${
          name === "Cart Items" ? "gap-5" : "gap-2.5"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

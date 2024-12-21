"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { product_list } from "@/app/data/product-list";
import { IProduct } from "@/types/products";
import { FormatNaira } from "@/utils/format-currency";
import { useRouter } from "next/navigation";

export default function SummaryTab({
  setActiveTab,
}: {
  setActiveTab: (activeTab: string) => void;
}) {
  const router = useRouter();

  return (
    <>
      <p className="text-primary text-lg font-medium w-full">Order summary</p>

      <SummaryTabSections
        name="Cart Items"
        editFunction={() => router.push(`/cart`)}
      >
        {product_list.slice(0, 3).map((item: IProduct, index: number) => (
          <CartItems key={index} item={item} />
        ))}
      </SummaryTabSections>

      <SummaryTabSections
        name="Address"
        editFunction={() => setActiveTab("delivery")}
      >
        <p className="text-primary text-sm font-semibold">Omonaluse Ohkuehne</p>
        <p className="text-primary text-sm">
          No 14, 19th street BDPA, Ugbowo, Benin City, Oyo State
        </p>
        <p className="text-primary text-sm">+2348180281937</p>
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

function CartItems({ item }: { item: IProduct }) {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex gap-3 max-w-[295px]">
        <Image
          src={item.image}
          alt={item.name}
          width={85}
          height={85}
          className="rounded-[5px] w-16 h-16 md:w-[85] md:h-[85]"
        />

        <div className="flex flex-col max-w-[141px] md:max-w-[200px] gap-1 text-primary">
          <p className="text-xs md:text-base">{item.name}</p>
          <p className="hidden md:flex font-bold text-xs">70cl</p>
          <p className="text-primary text-xs flex md:hidden">
            QTY: <span className="font-semibold">x10</span>
          </p>
        </div>
      </div>

      <p className="hidden md:flex text-primary">x10</p>

      <p className="font-semibold text-xs md:text-base text-primary lg:mr-[75px]">
        {FormatNaira(item.price)}
      </p>
    </div>
  );
}

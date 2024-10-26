import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CartSummary({ type }: { type?: "checkout" }) {
  return (
    <>
      <div className="flex items-center justify-between md:hidden h-[96px] w-full border-y border-border bg-[#F7F7F7] col-span-4 px-2">
        <div className="flex items-center flex-wrap gap-2">
          <p className="text-primary text-xs">TOTAL:</p>
          <p className="text-xl font-extrabold text-primary">N3,300,000.00</p>
        </div>

        <Button asChild variant={`black`} className="max-w-[197px] min-w-fit">
          <Link href={`/checkout`}>Checkout</Link>
        </Button>
      </div>

      <div className="col-span-4 lg:col-span-1 hidden md:flex flex-col border border-border p-4 pt-6 rounded-[10px] gap-6 h-fit">
        <p className="text-primary text-lg font-semibold">Cart Summary</p>

        <div className="w-full flex items-center justify-between">
          <p className="text-primary text-sm font-medium">3 Items</p>
          <p className="text-primary text-sm font-medium">N3,000,000</p>
        </div>

        <p className="text-xs text-primary pb-6 border-b border-border">
          Delivery fees are not included
        </p>

        <div className="w-ful flex items-center justify-between">
          <p className="text-primary">Subtotal</p>
          <p className="text-primary font-bold">N3,000,000</p>
        </div>

        <Button
          asChild
          variant={`black`}
          className={`${type ? "hidden" : "w-full"}`}
        >
          <Link href={`/checkout`}>Check Out</Link>
        </Button>

        <Button
          className={`${
            type ? "w-full" : "hidden"
          } border border-black rounded-[5px] text-black font-semibold bg-transparent hover:bg-transparent`}
        >
          Edit Items
        </Button>
      </div>
    </>
  );
}
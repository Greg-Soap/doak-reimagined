"use client";

import QuantityControl from "@/components/custom/quantity-control";
import TrashIcon from "@/assets/icons/trash-icon";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { FormatNaira } from "@/utils/format-currency";
import CartSummary from "../../../components/custom/cart-summary";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useCart } from "@/app/hooks/cart-context";
import { CartTotal } from "@/utils/cart-total";

export default function ShoppingCart() {
  const { cartItems } = useCart();

  return (
    <section className="md:container w-full flex flex-col gap-5 lg:gap-3 md:py-16">
      <p className="text-xl md:text-[32px] font-semibold text-primary pl-2 md:pl-0 py-[21px] md:h-fit bg-[#F7F7F7] md:bg-transparent">
        Shopping Cart
      </p>

      <div className="grid grid-cols-4 md:gap-5">
        <CartTable />

        <CartSummary className="hidden md:flex">
          {cartItems.length > 0 && (
            <Button asChild variant={`black`} className={`flex`}>
              <Link href={`/checkout?checkoutTab=delivery`}>Check Out</Link>
            </Button>
          )}
        </CartSummary>

        {cartItems.length > 0 && (
          <div
            className={`flex md:hidden items-center justify-between h-[96px] w-full border-t border-border bg-[#F7F7F7] col-span-4 px-5`}
          >
            <div className="flex flex-col gap-2">
              <p className="text-primary text-xs">Total</p>
              <p className="text-xl font-extrabold text-primary">
                {FormatNaira(CartTotal())}
              </p>
            </div>

            <Button
              asChild
              variant={`black`}
              className="max-w-[197px] min-w-fit"
            >
              <Link href={`/checkout?tab=delivery`}>Checkout</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

function CartTable() {
  const { cartItems } = useCart();

  return (
    <div className="col-span-4 lg:col-span-3 max-h-fit md:border border-border md:rounded-[10px] px-2 md:px-0 overflow-hidden">
      <Table className="w-full">
        <TableHeader className="w-full px-7 py-4 border-b border-border">
          <TableRow className="hover:bg-transparent">
            {tableHead.map((item: string, index: number) => (
              <TableHead
                key={index}
                className={`hidden md:table-cell text-xs text-primary`}
              >
                {item}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        {cartItems.length > 0 ? <TableContents /> : undefined}
      </Table>

      {cartItems.length > 0 ? undefined : <EmptyCart />}
    </div>
  );
}

function TableContents() {
  const { cartItems, removeFromCart } = useCart();

  return (
    <TableBody className="w-full">
      {cartItems.map((item) => (
        <TableRow key={item.name} className="hover:bg-transparent">
          <TableCell className="flex flex-col gap-2 max-w-[295px]">
            <div className="flex gap-5">
              <Image
                src={item.image}
                alt={item.name}
                width={85}
                height={85}
                className="rounded-[5px] w-[74px] h-[74px] md:w-[85px] md:h-[85px]"
              />

              <div className="flex flex-col gap-2.5">
                <p className="text-xs md:text-base text-primary">{item.name}</p>
                <p className="hidden md:flex text-primary text-xs font-bold">
                  70cl
                </p>
                <p className="flex md:hidden text-primary text-xs font-bold">
                  {item.discount_price
                    ? FormatNaira(item.count * item.discount_price)
                    : FormatNaira(item.count * item.price)}
                </p>
              </div>
            </div>

            <div
              onClick={() => removeFromCart(item.id)}
              className="flex md:hidden items-center gap-2"
            >
              <TrashIcon className="w-6 h-6 stroke-[#FF8981]" />
              <p className="text-sm text-[#FF8981] leading-none">Delete</p>
            </div>
          </TableCell>
          <TableCell className="hidden md:table-cell text-primary font-medium">
            {item.discount_price
              ? FormatNaira(item.discount_price)
              : FormatNaira(item.price)}
          </TableCell>
          <TableCell>
            <QuantityControl count={item.count} id={item.id} type="cart" />
          </TableCell>
          <TableCell className="hidden md:table-cell text-primary font-semibold">
            {item.discount_price
              ? FormatNaira(item.count * item.discount_price)
              : FormatNaira(item.count * item.price)}
          </TableCell>
          <TableCell className="hidden md:table-cell">
            <TrashIcon
              onClick={() => removeFromCart(item.id)}
              className="w-6 h-6 stroke-[#FF3426]"
            />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}

function EmptyCart() {
  return (
    <div className="min-w-full h-[400px] flex flex-col gap-2 items-center justify-center">
      <p className="text-primary italic">-Your cart is currently empty-</p>
      <Button variant={`black`} asChild>
        <Link href={`/#products`}>Continue Shopping</Link>
      </Button>
    </div>
  );
}

const tableHead: string[] = [
  "PRODUCT DETAILS",
  "PRICE",
  "QUANTITY",
  "TOTAL",
  "",
];

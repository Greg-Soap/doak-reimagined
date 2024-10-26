"use client";

import { QuantityControl } from "@/app/[productId]/sections/product-information";
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
import { useState } from "react";
import { product_list } from "@/app/data/product-list";
import { FormatNaira } from "@/utils/format-currency";
import CartSummary from "./cart-summary";

export default function ShoppingCart() {
  return (
    <section className="md:container w-full flex flex-col gap-5 lg:gap-10 md:py-20 border-b border-border">
      <p className="text-xl md:text-base font-semibold md:font-normal text-primary pl-2 md:pl-0 py-[21px] md:h-fit border-y border-border bg-[#F7F7F7] md:bg-transparent">
        Shopping Cart
      </p>
      <div className="grid grid-cols-4 md:gap-5">
        <CartTable />
        <CartSummary />
      </div>
    </section>
  );
}

function CartTable() {
  const [count, setCount] = useState<number>(1);
  return (
    <div className="col-span-4 lg:col-span-3 md:border border-border md:rounded-[10px] px-2 md:px-0">
      <Table className="w-full">
        <TableHeader className="w-full px-7 py-4 border-b border-border">
          <TableRow className="hover:bg-transparent">
            {tableHead.map((item: TableHead, index: number) => (
              <TableHead
                key={index}
                className={`hidden md:table-cell text-xs text-primary`}
              >
                {item.name}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="w-full px-7 py-4">
          <TableRow className="hover:bg-transparent">
            <TableCell className="flex flex-col gap-2 max-w-[295px]">
              <div className="flex gap-5">
                <Image
                  src={product_list[0].image}
                  alt="Product"
                  width={85}
                  height={85}
                  className="rounded-[5px] w-[74px] h-[74px] md:w-[85px] md:h-[85px]"
                />

                <div className="flex flex-col gap-2.5">
                  <p className="text-xs md:text-base text-primary">
                    {product_list[0].name}
                  </p>
                  <p className="hidden md:flex text-primary text-xs font-bold">
                    70cl
                  </p>
                  <p className="flex md:hidden text-primary text-xs font-bold">
                    {product_list[0].discount_price
                      ? FormatNaira(product_list[0].discount_price)
                      : FormatNaira(product_list[0].price)}
                  </p>
                </div>
              </div>

              <div className="flex md:hidden items-center gap-2">
                <TrashIcon className="w-6 h-6 stroke-[#FF8981]" />
                <p className="text-sm text-[#FF8981] leading-none">Delete</p>
              </div>
            </TableCell>
            <TableCell className="hidden md:table-cell text-primary">
              Paid
            </TableCell>
            <TableCell>
              <QuantityControl count={count} setCount={setCount} type="cart" />
            </TableCell>
            <TableCell className="hidden md:table-cell text-primary font-semibold">
              $250.00
            </TableCell>
            <TableCell className="hidden md:table-cell">
              <TrashIcon className="w-6 h-6 stroke-[#FF3426]" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

const tableHead: TableHead[] = [
  { name: "PRODUCT DETAILS" },
  { name: "PRICE" },
  { name: "QUANTITY" },
  { name: "TOTAL" },
  { name: "" },
];

interface TableHead {
  name: string;
}
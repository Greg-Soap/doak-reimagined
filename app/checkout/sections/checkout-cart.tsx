"use client";

import { QuantityControl } from "@/app/[productId]/sections/product-information";
import TrashIcon from "@/assets/icons/trash-icon";
import { Button } from "@/components/ui/button";
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

export default function CheckoutCart() {
  return (
    <section className="container w-full flex flex-col gap-10 py-20 border-b border-border">
      <p className="text-primary">Shopping Cart</p>
      <div className="grid grid-cols-4 gap-5">
        <CartTable />
        <CartSummary />
      </div>
    </section>
  );
}

function CartTable() {
  const [count, setCount] = useState<number>(1);
  return (
    <div className="col-span-3 border border-border rounded-[10px]">
      <Table className="w-full">
        <TableHeader className="w-full px-7 py-4 border-b border-border">
          <TableRow className="hover:bg-transparent">
            {tableHead.map((item: TableHead, index: number) => (
              <TableHead key={index} className={`text-xs text-primary`}>
                {item.name}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="w-full px-7 py-4">
          <TableRow className="hover:bg-transparent">
            <TableCell className="flex gap-5 max-w-[295px]">
              <Image
                src={product_list[0].image}
                alt="Product"
                width={85}
                height={85}
                className="rounded-[5px]"
              />

              <div className="flex flex-col gap-2.5">
                <p className="text-primary">{product_list[0].name}</p>
                <p className="text-primary text-xs font-bold">70cl</p>
              </div>
            </TableCell>
            <TableCell className="text-primary">Paid</TableCell>
            <TableCell>
              <QuantityControl count={count} setCount={setCount} />
            </TableCell>
            <TableCell className="text-primary font-semibold">
              $250.00
            </TableCell>
            <TableCell>
              <TrashIcon className="w-6 h-6 stroke-[#FF3426]" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

function CartSummary() {
  return (
    <div className="flex flex-col border border-border p-4 pt-6 rounded-[10px] gap-6">
      <p className="text-primary text-lg font-semibold">Cart Summary</p>

      <div className="w-ful flex items-center justify-between">
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

      <Button variant={`black`} className="w-full">
        Check Out
      </Button>
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

"use client";

import TabSections from "../components/tab-sections";
import EmptyState from "../components/empty-component";
import CopyIcon from "@/components/icons/copy-icon";
import { Button } from "@/components/ui/button";
import { voucher, Voucher } from "@/app/data/voucher";
import { FormatNaira } from "@/utils/format-currency";
import { useState } from "react";

export default function VoucherTab({
  setIsContentTabHidden,
}: {
  setIsContentTabHidden: (isContentTabHidden: boolean) => void;
}) {
  return (
    <TabSections
      name="All Orders"
      buttonFunction={() => setIsContentTabHidden(true)}
    >
      <div className="w-full flex flex-col items-center">
        {voucher.length === 0 ? (
          <EmptyState
            image="/assets/account/empty-voucher.png"
            alt="Empty bottle"
            title="There currently no vouchers available"
            caption="All available vouchers will appear here"
          />
        ) : (
          <div className="w-full grid gap-6 md:px-8 lg:grid-cols-2 p-7">
            {voucher.map((item: Voucher) => (
              <VoucherTabs key={item.code} item={item} />
            ))}
          </div>
        )}
      </div>
    </TabSections>
  );
}

function VoucherTabs({ item }: { item: Voucher }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(item.code);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div className="flex items-center justify-between border border-border rounded-[10px] py-3 px-7">
      <div className="flex flex-col gap-2">
        <p className="text-sm text-primary">
          <span className="font-bold text-[#FF3426]">{item.discount} OFF</span>{" "}
          all orders from {FormatNaira(item.condition)}
        </p>
        <p className="text-sm text-primary">
          Code: <span className="font-bold">{item.code}</span>
        </p>
        <p className="text-sm text-primary">
          Valid:{" "}
          <span className="font-medium">
            {item.validity.from} - {item.validity.till}
          </span>
        </p>
      </div>

      <Button
        onClick={copyToClipboard}
        className="flex flex-col gap-2 items-center bg-transparent hover:bg-transparent p-0 w-fit h-fit shadow-none group"
      >
        <CopyIcon className="stroke-border min-h-6 min-w-6 group-hover:stroke-primary transition-all duration-300" />
        <p className="text-[10px] md:text-xs text-border group-hover:text-primary transition-all duration-300">
          {copied ? "Copied!" : "Copy code"}
        </p>
      </Button>
    </div>
  );
}

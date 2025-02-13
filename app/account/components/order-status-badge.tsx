import { Badge } from "@/components/ui/badge";
import clsx from "clsx";

export default function OrderStatusBadge({ status }: { status: string }) {
  return (
    <Badge
      className={clsx("text-sm font-medium px-1 py-[1px] rounded-[5px] w-fit", {
        "text-[#21E558] bg-[#EBFFF0] hover:bg-[#EBFFF0]":
          status === "Delivered" || status === "Order Placed",
        "text-[#FF3426] bg-[#F2E2E1] hover:bg-[#F2E2E1]":
          status === "Failed Payment",
        "bg-[#7F7F7F] text-white hover:bg-[#7F7F7F]":
          status === "Cancelled By Self",
      })}
    >
      {status}
    </Badge>
  );
}

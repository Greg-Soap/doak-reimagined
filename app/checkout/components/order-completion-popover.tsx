import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function OrderCompletionPopover({
  type,
}: {
  type: "error" | "success";
}) {
  return (
    <Popover>
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent className="flex flex-col max-2-[616px] gap-[35px] py-8 px-4 md:py-[69px] md:px-[55px]">
        <div className="flex flex-col items-center">
          <p className="text-primary text-xl md:text-2xl font-semibold">
            {type === "success"
              ? "Your Order has been placed successfully!"
              : "Error, order could not be placed"}
          </p>
          <p className="text-primary text-sm md:text-base ">
            Thank you for shopping with{" "}
            <span className="font-extrabold text-[#FF3426]">DOAK</span>. Check
            Orders page to view progress on all orders.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-7">
          <Button
            variant={`outline`}
            className={`font-bold border-2 border-black h-11 ${
              type === "error" ? "text-sm md:text-base" : "text-base"
            }`}
          >
            Continue Shopping
          </Button>
          <Button
            variant={`black`}
            className={`h-11 w-full ${
              type === "success"
                ? "col-span-2 text-base"
                : "col-span-1 text-sm md:text-base"
            }`}
          >
            {type === "success" ? "Continue Shopping" : "Try Again"}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}

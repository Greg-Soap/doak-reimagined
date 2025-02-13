import { clsx } from "clsx";
import { Button } from "../ui/button";

export default function QuantityControl({
  type,
  count,
  setCount,
}: {
  type: "cart" | "product";
  count: number;
  setCount: (count: number) => void;
}) {
  return (
    <div className="flex items-center gap-4 md:gap-5">
      <Button
        onClick={() => setCount(count - 1)}
        disabled={count === 1}
        className={clsx(
          "text-primary bg-transparent hover:bg-transparent shadow-none",
          {
            "h-6 w-6 border border-border px-2 py-1 md:h-9 md:w-auto md:px-4 md:py-2":
              type === "cart",
          }
        )}
      >
        -
      </Button>
      <p className="border border-black py-[10px] px-[18px] text-primary font-semibold rounded-[5px]">
        {count}
      </p>
      <Button
        onClick={() => setCount(count + 1)}
        className={clsx(
          "text-primary bg-transparent hover:bg-transparent shadow-none",
          {
            "h-6 w-6 border border-border px-2 py-1 md:h-9 md:w-auto md:px-4 md:py-2":
              type === "cart",
          }
        )}
      >
        +
      </Button>
    </div>
  );
}

import Image from "next/image";
import { FormatNaira } from "@/utils/format-currency";
import { IProductWithCount } from "@/app/hooks/cart-context";

export default function CartItems({
  item,
  type = false,
}: {
  item: IProductWithCount;
  type?: boolean;
}) {
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

      <p className="hidden md:flex text-primary">x{item.count}</p>

      <p
        className={`font-semibold text-xs md:text-base text-primary ${
          type ? "mr-0" : "lg:mr-[75px]"
        }`}
      >
        {FormatNaira(item.price)}
      </p>
    </div>
  );
}

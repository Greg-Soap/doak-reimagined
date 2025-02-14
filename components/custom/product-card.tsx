import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { IProduct } from "@/types/products";
import { FormatNaira } from "@/utils/format-currency";
import Link from "next/link";

export default function ProductCard({
  name,
  image,
  type,
  badge,
  discount_price,
  price,
  id,
}: IProduct) {
  return (
    <Link
      href={`/${id}`}
      className="flex flex-col relative bg-card rounded-xl border  overflow-hidden"
    >
      {badge && (
        <Badge
          variant={badge === "sale" ? "sale" : "seller"}
          className="absolute top-[13px] left-[13px]"
        >
          {badge}
        </Badge>
      )}
      <Image
        src={image}
        alt="product"
        className="w-full"
        width={200}
        height={200}
      />
      <div className="pt-[10px] px-4 pb-5 flex flex-col">
        <p className="text-[12px] text-[#9B9B9B] font-normal">{type}</p>
        <h6 className="text-base">{name}</h6>
        <div className="flex gap-1 items-center pt-4">
          <h3 className="font-extrabold text-xl ">{FormatNaira(price)}</h3>
          {discount_price && (
            <span className="text-[#9B9B9B] text-[12px] line-through">
              {FormatNaira(discount_price)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

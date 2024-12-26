import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cartWhiteIcon } from "@/components/icons";

export default function EmptyState({
  image,
  alt,
  title,
  caption,
  type,
}: {
  image: string;
  alt: string;
  title: string;
  caption: string;
  type?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-6 w-fit py-16">
      <Image src={image} alt={alt} width={109} height={103} />
      <div className="flex flex-col gap-1 items-center mt-4">
        <p className="text-primary text-xl font-semibold">{title}</p>
        <p className="text-xs text-primary">{caption}</p>
      </div>
      <Button
        variant={type ? `outline` : `black`}
        className={`w-fit flex items-center gap-2 h-12 ${
          type && "border-black"
        }`}
      >
        {type ? "+ " : <Image src={cartWhiteIcon} alt="icon" />}
        {type ? "Add New Address" : "Start Shopping"}
      </Button>
    </div>
  );
}

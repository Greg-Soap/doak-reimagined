import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cartWhiteIcon } from "@/components/icons";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
  type?: "feedback" | "address";
}) {
  return (
    <div className="flex flex-col items-center gap-6 w-fit py-16 md:px-10 lg:px-0">
      <Image src={image} alt={alt} width={109} height={103} />
      <div className="flex flex-col gap-1 items-center mt-4">
        <p className="text-primary text-xl font-semibold text-center">
          {title}
        </p>
        <p className="text-xs text-primary text-center">{caption}</p>
      </div>
      <Button
        asChild={type === "feedback"}
        variant={getButtonVariant(type ? type : "")}
        className={cn(
          "w-fit flex items-center gap-2 h-12",
          type === "address" && "border-black"
        )}
      >
        {getButtonContent(type ? type : "")}
      </Button>
    </div>
  );
}

const getButtonVariant = (type: string) => {
  if (type === "address") return "outline";
  return "black";
};

const getButtonContent = (type: string) => {
  if (type === "feedback") {
    return (
      <Link href="/">
        <Image src={cartWhiteIcon} alt="icon" /> Continue Shopping
      </Link>
    );
  }

  return (
    <>
      {type === "address" ? "+" : <Image src={cartWhiteIcon} alt="icon" />}
      {type === "address" ? "Add New Address" : "Start Shopping"}
    </>
  );
};

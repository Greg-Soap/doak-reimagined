import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
// import Image from "next/image";

export default function NotFound() {
  return (
    <section className="container w-full flex items-center justify-between">
      <div className="flex flex-col gap-7 max-w-[500px]">
        <div className="flex flex-col gap-4">
          <p className="text-primary text-xl font-bold text-[72px]">404</p>

          <p className="text-primary text-xl font-bold">
            Opps! Nothing to see here, this page does not exist!
          </p>
        </div>

        <Button
          variant={`black`}
          asChild
          className="w-fit flex items-center gap-2"
        >
          <Link href={`/`}>
            <ArrowLeftIcon className="w-4 h-4" /> Go Back Home
          </Link>
        </Button>
      </div>

      <div className="flex items-center justify-center w-auto h-[730px] bg-testimonial bg-cover bg-center">
        {/* <Image
          src={`/assets/not.jpg`}
          alt="Not Found"
          width={226}
          height={574}
        />

        <Image
          src={`/assets/not.jpg`}
          alt="Not Found"
          width={226}
          height={574}
        /> */}
      </div>
    </section>
  );
}

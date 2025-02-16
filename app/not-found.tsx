import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function NotFound() {
  return (
    <section className="container w-full flex flex-col lg:flex-row items-center max-h-fit lg:min-h-screen lg:justify-center gap-24">
      <div className="flex flex-col max-lg:items-center gap-7 max-w-[500px] max-lg:pt-14">
        <div className="flex flex-col max-lg:items-center gap-0">
          <p className="text-primary font-bold text-[96px] md:text-[72px]">
            404
          </p>

          <p className="text-primary text-lg md:text-xl max-lg:text-center font-bold -mt-2.5">
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

      <div className="relative flex items-end max-lg:justify-center w-full lg:w-fit h-fit lg:h-full lg:min-h-screen">
        <Image
          src="/assets/not-2.jpg"
          alt="DOAK alluminium can"
          width={226}
          height={574}
          className="max-md:w-[134px] max-md:h-[201px]"
        />

        <Image
          src="/assets/not.jpg"
          alt="DOAK alluminium can"
          width={226}
          height={574}
          className="max-md:w-[134px] max-md:h-[300px]"
        />
      </div>
    </section>
  );
}

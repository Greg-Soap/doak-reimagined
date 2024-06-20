import { cartWhiteIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section
      className="w-full h-fit -mt-10 lg:h-[630px] 
                        
                lg:bg-gradient-to-r from-rose-200 via-white to-rose-200"
    >
      <div className="container h-full flex flex-col justify-center bg-cover bg-center lg:bg-[url('/assets/backgrounds/hero-desktop.png')]">
        <div className="flex flex-col gap-7">
          <h2 className="font-bold text-[40px] max-w-[450px]">
            We give you only the best. Top notch quality services.
          </h2>
          <p className="max-w-[330px]">
            Integer quam adipiscing vestibulum nunc. Id nunc amet at sed orci
            diam. Cras venenatis sit faucibus.
          </p>
          <Button variant={"black"} className="w-fit gap-2">
            <Image src={cartWhiteIcon} alt="icon" /> Start Shopping
          </Button>
        </div>
      </div>
    </section>
  );
}

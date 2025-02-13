import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Testimonial() {
  return (
    <section className="max-w-[1400px] w-full flex justify-center border-y border-border pt-10 pb-20 bg-testimonial bg-cover bg-center bg-no-repeat overflow-hidden">
      <div className="container flex flex-col w-full gap-8 items-center">
        <div className="flex flex-col items-center gap-1">
          <p className="text-primary text-sm">TESTIMONIALS</p>
          <p className="text-3xl font-bold text-primary max-w-[452px] text-center">
            We love! to keep our customers happy
          </p>
        </div>

        <Carousel className="max-w-[1211px] w-full">
          <CarouselContent className="py-10 w-full">
            {testimonial.map((item: Testimonial, index: number) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <TestimonialCard testimony={item.testimony} name={item.name} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimony,
  name,
}: {
  testimony: string;
  name: string;
}) {
  return (
    <div className="flex flex-col max-w-full h-fit py-[30px] px-[36px] gap-5 border border-border rounded-[10px] bg-white">
      <Image src={"/assets/Stars.png"} alt="Stars" width={96} height={16} />
      <p className="text-sm text-primary">
        <strong>“</strong>
        {testimony}
        <strong>”</strong>
      </p>
      <p className="text-sm text-primary font-bold">{name}</p>
    </div>
  );
}

const testimonial: Testimonial[] = [
  {
    testimony:
      "Integer quam adipiscing vestibulum nunc. Id nunc amet at sed orci diam. Cras venenatis sit faucibus.",
    name: "Justin Chinelo",
  },
  {
    testimony:
      "Integer quam adipiscing vestibulum nunc. Id nunc amet at sed orci diam. Cras venenatis sit faucibus tellus phasellus mauris dignissim maecenas pellentesque.",
    name: "Benita Emadiong",
  },
  {
    testimony:
      "Dipiscing vestibulum nunc. Id nunc amet at sed orci diam. Cras venenatis sit faucibus tellus phasellus mauris dignissim maecenas pellentesque.",
    name: "Chiamanda Okoronkwo",
  },
  {
    testimony:
      "Integer quam adipiscing vestibulum nunc. Id nunc amet at sed orci diam. Cras venenatis sit faucibus.",
    name: "Justin Chinelo",
  },
  {
    testimony:
      "Integer quam adipiscing vestibulum nunc. Id nunc amet at sed orci diam. Cras venenatis sit faucibus tellus phasellus mauris dignissim maecenas pellentesque.",
    name: "Benita Emadiong",
  },
  {
    testimony:
      "Dipiscing vestibulum nunc. Id nunc amet at sed orci diam. Cras venenatis sit faucibus tellus phasellus mauris dignissim maecenas pellentesque.",
    name: "Chiamanda Okoronkwo",
  },
];

interface Testimonial {
  testimony: string;
  name: string;
}

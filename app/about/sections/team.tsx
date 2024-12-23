import Image from "next/image";

export default function Teams() {
  return (
    <section className="container flex flex-col gap-10 items-center py-24">
      <p className="max-w-[528px] text-primary text-center font-bold text-xl md:text-[32px] md:leading-[48px]">
        Meet the team / Board of Directors
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-center gap-10 md:gap-5 w-full">
        {cardContents.map((item: CardContents, index: number) => (
          <TeamCard
            key={index}
            image={item.image}
            name={item.name}
            position={item.position}
          />
        ))}
      </div>
    </section>
  );
}

function TeamCard({ image, name, position }: CardContents) {
  return (
    <div className="flex flex-col gap-3">
      <Image
        src={image}
        alt={name}
        width={285}
        height={285}
        className="rounded-[10px]"
      />
      <div className="flex flex-col  items-center md:items-stretch">
        <p className="text-primary font-semibold">{name}</p>
        <p className="italic text-sm md:text-base">{position}</p>
      </div>
    </div>
  );
}

const cardContents: CardContents[] = [
  {
    image: "/assets/about/team/samuel.png",
    name: "Samuel Sangotayo",
    position: "Managing Director",
  },
  {
    image: "/assets/about/team/lillian.png",
    name: "Lilian Obere",
    position: "Financial Manager",
  },
  {
    image: "/assets/about/team/chidi.png",
    name: "Chidiebere Nwanuku",
    position: "Account Manager",
  },
  {
    image: "/assets/about/team/faith.png",
    name: "Faith Eneghalu",
    position: "Product Manager",
  },
];

interface CardContents {
  image: string;
  name: string;
  position: string;
}

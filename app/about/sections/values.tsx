import Image from "next/image";
import { ReactElement } from "react";

export default function Value() {
  return (
    <section className="container w-full flex flex-col gap-20 lg:gap-0 lg:flex-row justify-between py-12 md:py-24 md:px-24">
      <div className="flex flex-col lg:max-w-[50%] xl:max-w-[528px] gap-10">
        <p className="text-primary font-bold text-lg md:text-[32px] md:leading-[48px]">
          Congue senectus sit arcu viverra. Aliquam vulputate.
        </p>

        <div className="flex flex-col gap-5">
          <p className="text-primary">
            Cursus aliquam sit cras et. Tellus dapibus massa ullamcorper{" "}
            <strong>justo pharetra feugiat.</strong> Gravida pulvinar arcu cras
            et egestas non euismod. In in tortor porta sed pellentesque.
          </p>
          <p className="text-primary">
            Urna ac elit habitasse sagittis tellus tincidunt hac quis. Est
            parturient pellentesque aliquam ultrices sagittis massa. A nibh amet
            <strong>consectetur scelerisque justo.</strong> Vivamus mauris
            tellus amet odio felis aliquam.
          </p>
          <p className="text-primary">
            Urna ac elit habitasse sagittis{" "}
            <strong>tellus tincidunt hac quis.</strong> Est parturient
            pellentesque aliquam ultrices sagittis massa.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-10 md:gap-20">
        {cardContents.map((item: CardContents, index: number) => (
          <ValueCard key={index} icon={item.icon} text={item.text} />
        ))}
      </div>
    </section>
  );
}

function ValueCard({ icon, text }: CardContents) {
  return (
    <div className="relative max-w-full lg:max-w-[377px] border border-border rounded-[10px] px-4 pb-3 pt-7">
      <div className="absolute bg-white -top-[25px] left-7 w-[50px] h-[50px] rounded-full border border-border flex items-center justify-center">
        {icon}
      </div>
      <p className="text-sm md:text-base text-primary">{text}</p>
    </div>
  );
}

const cardContents: CardContents[] = [
  {
    icon: (
      <Image
        src={`/assets/about/first-icon.png`}
        alt="Shop"
        width={33}
        height={35}
      />
    ),
    text: "Cursus aliquam sit cras et. Tellus dapibus massa ullamcorper justo",
  },
  {
    icon: (
      <Image
        src={`/assets/about/second-icon.png`}
        alt="Crown"
        width={32}
        height={32}
      />
    ),
    text: "Cursus aliquam sit cras et. Tellus dapibus massa ullamcorper justo",
  },
  {
    icon: (
      <Image
        src={`/assets/about/third-icon.png`}
        alt="Map of Nigeria"
        width={33}
        height={35}
      />
    ),
    text: "Cursus aliquam sit cras et. Tellus dapibus massa ullamcorper justo",
  },
];

interface CardContents {
  icon: ReactElement;
  text: string;
}

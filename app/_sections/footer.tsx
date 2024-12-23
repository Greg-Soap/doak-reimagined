import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="container bg-black w-full h-fit flex flex-col gap-y-10 items-center justify-center pt-10 lg:flex-row lg:flex-wrap lg:justify-between lg:pt-20 lg:px-10 lg:gap-x-20">
      <div className="flex flex-col w-[130px] gap-6 items-center text-center lg:text-left lg:items-start">
        <Image src="/footer-logo.png" alt="DOAK LOGO" width={119} height={50} />

        <p className="text-xs leading-4 text-lightWhite">
          We give you everything you need
        </p>

        <Socials />
      </div>

      <div className="w-fit h-fit flex flex-col gap-10 text-center lg:flex-row lg:text-left">
        {footerMenus.map((footerMenu, index) => (
          <div
            className="min-w-fit w-auto h-fit flex flex-col gap-4"
            key={index}
          >
            <p className="text-base text-white font-semibold">
              {footerMenu.header}
            </p>

            <div className="w-full h-fit flex flex-col gap-y-3">
              {footerMenu.subLink.map((link, index) => (
                <Link
                  href="/"
                  className="text-[13px] font-normal text-lightWhite"
                  key={index}
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full py-7 mt-10 border-t border-midOpacityWhite flex flex-col items-center justify-center gap-5 text-xs md:flex-row lg:mt-20">
        <p className="font-light text-midOpacityWhite">
          Copyright © 2024 doakdrinks. All rights reserved
        </p>

        <div className="w-1 h-1 rounded-full bg-lightWhite" />

        <span className="flex items-center gap-2">
          <p className="font-light text-midOpacityWhite">Designed by</p>
          <p className="text-lightWhite font-semibold">RetroDevelopers</p>
        </span>
      </div>
    </footer>
  );
}

export function Socials() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/assets/footer/facebook.png"
        alt="Facebook Logo"
        width={24}
        height={24}
      />
      <Image
        src="/assets/footer/instagram.png"
        alt="Instagram Logo"
        width={24}
        height={24}
      />
      <Image
        src="/assets/footer/whatsapp.png"
        alt="Whatsapp Logo"
        width={24}
        height={24}
      />
    </div>
  );
}

const footerMenus: footerMenuProps[] = [
  {
    header: "Features",
    subLink: ["Privacy Policy", "Terms of Use", "System Status"],
  },
  {
    header: "Help",
    subLink: ["Getting started", "Support", "FAQs"],
  },
  {
    header: "Company",
    subLink: ["About Us", "Ratings"],
  },
  {
    header: "Get In Touch",
    subLink: [
      "Contact Us",
      "Doaksemailaddresshere",
      "Doaksphonenumber",
      "Location here",
    ],
  },
];

interface footerMenuProps {
  header: string;
  subLink: string[];
}

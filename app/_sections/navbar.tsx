import Image from "next/image";
import logo from "@/assets/DOAK LOGO.png";
import IconNotification from "../_components/icon-notification";
import { Button } from "@/components/ui/button";
import { bellIcon, cartIcon, searchIcon, userIcon } from "@/components/icons";
import { Input } from "@/components/ui/input";

export default function Navbar() {
  return (
    <header className="sticky left-0 right-0 top-0 z-50 shadow bg-background">
      <nav
        className="container mx-auto gap-y-3 grid grid-cols-3 grid-rows-2 w-full items-center justify-between bg-background px-6 py-4
                  
                  lg:flex"
      >
        <a href="/">
          <Logo />
        </a>
        <Search />
        <NavMenu />
      </nav>
    </header>
  );
}

function Logo() {
  return (
    <>
      <Image src={logo} alt="logo" width={120} height={40} />
    </>
  );
}

function Search() {
  return (
    <div className="max-w-[520px] w-full col-span-3 flex items-center justify-between px-4 py-1 pr-1 border border-input rounded-lg">
      <div className="flex items-center w-full">
        <Image
          src={searchIcon}
          alt="search"
          className="w-5 h-5 flex lg:hidden"
        />
        <Input
          placeholder="Search drinks in any category"
          className="border-none outline-none bg-transparent shadow-none focus-visible:ring-0 "
        />
      </div>
      <Button type="submit" className="bg-black hidden lg:flex">
        Search
      </Button>
    </div>
  );
}

function NavMenu() {
  return (
    <div
      className="flex gap-4 items-center row-span-1"
      style={{ gridColumn: "3 / span 1", gridRow: "1 / span 1" }}
    >
      <IconNotification notification icon={bellIcon} />
      <Button variant={"outline"} className="border-none p-0 lg:border lg:p-3">
        <Image src={userIcon} alt="user" className="icon" />
        <p className="hidden lg:flex">Account</p>
      </Button>
      <IconNotification notification icon={cartIcon} />
    </div>
  );
}

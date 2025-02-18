import Image from "next/image";
import logo from "@/assets/DOAK LOGO.png";
import IconNotification from "../_components/icon-notification";
import { Button } from "@/components/ui/button";
import { bellIcon, cartIcon, searchIcon, userIcon } from "@/components/icons";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserIcon from "@/components/icons/user";
import OrderIcon from "@/components/icons/order";

export default function Navbar() {
  return (
    <header className="sticky left-0 right-0 top-0 z-50 shadow bg-background">
      <nav className="container relative mx-auto gap-y-3 grid grid-cols-3 grid-rows-2 w-full items-center justify-between bg-background px-6 py-4 md:flex lg:flex">
        <Link href="/">
          <Logo />
        </Link>
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
    <div className="lg:max-w-[520px] w-full col-span-3 flex items-center justify-between bg-[#FAFAFA] p-[5px] pl-[14px] border border-input rounded-lg md:max-w-[375px]">
      <div className="flex items-center w-full">
        <Image src={searchIcon} alt="search" className="w-5 h-5 flex" />
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
      className="flex gap-4 items-center row-span-1 absolute right-0 md:relative"
      style={{ gridColumn: "3 / span 1", gridRow: "1 / span 1" }}
    >
      <IconNotification notification icon={bellIcon} />
      {/* <Button
        variant={"outline"}
        className="p-0 lg:border lg:py-2 lg:px-[14px] shadow-none border-border gap-1.5"
      >
        <Image src={userIcon} alt="user" className="icon" />
        <p className="hidden lg:flex">Account</p>
        <ChevronDownIcon width={24} height={24} />
      </Button> */}
      <AccountDropDownMenu user={false} />

      <IconNotification notification icon={cartIcon} />
    </div>
  );
}

function AccountDropDownMenu({ user }: { user: boolean }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button className="p-0 h-10 lg:border-2 lg:py-2 lg:px-[14px] shadow-none border-border gap-1.5 text-primary bg-transparent hover:bg-transparent">
          <Image src={userIcon} alt="user" className="icon" />
          <p className="hidden lg:flex">Account</p>
          <ChevronDownIcon
            width={24}
            height={24}
            color="#333333"
            className="hidden lg:flex"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[288px] px-6 py-3 rounded-[10px] flex flex-col gap-2">
        <DropdownMenuLabel className="text-lg text-primary font-semibold text-center mb-2">
          {user ? "Welcome Back to DOAK!" : "Welcome to DOAK!"}
        </DropdownMenuLabel>
        {user &&
          dropdownLinks.map((item) => (
            <DropdownMenuItem key={item.name}>
              <Link
                href={item.href}
                className="flex items-center gap-2 text-primary text-sm font-medium"
              >
                {item.icon} {item.name}
              </Link>
            </DropdownMenuItem>
          ))}

        <div className="flex flex-col items-center gap-2 mt-2">
          <Button
            variant={`black`}
            className={`w-full h-11 ${user ? "hidden" : "flex"}`}
          >
            Register
          </Button>
          <Button
            variant={`outline`}
            className="border-2 border-black font-medium mt-2 w-full h-11"
          >
            Log Out
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const dropdownLinks = [
  {
    href: "/account",
    icon: <UserIcon className="w-6 h-6 stroke-[#292D32]" />,
    name: "My Account",
  },
  {
    href: "/account",
    icon: <OrderIcon className="w-6 h-6 stroke-[#292D32]" />,
    name: "Orders",
  },
];

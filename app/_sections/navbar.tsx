"use client";

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
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserIcon from "@/components/icons/user";
import OrderIcon from "@/components/icons/order";
import AuthDialog from "./auth-dialog";
import { notification } from "../data/notification";
import { useCart } from "../hooks/cart-context";
import SearchProducts from "@/components/custom/search-products";

export default function Navbar() {
  return (
    <header className="sticky left-0 right-0 top-0 z-50 shadow bg-background">
      <nav className="container relative mx-auto gap-y-3 grid grid-cols-3 grid-rows-2 w-full items-center justify-between bg-background px-6 py-4 md:flex lg:flex">
        <Link href="/">
          <Logo />
        </Link>
        <SearchProducts />
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

function NavMenu() {
  const { cartItems } = useCart();

  return (
    <div
      className="flex gap-4 items-center row-span-1 absolute right-0 md:relative"
      style={{ gridColumn: "3 / span 1", gridRow: "1 / span 1" }}
    >
      <Link href={`/account?tab=notifications`}>
        <IconNotification
          notification={notification.length > 0 ? true : false}
          icon={bellIcon}
        />
      </Link>

      <Link href={`/cart`}>
        <IconNotification
          notification={cartItems.length > 0 ? true : false}
          icon={cartIcon}
        />
      </Link>

      <AccountDropDownMenu user={false} />
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
          {user && (
            <Button
              variant={`outline`}
              className="border-2 border-black font-medium mt-2 w-full h-11"
            >
              Log Out
            </Button>
          )}

          {!user && (
            <>
              <AuthDialog name="register" />
              <AuthDialog name="login" />
            </>
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const dropdownLinks = [
  {
    href: "/account?tab=profile",
    icon: <UserIcon className="w-6 h-6 stroke-[#292D32]" />,
    name: "My Account",
  },
  {
    href: "/account?tab=orders",
    icon: <OrderIcon className="w-6 h-6 stroke-[#292D32]" />,
    name: "Orders",
  },
];

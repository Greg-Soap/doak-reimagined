"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import logo from "@/assets/DOAK LOGO.png";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import CustomTagTrigger from "@/components/custom/custom-tag-trigger";
import RegisterForm from "../auth-form/register";
import LogInForm from "../auth-form/login-form";
import ResetPasswordForm from "../auth-form/reset-password";
import { useState } from "react";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

export default function AuthDialog({ name }: { name: "register" | "login" }) {
  const [activeTab, setActiveTab] = useState<string>(name || "register");

  return (
    <Dialog>
      <DialogTrigger className="w-full">
        {name === "register" ? <RegisterButton /> : <LogInButton />}
      </DialogTrigger>
      <DialogContent className="flex flex-col items-center gap-4 rounded-[10px] h-fit">
        <DialogHeader>
          <DialogTitle className="hidden">Log In / Register</DialogTitle>
          <DialogDescription className="hidden">
            Log in or register with us
          </DialogDescription>
        </DialogHeader>

        {activeTab === "reset-password" && (
          <Button
            onClick={() => setActiveTab("login")}
            className="absolute top-[55px] left-[20px] bg-transparent hover:bg-transparent p-1 w-fit h-fit shadow-none"
          >
            <ArrowLeftIcon className=" h-6 w-6 text-border" />
          </Button>
        )}

        <Image src={logo} alt="logo" width={120} height={40} />

        <AuthTab activeTab={activeTab} setActiveTab={setActiveTab} />
      </DialogContent>
    </Dialog>
  );
}

function AuthTab({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (activeTab: string) => void;
}) {
  return (
    <Tabs
      value={activeTab}
      onValueChange={setActiveTab}
      defaultValue={activeTab || "register"}
      className="w-full min-h-[400px]"
    >
      <TabsList className="w-full bg-transparent">
        {tabTriggers.map((item) => (
          <CustomTagTrigger
            key={item.name}
            value={item.value}
            name={item.name}
            className="w-1/2 font-normal data-[state=active]:font-semibold text-lg"
          />
        ))}
      </TabsList>
      <TabsContent value="register">
        <RegisterForm />
      </TabsContent>
      <TabsContent value="login">
        <LogInForm setActiveTab={setActiveTab} />
      </TabsContent>
      <TabsContent value="reset-password">
        <ResetPasswordForm />
      </TabsContent>
    </Tabs>
  );
}

function RegisterButton() {
  return (
    <Button variant={`black`} className={`w-full h-11`}>
      Register
    </Button>
  );
}

function LogInButton() {
  return (
    <Button
      variant={`outline`}
      className="border-2 border-black font-medium w-full h-11"
    >
      Log Out
    </Button>
  );
}

const tabTriggers = [
  { value: "register", name: "Register" },
  { value: "login", name: "Log In" },
];

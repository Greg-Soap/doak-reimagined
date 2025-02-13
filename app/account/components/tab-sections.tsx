import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

export default function TabSections({
  children,
  name,
  buttonFunction,
}: {
  children: React.ReactNode;
  name: string;
  buttonFunction?: () => void;
}) {
  return (
    <section
      className={`w-full flex flex-col ${
        name === "Order Details" && "border rounded-[10px]"
      } border-border`}
    >
      <div className="flex md:border-b border-border pb-3 px-5 md:py-3 md:px-9">
        <p
          className={`text-primary font-semibold ${
            name === "Back To All Orders" ? "hidden" : "hidden md:flex"
          }`}
        >
          {name}
        </p>

        <Button
          onClick={buttonFunction}
          className={`${
            name === "Back To All Orders"
              ? "flex"
              : name === "Order Details"
              ? "hidden"
              : "flex md:hidden"
          } text-primary font-semibold items-center gap-1.5 w-fit h-fit bg-transparent border-none shadow-none px-0 hover:bg-transparent py-1`}
        >
          <ArrowLeftIcon fontSize={24} /> {name}
        </Button>
      </div>

      {children}
    </section>
  );
}

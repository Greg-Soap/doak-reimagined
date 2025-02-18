import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import clsx from "clsx";

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
        name === "Order Details" ? "border rounded-[10px]" : ""
      } border-border`}
    >
      <div className="flex items-center justify-between md:border-b border-border pb-3 px-0 md:py-3 md:px-9">
        <p
          // className={`text-primary font-semibold ${
          //   name === "Back To All Orders" ? "hidden" : "hidden md:flex"
          // }`}
          className={clsx("text-primary font-semibold", {
            hidden:
              name === "Back To All Orders" ||
              name === "Back to All Notifications",
            "hidden xl:flex":
              name !== "Back To All Orders" &&
              name !== "Back to All Notifications",
          })}
        >
          {name}
        </p>

        <Button
          onClick={buttonFunction}
          // className={`${
          //   name === "Back To All Orders"
          //     ? "flex"
          //     : name === "Order Details"
          //     ? "hidden"
          //     : "flex md:hidden"
          // } text-primary font-semibold items-center gap-1.5 w-fit h-fit bg-transparent border-none shadow-none px-0 hover:bg-transparent py-1`}
          className={clsx(
            "text-primary font-semibold items-center gap-1.5 w-fit h-fit bg-transparent border-none shadow-none px-0 hover:bg-transparent py-1",
            {
              flex:
                name === "Back To All Orders" ||
                name === "Back to All Notifications",
              hidden: name === "Order Details",
              "flex xl:hidden":
                name !== "Back To All Orders" &&
                name !== "Back to All Notifications" &&
                name !== "Order Details",
            }
          )}
        >
          <ArrowLeftIcon fontSize={24} /> {name}
        </Button>

        {name === "All Notifications" && (
          <Button className="text-sm font-medium text-[#FF3426] bg-transparent hover:bg-transparent shadow-none p-0 h-fit w-fit">
            Clear All
          </Button>
        )}

        {name === "Back to All Notifications" && (
          <Button className="text-sm font-medium text-[#FF3426] bg-transparent hover:bg-transparent shadow-none p-0 h-fit w-fit">
            Delete
          </Button>
        )}
      </div>

      {children}
    </section>
  );
}

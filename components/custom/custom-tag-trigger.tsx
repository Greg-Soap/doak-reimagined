import { TabsTrigger } from "../ui/tabs";
import clsx from "clsx";

export default function CustomTagTrigger({ value, name, className }: TabProps) {
  return (
    <TabsTrigger
      value={value}
      className={clsx(
        "flex flex-col text-center text-xs text-secondary font-bold data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary group",
        { "w-1/2": !className, className: className }
      )}
    >
      {name}
      <span className="w-6 h-0.5 bg-transparent group-data-[state=active]:bg-[#FF3426]" />
    </TabsTrigger>
  );
}

interface TabProps {
  value: string;
  name: string;
  className?: string;
}

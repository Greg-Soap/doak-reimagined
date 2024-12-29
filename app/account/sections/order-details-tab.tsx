import TabSections from "../components/tab-sections";

export default function OrderDetailsTab({
  setActiveTab,
}: {
  setActiveTab: (activeTab: string) => void;
}) {
  return (
    <TabSections
      name="Back To All Orders"
      buttonFunction={() => setActiveTab("orders")}
    >
      <div className="flex flex-col items-center gap-10 py-10">
        <div className="flex flex-row items-center w-fit">
          {steps.map((item: StepsProps) => (
            <StepsTracker
              key={item.id}
              id={item.id}
              name={item.name}
              completed={item.completed}
            />
          ))}
        </div>
      </div>
    </TabSections>
  );
}

function StepsTracker({ id, name, completed }: StepsProps) {
  return (
    <div className={`flex flex-col items-center ${id === 4 && "-ml-[18px]"}`}>
      <div className="flex items-center">
        <p
          className={`w-4 h-4 text-center text-[10px] font-semibold rounded-full border-border ${
            completed ? "bg-[#FF3426] text-white" : "border text-border"
          }`}
        >
          {id}
        </p>
        <div
          className={`${id === 4 ? "hidden" : "flex"} w-[154px] h-0.5 ${
            completed ? "bg-[#FF3426]" : "bg-border"
          }`}
        />
      </div>
      <p
        className={`w-fit text-[10px] font-semibold ${
          completed ? "text-primary" : "text-border"
        }`}
      >
        {name}
      </p>
    </div>
  );
}

const steps: StepsProps[] = [
  { id: 1, name: "Order Placed", completed: true },
  { id: 2, name: "Confirmed", completed: false },
  { id: 3, name: "Shipped", completed: false },
  { id: 4, name: "Delivered", completed: false },
];

interface StepsProps {
  id: number;
  name: string;
  completed: boolean;
}

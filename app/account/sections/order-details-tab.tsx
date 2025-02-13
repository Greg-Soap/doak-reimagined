import { orders, ItemsOrderedProps } from "@/app/data/orders";
import TabSections from "../components/tab-sections";
import OrderStatusBadge from "../components/order-status-badge";
import CartItems from "@/components/custom/cart-item";

export default function OrderDetailsTab({
  setActiveTab,
  orderId,
}: {
  setActiveTab: (activeTab: string) => void;
  orderId: string;
}) {
  const selectedOrder = orders.find((item) => item.order_number === orderId);

  if (!selectedOrder) {
    return <div className="flex items-center p-10">No order found!</div>;
  }

  return (
    <TabSections
      name="Back To All Orders"
      buttonFunction={() => setActiveTab("orders")}
    >
      <div className="flex flex-col items-center gap-10 p-10">
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

        <div className="flex flex-col w-full gap-2">
          <OrderStatusBadge status={selectedOrder.status} />
          <div className="flex flex-col gap-0.5">
            <p className="text-primary text-sm">
              <span className="font-semibold">
                {`Order*${selectedOrder.order_number} was placed on`}
              </span>{" "}
              12th April, 2023
            </p>
            <p className="text-sm text-primary">
              {`${selectedOrder.items_ordered.length} items. Total: `}
              <span className="font-semibold">N3,003,000.00</span>
            </p>
          </div>
        </div>

        <OrderDetailsSection item={selectedOrder.items_ordered} />
      </div>
    </TabSections>
  );
}

function StepsTracker({ id, name, completed }: StepsProps) {
  return (
    <div className={`flex flex-col items-end`}>
      <div className="flex items-center">
        <div
          className={`${id === 1 ? "hidden" : "flex"} w-[154px] h-0.5 ${
            completed ? "bg-[#FF3426]" : "bg-border"
          }`}
        />
        <p
          className={`w-4 h-4 text-center text-[10px] font-semibold rounded-full border-border ${
            completed ? "bg-[#FF3426] text-white" : "border text-border"
          }`}
        >
          {id}
        </p>
      </div>
      <p
        className={`w-fit text-[10px] font-semibold -mr-4 ${
          completed ? "text-primary" : "text-border"
        }`}
      >
        {name}
      </p>
    </div>
  );
}

function OrderDetailsSection({ item }: { item: ItemsOrderedProps[] }) {
  return (
    <TabSections name="Order Details">
      <div className="flex flex-col gap-4 p-5 md:px-9 md:py-5">
        <p className="text-primary">Cart Items</p>

        {item.map((order: any) => (
          <CartItems key={order.id} item={order} type />
        ))}
      </div>
    </TabSections>
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

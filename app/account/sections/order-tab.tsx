import { Badge } from "@/components/ui/badge";
import EmptyState from "../components/empty-component";
import TabSections from "../components/tab-sections";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { OrderProps, orders } from "@/app/data/orders";
import clsx from "clsx";
import { truncate } from "@/app/lib/truncate";

export default function OrderTab({
  setIsContentTabHidden,
  setSelectedOrder,
  setActiveTab,
}: {
  setIsContentTabHidden: (isContentTabHidden: boolean) => void;
  setSelectedOrder: (selectedOrder: string) => void;
  setActiveTab: (activeTab: string) => void;
}) {
  return (
    <TabSections
      name="All Orders"
      buttonFunction={() => setIsContentTabHidden(true)}
    >
      <div className="w-full flex flex-col gap-5 items-center px-5 md:px-8 py-7">
        {orders.length === 0 ? (
          <EmptyState
            image="/assets/account/empty-bottle.png"
            alt="Empty bottle"
            title="You have not placed an order with us yet"
            caption="Find information and view progress on all your orders here"
          />
        ) : (
          <>
            {orders.map((item) => (
              <AllOrdersCard
                item={item}
                buttonFunction={() => {
                  setSelectedOrder(item.order_number);
                  setActiveTab("order-details");
                }}
              />
            ))}
          </>
        )}
      </div>
    </TabSections>
  );
}

function AllOrdersCard({
  item,
  buttonFunction,
}: {
  item: OrderProps;
  buttonFunction: () => void;
}) {
  const itemNames = item.items_ordered
    .map((product) => {
      const quantity = 1;
      return `${quantity}x ${product.name}`; // Format as "1x Item Name"
    })
    .join(", ");

  return (
    <div className="w-full flex items-center justify-between py-3 pl-[18px] pr-7 border border-border rounded-[10px]">
      <div className="flex flex-col w-fit gap-3">
        <div className="flex items-center gap-1.5">
          <p className="text-sm text-primary">{`Order No. ${item.order_number}`}</p>

          <Badge
            className={clsx("text-sm font-medium px-1 py-[1px] rounded-[5px]", {
              "text-[#21E558] bg-[#EBFFF0] hover:bg-[#EBFFF0]":
                item.status === "Delivered" || item.status === "Order Placed",
              "text-[#FF3426] bg-[#F2E2E1] hover:bg-[#F2E2E1]":
                item.status === "Failed Payment",
              "bg-[#7F7F7F] text-white hover:bg-[#7F7F7F]":
                item.status === "Cancelled By Self",
            })}
          >
            {item.status}
          </Badge>
        </div>

        <div className="flex items-center gap-1">
          {item.items_ordered.map((product) => (
            <Image
              src={product.image}
              alt={product.name}
              width={32}
              height={32}
              className="rounded-[4px]"
            />
          ))}
        </div>

        <p className="text-xs text-primary">{truncate(itemNames, 90)}</p>
      </div>

      <Button
        onClick={buttonFunction}
        className="text-sm text-[#FF3426] bg-transparent hover:bg-transparent p-1 shadow-none"
      >
        View Details
      </Button>
    </div>
  );
}

"use client";

import EmptyState from "../components/empty-component";
import TabSections from "../components/tab-sections";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { OrderProps, orders } from "@/app/data/orders";
import { truncate } from "@/app/lib/truncate";
import OrderStatusBadge from "../components/order-status-badge";
import { useRouter } from "next/navigation";

export default function OrderTab({
  setIsContentTabHidden,
  setSelectedOrder,
  setActiveTab,
}: {
  setIsContentTabHidden: (isContentTabHidden: boolean) => void;
  setSelectedOrder: (selectedOrder: string) => void;
  setActiveTab: (activeTab: string) => void;
}) {
  const router = useRouter();

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
                key={item.order_number}
                item={item}
                buttonFunction={() => {
                  setSelectedOrder(item.order_number);
                  setActiveTab("order-details");
                  router.push(
                    `/account?tab=order-details&orderId=${item.order_number}`
                  );
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
    <div className="w-full flex flex-col items-center justify-between py-3 pl-[18px] pr-7 border border-border rounded-[10px] gap-4">
      <div className="w-full flex items-center gap-1.5">
        <p className="text-sm text-primary min-w-fit">{`Order No. ${item.order_number}`}</p>

        <OrderStatusBadge status={item.status} />
      </div>

      <div className="w-full flex items-start justify-between">
        <div className="flex flex-col w-fit gap-3">
          <div className="flex items-center gap-1">
            {item.items_ordered.map((product) => (
              <Image
                key={product.name}
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
    </div>
  );
}

"use client";

import { orders, ItemsOrderedProps } from "@/app/data/orders";
import TabSections from "../components/tab-sections";
import OrderStatusBadge from "../components/order-status-badge";
import CartItems from "@/components/custom/cart-item";
import { FormatNaira } from "@/utils/format-currency";
import OrderCancellationDialog from "./order-cancellation-dialog";
import { useRouter } from "next/navigation";
import TrackOrder from "@/components/custom/track-order";

export default function OrderDetailsTab({
  setActiveTab,
  orderId,
}: {
  setActiveTab: (activeTab: string) => void;
  orderId: string;
}) {
  const router = useRouter();

  const selectedOrder = orders.find((item) => item.order_number === orderId);

  if (!selectedOrder) {
    return <div className="flex items-center p-10">No order found!</div>;
  }

  return (
    <TabSections
      name="Back To All Orders"
      buttonFunction={() => {
        setActiveTab("orders");
        router.push("/account?tab=orders");
      }}
    >
      <div className="w-full flex flex-col items-center gap-10 px-0 py-5 md:p-10">
        <div className="flex flex-row items-center w-full md:w-fit">
          <TrackOrder status={selectedOrder.status} />
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

        <ShippingAddress />

        <div className="w-full flex max-md:flex-col md:items-center gap-3">
          <OrderCancellationDialog />

          <p className="italic text-xs text-primary">
            Please note: orders cannot be cancelled after order confirmation.
          </p>
        </div>
      </div>
    </TabSections>
  );
}

function OrderDetailsSection({ item }: { item: ItemsOrderedProps[] }) {
  return (
    <TabSections name="Order Details">
      <div className="flex flex-col gap-4 p-5 pt-1 pb-5 md:px-9 md:py-5">
        <p className="text-primary">Cart Items</p>

        {item.map((order: any) => (
          <CartItems key={order.id} item={order} type />
        ))}
      </div>

      <DetailsBlock name="Subtotal:" price={690000} />

      <DetailsBlock name="Shipping:">
        <div className="flex flex-col items-end w-2/3 md:w-1/2">
          <p className="font-semibold text-primary">{FormatNaira(2500)}</p>
          <p className="text-right text-primary text-xs md:text-sm">
            Door Delivery, to be delivered between the dates 16th of may to 20th
            of may(usually 3 days after order is confirmed)
          </p>
        </div>
      </DetailsBlock>

      <DetailsBlock name="Payment Method:">
        <p className="text-primary font-semibold">USSD Transfer</p>
      </DetailsBlock>

      <DetailsBlock name="Voucher/Discount Code:">
        <p className="text-primary font-semibold">0G5ss1baX</p>{" "}
        {/** use "-" if no voucher was used. */}
      </DetailsBlock>

      <DetailsBlock name="Total:" price={3030000} />
    </TabSections>
  );
}

function ShippingAddress() {
  return (
    <div className="w-full flex flex-col gap-4 border border-border rounded-[10px]">
      <p className="border-b border-border px-5 py-3 md:px-9 font-semibold">
        Shipping Address
      </p>
      <div className="flex flex-col gap-2 text-sm text-primary px-5 pt-0.5 pb-5 md:px-9 md:pb-5">
        <p className="font-semibold">Omonaluse Ohkuehne</p>
        <p>No 14, 19th street BDPA, Ugbowo, Benin City, Oyo State</p>
        <p>+2348180281937</p>
      </div>
    </div>
  );
}

function DetailsBlock({
  name,
  children,
  price,
}: {
  name: string;
  children?: React.ReactNode;
  price?: number;
}) {
  return (
    <div className="w-full flex items-center justify-between p-5 md:px-9 md:py-5 border-t border-border">
      <p
        className={`text-primary max-md:text-sm ${
          name === "Total:" ? "font-semibold" : "font-normal"
        }`}
      >
        {name}
      </p>
      {children ? (
        children
      ) : (
        <p
          className={`${
            name === "Total:" ? "font-bold" : "font-semibold"
          } text-primary`}
        >
          {FormatNaira(price ? price : 0)}
        </p>
      )}
    </div>
  );
}

{
  /**
  function StepsTracker({ id, name, completed }: StepsProps) {
  return (
    <div className={`flex flex-col items-end`}>
      <div className="flex items-center">
        <div
          className={`${
            id === 1 ? "hidden" : "flex"
          } w-[82px] md:w-[154px] h-0.5 ${
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
} */
}

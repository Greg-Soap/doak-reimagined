export default function CartSummary({
  type,
  children,
}: {
  type: "checkout" | "cart" | "delivery" | "payment" | "summary";
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`${
        type === "cart" || type === "checkout"
          ? "hidden md:flex"
          : type === "delivery"
          ? "flex md:hidden"
          : "flex"
      } px-5 w-[90%] ml-[0%] md:w-full md:ml-[0%] col-span-4 lg:col-span-1 flex-col border border-border p-4 pt-6 rounded-[10px]  gap-6 h-fit`}
    >
      <p className={`text-primary text-lg font-semibold`}>Cart Summary</p>

      <div className="w-full flex items-center justify-between text-primary text-sm font-medium">
        <p>3 Items</p>
        <p>N3,000,000</p>
      </div>

      <p className={`text-xs text-primary pb-6 border-b border-border`}>
        Delivery fees are not included
      </p>

      <div className="w-full flex items-center justify-between">
        <p className={`text-primary`}>Total</p>
        <p className="text-primary font-bold">N3,000,000</p>
      </div>

      {children}
    </div>
  );
}

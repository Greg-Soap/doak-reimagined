import clsx from "clsx";

export default function TrackOrder({ status }: { status: string }) {
  return (
    <div className="flex items-center justify-center w-full md:w-fit max-md:ml-[-20px]">
      <div className="flex flex-col items-center">
        <p className="w-4 h-4 flex items-center justify-center text-[10px] font-semibold rounded-full bg-[#FF3426] text-white">
          1
        </p>
        <p className="w-fit text-[10px] font-semibold -mr-4">Order placed</p>
      </div>

      <div
        className={clsx("w-[82px] md:w-[154px] h-0.5 -mt-4 -ml-[17px]", {
          "bg-[#FF3426]": [
            "Delivered",
            "Confirmed",
            "Shipped",
            "Invalid Address",
          ].includes(status),
          "bg-border": ![
            "Delivered",
            "Confirmed",
            "Shipped",
            "Invalid Address",
          ].includes(status),
        })}
      />

      <div className="flex flex-col items-center -ml-3">
        <p
          className={clsx(
            "w-4 h-4 flex items-center justify-center text-[10px] font-semibold rounded-full",
            {
              "bg-[#FF3426] text-white": [
                "Delivered",
                "Confirmed",
                "Shipped",
                "Invalid Address",
              ].includes(status),
              "border-2 border-border text-border": ![
                "Delivered",
                "Confirmed",
                "Shipped",
                "Invalid Address",
              ].includes(status),
            }
          )}
        >
          2
        </p>
        <p
          className={clsx("w-fit text-[10px] font-semibold -mr-4", {
            "text-black": [
              "Delivered",
              "Confirmed",
              "Shipped",
              "Invalid Address",
            ].includes(status),
            "text-[#C5C5C5]": ![
              "Delivered",
              "Confirmed",
              "Shipped",
              "Invalid Address",
            ].includes(status),
          })}
        >
          Confirmed
        </p>
      </div>

      <div
        className={clsx("w-[82px] md:w-[154px] h-0.5 -mt-4 -ml-3", {
          "bg-[#FF3426]": ["Delivered", "Shipped", "Invalid Address"].includes(
            status
          ),
          "bg-border": !["Delivered", "Shipped", "Invalid Address"].includes(
            status
          ),
        })}
      />

      <div className="flex flex-col items-center -ml-1.5">
        <p
          className={clsx(
            "w-4 h-4 flex items-center justify-center text-[10px] font-semibold rounded-full",
            {
              "bg-[#FF3426] text-white": [
                "Delivered",
                "Shipped",
                "Invalid Address",
              ].includes(status),
              "border-2 border-border text-border": ![
                "Delivered",
                "Shipped",
                "Invalid Address",
              ].includes(status),
            }
          )}
        >
          3
        </p>
        <p
          className={clsx("w-fit text-[10px] font-semibold -mr-4", {
            "text-black": ["Delivered", "Shipped", "Invalid Address"].includes(
              status
            ),
            "text-[#C5C5C5]": ![
              "Delivered",
              "Shipped",
              "Invalid Address",
            ].includes(status),
          })}
        >
          Shipped
        </p>
      </div>

      <div
        className={clsx("w-[82px] md:w-[154px] h-0.5 -mt-4 -ml-1.5", {
          "bg-[#FF3426]": status === "Delivered",
          "bg-border": status !== "Delivered",
        })}
      />

      <div className="flex flex-col items-center -ml-2">
        <p
          className={clsx(
            "w-4 h-4 flex items-center justify-center text-[10px] font-semibold rounded-full",
            {
              "bg-[#FF3426] text-white": status === "Delivered",
              "border-2 border-border text-border": status !== "Delivered",
            }
          )}
        >
          4
        </p>
        <p
          className={clsx("w-fit text-[10px] font-semibold -mr-4", {
            "text-black": status === "Delivered",
            "text-[#C5C5C5]": status !== "Delivered",
          })}
        >
          Delivered
        </p>
      </div>
    </div>
  );
}

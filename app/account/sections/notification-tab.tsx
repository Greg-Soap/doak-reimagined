"use client";

import EmptyState from "../components/empty-component";
import TabSections from "../components/tab-sections";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import clsx from "clsx";
import { notification } from "@/app/data/notification";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useRouter } from "next/navigation";

export default function NotificationTab({
  setIsContentTabHidden,
  setActiveTab,
}: {
  setIsContentTabHidden: (isContentTabHidden: boolean) => void;
  setActiveTab: (activeTab: string) => void;
}) {
  return (
    <TabSections
      name="All Notifications"
      buttonFunction={() => setIsContentTabHidden(true)}
    >
      <div className="w-full flex flex-col items-center md:px-8 py-7 gap-5">
        {notification.length === 0 ? (
          <EmptyState
            image="/assets/account/empty-notification.png"
            alt="Mobile phone"
            title="You currently do not have any notifications"
            caption="Find alerts on orders and relevant information on Doak updates here"
          />
        ) : (
          <>
            {notification.map((item, index) => (
              <NotificationCard
                key={index}
                {...item}
                setActiveTab={setActiveTab}
              />
            ))}
          </>
        )}
      </div>
    </TabSections>
  );
}

function NotificationCard({
  type,
  announcementId,
  title,
  status,
  order_number,
  details,
  setActiveTab,
}: {
  type: string;
  announcementId?: string;
  title?: string;
  status?: string;
  order_number?: string;
  details: string;
  setActiveTab: (activeTab: string) => void;
}) {
  return (
    <div className="w-full flex items-center justify-between border border-border rounded-[10px] py-3 px-7">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Image
            src={`/assets/account/danger.png`}
            alt="Danger"
            width={20}
            height={20}
            className={clsx({
              hidden: type !== "failed-delivery" && type !== "invalid-address",
            })}
          />
          {type === "announcement" ? (
            <p className="text-primary font-bold text-sm">{title}</p>
          ) : (
            <p className="text-primary text-sm">
              Order No. {order_number}{" "}
              <span className="font-bold">{status}</span>
            </p>
          )}
        </div>
        <p className="text-xs text-primary">{details}</p>
      </div>

      {type === "announcement" ? (
        <AnnouncementPopover
          announcementId={announcementId ? announcementId : ""}
          setActiveTab={setActiveTab}
        />
      ) : (
        <ViewDetailsButton order_number={order_number ? order_number : ""} />
      )}
    </div>
  );
}

function ViewDetailsButton({ order_number }: { order_number: string }) {
  const router = useRouter();

  return (
    <Button
      onClick={() =>
        router.push(`/account?tab=order-details&orderId=${order_number}`)
      }
      className="bg-transparent hover:bg-transparent text-sm text-[#FF3426] p-1 w-fit h-fit shadow-none"
    >
      View Details
    </Button>
  );
}

function AnnouncementPopover({
  setActiveTab,
  announcementId,
}: {
  setActiveTab: (activeTab: string) => void;
  announcementId: string;
}) {
  const router = useRouter();

  return (
    <Popover>
      <PopoverTrigger className="w-2 h-6">
        <Image
          src={`/assets/account/Frame.png`}
          alt="Ellipsis"
          width={5}
          height={21}
        />
      </PopoverTrigger>
      <PopoverContent className="flex flex-col w-[74px] h-fit border border-border p-0">
        <Button
          onClick={() => {
            setActiveTab("announcement");
            router.push(
              `/account?tab=announcement&announcementId=${announcementId}`
            );
          }}
          className="bg-transparent hover:bg-border border-b border-border text-sm font-medium py-2.5 px-[14] text-black w-full shadow-none rounded-none"
        >
          View
        </Button>
        <Button className="bg-transparent hover:bg-border text-sm font-medium py-2.5 px-[14] text-black w-full shadow-none rounded-none">
          Delete
        </Button>
      </PopoverContent>
    </Popover>
  );
}

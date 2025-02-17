"use client";

import { announcement, Announcement } from "@/app/data/announcement";
import TabSections from "../components/tab-sections";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AnnouncementTab({
  setActiveTab,
  announcementId,
}: {
  setActiveTab: (activeTab: string) => void;
  announcementId: string;
}) {
  const router = useRouter();

  const selectedAnnouncement = announcement.find(
    (item) => item.id.toString() === announcementId.toString()
  );

  if (!selectedAnnouncement) {
    return <div className="flex items-center p-10">No Announcement found!</div>;
  }

  return (
    <TabSections
      name="Back to All Notifications"
      buttonFunction={() => {
        setActiveTab("notifications");
        router.push("/account?tab=notifications");
      }}
    >
      <div className="flex flex-col gap-7 md:px-8 py-7">
        <AnnouncementContent {...selectedAnnouncement} />
      </div>
    </TabSections>
  );
}

function AnnouncementContent({ image, title, points }: Announcement) {
  return (
    <>
      <Image src={image} alt={title} width={778} height={86} />

      <p className="text-primary font-medium">{title}</p>

      {points.map((item) => (
        <p className="text-sm text-primary">{item}</p>
      ))}
    </>
  );
}

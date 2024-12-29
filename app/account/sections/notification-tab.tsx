import EmptyState from "../components/empty-component";
import TabSections from "../components/tab-sections";

export default function NotificationTab({
  setIsContentTabHidden,
}: {
  setIsContentTabHidden: (isContentTabHidden: boolean) => void;
}) {
  return (
    <TabSections
      name="All Notifications"
      buttonFunction={() => setIsContentTabHidden(true)}
    >
      <div className="w-full flex flex-col items-center">
        <EmptyState
          image="/assets/account/empty-notification.png"
          alt="Mobile phone"
          title="You currently do not have any notifications"
          caption="Find alerts on orders and relevant information on Doak updates here"
        />
      </div>
    </TabSections>
  );
}

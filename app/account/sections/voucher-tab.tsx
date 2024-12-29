import TabSections from "../components/tab-sections";
import EmptyState from "../components/empty-component";

export default function VoucherTab({
  setIsContentTabHidden,
}: {
  setIsContentTabHidden: (isContentTabHidden: boolean) => void;
}) {
  return (
    <TabSections
      name="All Orders"
      buttonFunction={() => setIsContentTabHidden(true)}
    >
      <div className="w-full flex flex-col items-center">
        <EmptyState
          image="/assets/account/empty-voucher.png"
          alt="Empty bottle"
          title="There currently no vouchers available"
          caption="All available vouchers will appear here"
        />
      </div>
    </TabSections>
  );
}

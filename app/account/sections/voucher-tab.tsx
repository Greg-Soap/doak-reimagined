import TabSections from "../components/tab-sections";
import EmptyState from "../components/empty-component";

export default function VoucherTab() {
  return (
    <TabSections name="All Orders">
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

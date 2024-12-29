import TabSections from "../components/tab-sections";
import EmptyState from "../components/empty-component";

export default function AddressTab({
  setIsContentTabHidden,
}: {
  setIsContentTabHidden: (isContentTabHidden: boolean) => void;
}) {
  return (
    <TabSections
      name="All Addresses"
      buttonFunction={() => setIsContentTabHidden(true)}
    >
      <div className="w-full flex flex-col items-center">
        <EmptyState
          type
          image="/assets/account/empty-address.png"
          alt="Location"
          title="You do not have any addresses saved"
          caption="All your saved addresses appear here"
        />
      </div>
    </TabSections>
  );
}

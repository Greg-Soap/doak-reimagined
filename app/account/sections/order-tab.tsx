import EmptyState from "../components/empty-component";
import TabSections from "../components/tab-sections";

export default function OrderTab() {
  return (
    <TabSections name="All Orders">
      <div className="w-full flex flex-col items-center">
        <EmptyState
          image="/assets/account/empty-bottle.png"
          alt="Empty bottle"
          title="You have not placed an order with us yet"
          caption="Find information and view progress on all your orders here"
        />
      </div>
    </TabSections>
  );
}

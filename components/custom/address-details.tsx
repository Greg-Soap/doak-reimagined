import { Street } from "@/app/data/address";

export default function AddressDetails({ item }: { item: Street }) {
  return (
    <>
      <p className="text-primary text-sm font-semibold">{item.name}</p>
      <p className="text-primary text-sm">
        {item.address}, {item.city}, {item.state}
      </p>
      <p className="text-primary text-sm">{item.number}</p>
    </>
  );
}

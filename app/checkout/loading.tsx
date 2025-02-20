import { Skeleton } from "@/components/ui/skeleton";

export default function CheckoutLoading() {
  return (
    <div className="container w-full flex flex-col md:flex-row gap-10 pt-12">
      <Skeleton className="w-full md:w-2/3" />
      <Skeleton className="w-full md:w-1/3" />
    </div>
  );
}

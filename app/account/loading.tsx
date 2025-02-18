import { Skeleton } from "@/components/ui/skeleton";

export default function AccountLoading() {
  return (
    <div className="flex items-center justify-between">
      <Skeleton className="w-1/3 h-[527px]" />
      <Skeleton className="max-md:hidden w-2/3 h-[527px]" />
    </div>
  );
}

import { Skeleton } from "@/components/ui/skeleton";

export default function AccountLoading() {
  return (
    <div className="flex items-center justify-between">
      <Skeleton className="w-[260px] h-[527px]" />
      <Skeleton className="max-md:hidden w-[842px] h-[527px]" />
    </div>
  );
}

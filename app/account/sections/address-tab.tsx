"use client";

import TabSections from "../components/tab-sections";
import EmptyState from "../components/empty-component";
import { street, Street } from "@/app/data/address";
import EditDialog from "@/components/custom/edit-dialog";
import { Button } from "@/components/ui/button";
import TrashIcon from "@/components/icons/trash";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddressDetails from "@/components/custom/address-details";
import { useState } from "react";

export default function AddressTab({
  setIsContentTabHidden,
}: {
  setIsContentTabHidden: (isContentTabHidden: boolean) => void;
}) {
  return (
    <TabSections
      name="Saved Address"
      buttonFunction={() => setIsContentTabHidden(true)}
    >
      <div className="w-full flex flex-col items-center md:px-8 py-7 gap-5">
        {street.length === 0 ? (
          <EmptyState
            type="address"
            image="/assets/account/empty-address.png"
            alt="Location"
            title="You do not have any addresses saved"
            caption="All your saved addresses appear here"
          />
        ) : (
          street.map((item) => <Address key={item.name} item={item} />)
        )}

        {street.length === 3 && (
          <p className="text-[#656565] text-xs italic">
            -You have reached the maximum number of saved addresses, to add a
            new address delete an old address-
          </p>
        )}
      </div>
    </TabSections>
  );
}

function Address({ item }: { item: Street }) {
  return (
    <div className="w-full flex flex-col md:flex-row items-center md:justify-between md:py-4 md:px-6 border border-border rounded-[10px]">
      <div className="w-full max-md:py-4 max-md:px-6 flex flex-col max-md:gap-1.5">
        <AddressDetails item={item} />
      </div>

      <div className="w-full border-t border-border flex md:hidden h-[49px]">
        <div className="flex items-center justify-center w-1/2 border-r border-border">
          <EditDialog type="edit-address" selectedAddress={item} />
        </div>
        <div className="flex items-center justify-center w-1/2">
          <DeleteAddressDialog item={item} />
        </div>
      </div>

      <div className="hidden md:flex items-center gap-2">
        <EditDialog type="edit-address" selectedAddress={item} />

        <Button className="bg-transparent hover:bg-transparent shadow-none p-1 w-fit h-fit">
          <DeleteAddressDialog item={item} />
        </Button>
      </div>
    </div>
  );
}

function DeleteAddressDialog({ item }: { item: Street }) {
  const [open, setOPen] = useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={setOPen}>
      <DialogTrigger className="max-md:w-full">
        <TrashIcon className="stroke-[#FF3426] hidden md:flex" />
        <p className="text-[#FF3426] text-sm md:hidden max-md:w-full">Delete</p>
      </DialogTrigger>
      <DialogContent className="rounded-[10px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Confirmation
          </DialogTitle>
          <DialogDescription className="text-sm text-primary">
            Are you sure you want to delete this address?
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-2 bg-[#FAFAFA] border border-border py-3 px-7 rounded-[10px]">
          <AddressDetails item={item} />
        </div>

        <Button
          onClick={() => {
            setOPen(false);
          }}
          variant={`black`}
          className="w-fit"
        >
          Delete Address
        </Button>
      </DialogContent>
    </Dialog>
  );
}

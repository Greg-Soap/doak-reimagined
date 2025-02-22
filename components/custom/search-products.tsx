"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IProduct } from "@/types/products";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { searchIcon } from "../icons";
import { FormatNaira } from "@/utils/format-currency";
import { product_list } from "@/app/data/product-list";
import Link from "next/link";

const formSchema = z.object({
  input_query: z.string().min(1, {
    message: "Query must be at least 1 character long.",
  }),
});

export default function SearchProducts() {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<IProduct[]>([]);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const searchRef = useRef<HTMLDivElement>(null); // Reference for outside click detection

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      input_query: "",
    },
  });

  function handleSearch() {
    const data = product_list.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );

    setResults(data);
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsClicked(true);
    handleSearch();
  }

  // Close results when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsClicked(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={searchRef}
      className="relative col-span-3 flex flex-col md:max-w-[375px] lg:max-w-[520px] w-full"
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={clsx(
            "min-w-full flex items-center justify-between bg-[#FAFAFA] px-[5px] pb-2 pl-[14px] border border-input",
            {
              "rounded-lg": !isClicked,
              "rounded-t-lg rounded-b-none": isClicked,
            }
          )}
        >
          <FormField
            control={form.control}
            name="input_query"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="hidden">Search for drinks</FormLabel>
                <FormControl className="min-w-full">
                  <div className="flex min-w-full items-center">
                    <Image
                      src={searchIcon}
                      alt="search"
                      className="w-5 h-5 flex"
                    />

                    <Input
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        setQuery(e.target.value);
                        setIsClicked(false);
                      }}
                      placeholder="Search drinks in any category"
                      className="min-w-[90%] border-none outline-none bg-transparent shadow-none focus-visible:ring-0"
                    />
                  </div>
                </FormControl>
                {/* <FormMessage /> */}
              </FormItem>
            )}
          />
          <Button type="submit" variant={`black`} className="-mb-2">
            Search
          </Button>
        </form>
      </Form>

      {isClicked && (
        <div className="absolute top-[55px] w-full min-h-[100px] max-h-[400px] flex flex-col items-center gap-2.5 px-4 py-3 bg-[#FAFAFA] rounded-b-lg border-x border-b border-input overflow-y-auto">
          {results.length === 0 ? (
            <p className="text-sm italic text-primary mt-7">
              -No drinks found-
            </p>
          ) : (
            <>
              {results.map((item) => (
                <ResultCard
                  key={item.id}
                  data={item}
                  setIsClicked={setIsClicked}
                />
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
}

function ResultCard({
  data,
  setIsClicked,
}: {
  data: IProduct;
  setIsClicked: (isClicked: boolean) => void;
}) {
  return (
    <Link
      href={`/${data.id}`}
      onClick={() => setIsClicked(false)}
      className="w-full flex items-center justify-between"
    >
      <div className="flex items-center gap-2 w-2/3">
        <Image
          src={data.image}
          alt={data.name}
          width={70}
          height={70}
          className="rounded-[5px]"
        />

        <div className="flex flex-col text-primary">
          <p className="text-[10px]">{data.type}</p>
          <p className="text-[13px] font-semibold">{data.name}</p>
        </div>
      </div>

      <p className="text-[13px] text-primary font-semibold">
        {FormatNaira(data.discount_price ? data.discount_price : data.price)}
      </p>
    </Link>
  );
}

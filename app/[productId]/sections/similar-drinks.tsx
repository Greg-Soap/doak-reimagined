import ProductCard from "@/app/_components/product-card";
import { product_list } from "@/app/data/product-list";
import { Button } from "@/components/ui/button";
import { IProduct } from "@/types/products";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export default function SimilarProducts() {
  return (
    <section className="container w-full py-20 border-t border-border flex flex-col gap-10">
      <p className="text-[32px] font-bold text-primary">Similar Products</p>

      <div className="flex flex-col gap-5 items-center">
        <div className="grid grid-cols-4 gap-5">
          {product_list.slice(0, 8).map((product: IProduct) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              type={product.type}
              price={product.price}
              discount_price={product.discount_price}
              badge={product.badge}
              image={product.image}
            />
          ))}
        </div>

        <Button className="border-2 border-black rounded-[5px] py-[14px] px-5 flex items-center gap-[10px] w-fit h-fit font-medium bg-transparent text-black hover:bg-transparent">
          Load More Drink <ChevronDownIcon color="black" fontSize={`24px`} />
        </Button>
      </div>
    </section>
  );
}
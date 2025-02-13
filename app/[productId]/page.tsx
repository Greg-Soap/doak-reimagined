import { Button } from "@/components/ui/button";
import { product_list } from "../data/product-list";
import ProductInformation from "./sections/product-information";
import SimilarProducts from "./sections/similar-drinks";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { notFound } from "next/navigation";

export default function SingleProduct({ params }: PageProps) {
  const product = product_list.find(
    (item) => item.id === Number.parseInt(params.productId)
  );

  if (product) {
    return (
      <>
        <ProductInformation product={product} />

        <SimilarProducts name="Similar Products" />
      </>
    );
  } else {
    return notFound();
  }
}

interface PageProps {
  params: {
    productId: string;
  };
}

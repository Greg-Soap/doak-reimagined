import { product_list } from "../data/product-list";
import ProductInformation from "./sections/product-information";
import SimilarProducts from "./sections/similar-drinks";
import { notFound } from "next/navigation";

export default async function SingleProduct({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;

  const product = product_list.find(
    (item) => item.id === Number.parseInt(productId)
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

import { Button } from "@/components/ui/button";
import { product_list } from "../data/product-list";
import ProductInformation from "./sections/product-information";
import SimilarProducts from "./sections/similar-drinks";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

export default function SingleProduct({ params }: { params: ProductParams }) {
  const product = product_list.find(
    (item) => item.id === Number.parseInt(params.productId)
  );

  if (product) {
    return (
      <>
        <ProductInformation product={product} />

        <SimilarProducts />
      </>
    );
  } else {
    return (
      <section className="flex flex-wrap gap-5 max-w-[872px] py-20 min-h-[calc(100vh - 100px)]">
        <p>No product found!</p>
        <Button variant={`black`}>
          Go back <ArrowLeftIcon color="white" />
        </Button>
      </section>
    );
  }

  /*return (
    <>
      <ProductInformation />

      <SimilarProducts />
    </>
  );*/
}

interface ProductParams {
  productId: string;
}

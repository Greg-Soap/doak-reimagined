import { Button } from "@/components/ui/button";
import { product_list } from "../data/product-list";
import ProductInformation from "./sections/product-information";
import SimilarProducts from "./sections/similar-drinks";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

// export default function SingleProduct({
//   params,
// }: {
//   params: { productId: string };
// }) {
//   const product = product_list.find(
//     (item) => item.id === Number.parseInt(params.productId)
//   );

//   if (product) {
//     return (
//       <>
//         <ProductInformation product={product} />

//         <SimilarProducts name="Similar Products" />
//       </>
//     );
//   } else {
//     return (
//       <section className="flex flex-wrap gap-5 max-w-[872px] py-20 min-h-[calc(100vh - 100px)]">
//         <p>No product found!</p>
//         <Button variant={`black`}>
//           Go back <ArrowLeftIcon color="white" />
//         </Button>
//       </section>
//     );
//   }
// }

// If you're using TypeScript, first define the proper types

interface PageProps {
  params: {
    productId: string;
  };
}

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
  }

  return (
    <section className="flex flex-wrap gap-5 max-w-[872px] py-20 min-h-[calc(100vh - 100px)]">
      <p>No product found!</p>
      <Button variant="black">
        Go back <ArrowLeftIcon color="white" />
      </Button>
    </section>
  );
}

import { IProduct } from "@/types/products";
import FilterBar from "../_components/filter-bar";
import ProductCard from "../_components/product-card";
import { PaginationComponent } from "../_components/pagination";

export default function Product() {
  return (
    <section className="py-28 container flex flex-col lg:flex-row gap-10">
      <FilterBar />
      <div className="flex flex-col w-full h-fit items-center gap-10">
        <Products />
        <PaginationComponent />
      </div>
    </section>
  );
}

function Products() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 lg:gap-8">
      {product_list.map((product) => (
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
  );
}

const product_list: IProduct[] = [
  {
    id: 1,
    name: "Hennessy VS Cognac ORIGINAL 70cl X6",
    type: "Alcoholic",
    image: "/assets/products/product-img.png",
    price: 200000,
    discount_price: 290000,
    badge: "best seller",
  },
  {
    id: 2,
    name: "Hennessy VS Cognac ORIGINAL 70cl X6",
    type: "Alcoholic",
    image: "/assets/products/product-img-2.png",
    price: 200000,
    discount_price: 290000,
    badge: "sale",
  },
  {
    id: 3,
    name: "Hennessy VS Cognac ORIGINAL 70cl X6",
    type: "Alcoholic",
    image: "/assets/products/product-img-3.png",
    price: 200000,
    discount_price: 290000,
  },
  {
    id: 4,
    name: "Hennessy VS Cognac ORIGINAL 70cl X6",
    type: "Alcoholic",
    image: "/assets/products/product-img-4.png",
    price: 200000,
  },
  {
    id: 5,
    name: "Hennessy VS Cognac ORIGINAL 70cl X6",
    type: "Alcoholic",
    image: "/assets/products/product-img-5.png",
    price: 200000,
  },
  {
    id: 6,
    name: "Hennessy VS Cognac ORIGINAL 70cl X6",
    type: "Alcoholic",
    image: "/assets/products/product-img-6.png",
    price: 200000,
  },
  {
    id: 7,
    name: "Hennessy VS Cognac ORIGINAL 70cl X6",
    type: "Alcoholic",
    image: "/assets/products/product-img-7.png",
    price: 200000,
  },
  {
    id: 8,
    name: "Hennessy VS Cognac ORIGINAL 70cl X6",
    type: "Alcoholic",
    image: "/assets/products/product-img-8.png",
    price: 200000,
  },
  {
    id: 9,
    name: "Hennessy VS Cognac ORIGINAL 70cl X6",
    type: "Alcoholic",
    image: "/assets/products/product-img-5.png",
    price: 200000,
  },
  {
    id: 10,
    name: "Hennessy VS Cognac ORIGINAL 70cl X6",
    type: "Alcoholic",
    image: "/assets/products/product-img-3.png",
    price: 200000,
  },
  {
    id: 11,
    name: "Hennessy VS Cognac ORIGINAL 70cl X6",
    type: "Alcoholic",
    image: "/assets/products/product-img.png",
    price: 200000,
  },
  {
    id: 12,
    name: "Hennessy VS Cognac ORIGINAL 70cl X6",
    type: "Alcoholic",
    image: "/assets/products/product-img-7.png",
    price: 200000,
  },
];

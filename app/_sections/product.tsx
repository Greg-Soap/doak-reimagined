import { IProduct } from "@/types/products";
import FilterBar from "../_components/filter-bar";
import ProductCard from "../../components/custom/product-card";
import { PaginationComponent } from "../_components/pagination";
import { product_list } from "../data/product-list";

export default function Product() {
  return (
    <section
      id="products"
      className="py-28 container flex flex-col lg:flex-row gap-10"
    >
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
      {product_list.map((product: IProduct) => (
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

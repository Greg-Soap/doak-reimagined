import { Hero } from "./_sections/hero";
import Product from "./_sections/product";
import Testimonial from "./_sections/testimonial";
import Newsletter from "./_sections/newsletter";

export default function Home() {
  return (
    <>
      <Hero />

      <img
        className="w-[90%] h-auto mt-20 lg:hidden"
        src="assets/mobile-img.png"
        alt=""
      />

      <Product />

      <Testimonial />

      <Newsletter />
    </>
  );
}

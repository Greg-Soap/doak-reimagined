import Navbar from "./_sections/navbar";
import { Hero } from "./_sections/hero";
import Product from "./_sections/product";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between pt-[80px]">
        <Hero />
        <Product />
      </main>
    </>
  );
}

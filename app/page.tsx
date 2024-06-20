import Navbar from "./_sections/navbar";
import { Hero } from "./_sections/hero";
import Product from "./_sections/product";
import Footer from "./_sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between pt-20">
        <Hero />
        <Product />
      </main>
      <Footer />
    </>
  );
}

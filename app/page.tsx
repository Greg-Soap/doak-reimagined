import Image from "next/image";
import Navbar from "./_sections/navbar";
import { Hero } from "./_sections/hero";
import FilterBar from "./_components/filter-bar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between pt-[80px]">
        <Hero />
        <FilterBar />
      </main>
    </>
  );
}

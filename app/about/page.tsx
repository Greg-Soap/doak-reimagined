import Image from "next/image";
import Value from "./sections/values";
import Teams from "./sections/team";

export default function AboutUsPage() {
  return (
    <>
      <section className="container w-full py-16 flex items-center bg-white bg-center bg-cover">
        <p className="text-primary font-bold text-2xl md:text-4xl max-w-[691px]">
          We are a retailing and warehousing brand established to satsify
          thirsty costumers
        </p>
      </section>

      <section className="container bg-[url('/assets/about/humans.png')] bg-center bg-cover w-full h-[144px] md:h-[321px]" />

      <Value />

      <Teams />
    </>
  );
}

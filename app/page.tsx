import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-cover relative bg-no-repeat bg-[87%]  lg:bg-center bg-[url(/hero.svg)] h-[749px] lg:h-[850px] ">
        <Navbar />
        <Hero />
      </div>
      <Services />
    </>
  );
}

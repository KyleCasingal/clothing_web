import About from "@/components/About";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <About />
    </>
  );
}

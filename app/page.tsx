import Awardwin from "@/components/Awardwin/Awardwin";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Product from "@/components/Products/Product";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <Navbar/>
    <Hero/>
    <Awardwin/>
    <Product/>
   </div>
  );
}

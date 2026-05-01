import Brands from "@/components/Brands/Brands";
import CareTips from "@/components/CareTips/CareTips";
import Hero from "@/components/Hero/Hero";
import PopularProducts from "@/components/PopularProducts/PopularProducts";

export default function Home() {
  return (
    <div>
      <Hero />
      <PopularProducts />
      <CareTips />
      <Brands />
    </div>
  );
}

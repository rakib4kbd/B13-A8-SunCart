import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const brandList = [
  { name: "loreal", image: "/assets/brands/loreal.png" },
  { name: "nike", image: "/assets/brands/nike.png" },
  { name: "neutrogena", image: "/assets/brands/neutrogena.png" },
  { name: "bioderma", image: "/assets/brands/bioderma.png" },
  { name: "vaseline", image: "/assets/brands/vaseline.png" },
  { name: "aveeno", image: "/assets/brands/aveeno.png" },
];

const Brands = () => {
  return (
    <div className="container mx-auto my-20 px-2 md:px-0">
      <h1 className="text-3xl font-semibold text-amber-500">Top Brands</h1>
      <Marquee>
        {brandList.map((brand, index) => (
          <div key={index} className="relative w-24 h-24 mx-25">
            <Image
              src={brand.image}
              fill
              alt={brand.name}
              className="object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Brands;

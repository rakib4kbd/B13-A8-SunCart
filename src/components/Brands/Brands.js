import Image from "next/image";
import React from "react";

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
      <div className="my-5 grid grid-cols-2 md:grid-cols-6 items-center justify-center gap-6">
        {brandList.map((brand, index) => (
          <div key={index} className="relative w-24 h-24 mx-auto">
            <Image
              src={brand.image}
              fill
              alt={brand.name}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;

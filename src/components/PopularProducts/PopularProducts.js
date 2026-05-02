import fetchProducts from "@/lib/fetchProducts";
import Image from "next/image";
import Link from "next/link";
import React, { use } from "react";

const PopularProducts = () => {
  const productPromise = fetchProducts();
  const products = use(productPromise);
  return (
    <div className="container mx-auto my-20">
      <div className="flex items-center justify-between my-5">
        <h1 className="text-3xl font-semibold text-amber-500">
          Popular Products
        </h1>
        <Link href={"/products"} className="btn btn-ghost bg-amber-500">
          View All
        </Link>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-4 my-3">
        {products.slice(0, 3).map((product) => (
          <div
            key={product.id}
            className="card bg-base-100 shadow-xl image-full first:row-span-2 first:col-span-2 first:h-200"
          >
            <figure>
              <Image
                src={product.image}
                alt={product.image}
                width={1000}
                height={100}
              />
            </figure>
            <div className="card-body justify-end">
              <h2 className="card-title">{product.name}</h2>
              <div className="flex justify-between">
                <div className="text-sm">{product.rating}*</div>
                <div className="text-xl font-semibold">$19</div>
              </div>
              <div className="card-actions justify-end">
                <Link
                  href={`/products/${product.id}`}
                  className="btn bg-amber-500 btn-block"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;

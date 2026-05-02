import fetchProducts from "@/lib/fetchProducts";
import Image from "next/image";
import Link from "next/link";
import React, { use } from "react";

const PopularProducts = () => {
  const productPromise = fetchProducts();
  const productsRaw = use(productPromise);
  const products = productsRaw.filter((item) => item.popular);

  return (
    <div className="container mx-auto my-20 px-2 md:px-0">
      <div className="flex items-center justify-between my-5">
        <h1 className="text-3xl font-semibold text-amber-500">
          Popular Products
        </h1>
        <Link href={"/products"} className="btn btn-ghost bg-amber-500">
          View All
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-4 my-3">
        {products.slice(0, 3).map((product) => (
          <div
            key={product.id}
            className="card bg-base-100 shadow-xl image-full first:row-span-2 first:col-span-2 h-80 first:h-80 md:first:h-200 md:h-full"
          >
            <figure>
              <Image
                src={product.image}
                alt={product.image}
                fill
                className="rounded-2xl"
              />
            </figure>
            <div className="card-body justify-end">
              <h2 className="card-title">{product.name}</h2>
              <div className="flex items-center justify-between">
                <div className="rating rating-xs text-sm text-black/60">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className="mask mask-star bg-amber-500"
                      aria-label="1 star"
                      aria-current={
                        i < Math.round(Number(product.rating))
                          ? "true"
                          : "false"
                      }
                    ></div>
                  ))}
                </div>
                <div className="text-2xl font-semibold">$19</div>
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

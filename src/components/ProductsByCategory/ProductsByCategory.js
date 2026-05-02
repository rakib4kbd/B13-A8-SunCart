"use client";
import CategoryContext from "@/context/CategoryContext";
import Link from "next/link";
import Image from "next/image";
import React, { useContext } from "react";

const ProductsByCategory = ({ products }) => {
  const { selectedCategory } = useContext(CategoryContext);
  const filteredProducts = products.filter(
    (product) =>
      product.category.toLowerCase() === selectedCategory.toLowerCase(),
  );
  return (
    <>
      {selectedCategory.toLowerCase() === "all"
        ? products.map((product) => (
            <div key={product.id} className="card bg-base-100 shadow-sm">
              <figure className="relative aspect-square md:aspect-9/10">
                <Image
                  src={product.image}
                  alt={product.image}
                  fill
                  className="object-cover"
                />
              </figure>
              <div className="card-body justify-between gap-0 md:gap-2 p-2 md:p-3">
                <h2 className="card-title text-sm md:text-base font-medium md:font-semibold">
                  {product.name}
                </h2>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <div className="rating rating-xs items-center text-sm text-black/60">
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
                    <div className="text-xl font-semibold">$19</div>
                  </div>
                  <div className="card-actions justify-end">
                    <Link
                      href={`/products/${product.id}`}
                      className="btn btn-sm md:btn-md bg-amber-500 btn-block rounded-sm"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        : filteredProducts.map((product) => (
            <div
              key={product.id}
              className="card bg-base-100 shadow-xl image-full h-100"
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
    </>
  );
};

export default ProductsByCategory;

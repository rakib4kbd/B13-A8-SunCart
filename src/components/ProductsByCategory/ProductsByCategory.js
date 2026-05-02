"use client";
import CategoryContext from "@/context/CategoryContext";
import Link from "next/link";
import Image from "next/image";
import React, { useContext } from "react";

const ProductsByCategory = ({ products }) => {
  const { selectedCategory } = useContext(CategoryContext);
  console.log(selectedCategory);
  const filteredProducts = products.filter(
    (product) =>
      product.category.toLowerCase() === selectedCategory.toLowerCase(),
  );
  return (
    <>
      {selectedCategory.toLowerCase() === "all"
        ? products.map((product) => (
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

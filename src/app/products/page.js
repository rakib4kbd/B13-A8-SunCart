import fetchProducts from "@/lib/fetchProducts";
import Image from "next/image";
import React, { use } from "react";

const ProductsPage = () => {
  const productPromise = fetchProducts();
  const products = use(productPromise);
  return (
    <div className="container mx-auto my-20">
      <div className="flex items-center justify-between my-5">
        <h1 className="text-3xl font-semibold text-amber-500">All Products</h1>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-4 my-3">
        {products.map((product) => (
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
                <button className="btn bg-amber-500 btn-block">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;

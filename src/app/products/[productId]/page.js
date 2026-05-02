import ProductDetail from "@/components/ProductDetail/ProductDetail";
import fetchProducts from "@/lib/fetchProducts";
import { Prosto_One } from "next/font/google";
import Link from "next/link";
import React, { use } from "react";

const products = await fetchProducts();

const ProductDetails = async ({ params }) => {
  const { productId } = await params;
  const product = products.find((item) => item.id == productId);

  return (
    <div className="container mx-auto">
      <ProductDetail product={product} />
    </div>
  );
};

export default ProductDetails;

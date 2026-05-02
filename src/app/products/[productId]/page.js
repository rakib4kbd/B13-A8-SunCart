import ProductDetail from "@/components/ProductDetail/ProductDetail";
import fetchProducts from "@/lib/fetchProducts";
import React from "react";

const products = await fetchProducts();

export const generateMetadata = async ({ params }) => {
  const { productId } = await params;
  const product = products.find((item) => item.id == productId);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "This product does not exist",
    };
  }

  return {
    title: product.name,
    description: product.description || "Product details page",
  };
};

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

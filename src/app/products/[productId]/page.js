import React from "react";

const ProductDetails = async ({ params }) => {
  const { productId } = await params;
  return <div>{productId}</div>;
};

export default ProductDetails;

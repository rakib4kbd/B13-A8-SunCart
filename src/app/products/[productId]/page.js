import React from "react";

const ProductDetails = async ({ params }) => {
  const { productId } = await params;
  // console.log(productId);
  return <div>{productId}</div>;
};

export default ProductDetails;

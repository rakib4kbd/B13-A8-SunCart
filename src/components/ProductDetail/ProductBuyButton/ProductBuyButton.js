"use client";

import CartContext from "@/context/CartContext";
import React, { useContext } from "react";
import { prefetchDNS } from "react-dom";

const ProductBuyButton = ({ product }) => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleClick = (product) => {
    if (!cartItems.length > 0) {
      setCartItems([product]);
    }

    if (!cartItems.find((item) => item.id == product.id)) {
      setCartItems([...cartItems, product]);
    }
  };

  console.log(cartItems);
  return (
    <>
      {cartItems.find((item) => item.id == product.id) ? (
        <button
          onClick={() => {
            handleClick(product);
          }}
          className="btn btn-block bg-green-500 rounded-lg"
        >
          Added to Cart
        </button>
      ) : (
        <button
          onClick={() => {
            handleClick(product);
          }}
          className="btn btn-block bg-amber-500 rounded-lg"
        >
          Buy Now
        </button>
      )}
    </>
  );
};

export default ProductBuyButton;

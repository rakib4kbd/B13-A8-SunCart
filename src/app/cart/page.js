import Cart from "@/components/Cart/Cart";
import CartContext from "@/context/CartContext";
import React, { useContext } from "react";

const CartPage = () => {
  return (
    <div className="container mx-auto my-5 md:my-20 px-2 md:px-0">
      <h1 className="text-3xl text-amber-500 font-semibold">Cart</h1>
      <Cart />
    </div>
  );
};

export default CartPage;

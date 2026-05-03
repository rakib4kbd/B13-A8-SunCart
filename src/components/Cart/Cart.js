"use client";

import CartContext from "@/context/CartContext";
import { Trash } from "lucide-react";
import { Delete } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import toast from "react-hot-toast";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  let totalPrice = 0;
  cartItems.forEach((element) => {
    totalPrice = totalPrice + element.price;
  });

  console.log(totalPrice);
  return (
    <>
      {cartItems.length > 0 ? (
        <div>
          <ul className="list bg-base-100 rounded-box shadow-md my-2">
            {cartItems.map((item, index) => (
              <li key={item.id} className="list-row">
                <div className="text-4xl font-thin opacity-30 tabular-nums">
                  {index + 1}
                </div>
                <div className="list-col-grow">
                  <div>{item.name}</div>
                  <div className="text-md uppercase font-bold opacity-60">
                    ${item.price}
                  </div>
                </div>
                <button
                  className="btn btn-error btn-ghost"
                  onClick={() => {
                    setCartItems(
                      cartItems.filter((cartItem) => cartItem.id != item.id),
                    );
                    toast.error(`${item.name} removed from Cart!`);
                  }}
                >
                  <Trash width={20} />
                </button>
              </li>
            ))}
          </ul>

          <div className="flex mt-2 items-end justify-between shadow-md p-5 rounded-xl bg-base-100">
            <p className="text-xl">Total:</p>
            <p className="text-2xl font-semibold">${totalPrice}</p>
          </div>

          <div className="my-3">
            <button
              className="btn btn-block bg-amber-500 rounded-md"
              onClick={() => {
                setCartItems([]);
                toast.success("Checkout Complete!");
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-center min-h-100 shadow-lg my-2 bg-netural border rounded-lg relative">
            <Image
              src={
                "https://images.unsplash.com/vector-1774921469183-2ffdbd78a300"
              }
              fill
              alt=""
              className="object-contain"
            />
          </div>
          <Link
            href={"/products"}
            className="btn btn-block bg-amber-500 my-3 rounded-md"
          >
            Back to Shopping!
          </Link>
        </>
      )}
    </>
  );
};

export default Cart;

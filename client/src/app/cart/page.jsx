import React from "react";
import CartItem from "../components/CartItem/page";
import { PRODUCTS } from "@/data/products";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import Link from "next/link";

const Cart = () => {
  return (
    <div className="p-6 flex gap-2">
      <div className="flex flex-col w-2/3 ">
        <div className="border">
          <div className=" ">
            <div className="border-b py-2">
              <p className="mx-4">Shopping Cart</p>
            </div>
          </div>
          <div className="mx-4 py-2">
            {PRODUCTS.map((item) => (
              <CartItem
                id={item.id}
                title={item.title}
                imageUrl={item.imageUrl}
                price={item.price}
                promotionRate={item.promotionRate}
              />
            ))}
          </div>
        </div>
        <Link
          href={"/"}
          className="hover:text-primary mt-4 flex py-1  items-center gap-2"
        >
          <MdOutlineKeyboardDoubleArrowLeft className="mt-1" />
          <p className="text-center">continue shopping</p>
        </Link>
      </div>
      <div className="">
        <div>
          <p>Number of items</p>
          <p>125.25</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;

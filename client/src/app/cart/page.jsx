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
          className="hover:text-primary mt-4 flex py-1  items-center gap-2 justify-start w-40"
        >
          <MdOutlineKeyboardDoubleArrowLeft className="mt-1" />
          <p className="text-center">continue shopping</p>
        </Link>
      </div>
      <div className="flex flex-col gap-4 w-1/3 px-4 border h-full py-4 rounded-sm">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <p>{PRODUCTS.length}</p>
            <p>Items</p>
          </div>
          <div>
            <p className="text-primary font-semibold">$12.5</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <p>Shipping</p>
          </div>
          <div>
            <p className="text-primary font-semibold">$5.5</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <p>Taxes</p>
          </div>
          <div>
            <p className="text-primary font-semibold">$5.5</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <p>Total</p>
          </div>
          <div>
            <p className="text-primary font-semibold">$25.75</p>
          </div>
        </div>
        <div className="border-t flex justify-center pt-4">
          <Link
            href={"/order"}
            className="bg-primary p-4 rounded-md text-white uppercase hover:bg-black ease-in-out duration-200 delay-100"
          >
            Proceed to check out
          </Link>
        </div>
      </div>
      {/* <div className="flex justify-between px-4 w-1/3 ">
        <div className="w-full">
          <p className="pb-2">{PRODUCTS.length} Items</p>
          <p className="pt-2 ">Shipping</p>
        </div>
        <div>
          <p className="pb-2 text-primary">$12.5</p>
          <p className="pt-2 text-primary">$5</p>
        </div>
      </div> */}
    </div>
  );
};

export default Cart;

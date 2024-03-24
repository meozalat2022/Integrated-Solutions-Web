"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { BsArrowUpSquare, BsArrowDownSquare } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { increment, decrement, clear } from "@/redux/cart/cartSlice";
const CartItem = ({
  id,
  title,
  price,
  imageUrl,
  promotionRate,
  quantity,
  totalPrice,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between py-2 border-t-2 items-center">
      <div>
        <Image src={imageUrl} width={120} height={120} />
      </div>
      <div>
        <h1>{title}</h1>
        <p className="text-primary font-semibold">
          ${(price - (price * promotionRate) / 100).toFixed(2)}
        </p>
      </div>
      <div className="flex py-1 w-24 h-full">
        <div className="border w-full h-full border-solid border-slate-400">
          <input
            value={quantity}
            className="w-full text-center text-xl py-3"
            type="number"
          />
        </div>
        <div className="flex flex-col  items-center justify-center">
          <BsArrowUpSquare
            onClick={() => dispatch(increment({ productId: id }))}
            size={26}
            className="bg-white text-slate-700"
          />
          <BsArrowDownSquare
            onClick={() => dispatch(decrement({ productId: id }))}
            size={26}
            className="bg-white "
          />
        </div>
      </div>
      <div>
        <p className="text-primary font-semibold">$total price</p>
        <p className="text-primary font-semibold">${totalPrice.toFixed(2)}</p>
      </div>
      <div className="cursor-pointer hover:text-primary">
        <FaRegTrashAlt onClick={() => dispatch(clear({ productId: id }))} />
      </div>
    </div>
  );
};

export default CartItem;

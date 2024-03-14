import Image from "next/image";
import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { BsArrowUpSquare, BsArrowDownSquare } from "react-icons/bs";

const CartItem = ({ id, title, price, imageUrl, promotionRate }) => {
  return (
    <div className="flex justify-between py-2 border-t-2 items-center">
      <div>
        <Image src={imageUrl} width={120} height={120} />
      </div>
      <div>
        <h1>{title}</h1>
        <p className="text-primary font-semibold">${price}</p>
      </div>
      <div className="flex py-1 w-24 h-full">
        <div className="border w-full h-full border-solid border-slate-400">
          <input
            min={1}
            defaultValue={1}
            className="w-full text-center text-xl py-3"
            type="number"
          />
        </div>
        <div className="flex flex-col  items-center justify-center">
          <BsArrowUpSquare size={26} className="bg-white text-slate-700" />
          <BsArrowDownSquare size={26} className="bg-white " />
        </div>
      </div>
      <div>
        <p className="text-primary font-semibold">$total price</p>
      </div>
      <div className="cursor-pointer hover:text-primary">
        <FaRegTrashAlt />
      </div>
    </div>
  );
};

export default CartItem;

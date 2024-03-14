import React from "react";
import Image from "next/image";
import Link from "next/link";

const OrderItem = ({ id, title, imageUrl, price }) => {
  return (
    <div className="flex justify-between py-2 border-t-2 items-center">
      <Link href={`/productDetails/:${id}`}>
        <Image src={imageUrl} width={50} height={50} />
      </Link>
      <Link href={`/productDetails/:${id}`}>
        <h1>{title}</h1>
      </Link>
      <div>
        <p className="text-primary font-semibold">${price}</p>
      </div>
    </div>
  );
};

export default OrderItem;

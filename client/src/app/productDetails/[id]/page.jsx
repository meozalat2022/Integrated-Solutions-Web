import React from "react";
import { PRODUCTS } from "@/data/products";
import Image from "next/image";

const ProductDetails = ({ params }) => {
  const productId = params.id.slice(-1);
  const foundProduct = PRODUCTS.find((item) => item.id === productId);
  console.log(foundProduct);
  return (
    <div>
      <div className="flex">
        {/* image Div */}
        <div>
          <Image
            src={foundProduct.imageUrl}
            alt={foundProduct.title}
            width={500}
            height={500}
          />
        </div>
        {/* details div */}
        <div>
          <h1>{foundProduct.title}</h1>
          <p>{foundProduct.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

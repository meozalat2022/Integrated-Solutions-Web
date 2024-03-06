import React from "react";
import { PRODUCTS } from "@/data/products";

const ProductsList = ({ params }) => {
  const catId = params.id.slice(-1);

  const list = PRODUCTS.filter((item) => item.categoryId === catId);
  return (
    <div>
      {list.map((item) => (
        <div>
          <h1>{item.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;

import React from "react";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/app/components/ProductCard/page";
const productsByCategory = ({ params }) => {
  const catId = params.id.slice(-1);

  const list = PRODUCTS.filter((item) => item.categoryId === catId);
  return (
    <div className="flex gap-6 w-full justify-center my-4">
      <div className="border border-solid border-slate-300 w-64 m-6 hidden lg:flex flex-col">
        <h2 className="text-center">Filter by</h2>
      </div>
      <div className=" ml-8">
        <div className="flex flex-col">
          <div className="flex justify-end mr-8 mb-2">
            <p>sort By</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mr-10 items-center">
            {list &&
              list.map((item) => (
                <div className="flex">
                  <ProductCard
                    id={item.id}
                    title={item.title}
                    imageUrl={item.imageUrl}
                    price={item.price}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default productsByCategory;

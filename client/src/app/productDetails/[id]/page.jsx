import React from "react";
import { PRODUCTS } from "@/data/products";
import Image from "next/image";
import { BsArrowUpSquare, BsArrowDownSquare } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import ProductCard from "@/app/components/ProductCard/page";

const ProductDetails = ({ params }) => {
  const productId = params.id.slice(-1);
  const foundProduct = PRODUCTS.find((item) => item.id === productId);
  const similarProducts = PRODUCTS.filter(
    (item) => item.categoryId === foundProduct.categoryId
  ).slice(0, 6);
  console.log(similarProducts);
  return (
    <div className="m-6">
      <div className="flex gap-4 justify-between">
        {/* image Div */}
        <div className="flex justify-center border shadow-lg w-full">
          <Image
            src={foundProduct.imageUrl}
            alt={foundProduct.title}
            width={500}
            height={500}
          />
        </div>
        {/* details div */}
        <div className=" flex flex-col w-full">
          <div className="flex justify-start  flex-col">
            <h1 className="font-bold mx-4 my-2">{foundProduct.title}</h1>
            <p className="mx-4">{foundProduct.description}</p>
            {/* horizontal line break */}
            <div className="relative flex py-2 items-center">
              <div class="flex-grow border-t border-primary mx-4"></div>
            </div>
            <div className="flex gap-2 mx-4">
              <h1>Brand:</h1>
              <p>{foundProduct.brandId}</p>
            </div>
          </div>
          <div className="m-4">
            {foundProduct.hasPromotion ? (
              <p className="text-primary font-bold">
                <span className="mr-2 line-through text-slate-500">
                  ${foundProduct.price}
                </span>
                $
                {(
                  foundProduct.price -
                  (foundProduct.price * foundProduct.promotionRate) / 100
                ).toFixed(2)}
              </p>
            ) : (
              <p>${foundProduct.price}</p>
            )}
          </div>
          <div className="w-full mx-4 flex gap-4 ">
            <div className="flex py-1 w-24 h-full ">
              <div className="border w-full h-full border-solid border-slate-400">
                <input
                  min={1}
                  defaultValue={1}
                  className="w-full h-full text-center text-xl"
                  type="number"
                />
              </div>
              <div className="flex flex-col  items-center justify-center">
                <BsArrowUpSquare
                  size={26}
                  className="bg-white text-slate-700"
                />
                <BsArrowDownSquare size={26} className="bg-white " />
              </div>
            </div>
            <div className="w-full h-full">
              <button className="hover:bg-black ease-in-out duration-200 delay-100 bg-primary py-4 px-8 rounded-md text-center capitalize text-white">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="flex gap-2 items-center mt-4 hover:text-primary cursor-pointer">
            <FaRegHeart size={20} />
            <p>Add to Wish List</p>
          </div>
        </div>
      </div>
      <div className="mt-8 ml-10">
        <p className="font-bold">You Might Also Like</p>
      </div>
      <div className="flex gap-4 justify-center mt-4">
        {similarProducts &&
          similarProducts.map((item) => (
            <div key={item.id} className="flex">
              <ProductCard
                key={item.id}
                id={item.id}
                title={item.title}
                imageUrl={item.imageUrl}
                price={item.price}
                // description={item.description}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductDetails;

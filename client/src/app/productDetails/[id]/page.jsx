"use client";
import React, { useState, useEffect } from "react";
import { PRODUCTS } from "@/data/products";
import Image from "next/image";
import { BsArrowUpSquare, BsArrowDownSquare } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import ProductCard from "@/app/components/ProductCard/page";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/redux/cart/cartSlice";
const ProductDetails = ({ params }) => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const productId = params.id.slice(3);
  // const foundProduct = PRODUCTS.find((item) => item.id === productId);
  const dispatch = useDispatch();
  const allProduct = useSelector((state) => state.product.allProducts);
  let similarProducts = [];

  if (product) {
    similarProducts = allProduct
      .filter((item) => item.categoryId === product.categoryId)
      .slice(0, 6);
  }

  useEffect(() => {
    const fetChProduct = async () => {
      try {
        setLoading(true);
        const getProduct = await fetch(
          `http://localhost:8080/products/getSingleProduct/${productId}`
        );

        const data = await getProduct.json();
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
        setProduct(data);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetChProduct();
  }, [productId]);

  return (
    <div className="m-6">
      <div className="flex gap-4 justify-between">
        {/* image Div */}
        <div className="flex justify-center border shadow-lg w-full">
          <Image
            src={product?.imageUrl[0]}
            alt={product?.title}
            width={500}
            height={500}
          />
        </div>
        {/* details div */}
        <div className=" flex flex-col w-full">
          <div className="flex justify-start  flex-col">
            <h1 className="font-bold mx-4 my-2">{product?.title}</h1>
            <p className="mx-4">{product?.description}</p>
            {/* horizontal line break */}
            <div className="relative flex py-2 items-center">
              <div class="flex-grow border-t border-primary mx-4"></div>
            </div>
            <div className="flex gap-2 mx-4">
              <h1>Brand:</h1>
              <p>{product?.brandId}</p>
            </div>
          </div>
          <div className="m-4">
            {product?.hasPromotion ? (
              <p className="text-primary font-bold">
                <span className="mr-2 line-through text-slate-500">
                  ${product?.price}
                </span>
                $
                {(
                  product.price -
                  (product.price * product.promotionRate) / 100
                ).toFixed(2)}
              </p>
            ) : (
              <p>${product?.price}</p>
            )}
          </div>
          <div className="w-full mx-4 flex gap-4 ">
            <div className="flex py-1 w-24 h-full ">
              <div className="border w-full h-full border-solid border-slate-400">
                <input
                  value={quantity}
                  className="w-full h-full text-center text-xl"
                  type="number"
                />
              </div>
              <div className="flex flex-col  items-center justify-center">
                <BsArrowUpSquare
                  onClick={() => setQuantity(quantity + 1)}
                  size={26}
                  className="bg-white text-slate-700"
                />
                <BsArrowDownSquare
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  size={26}
                  className="bg-white "
                />
              </div>
            </div>
            <div className="w-full h-full">
              <button
                onClick={() =>
                  dispatch(
                    addToCart({
                      productId: product._id,
                      title: product.title,
                      price: product.price,
                      promotionRate: product.promotionRate,
                      imageUrl: product.imageUrl[0],
                      quantity: quantity,
                    })
                  )
                }
                className="hover:bg-black ease-in-out duration-200 delay-100 bg-primary py-4 px-8 rounded-md text-center capitalize text-white"
              >
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
      {similarProducts.length > 1 && (
        <div className="flex gap-4 justify-center mt-4">
          {similarProducts &&
            similarProducts.map((item) => (
              <div key={item.id} className="flex">
                <ProductCard
                  key={item._id}
                  id={item._id}
                  title={item.title}
                  imageUrl={item.imageUrl[0]}
                  price={item.price}
                  // description={item.description}
                />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default ProductDetails;

"use client";
import React, { useRef, useEffect } from "react";
import { PRODUCTS } from "@/data/products";
import HomeSwiper from "../components/Swiper/HomeSwiper";
import CategoryCard from "../components/CategoryCard/page";
import ProductCard from "../components/ProductCard/page";
import BrandCard from "../components/BrandCard/page";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProductsFailure,
  getAllProductsStart,
  getAllProductsSuccess,
} from "@/redux/product/productSlice";
import Link from "next/link";
const Index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        dispatch(getAllProductsStart());
        const allProducts = await fetch(
          "http://localhost:8080/products/products"
        );
        const data = await allProducts.json();
        dispatch(getAllProductsSuccess(data));
      } catch (error) {
        dispatch(getAllProductsFailure(error.message));
      }
    };
    fetchAllProducts();
  }, []);
  const slideRef = useRef();

  const onNext = () => {
    slideRef.current.scrollLeft += 200;
  };
  const onPrev = () => {
    slideRef.current.scrollLeft += 200;
  };

  const bestDeals = useSelector((state) => state.product.bestDeals).slice(0, 5);

  const latestProducts = useSelector(
    (state) => state.product.latestProducts
  ).slice(0, 5);

  return (
    <div className="flex m-auto rounded-md flex-col">
      <div className="flex flex-col w-full items-center bg-red-50 pb-4 ">
        {/* promotion swiper */}
        <div className=" mt-10 w-3/4 ">
          <HomeSwiper />
        </div>
      </div>
      <div className="w-full px-6 mt-6  py-10">
        <CategoryCard />
      </div>

      <div className=" w-full px-6 mt-6  py-10 ">
        <div className="mb-4 ml-24 flex justify-center md:justify-start">
          <h2 className="text-primary font-bold">Best Deals</h2>
        </div>
        <div className="flex  items-center justify-center gap-12 flex-wrap">
          {bestDeals.map((item) => (
            <ProductCard
              key={item._id}
              id={item._id}
              title={item.title}
              imageUrl={item.imageUrl[0]}
              price={item.price}
              promotionRate={item.promotionRate}
              // description={item.description}
            />
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <Link
            href={"/bestDeals"}
            className=" p-2 hover:opacity-85 hover:text-slate-200 bg-accent text-base text-white rounded-lg"
          >
            See More
          </Link>
        </div>
      </div>
      <div className="w-full px-6 mt-6  py-10">
        <div className="mb-4 ml-24 flex justify-center md:justify-start">
          <h2 className="text-primary font-bold">Latest Products</h2>
        </div>
        <div className="flex items-center justify-center gap-12 flex-wrap">
          {latestProducts.map((item) => (
            <ProductCard
              key={item._id}
              id={item._id}
              title={item.title}
              imageUrl={item.imageUrl[0]}
              price={item.price}
              promotionRate={item.promotionRate}
              // description={item.description}
            />
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <Link
            href={"/latestProducts"}
            className=" p-2 hover:opacity-85 hover:text-slate-200 bg-accent text-base text-white rounded-lg"
          >
            See More
          </Link>
        </div>
      </div>
      <div className="w-full px-6 mt-6  py-10">
        <BrandCard />
      </div>
    </div>
  );
};

export default Index;

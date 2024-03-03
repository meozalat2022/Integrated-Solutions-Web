"use client";
import React, { useRef } from "react";
import { PRODUCTS } from "@/data/products";
import HomeSwiper from "../components/Swiper/HomeSwiper";
import CategoryCard from "../components/CategoryCard/page";
import ProductCard from "../components/ProductCard/page";
import BrandCard from "../components/BrandCard/page";
import { GrNext, GrPrevious } from "react-icons/gr";
const Index = () => {
  const slideRef = useRef();

  const onNext = () => {
    slideRef.current.scrollLeft += 200;
  };
  const onPrev = () => {
    slideRef.current.scrollLeft += 200;
  };
  return (
    <div className="flex m-auto rounded-md flex-col">
      <div className="flex flex-col w-full items-center bg-red-50">
        {/* promotion swiper */}
        <div className=" mt-10 w-3/4">
          <HomeSwiper />
        </div>
        <div className="w-full px-6 mt-6  py-10">
          <CategoryCard />
        </div>
        <div>
          <h2 className="mb-4 font-bold text-2xl text-slate-400">
            Latest Products
          </h2>
          <div className="flex gap-4">
            <button onClick={onPrev}>
              <GrPrevious />
            </button>
            <button onClick={onNext}>
              <GrNext />
            </button>
          </div>
        </div>
        <div
          className=" flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all"
          ref={slideRef}
        >
          {PRODUCTS &&
            PRODUCTS.map((item) => (
              <ProductCard
                id={item.id}
                imageUrl={item.imageUrl}
                price={item.price}
                description={item.description}
              />
            ))}
        </div>
        <div>
          <BrandCard />
        </div>
      </div>
    </div>
  );
};

export default Index;

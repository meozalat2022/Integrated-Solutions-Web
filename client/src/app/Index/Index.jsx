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
      <div className="flex flex-col w-full items-center bg-red-50 pb-4">
        {/* promotion swiper */}
        <div className=" mt-10 w-3/4">
          <HomeSwiper />
        </div>
      </div>
      <div className="w-full px-6 mt-6  py-10">
        <CategoryCard />
      </div>

      <div className=" w-full px-6 mt-6  py-10">
        <ProductCard />
      </div>
      <div className="w-full px-6 mt-6  py-10">
        <ProductCard />
      </div>
      <div className="w-full px-6 mt-6  py-10">
        <BrandCard />
      </div>
    </div>
  );
};

export default Index;

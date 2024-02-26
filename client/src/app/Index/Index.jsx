import React from "react";
import { PRODUCTS } from "@/data/products";
import HomeSwiper from "../components/Swiper/HomeSwiper";
import CategoryCard from "../components/CategoryCard/page";
const Index = () => {
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
      </div>
    </div>
  );
};

export default Index;

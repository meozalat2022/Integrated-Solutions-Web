import React from "react";
import { PRODUCTS } from "@/data/products";
import HomeSwiper from "../components/Swiper/HomeSwiper";
const Index = () => {
  return (
    <div className="flex m-auto rounded-md flex-col my-4 items-center">
      {/* promotion swiper */}
      <div className="w-3/4 mt-12 ">
        <HomeSwiper />
      </div>
    </div>
  );
};

export default Index;

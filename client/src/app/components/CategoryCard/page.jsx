"use client";
import React from "react";
import { CATEGORY } from "@/data/products";
import Image from "next/image";
const CategoryCard = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      {CATEGORY.map((item) => (
        <div className="bg-white h-60 w-60 flex flex-col rounded-lg items-center">
          <Image
            src={item.imageUrl}
            alt={item.title}
            width={120}
            height={120}
            className="h-2/3 flex mt-4 rounded-md hover:scale-105 transition ease-in-out duration-700"
            //   layout="fill"
            // objectFit="cover"
            objectPosition="center"
          />
          <h1 className="pt-6">{item.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default CategoryCard;

"use client";
import React from "react";
import { CATEGORY } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
const CategoryCard = () => {
  const categoryItems = CATEGORY.slice(0, 5);
  return (
    <div>
      <div className="flex items-center justify-center gap-4 flex-wrap md:flex-nowrap">
        {categoryItems.map((item) => (
          <Link
            href={`./category/:${item.id}`}
            className="bg-gradient-to-b from-accent to-white h-40 w-40 md:h-60 md:w-60 flex flex-col rounded-lg items-center"
          >
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={500}
              height={500}
              className="h-full w-1/3 md:w-3/4 flex mt-4 rounded-md hover:scale-105 transition ease-in-out duration-700"
              //   layout="fill"
              // objectFit="cover"
              objectPosition="center"
            />
            <h1 className="pt-6">{item.title}</h1>
          </Link>
        ))}
      </div>
      <Link href={"/"} className="flex justify-center items-center mt-4">
        <button className="p-2 hover:opacity-85 hover:text-slate-200 bg-accent text-base text-white rounded-lg">
          See More
        </button>
      </Link>
    </div>
  );
};

export default CategoryCard;

"use client";
import React from "react";
import { CATEGORY } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
const CategoryCard = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      {CATEGORY.map((item) => (
        <Link
          href={`./category/:${item.id}`}
          className="bg-gradient-to-b from-accent to-white h-60 w-60 flex flex-col rounded-lg items-center"
        >
          <Image
            src={item.imageUrl}
            alt={item.title}
            width={500}
            height={500}
            className="h-full w-3/4 flex mt-4 rounded-md hover:scale-105 transition ease-in-out duration-700"
            //   layout="fill"
            // objectFit="cover"
            objectPosition="center"
          />
          <h1 className="pt-6">{item.title}</h1>
        </Link>
      ))}
    </div>
  );
};

export default CategoryCard;

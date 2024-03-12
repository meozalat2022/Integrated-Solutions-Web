import React from "react";
import { CATEGORY } from "@/data/products";
import Link from "next/link";
import Image from "next/image";
const Categories = () => {
  return (
    <div className="flex flex-wrap gap-6 w-full justify-center mt-6 m-auto">
      {CATEGORY &&
        CATEGORY.map((item) => (
          <Link
            key={item.id}
            href={`./productByCategory/:${item.id}`}
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
  );
};

export default Categories;

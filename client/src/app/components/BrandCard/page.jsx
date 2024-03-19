import React from "react";
import { BRAND } from "@/data/products";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
const BrandCard = () => {
  const { error, loading, allBrands } = useSelector((state) => state.brand);
  const brandsCard = allBrands.slice(0, 5);
  return (
    <div className="mt-8">
      <div className="flex justify-center flex-wrap gap-4">
        {brandsCard.map((item) => (
          <Link
            key={item.id}
            className="hover:animate-pulse w-40 h-40 mx-6"
            href={`./brand/:${item.id}`}
          >
            <Image
              src={item.imageUrl}
              width={500}
              height={500}
              className="w-full h-full"
            />
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Link
          href={"./brands"}
          className=" p-2 hover:opacity-85 hover:text-slate-200 bg-accent text-base text-white rounded-lg"
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default BrandCard;

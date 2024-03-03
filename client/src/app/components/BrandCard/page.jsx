import React from "react";
import { BRAND } from "@/data/products";
import Link from "next/link";
import Image from "next/image";

const BrandCard = () => {
  return (
    <div className="flex  gap-4">
      {BRAND.map((item) => (
        <Link
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
  );
};

export default BrandCard;

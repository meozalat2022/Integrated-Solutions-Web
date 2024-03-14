import React from "react";
import { CATEGORY } from "@/data/products";
import { BRAND } from "@/data/products";
import Link from "next/link";
import SocialMedia from "../SocialMedia/page";

const Footer = () => {
  const categoryList = CATEGORY.slice(0, 5);
  const brandList = BRAND.slice(0, 5);
  return (
    <div className="hidden md:flex mt-2 md:h-[250px] bg-accent rounded-t-md">
      <div className="flex justify-between w-full m-4">
        {/* contact */}
        <div className="flex">
          <div className="flex flex-col gap-5  max-w-96">
            <h1 className="text-white font-bold ">Contact US</h1>
            <address className="text-white">
              48 Doctor Farouk Street Becho American City Zahraa Al Maadi
            </address>
            <p className="text-white">meozalat2002@hotmail.com</p>
            <p className="text-white">+201149045481</p>
          </div>
          <div className="border border-solid border-white"></div>
        </div>

        {/* categories and brands */}
        <div className="flex w-1/2 justify-center ">
          {/* categories */}
          <div className=" w-1/2">
            <div className=" flex flex-col gap-4 items-center">
              {categoryList.map((item) => (
                <ul key={item.id}>
                  <li>
                    <Link
                      className="text-white hover:underline hover:text-blue-800"
                      href={`/productByCategory/:${item.id}`}
                    >
                      {item.title}
                    </Link>
                  </li>
                </ul>
              ))}
              <Link
                className="hover:underline text-slate-600"
                href={"/categories"}
              >
                See More
              </Link>
            </div>
          </div>

          {/* brands */}
          <div className="w-1/2 ">
            <div className="gap-4 flex flex-col items-center">
              {brandList.map((item) => (
                <ul key={item.id}>
                  <Link
                    className="text-white hover:underline hover:text-blue-800"
                    href={`/productByBrand/:${item.id}`}
                  >
                    {item.title}
                  </Link>
                </ul>
              ))}
              <Link className="hover:underline text-slate-600" href={"/brands"}>
                See More
              </Link>
            </div>
          </div>
        </div>
        {/* social media */}

        <div className="flex gap-6 justify-center items-center m-auto">
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default Footer;

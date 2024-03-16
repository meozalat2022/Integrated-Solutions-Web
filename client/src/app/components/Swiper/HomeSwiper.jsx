"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";

import { PRODUCTS } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
const HomeSwiper = () => {
  SwiperCore.use([Navigation]);

  const offers = PRODUCTS.filter((item) => item.hasPromotion);

  return (
    <Swiper navigation>
      {offers &&
        offers.length > 0 &&
        offers.map((item) => (
          <SwiperSlide key={item.imageUrl}>
            <div className="md:h-[500px] h-[250px] ">
              <Image
                className=""
                alt={item.title}
                src={item.imageUrl}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
              <div className="absolute top-1/3 right-36">
                <p className="mb-4 font-semibold text-sm md:text-2xl text-slate-600">
                  Big Saving Days Sale
                </p>
                <h1 className="mb-4 text-base md:text-4xl font-bold">
                  {item.title}
                </h1>
                <p className="mb-10 font-semibold text-sm md:text-2xl text-slate-600">
                  Starting At Only{" "}
                  <span className="text-sm md:text-3xl text-primary font-bold">
                    $
                    {(
                      item.price -
                      item.price * (item.promotionRate / 100)
                    ).toFixed(2)}
                  </span>
                </p>
                <Link
                  className="px-2 py-1 md:px-6 md:py-4 bg-primary rounded-lg hover:bg-slate-800 hover:text-slate-200 text-white text-xs md:text-base font-bold uppercase"
                  href={`./productDetails/:${item.id}`}
                >
                  Shop Now
                </Link>
              </div>
              {/* <Link
                href={`./productDetails/:${item.id}`}
                className="bg-accent absolute top-1/4 left-96 z-1 w-auto p-4 rounded-lg"
              >
                <p className="text-white font-bold w-full ">{item.title}</p>
              </Link>
              <div className="bg-primary p-6 rounded-lg z-1 w-auto absolute top-60 left-96">
                <p className="text-center text-white font-bold">
                  Promotion Rate {item.promotionRate}%
                </p>
              </div> */}
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default HomeSwiper;

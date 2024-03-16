"use client";
import React, { useEffect } from "react";
import { BRAND } from "@/data/products";
import Link from "next/link";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllBrandsFailure,
  getAllBrandsStart,
  getAllBrandsSuccess,
} from "@/redux/brand/brandSlice";
const Brands = () => {
  const { error, loading, allBrands } = useSelector((state) => state.brand);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAllBrands = async () => {
      try {
        dispatch(getAllBrandsStart());

        const allBrands = await fetch("http://localhost:8080/brand/brands");

        const data = await allBrands.json();

        if (data.success === false) {
          dispatch(getAllBrandsFailure(data));
          return;
        }

        dispatch(getAllBrandsSuccess(data));
      } catch (error) {
        dispatch(getAllBrandsFailure(error.message));
      }
    };
    fetchAllBrands();
  }, []);
  return (
    <div className="flex flex-wrap gap-6 w-full justify-center mt-6 m-auto">
      {allBrands &&
        allBrands.map((item) => (
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

export default Brands;

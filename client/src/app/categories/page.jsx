"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import {
  getCategoriesStart,
  getCategoriesSuccess,
  getCategoriesFailure,
} from "@/redux/category/categorySlice";
const Categories = () => {
  // const [allCategories, setAllCategories] = useState([]);

  const { error, loading, allCategories } = useSelector(
    (state) => state.category
  );
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        dispatch(getCategoriesStart());
        const categories = await fetch(
          "http://localhost:8080/category/categories"
        );
        const data = await categories.json();

        if (data.success === false) {
          dispatch(getCategoriesFailure(data.message));
          return;
        }
        dispatch(getCategoriesSuccess(data));
      } catch (error) {
        dispatch(getCategoriesFailure(error.message));
      }
    };
    fetchCategories();
  }, []);
  return (
    <div className="flex flex-wrap gap-6 w-full justify-center mt-6 m-auto">
      {allCategories &&
        allCategories.map((item) => (
          <Link
            key={item._id}
            href={`./productByCategory/:${item._id}`}
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

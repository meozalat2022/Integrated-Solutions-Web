"use client";
import React, { useState, useEffect } from "react";
import { PRODUCTS, BRAND } from "@/data/products";
import ProductCard from "@/app/components/ProductCard/page";
import { useDispatch, useSelector } from "react-redux";
import {
  getBestDealsFailure,
  getBestDealsStart,
  getBestDealsSuccess,
} from "@/redux/product/productSlice";
const BestDeals = () => {
  const { error, loading, bestDeals } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchBestDeals = async () => {
      try {
        dispatch(getBestDealsStart());
        const bestDeals = await fetch(
          "http://localhost:8080/products/bestDeals"
        );

        const data = await bestDeals.json();

        dispatch(getBestDealsSuccess(data));
      } catch (error) {
        dispatch(getBestDealsFailure(error.message));
      }
    };
    fetchBestDeals();
  }, []);

  return (
    <div className="flex gap-6 w-full justify-center my-4">
      <div className=" ml-8">
        <div className="flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mr-10 items-center">
            {bestDeals &&
              bestDeals.map((item) => (
                <div className="flex">
                  <ProductCard
                    key={item._id}
                    id={item._id}
                    title={item.title}
                    imageUrl={item.imageUrl[0]}
                    price={item.price}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestDeals;

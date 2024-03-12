"use client";
import React, { useState, useEffect, useRef } from "react";
import { PRODUCTS, BRAND } from "@/data/products";
import ProductCard from "@/app/components/ProductCard/page";
import Select from "react-select";
const productsByBrand = ({ params }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    { value: "newest", label: "Newest to Oldest" },
    { value: "Oldest", label: "Oldest to Newest" },
    { value: "priceLow", label: "Price Low to High" },
    { value: "priceHigh", label: "Price High to Low" },
    { value: "nameA", label: "Name A to Z" },
    { value: "nameZ", label: "name Z to A" },
  ];

  const brandId = params.id.slice(-1);

  const list = PRODUCTS.filter((item) => item.categoryId === brandId);

  //   let brands = [];
  //   for (let i in list) {
  //     const foundBrands = BRAND.filter((item) => item.id === list[i].brandId);
  //     for (let j in foundBrands) {
  //       brands.push(foundBrands[j]);
  //     }
  //   }
  //   const uniqArr = [...new Set(brands)];

  return (
    <div className="flex gap-6 w-full justify-center my-4">
      {/* <div className="border border-solid border-slate-300 w-64 m-6 hidden lg:flex flex-col">
        <h2 className="text-center mt-2">Filter by</h2>
        <div className="mt-4 ml-8">
          {uniqArr.map((br) => (
            <div key={br.id} className=" pt-6">
              <label htmlFor={br.title}>{br.title}</label>
              <input className="ml-12 text-center" type="checkbox" />
            </div>
          ))}
        </div>
      </div> */}

      <div className=" ml-8">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 justify-end mr-8 mb-2 ">
            <p className="text-lg text-accent font-semibold">Sort By:</p>
            <Select
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  width: "150px",
                }),
              }}
              options={options}
              onChange={setSelectedOption}
              defaultValue={options[0]}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mr-10 items-center">
            {list &&
              list.map((item) => (
                <div className="flex">
                  <ProductCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    imageUrl={item.imageUrl}
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

export default productsByBrand;
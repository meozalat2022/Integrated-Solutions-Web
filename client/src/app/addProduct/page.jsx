"use client";
import React, { useState } from "react";
import Select from "react-select";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: 0,
    imageUrl: "",
    promotionRate: 1,
  });
  const [catSelectedOption, setCatSelectedOption] = useState(null);
  const [brandSelectedOption, setBrandSelectedOption] = useState(null);

  const categoryOptions = [
    { value: "65f381d9b88fa78e4b2c4005", label: "category1" },
    { value: "65f381d9b88fa78e4b2c4006", label: "category2" },
    { value: "65f381d9b88fa78e4b2c4007", label: "category3" },
    { value: "65f381d9b88fa78e4b2c4008", label: "category4" },
    { value: "65f381d9b88fa78e4b2c4009", label: "category5" },
    { value: "65f381d9b88fa78e4b2c400a", label: "category6" },
    { value: "65f381d9b88fa78e4b2c400b", label: "category7" },
    { value: "65f381d9b88fa78e4b2c400c", label: "category8" },
  ];
  const brandOptions = [
    { value: "65f381e8b88fa78e4b2c400e", label: "brand1" },
    { value: "65f381e8b88fa78e4b2c400f", label: "brand2" },
    { value: "65f381e8b88fa78e4b2c4010", label: "brand3" },
    { value: "65f381e8b88fa78e4b2c4011", label: "brand4" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const products = await fetch("http://localhost:8080/products/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,

          categoryId: catSelectedOption.value,

          brandId: brandSelectedOption.value,
        }),
      });
      const data = await products.json();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col m-10 gap-4">
      <div>
        <label htmlFor="title">
          Title
          <input name="title" onChange={handleChange} type="text" />
        </label>
      </div>
      <div>
        <label htmlFor="description">
          Description
          <input name="description" onChange={handleChange} type="text" />
        </label>
      </div>
      <div>
        <label htmlFor="image">
          Image
          <input name="imageUrl" onChange={handleChange} type="text" />
        </label>
      </div>

      <div>
        <label htmlFor="price">
          Price
          <input name="price" onChange={handleChange} type="number" />
        </label>
      </div>
      <div>
        <label htmlFor="promotionRate">
          Promotion Rate
          <input name="promotionRate" onChange={handleChange} type="number" />
        </label>
      </div>
      <div>
        <p>Category</p>
        <Select
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              width: "150px",
            }),
          }}
          options={categoryOptions}
          onChange={setCatSelectedOption}
        />
      </div>
      <div>
        <p>Brand</p>
        <Select
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              width: "150px",
            }),
          }}
          options={brandOptions}
          onChange={setBrandSelectedOption}
        />
      </div>
      <div>
        <button className="bg-red-500 p-4 rounded-md">Submit</button>
      </div>
    </form>
  );
};

export default AddProduct;

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
    { value: "65fca4b0a1c55b90ae63d2f0", label: "category1" },
    { value: "65fca4cba1c55b90ae63d2f2", label: "category2" },
    { value: "65fca502a1c55b90ae63d2f4", label: "category3" },
    { value: "65fca511a1c55b90ae63d2f6", label: "category4" },
    { value: "65fca51fa1c55b90ae63d2f8", label: "category5" },
    { value: "65fca52da1c55b90ae63d2fa", label: "category6" },
    { value: "65fca531a1c55b90ae63d2fc", label: "category7" },
    { value: "65fca534a1c55b90ae63d2fe", label: "category8" },
  ];
  const brandOptions = [
    { value: "65fca388a1c55b90ae63d2e8", label: "brand1" },
    { value: "65fca3c3a1c55b90ae63d2ea", label: "brand2" },
    { value: "65fca3d2a1c55b90ae63d2ec", label: "brand3" },
    { value: "65fca3e9a1c55b90ae63d2ee", label: "brand4" },
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

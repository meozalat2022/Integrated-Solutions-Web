"use client";
import React, { useState } from "react";

const AddBrand = () => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const brand = await fetch("http://localhost:8080/brand/addBrand", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          imageUrl: imageUrl,
          products: [],
        }),
      });
      const data = await brand.json();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col m-10 gap-4">
      <div>
        <label htmlFor="title">
          Title
          <input
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            type="text"
          />
        </label>
      </div>
      <div>
        <label htmlFor="image">
          Image
          <input
            name="imageUrl"
            onChange={(e) => setImageUrl(e.target.value)}
            type="text"
          />
        </label>
      </div>

      <div>
        <button className="bg-red-500 p-4 rounded-md">Submit</button>
      </div>
    </form>
  );
};

export default AddBrand;

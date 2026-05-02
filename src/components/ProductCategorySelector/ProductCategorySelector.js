"use client";
import CategoryContext from "@/context/CategoryContext";
import React, { useContext, useState } from "react";

const ProductCategorySelector = ({ productCategory }) => {
  const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);
  const handleSelect = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="flex flex-col gap-3 my-3">
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="category"
          className="radio radio-sm"
          value="all"
          defaultChecked
          onClick={handleSelect}
        />
        <span className="text-sm">All</span>
      </label>
      {productCategory.map((cat, index) => (
        <label key={index} className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="category"
            onClick={handleSelect}
            className="radio radio-sm"
            value={cat.toLowerCase()}
          />
          <span className="text-sm">{cat}</span>
        </label>
      ))}
    </div>
  );
};

export default ProductCategorySelector;

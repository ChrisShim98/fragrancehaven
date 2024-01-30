import React from "react";
import { colognes } from "../constants/colognes";

const ProductDetails = () => {
  return (
    <div className="flex flex-col items-center w-screen gap-8">
      <div className="w-full bg-gray-100 py-6 text-xl font-medium text-center">
        <h1 className="tracking-wide">Product Details</h1>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <img
            src={colognes[0].img}
            className="w-full relative z-10"
            alt={colognes[0].name}
          />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col border-b border-gray-200 py-4 pr-4">
            <h2>{colognes[0].name}</h2>
            <h2>${colognes[0].price}</h2>
            <h2>{colognes[0].rating}</h2>
            <p>Brand: {colognes[0].brand}</p>
            <p>Description: {colognes[0].description}</p>
            <p>Scent: {colognes[0].scent}</p>
            <p>In Stock: {colognes[0].stock}</p>
          </div>
          <div className="flex flex-col">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

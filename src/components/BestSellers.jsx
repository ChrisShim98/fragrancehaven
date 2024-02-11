import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const BestSellers = ({ products }) => {
  return (
    <div className="w-screen flex flex-col place-items-center py-24 bg-white gap-8">
      <div className="text-center">
        <h1 className="text-3xl font-medium">Best Sellers</h1>
        <Link to="/allProducts" className="underline hover:cursor-pointer">
          See all
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 place-content-center gap-8">
        {products.slice(0, 6).map((product) => {
          return (
            <div className="flex h-full items-end" key={product.id}>
              <ProductCard product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BestSellers;

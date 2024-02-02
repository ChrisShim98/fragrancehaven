import React from "react";
import ProductDetailsCard from "../components/ProductDetailsCard";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProductDetail, selectFavorites } from "../redux/cartSlice";

const ProductDetails = () => {
  const product = useSelector(selectProductDetail);
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.findIndex(
    (favorite) => favorite.id === product.id
  );

  return (
    <div className="flex flex-col items-center w-screen gap-8">
      <div className="w-full bg-gray-100 py-6 text-xl font-medium text-center">
        <h1 className="tracking-wide">Product Details</h1>
      </div>
      <Routes>
        <Route
          path={`/${product.id}`}
          element={
            <ProductDetailsCard cologne={product} isFavorite={isFavorite !== -1} />
          }
        />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default ProductDetails;

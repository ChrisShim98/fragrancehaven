import React, { useEffect, useState } from "react";
import ProductDetailsCard from "../components/ProductDetailsCard";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLiked } from "../redux/cartSlice";
import { useApiCallFunctions } from "../helpers/customHooks/ApiCallFunctions";

const ProductDetails = () => {
  const { getProduct } = useApiCallFunctions();
  const location = useLocation();
  let productId = location.pathname.replace(/^\/productDetails\//, "");
  const [product, setProduct] = useState();

  const liked = useSelector(selectLiked);
  //let isLiked;

  let loadPage = async () => {
    await setProduct(await getProduct(productId));
    //isLiked = liked.findIndex((liked) => liked.id === product.id);
  };

  useEffect(() => {
    loadPage();
  }, []);

  return (
    product && (
      <div className="flex flex-col items-center w-screen gap-8">
        <div className="w-full bg-gray-100 py-6 text-xl font-medium text-center">
          <h1 className="tracking-wide">Product Details</h1>
        </div>
        <div className="px-12">
          <Routes>
            <Route
              path={`/${product.id}`}
              element={
                <ProductDetailsCard
                  product={product}
                  isLiked={false}
                  loadPage={loadPage}
                />
              }
            />
          </Routes>
        </div>
      </div>
    )
  );
};

export default ProductDetails;

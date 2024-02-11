import React, { useState, useEffect } from "react";
import CarouselComp from "../components/CarouselComp";
import TopProduct from "../components/TopProduct";
import FeaturedProduct from "../components/FeaturedProduct";
import BestSellers from "../components/BestSellers";
import { GetAllProducts } from "../api/productRequests";
import { useDispatch } from "react-redux";
import { openPopup, closePopup } from "../redux/popupSlice";
import { setLoading } from "../redux/loadingSlice";

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const getAllProducts = async (pageNumber = 1, searchQuery = "") => {
    dispatch(setLoading(true));
    let response = await GetAllProducts(pageNumber, searchQuery, "amountSold");
    if (response?.error) {
      await dispatch(closePopup());
      dispatch(openPopup({ message: response.message, isError: true }));
    } else {
      setProducts(response.data);
    }
    dispatch(setLoading(false));
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  console.log(products)
  return (
    products.length > 0 &&
    <div>
      <CarouselComp />
      <FeaturedProduct products={products} />
      <TopProduct products={products} />
      <BestSellers products={products} />
    </div>
  );
};

export default Homepage;

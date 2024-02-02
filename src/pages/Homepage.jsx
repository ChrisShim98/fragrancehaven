import React from "react";
import CarouselComp from "../components/CarouselComp";
import TopProduct from "../components/TopProduct";
import FeaturedProduct from "../components/FeaturedProduct";
import BestSellers from "../components/BestSellers";

const Homepage = () => {
  return (
    <div>
      <CarouselComp />
      <FeaturedProduct />
      <TopProduct />
      <BestSellers />
    </div>
  );
};

export default Homepage;

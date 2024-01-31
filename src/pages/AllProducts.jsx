import React from "react";
import { colognes } from "../constants/colognes";
import ProductCard from "../components/ProductCard";
import PageHeader from "../components/PageHeader";

const AllProducts = () => {
  return (
    <div className="flex flex-col items-center w-screen gap-8">
      <PageHeader pageHeader={"All Products"} />
      <div className="grid place-content-center gap-4">
        {colognes.slice(0, 9).map((cologne, index) => {
          return (
            <div key={cologne.name + cologne.brand + index}>
              <ProductCard
                cologne={cologne} 
                isDetailed={true}  
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllProducts;

import React from "react";
import { colognes } from "../constants/colognes";
import ProductCard from "../components/ProductCard";
import PageHeader from "../components/PageHeader";
import Filter from "../components/Filter";

const AllProducts = () => {
  return (
    <div className="flex flex-col items-center w-screen gap-8">
      <PageHeader pageHeader={"All Products"} />
      <div className="">
        <div className="col-span-2 hidden">
          <Filter />
        </div>
        <div className="col-span-4 grid place-content-center gap-4">
          {colognes.slice(0, 9).map((cologne, index) => {
            return (
              <div key={cologne.name + cologne.brand + index}>
                <ProductCard cologne={cologne} isDetailed={true} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;

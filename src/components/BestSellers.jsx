import ProductCard from "./ProductCard";
import { colognes } from "../constants/colognes";
import { Link } from "react-router-dom";

const BestSellers = () => {
  
  return (
    <div className="w-screen flex flex-col place-items-center py-24 bg-white gap-8">
      <div className="text-center">
        <h1 className="text-3xl font-medium">Best Sellers</h1>
        <Link to="/allProducts" className="underline hover:cursor-pointer">See all</Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 place-content-center gap-8">
        {colognes.slice(0, 9).map((cologne, index) => {
          return (
            <div key={cologne.name + cologne.brand + index}>
              <ProductCard
                cologne={cologne}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BestSellers;

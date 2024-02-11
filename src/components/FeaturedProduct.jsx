import React, { useEffect, useState } from "react";
import { useCartFunctions } from "../helpers/customHooks/CartFunctions";
import { priceParse } from "../helpers/formParser";

const FeaturedProduct = ({ products }) => {
  const { addToCart } = useCartFunctions();
  const [randomNumber, setRandomNumber] = useState(0);
  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * products.length));
  }, []);

  return (
    <div className="flex items-center p-5 lg:p-10 overflow-hidden relative">
      <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div className="md:flex items-center -mx-10">
          <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
            <div className="relative">
              <img
                src={
                  products[randomNumber].photos.length > 0
                    ? products[randomNumber].photos[0].url
                    : "/noImage.png"
                }
                className="w-full relative z-10"
                alt={products[randomNumber].name}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 px-10">
            <div className="mb-10">
              <h1 className="font-bold uppercase text-2xl mb-5">
                {products[randomNumber].name}
              </h1>
              <p className="text-sm">{products[randomNumber].description} </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="inline-block align-bottom">
                <span className="text-2xl leading-none align-baseline">$</span>
                <span className="font-bold text-5xl leading-none align-baseline">
                  {priceParse(products[randomNumber].price).slice(0, -3)}
                </span>
                <span className="text-2xl leading-none align-baseline">
                  {priceParse(products[randomNumber].price).slice(-3)}
                </span>
              </div>
              <div className="inline-block align-bottom pt-4 md:pt-0">
                <button
                  className={
                    products[randomNumber].stock === 0
                      ? "btn-disabled px-10 py-2 font-semibold"
                      : "btn btn-main px-10 py-2 font-semibold"
                  }
                  disabled={products[randomNumber].stock === 0}
                  onClick={() => {
                    addToCart(products[randomNumber]);
                  }}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;

import React, { useEffect, useState } from "react";
import { colognes } from "../constants/colognes";

const FeaturedProduct = () => {
  const [randomNumber, setRandomNumber] = useState(0);
  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * colognes.length));
  }, []);

  return (
    <div className="flex items-center p-5 lg:p-10 overflow-hidden relative">
      <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div className="md:flex items-center -mx-10">
          <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
            <div className="relative">
              <img
                src={colognes[randomNumber].img}
                className="w-full relative z-10"
                alt=""
              />
              <div className="border-4 border-gray-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-10">
            <div className="mb-10">
              <h1 className="font-bold uppercase text-2xl mb-5">
                {colognes[randomNumber].name}
              </h1>
              <p className="text-sm">
                {colognes[randomNumber].description}{" "}
                <a
                  href="#"
                  className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900"
                >
                  MORE
                </a>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="inline-block align-bottom">
                <span className="text-2xl leading-none align-baseline">$</span>
                <span className="font-bold text-5xl leading-none align-baseline">
                  {colognes[randomNumber].price.slice(0, -3)}
                </span>
                <span className="text-2xl leading-none align-baseline">
                  {colognes[randomNumber].price.slice(-3)}
                </span>
              </div>
              <div className="inline-block align-bottom pt-4 md:pt-0">
                <button className="transition ease-in duration-300 bg-undertone text-white hover:bg-primary hover:shadow-lg rounded-lg px-10 py-2 font-semibold">
                  <i className="-ml-2 mr-2"></i> BUY NOW
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

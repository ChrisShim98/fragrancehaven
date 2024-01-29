import { FaRegHeart, FaStar } from "react-icons/fa";

const ProductCard = () => {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="max-w-[20rem] w-fullshadow-lg rounded-xl p-6">
        <div className="flex flex-col">
          <div className="">
            <div className="relative h-62 w-full">
              <div className="absolute flex flex-col top-0 right-0 p-3">
                <button className="transition ease-in duration-300 hover:text-pink-300 shadow hover:shadow-md rounded-full w-8 h-8 text-center p-1 grid place-content-center">
                  <FaRegHeart />
                </button>
              </div>
              <img
                src="/perfume.png"
                alt="Perfume"
                className="w-full object-fill rounded-2xl"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <div className="w-full text-sm flex gap-2 items-center text-gray-600">
                  <div className="flex items-center">
                    <FaStar className="text-yellow-300 relative top-[-1px]" />
                    <span className="text-gray-400 whitespace-nowrap">
                      4.60
                    </span>
                  </div>
                  <span className="text-gray-400">Avaliable for pickup</span>
                </div>
                <div className="flex items-center w-full">
                  <h2 className="text-lg cursor-pointer truncate">
                    Holder Perfume Name
                  </h2>
                </div>
                <div>
                  <h1 className="text-gray-400 text-sm">By Company Name</h1>
                </div>
              </div>
              <div className="flex items-center text-xs rounded-md">
                INSTOCK
              </div>
              <div className="text-xl font-semibold mt-1 text-end">
                $24,000.00
              </div>
              <div className="flex text-sm font-medium justify-end">
                <button className="transition ease-in duration-300 text-white rounded-lg text-sm font-medium bg-undertone px-5 py-2 hover:shadow-lg hover:bg-primary hover:text-white">
                  Add Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

import { FaRegHeart, FaStar } from "react-icons/fa";

const ProductCard = ({ name, brand, price, stock, img, rating }) => {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="max-w-[20rem] w-fullshadow-lg rounded-xl p-6">
        <div className="flex flex-col">
          <div className="relative h-72 w-full items-center flex">
            <div className="absolute flex flex-col top-0 right-0 p-3">
              <button className="transition ease-in duration-300 bg-white hover:text-pink-300 shadow hover:shadow-md rounded-full w-8 h-8 text-center p-1 grid place-content-center">
                <FaRegHeart />
              </button>
            </div>
            <img
              src={img}
              alt={name}
              className="w-full object-fill rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <div className="w-full text-sm flex gap-2 items-center text-gray-600">
                <div className="flex items-center mr-auto">
                  <FaStar className="text-yellow-300 relative top-[-1px]" />
                  <span className="text-gray-400 whitespace-nowrap">
                    {rating}
                  </span>
                </div>
                <span className="text-gray-400">{stock > 0 ? "Avaliable for pickup" : "OUT OF STOCK"}</span>
              </div>
              <div className="flex items-center w-full">
                <h2 className="text-lg cursor-pointer truncate">{name}</h2>
              </div>
              <div>
                <h1 className="text-gray-400 text-sm">{brand}</h1>
              </div>
            </div>
            <div className="flex items-center text-xs rounded-md">
              {stock > 0 ? "INSTOCK" : "OUT OF STOCK"}
            </div>
            <div className="text-xl font-semibold mt-1 text-end">{price}</div>
            <div className="flex text-sm font-medium justify-end">
              <button className="transition ease-in duration-300 text-white rounded-lg text-sm font-medium bg-undertone px-5 py-2 hover:shadow-lg hover:bg-primary hover:text-white">
                Add Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

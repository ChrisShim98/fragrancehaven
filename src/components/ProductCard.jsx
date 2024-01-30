import { FaRegHeart, FaStar, FaEye } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import {addProduct, selectCart} from '../redux/cartSlice'

const ProductCard = ({ cologne, isDetailed = false }) => {
  const count = useSelector(selectCart);
  const dispatch = useDispatch();
  return (
    <div className="relative flex flex-col items-center justify-center">
      <div
        className={
          isDetailed
            ? "w-[45rem] w-fullshadow-lg rounded-xl p-6"
            : "w-[20rem] w-fullshadow-lg rounded-xl p-6"
        }
      >
        <div className={isDetailed ? "flex gap-6" : "flex flex-col"}>
          <div
            className={
              isDetailed
                ? "relative h-72 w-[25rem] items-center flex"
                : "relative h-72 w-full items-center flex"
            }
          >
            <div className="absolute flex flex-col top-0 right-0 p-3">
              <button className="transition ease-in duration-300 bg-white hover:text-pink-300 shadow hover:shadow-md rounded-full w-8 h-8 text-center p-1 grid place-content-center">
                <FaRegHeart />
              </button>
            </div>
            <img
              src={cologne.img}
              alt={cologne.name}
              className="w-full object-fill rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <div className="flex flex-col w-full">
              <div
                className={
                  isDetailed
                    ? "w-full text-sm flex gap-2 items-center text-gray-600 order-1"
                    : "w-full text-sm flex gap-2 items-center text-gray-600"
                }
              >
                <div className="flex items-center mr-auto gap-1">
                  <FaStar className="text-yellow-300 relative top-[-1px]" />
                  <span className="text-gray-400 whitespace-nowrap">
                    {cologne.rating}
                  </span>
                </div>
                <span className="text-gray-400">
                  {isDetailed
                    ? ""
                    : cologne.stock > 0
                    ? "Avaliable for pickup"
                    : "OUT OF STOCK"}
                </span>
              </div>
              <div className="flex items-center w-full">
                <h2 className="text-lg cursor-pointer truncate">
                  {cologne.name}
                </h2>
              </div>
              <div>
                <h1 className="text-gray-400 text-sm">{cologne.brand}</h1>
              </div>
              <div
                className={isDetailed ? "text-xl font-semibold mt-1" : "hidden"}
              >
                ${cologne.price}
              </div>
            </div>
            <div className="flex items-center text-xs rounded-md">
              {isDetailed && cologne.stock > 0
                ? cologne.stock + " Available"
                : cologne.stock > 0
                ? "INSTOCK"
                : "OUT OF STOCK"}
            </div>
            <div
              className={
                isDetailed ? "hidden" : "text-xl font-semibold mt-1 text-end"
              }
            >
              ${cologne.price}
            </div>
            <div
              className={
                isDetailed ? "text-sm mt-1 text-start lineClamp" : "hidden"
              }
            >
              {cologne.description}
            </div>
            <div className="flex text-sm font-medium justify-end items-center gap-2">
              <button className="btn btn-main text-xl p-2">
                <FaEye />
              </button>
              <button onClick={() => {dispatch(addProduct(cologne))}} className="btn btn-main text-sm font-medium px-5 py-2">
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

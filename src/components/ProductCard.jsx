import React, { useState, useEffect } from "react";
import {
  FaStar,
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaEye,
  FaRegHeart,
} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { addDetail, selectLiked, editLiked } from "../redux/cartSlice";
import { Link } from "react-router-dom";
import { scrollToTop } from "../helpers/scrollToTop";
import { priceParse, parseRating } from "../helpers/formParser";
import { useCartFunctions } from "../helpers/customHooks/CartFunctions";

const ProductCard = ({ product, isDetailed = false }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const liked = useSelector(selectLiked);
  const isLiked = liked.findIndex((liked) => liked.id === product.id);
  const dispatch = useDispatch();
  const { addToCart } = useCartFunctions();

  useEffect(() => {
    for (let i = 0; i < product.photos.length; i++) {
      if (product.photos[i].isMain) {
        setCurrentImage(i);
      }
    }
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center h-full">
      <div
        className={
          isDetailed
            ? "w-[90vw] sm:w-[640px] lg:w-[700px] xl:w-[840px] rounded-xl p-6"
            : "w-[20rem] h-full rounded-xl p-6"
        }
      >
        <div
          className={
            isDetailed
              ? "grid sm:grid-flow-col gap-4"
              : "grid grid-rows-2 h-full gap-4"
          }
        >
          <div className="grid grid-cols-6 place-items-center gap-4 text-3xl relative">
            <button
              disabled={currentImage === 0}
              onClick={() => {
                setCurrentImage(currentImage - 1);
              }}
              className={
                currentImage === 0
                  ? "col-span-1 text-gray-300"
                  : "col-span-1 link"
              }
            >
              <FaArrowAltCircleLeft />
            </button>

            <img
              src={
                product.photos.length > 0
                  ? product.photos[currentImage].url
                  : "/noImage.png"
              }
              className="w-full relative col-span-4"
              alt={product.name}
            />
            {product.salePercentage > 0 && (
              <div className="absolute top-0 left-[5%] rotate-[-20deg] bg-primary shadow-md px-8 font-semibold">
                Sale!
              </div>
            )}
            <button
              disabled={
                currentImage === product.photos.length - 1 ||
                product.photos.length === 0
              }
              onClick={() => {
                setCurrentImage(currentImage + 1);
              }}
              className={
                currentImage === product.photos.length - 1 ||
                product.photos.length === 0
                  ? "col-span-1 text-gray-300"
                  : "col-span-1 link"
              }
            >
              <FaArrowAltCircleRight />
            </button>
            <div className="absolute top-0 sm:top-[5%] right-[5%] sm:right-[10%]">
              <button
                onClick={() => {
                  dispatch(editLiked(product));
                }}
                className={
                  isLiked !== -1
                    ? "bg-white text-pink-300 shadow-md rounded-full w-8 h-8 text-center p-1 grid place-content-center text-sm"
                    : "transition ease-in duration-300 bg-white hover:text-pink-300 shadow hover:shadow-md rounded-full text-sm w-8 h-8 text-center p-1 grid place-content-center"
                }
              >
                <FaRegHeart />
              </button>
            </div>
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
                    {parseRating(product.reviews)}
                  </span>
                </div>
                <span className="text-gray-400">
                  {isDetailed
                    ? ""
                    : product.stock > 0
                    ? "Avaliable for pickup"
                    : "OUT OF STOCK"}
                </span>
              </div>
              <div className="flex items-center w-full">
                <h2 className="text-lg">{product.name}</h2>
              </div>
              <div>
                <h1 className="text-gray-400 text-sm">{product.brand.name}</h1>
              </div>
              <div
                className={isDetailed ? "text-xl font-semibold mt-1" : "hidden"}
              >
                <h2 className="text-xl font-medium">
                  $
                  {product.salePercentage > 0 ? (
                    <span>
                      {priceParse(product.salePrice)}
                      <span className="text-primary relative line-through ml-2">
                        ${priceParse(product.price)}
                      </span>
                    </span>
                  ) : (
                    priceParse(product.price)
                  )}
                </h2>
              </div>
            </div>
            <div className="flex items-center text-xs rounded-md">
              {isDetailed && product.stock > 0
                ? product.stock + " Available"
                : product.stock > 0
                ? "INSTOCK"
                : "OUT OF STOCK"}
            </div>
            <div
              className={
                isDetailed ? "hidden" : "text-xl font-semibold mt-1 text-end"
              }
            >
              <h2 className="text-xl font-medium">
                $
                {product.salePercentage > 0 ? (
                  <span>
                    {priceParse(product.salePrice)}
                    <span className="text-primary relative line-through ml-2">
                      ${priceParse(product.price)}
                    </span>
                  </span>
                ) : (
                  priceParse(product.price)
                )}
              </h2>
            </div>
            <div
              className={
                isDetailed ? "text-sm mt-1 text-start lineClamp" : "hidden"
              }
            >
              {product.description}
            </div>
            <div className="flex text-sm font-medium justify-end items-center gap-2">
              <Link
                onClick={() => {
                  scrollToTop();
                }}
                to={`/productDetails/${product.id}`}
                className="btn btn-main text-xl p-2"
              >
                <FaEye />
              </Link>
              <button
                disabled={product.stock === 0}
                onClick={() => {
                  addToCart(product);
                }}
                className={
                  product.stock === 0
                    ? "btn-disabled text-sm font-medium px-5 py-2"
                    : "btn btn-main text-sm font-medium px-5 py-2"
                }
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

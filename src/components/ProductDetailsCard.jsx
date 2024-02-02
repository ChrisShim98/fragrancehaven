import React from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addProduct, editFavorite } from "../redux/cartSlice";

const ProductDetailsCard = ({ cologne, isFavorite = false }) => {
  const dispatch = useDispatch();

  return (
    <div className="grid md:grid-cols-2 px-8 md:px-0 gap-8 py-4">
      <div>
        <img
          src={cologne.img}
          className="w-full relative z-10"
          alt={cologne.name}
        />
      </div>
      <div className="flex flex-col sm:pr-8">
        <div className="flex flex-col border-b border-gray-200 py-4 md:pr-4">
          <h2 className="text-2xl font-medium">{cologne.name}</h2>
          <h2 className="text-xl font-medium">${cologne.price}</h2>
          <div className="flex gap-1 items-center">
            <FaStar className="text-yellow-300 relative top-[-1px]" />
            <h2>{cologne.rating}</h2>
          </div>
          <p className="py-4">{cologne.description}</p>
          <div className="grid grid-cols-3">
            <p>Brand: </p>
            <p className="col-span-2">{cologne.brand}</p>
            <p>Scent: </p>
            <p className="col-span-2">{cologne.scent}</p>
            <p>In Stock: </p>
            <p className="col-span-2">{cologne.stock}</p>
          </div>
        </div>
        <div className="flex flex-col"></div>
        <div className="flex gap-4 py-6">
          <button
            disabled={cologne.stock === 0}
            onClick={() => {
              dispatch(addProduct(cologne));
            }}
            className={
              cologne.stock === 0
                ? "btn-disabled text-sm font-medium px-5 py-2"
                : "btn btn-main text-sm font-medium px-5 py-2"
            }
          >
            Add To Cart
          </button>
          <button
            onClick={() => {
              dispatch(editFavorite(cologne));
            }}
            className={isFavorite ? "bg-primary rounded-lg text-xl p-2" : "btn btn-main text-xl p-2"}
          >
            <FaRegHeart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;

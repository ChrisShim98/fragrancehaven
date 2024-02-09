import React, { useState, useEffect } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { totalUnitParse } from "../helpers/formParser";
import { useDispatch } from "react-redux";
import { addProduct, deleteProduct, deleteAll } from "../redux/cartSlice";

const CartTile = ({ product }) => {
  const dispatch = useDispatch();
  const [mainPhoto, setMainPhoto] = useState(0);

  useEffect(() => {
    for (let i = 0; i < product.photos.length; i++) {
      if (product.photos[i].isMain) {
        setMainPhoto(i);
      }
    }
  }, []);

  return (
    <div className="w-full grid p-4 place-items-center">
      <img
        src={product.photos[mainPhoto].url}
        className="flex md:hidden p-2"
        alt={product.name}
      />
      <div className="grid grid-cols-2 w-[21rem] md:w-auto md:grid-cols-10 place-items-start md:place-items-center gap-2">
        <img
          src={product.photos[mainPhoto].url}
          className="hidden md:flex p-2 w-full"
          alt={product.name}
        />

        <p className="flex md:hidden">Name:</p>
        <p className="md:col-span-3">{product.name}</p>

        <p className="flex md:hidden">Price:</p>
        <p className="md:col-span-2">${product.price}</p>

        <p className="flex md:hidden">Amount:</p>
        <div className="flex items-center">
          <button
            onClick={() => {
              dispatch(deleteProduct(product));
            }}
            className="px-2 border"
          >
            -
          </button>
          <p className="px-6 border">{product.amount ? product.amount : 1}</p>
          <button
            onClick={() => {
              dispatch(addProduct(product));
            }}
            className="px-2 border"
          >
            +
          </button>
        </div>

        <p className="flex md:hidden">Total:</p>
        <p className="md:col-span-2">
          ${totalUnitParse(product.price, product.amount)}
        </p>

        <p className="flex md:hidden">Action:</p>
        <button
          onClick={() => {
            dispatch(deleteAll(product));
          }}
        >
          <RiDeleteBinLine size={"1.5rem"} />
        </button>
      </div>
    </div>
  );
};

export default CartTile;

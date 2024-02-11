import React, { useState, useEffect } from "react";
import { totalUnitParse } from "../helpers/formParser";
import { useDispatch } from "react-redux";
import { priceParse } from "../helpers/formParser";
import { useCartFunctions } from "../helpers/customHooks/CartFunctions";

const CartTile = ({ product }) => {
  const dispatch = useDispatch();
  const [mainPhoto, setMainPhoto] = useState(0);
  const { addToCart, deleteFromCart } = useCartFunctions();

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
        <p className="md:col-span-2">$
            {product.salePercentage > 0 ? (
              <span>
                {priceParse(product.salePrice)}
                <span className="text-primary relative line-through ml-2">
                  ${priceParse(product.price)}
                </span>
              </span>
            ) : (
              priceParse(product.price)
            )}</p>

        <p className="flex md:hidden">Amount:</p>
        <div className="flex items-center md:col-span-2">
          <button
            onClick={() => {
              deleteFromCart(product);
            }}
            className="px-2 border"
          >
            -
          </button>
          <p className="px-6 border">{product.amount ? product.amount : 1}</p>
          <button
            onClick={() => {
              addToCart(product);
            }}
            className="px-2 border"
          >
            +
          </button>
        </div>

        <p className="flex md:hidden">Total:</p>
        <p className="md:col-span-2">
          ${product.salePercentage > 0 ? totalUnitParse(product.salePrice, product.amount) : totalUnitParse(product.price, product.amount)}
        </p>
      </div>
    </div>
  );
};

export default CartTile;

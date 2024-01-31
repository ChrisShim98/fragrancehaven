import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { totalUnitParse } from "../helpers/formParser";
import { useDispatch } from 'react-redux';
import { addProduct, deleteProduct, deleteAll } from '../redux/cartSlice'

const CartTile = ({ cologne }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full grid py-4 place-items-center">
      <img
        src={cologne.img}
        className="flex md:hidden p-2"
        alt={cologne.name}
      />
      <div className="grid grid-cols-2 w-[21rem] md:w-auto md:grid-cols-10 place-items-start md:place-items-center gap-2">
        <img
          src={cologne.img}
          className="hidden md:flex p-2 w-full"
          alt={cologne.name}
        />

        <p className="flex md:hidden">Name:</p>
        <p className="md:col-span-3">{cologne.name}</p>

        <p className="flex md:hidden">Price:</p>
        <p className="md:col-span-2">${cologne.price}</p>

        <p className="flex md:hidden">Amount:</p>
        <div className="flex items-center">
          <button onClick={() => {dispatch(deleteProduct(cologne))}} className="px-2 border">-</button>
          <p className="px-6 border">{cologne.amount ? cologne.amount : 1}</p>
          <button onClick={() => {dispatch(addProduct(cologne))}} className="px-2 border">+</button>
        </div>

        <p className="flex md:hidden">Total:</p>
        <p className="md:col-span-2">
          $
          {totalUnitParse(cologne.price, cologne.amount)}
        </p>

        <p className="flex md:hidden">Action:</p>
        <button onClick={() => {dispatch(deleteAll(cologne))}}>
          <RiDeleteBinLine size={"1.5rem"} />
        </button>
      </div>
    </div>
  );
};

export default CartTile;

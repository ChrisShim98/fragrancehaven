import React from "react";
import PageHeader from "../components/PageHeader";
import CartTile from "../components/CartTile";
import { useSelector } from "react-redux";
import { selectCart } from "../redux/cartSlice";
import { cartTotalParse } from "../helpers/formParser";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector(selectCart);

  return (
    <div className="w-full min-h-[50vh] xl:min-h-[80vh] flex flex-col gap-8 items-center">
      <PageHeader pageHeader={"Cart"} />
      <h2 className="font-medium text-2xl">Welcome To Your Cart</h2>
      <span className="w-24 h-1 border-black border-t-2" />
      <div className="grid w-full py-4 px-2 md:px-10 pb-10">
        <div
          className={
            cart.length > 0
              ? "w-full hidden md:grid place-items-center md:border md:bg-gray-100"
              : "hidden"
          }
        >
          <div className="w-full grid py-4 place-items-center">
            <div className="grid md:grid-cols-10 md:place-items-center gap-2">
              <p className="p-2 w-full">IMAGE</p>
              <p className="col-span-3">PRODUCT NAME</p>
              <p className="col-span-2">UNIT PRICE</p>
              <p className="px-8">QUANTITY</p>
              <p className="col-span-2">SUBTOTAL</p>
              <p>ACTION</p>
            </div>
          </div>
        </div>

        {cart.length <= 0 ? (
          <div className="flex justify-center">
            <p>Nothing to show here</p>
          </div>
        ) : (
          cart.map((cartItem) => {
            return (
              <div className="md:border" key={cartItem.id}>
                <CartTile cologne={cartItem} />
              </div>
            );
          })
        )}
        <div
          className={
            cart.length > 0
              ? "flex flex-col gap-4 items-end pt-8 text-xl font-medium px-4"
              : "hidden"
          }
        >
          <h2>Grand Total: ${cartTotalParse(cart)}</h2>
          <Link to="/checkout" className="btn btn-main px-4 py-2">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;

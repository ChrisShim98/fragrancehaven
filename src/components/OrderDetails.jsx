import React from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../redux/cartSlice";
import { cartTotalParse, totalUnitParse } from "../helpers/formParser";
import { Navigate } from "react-router-dom";

const OrderDetails = () => {
  const cart = useSelector(selectCart);
  
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-medium">Order Details</h2>
      <div className="bg-gray-100 rounded-lg p-4 grid grid-cols-2 gap-4">
        <label className="font-medium">Product</label>
        <label className="font-medium place-self-end">Total</label>
        <div className="h-1 border-gray-300 border-t-[1px] col-span-2" />
        {cart.length === 0 ? (
          <div>
            <p>Nothing to show here</p>
          </div>
        ) : (
          cart.map((product) => {
            return (
              <div key={product.id} className="grid grid-cols-2 col-span-2">
                <p>
                  {product.name} x {product.amount}
                </p>
                <p className="place-self-end">
                  $
                  {product.salePercentage > 0
                    ? totalUnitParse(product.salePrice, product.amount)
                    : totalUnitParse(product.price, product.amount)}
                </p>
              </div>
            );
          })
        )}
        <div className="h-1 border-gray-300 border-t-[1px] col-span-2" />
        <p>Shipping</p>
        <p className="place-self-end">Free Shipping</p>
        <div className="h-1 border-gray-300 border-t-[1px] col-span-2" />
        <p className="text-lg font-medium">Total</p>
        <p className="place-self-end text-primary text-lg font-medium">
          ${cartTotalParse(cart)}
        </p>
      </div>
      {cart.length <= 0 && <Navigate to="/" replace />}
    </div>
  );
};

export default OrderDetails;

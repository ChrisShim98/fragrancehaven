import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import BillingDetails from "../components/BillingDetails";
import OrderDetails from "../components/OrderDetails";

const Checkout = () => {
  const [placeOrder, setPlaceOrder] = useState(false);
  return (
    <div className="flex flex-col w-screen gap-8">
      <PageHeader pageHeader={"Checkout"} />
      <div className="flex justify-center">
        <div className="grid md:grid-cols-6 gap-8 p-8">
          <div className="md:col-span-4">
            <BillingDetails placeOrder={placeOrder} setPlaceOrder={setPlaceOrder} />
          </div>
          <div className="md:col-span-2">
            <OrderDetails />
            <button
              type="button"
              onClick={() => {setPlaceOrder(true)}}
              className="btn btn-main py-2 px-4 mt-4 font-medium w-full"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

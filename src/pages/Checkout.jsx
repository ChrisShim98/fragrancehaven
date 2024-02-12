import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import BillingDetails from "../components/BillingDetails";
import OrderDetails from "../components/OrderDetails";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate()
  const [placeOrder, setPlaceOrder] = useState(false);
  let userLoggedIn = localStorage.getItem('token') !== null 
  return (
    <div className="flex flex-col w-screen gap-8">
      <PageHeader pageHeader={"Checkout"} />
      <div className="flex justify-center">
        <div className="grid md:grid-cols-6 gap-8 p-8">
          <div className="md:col-span-4">
            <BillingDetails
              placeOrder={placeOrder}
              setPlaceOrder={setPlaceOrder}
            />
          </div>
          <div className="md:col-span-2 flex flex-col">
            <OrderDetails />
            <button
              type="button"
              onClick={() => {
                userLoggedIn ? setPlaceOrder(true) : navigate("/signIn");
              }}
              className="btn btn-main py-2 px-4 mt-4 font-medium w-full flex justify-center items-center gap-1"
            >
              Place Order
              <FaArrowRight />
            </button>
            <Link
              to={"/cart"}
              className="btn btn-main py-2 px-4 mt-4 font-medium w-full flex justify-center items-center gap-1"
            >
              <FaArrowLeft />
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

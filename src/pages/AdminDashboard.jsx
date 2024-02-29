import React from "react";
import PageHeader from "../components/PageHeader";
import { Routes, Route, Link } from "react-router-dom";
import AddProduct from "./Admin/AddProduct";
import ModifyProduct from "./Admin/ModifyProduct";
import ViewTransactions from "./Admin/ViewTransactions";
import ModifyAccount from "./Admin/ModifyAccount";
import Analytics from "./Admin/Analytics";
import { FaWrench } from "react-icons/fa";
import { IoIosAddCircle, IoMdAnalytics } from "react-icons/io";
import { BsGearFill } from "react-icons/bs";
import { RiFileSearchFill } from "react-icons/ri";

const AdminDashboard = () => {
  return (
    <div className="w-full flex flex-col gap-12">
      <PageHeader pageHeader={"Admin Dashboard"} />
      <div className="grid lg:grid-cols-6 xl:grid-cols-8 px-8 py-12 sm:px-12 gap-12 lg:gap-4">
        <div className="flex flex-col gap-4 items-start lg:col-span-2 lg:px-2 lg:py-6">
          <h1 className="font-medium text-xl sm:text-3xl pb-2">
            Available Features
          </h1>
          <span className="w-24 h-1 border-black border-t-2 pb-4" />
          <div className="flex flex-col">
            <Link
              to="/adminDashboard/"
              className="text-undertone hover:text-primary py-2 flex gap-2 items-center"
            >
              <FaWrench /> Modify My Account
            </Link>
            <Link
              to="/adminDashboard/addProduct"
              className="text-undertone hover:text-primary py-2 flex gap-2 items-center"
            >
              <IoIosAddCircle /> Add Product
            </Link>
            <Link
              to="/adminDashboard/modifyProduct"
              className="text-undertone hover:text-primary py-2 flex gap-2 items-center"
            >
              <BsGearFill /> Modify Product
            </Link>
            <Link
              to="/adminDashboard/viewTransactions"
              className="text-undertone hover:text-primary py-2 flex gap-2 items-center"
            >
              <RiFileSearchFill /> View Transactions
            </Link>
            <Link
              to="/adminDashboard/analytics"
              className="text-undertone hover:text-primary py-2 flex gap-2 items-center"
            >
              <IoMdAnalytics />
              Analytics
            </Link>
          </div>
        </div>
        <div className="lg:col-span-4 xl:col-span-6 lg:border lg:rounded-lg lg:px-2 lg:py-6">
          <Routes>
            <Route path="/" element={<ModifyAccount />} />
            <Route path="/addProduct" element={<AddProduct />} />
            <Route path="/modifyProduct" element={<ModifyProduct />} />
            <Route path="/viewTransactions" element={<ViewTransactions />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

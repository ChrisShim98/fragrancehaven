import React from "react";
import PageHeader from "../components/PageHeader";
import { Routes, Route, Link } from "react-router-dom";
import AddProduct from "./Admin/AddProduct";
import ModifyProduct from "./Admin/ModifyProduct";
import ViewTransactions from "./Admin/ViewTransactions";

const AdminDashboard = () => {
  return (
    <div className="w-full flex flex-col gap-12">
      <PageHeader pageHeader={"Admin Dashboard"} />
      <div className="grid lg:grid-cols-6 p-12 gap-12 lg:gap-4">
        <div className="flex flex-col gap-4 items-start lg:items-center lg:col-span-2 lg:px-2 lg:py-6">
            <h1 className="font-medium text-xl sm:text-3xl pb-2">
            Available Features
            </h1>
            <span className="w-24 h-1 border-black border-t-2 pb-4" />
            <Link to="/adminDashboard/" className="btn btn-main px-4 py-2">Modify My Account</Link>
            <Link to="/adminDashboard/addProduct" className="btn btn-main px-4 py-2">Add Product</Link>
            <Link to="/adminDashboard/modifyProduct" className="btn btn-main px-4 py-2">Modify Product</Link>
            <Link to="/adminDashboard/viewTransactions" className="btn btn-main px-4 py-2">View Transactions</Link>
        </div>
        <div className="lg:col-span-4 lg:border lg:rounded-lg lg:px-2 lg:py-6">
            <Routes>
                <Route path="/" element={<h1 className="font-medium text-lg sm:text-xl pb-2 lg:text-center">Select an option</h1>} />
                <Route path="/addProduct" element={<AddProduct />} />
                <Route path="/modifyProduct" element={<ModifyProduct />} />
                <Route path="/viewTransactions" element={<ViewTransactions />} />
            </Routes>
        </div>
      </div>
      
      
    </div>
  );
};

export default AdminDashboard;

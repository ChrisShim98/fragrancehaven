import React from "react";
import PageHeader from "../components/PageHeader";
import { Routes, Route, Link } from "react-router-dom";
import AddProduct from "./Admin/AddProduct";
import DeleteProduct from "./Admin/DeleteProduct";
import EditProduct from "./Admin/EditProduct";
import AddProductPhoto from "./Admin/AddProductPhoto";
import DeleteProductPhoto from "./Admin/DeleteProductPhoto";

const AdminDashboard = () => {
  return (
    <div className="w-full flex flex-col gap-12">
      <PageHeader pageHeader={"Admin Dashboard"} />
      <div className="grid lg:grid-cols-4 p-12 gap-12 lg:gap-4">
        <div className="flex flex-col gap-4 items-start lg:items-center col-span-1">
            <h1 className="font-medium text-xl sm:text-3xl pb-2">
            Available Features
            </h1>
            <span className="w-24 h-1 border-black border-t-2 pb-4" />
            <Link to="/adminDashboard/addProduct" className="btn btn-main px-4 py-2">Add Product</Link>
            <Link to="/adminDashboard/editProduct" className="btn btn-main px-4 py-2">Edit Product</Link>
            <Link to="/adminDashboard/deleteProduct" className="btn btn-main px-4 py-2">Delete Product</Link>
            <Link to="/adminDashboard/addProductPhoto" className="btn btn-main px-4 py-2">Add Photo to Product</Link>
            <Link to="/adminDashboard/deleteProductPhoto" className="btn btn-main px-4 py-2">
            Delete Photo from Product
            </Link>
        </div>
        <div className="col-span-3 lg:px-6">
            <Routes>
                <Route path="/" element={<h1 className="font-medium text-lg sm:text-xl pb-2">Select an option</h1>} />
                <Route path="/addProduct" element={<AddProduct />} />
                <Route path="/editProduct" element={<EditProduct />} />
                <Route path="/deleteProduct" element={<DeleteProduct />} />
                <Route path="/addProductPhoto" element={<AddProductPhoto />} />
                <Route path="/deleteProductPhoto" element={<DeleteProductPhoto />} />
            </Routes>
        </div>
      </div>
      
      
    </div>
  );
};

export default AdminDashboard;

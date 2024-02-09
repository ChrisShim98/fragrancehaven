import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import PageHeader from "../components/PageHeader";
import Filter from "../components/Filter";
import { GetAllProducts } from "../api/productRequests";
import { useDispatch, useSelector } from "react-redux";
import { openPopup, closePopup } from "../redux/popupSlice";
import { setLoading, selectLoading } from "../redux/loadingSlice";
import { scrollToTop } from "../helpers/scrollToTop";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const loadingDetails = useSelector(selectLoading);
  const [pagination, setPagination] = useState({});

  const getAllProducts = async (pageNumber = 1, searchQuery = "") => {
    dispatch(setLoading(true));
    let response = await GetAllProducts(pageNumber, searchQuery);
    if (response?.error) {
      await dispatch(closePopup());
      dispatch(openPopup({ message: response.message, isError: true }));
    } else {
      setProducts(response.data);
      setPagination(response.pagination);
    }
    dispatch(setLoading(false));
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const setPaginationButtons = () => {
    const buttons = [];

    for (let i = 0; i < pagination.totalPages; i++) {
      buttons.push(
        <button
          type="button"
          onClick={() => {
            getAllProducts(i + 1);
            scrollToTop();
          }}
          disabled={pagination.currentPage === i + 1}
          key={i}
          className={
            pagination.currentPage === i + 1
              ? "btn-disabled h-8 w-8 flex items-center justify-center"
              : "btn btn-main h-8 w-8 flex items-center justify-center"
          }
        >
          {i + 1}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className="flex flex-col items-center w-screen gap-8">
      <PageHeader pageHeader={"All Products"} />
      <div className="py-10">
        <div className="col-span-2 hidden">
          <Filter />
        </div>
        <div className="grid gap-4">
          {loadingDetails.loading === false &&
            (products.length === 0 ? (
              <p>Nothing to show here</p>
            ) : (
              products.map((product) => {
                return (
                  <div key={product.id}>
                    <ProductCard product={product} isDetailed={true} />
                  </div>
                );
              })
            ))}
        </div>
        <div className="flex gap-2 py-12">{setPaginationButtons()}</div>
      </div>
    </div>
  );
};

export default AllProducts;

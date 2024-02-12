import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import PageHeader from "../components/PageHeader";
import Filter from "../components/Filter";
import { GetAllProducts } from "../api/productRequests";
import { useDispatch, useSelector } from "react-redux";
import { openPopup, closePopup } from "../redux/popupSlice";
import { selectSearch } from "../redux/searchSlice";
import { setLoading, selectLoading } from "../redux/loadingSlice";
import { scrollToTop } from "../helpers/scrollToTop";
import { selectfilter } from "../redux/filterSlice";
import { selectLiked } from "../redux/cartSlice";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const loadingDetails = useSelector(selectLoading);
  const searchDetails = useSelector(selectSearch);
  const [pagination, setPagination] = useState({});
  const filterDetails = useSelector(selectfilter);
  const likedDetails = useSelector(selectLiked);

  const getAllProducts = async (
    pageNumber = 1,
    searchQuery = "",
    orderBy = "",
    productsWithReview = false,
    productsOnSale = false,
    productsInStock = false
  ) => {
    dispatch(setLoading(true));
    if (searchDetails.isActive) {
      searchQuery = searchDetails.query;
    }
    let response = await GetAllProducts(
      pageNumber,
      searchQuery,
      orderBy,
      productsWithReview,
      productsOnSale,
      productsInStock
    );
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
  }, [searchDetails.query]);

  const setPaginationButtons = () => {
    const buttons = [];

    for (let i = 0; i < pagination.totalPages; i++) {
      buttons.push(
        <button
          type="button"
          onClick={() => {
            if (searchDetails.isActive) {
              getAllProducts(i + 1, searchDetails.query);
              scrollToTop();
            } else {
              getAllProducts(i + 1);
              scrollToTop();
            }
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
      <div className="py-8 grid lg:grid-cols-8 gap-8">
        <div className="min-w-[300px] lg:min-w-0 lg:w-full px-8 lg:px-0 lg:col-span-2">
          <Filter getAllProducts={getAllProducts}/>
        </div>
        <div className="flex flex-col lg:col-span-6 gap-6">
          {!filterDetails.isLiked && (
            <p className="text-xs px-8">
              Showing page {pagination.currentPage} of {pagination.totalPages}
            </p>
          )}
          <div className="grid gap-4">
            {loadingDetails.loading === false &&
              (filterDetails.isLiked && likedDetails.length === 0 ? (
                <p className="text-center w-[90vw] sm:w-[640px] lg:w-[700px] xl:w-[840px] rounded-xl p-6">
                  Nothing to show here
                </p>
              ) : filterDetails.isLiked && likedDetails.length > 0 ? (
                likedDetails.map((product) => {
                  return (
                    <div key={product.id}>
                      <ProductCard product={product} isDetailed={true} />
                    </div>
                  );
                })
              ) : products.length === 0 ? (
                <p className="text-center w-[90vw] sm:w-[640px] lg:w-[700px] xl:w-[840px] rounded-xl p-6">
                  Nothing to show here
                </p>
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
          {!filterDetails.isLiked && (
            <div className="flex gap-2 px-8 py-12">
              {setPaginationButtons()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;

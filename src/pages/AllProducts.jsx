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
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const loadingDetails = useSelector(selectLoading);
  const searchDetails = useSelector(selectSearch);
  const [pagination, setPagination] = useState({});
  const filterDetails = useSelector(selectfilter);
  const likedDetails = useSelector(selectLiked);
  const [sort, setSort] = useState("name_asc");
  const [productsWithReview, setProductsWithReview] = useState(false);
  const [productsOnSale, setProductsOnSale] = useState(false);
  const [productsInStock, setProductsInStock] = useState(false);

  const getAllProducts = async (pageNumber = 1, searchQuery = "") => {
    dispatch(setLoading(true));
    if (searchDetails.isActive) {
      searchQuery = searchDetails.query;
    }
    let response = await GetAllProducts(
      pageNumber,
      searchQuery,
      sort,
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
  }, [
    searchDetails.query,
    sort,
    productsWithReview,
    productsOnSale,
    productsInStock,
  ]);

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
          <Filter
            productsWithReview={productsWithReview}
            setProductsWithReview={setProductsWithReview}
            productsOnSale={productsOnSale}
            setProductsOnSale={setProductsOnSale}
            productsInStock={productsInStock}
            setProductsInStock={setProductsInStock}
          />
        </div>
        <div className="flex flex-col lg:col-span-6 gap-6">
          <div className="flex text-xs items-center px-8">
            {!filterDetails.isLiked && (
              <p className="mr-auto">
                Showing page {pagination.currentPage} of {pagination.totalPages}
              </p>
            )}
            <div className="flex gap-1 items-center">
              <p>Sort By:</p>
              <select
                onChange={(e) => setSort(e.target.value)}
                defaultValue="name_asc"
                id="sortBy"
                className="border rounded-md p-1"
              >
                <option value="name_asc">Name ⇧</option>
                <option value="name_desc">Name ⇩</option>
                <option value="price_asc">Price ⇧</option>
                <option value="price_desc">Price ⇩</option>
                <option value="stock_asc">In Stock ⇧</option>
                <option value="stock_desc">In Stock ⇩</option>
              </select>
            </div>
          </div>

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

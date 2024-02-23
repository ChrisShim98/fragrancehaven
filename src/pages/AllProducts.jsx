import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import PageHeader from "../components/PageHeader";
import Filter from "../components/Filter";
import { GetAllProducts } from "../api/productRequests";
import { useDispatch, useSelector } from "react-redux";
import { openPopup, closePopup } from "../redux/popupSlice";
import { selectSearch } from "../redux/searchSlice";
import { setLoading, selectLoading } from "../redux/loadingSlice";
import Pagination from "../components/Pagination";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const loadingDetails = useSelector(selectLoading);
  const searchDetails = useSelector(selectSearch);
  const [pagination, setPagination] = useState({});
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
          {pagination.totalPages > 0 && (
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 text-xs sm:items-center px-8">
              <p className="sm:mr-auto">
                Showing page {pagination.currentPage} of {pagination.totalPages}
              </p>
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
          )}

          <div className="grid gap-4">
            {loadingDetails.loading === false &&
              (products.length === 0 ? (
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

          {Object.keys(pagination).length !== 0 && (
            <div className="px-8">
              <Pagination
                pagination={pagination}
                getAllProducts={getAllProducts}
                searchDetails={searchDetails}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;

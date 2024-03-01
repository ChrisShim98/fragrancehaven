import { useState, useEffect } from "react";
import {
  GetAllProducts,
  DeleteProduct,
  DeletePhoto,
  PutSetMainPhoto,
} from "../../api/productRequests";
import { useDispatch, useSelector } from "react-redux";
import { openPopup, closePopup } from "../../redux/popupSlice";
import { setLoading, selectLoading } from "../../redux/loadingSlice";
import ModifyProductCard from "../../components/admin/ModifyProductCard";
import EditProduct from "../../components/admin/EditProduct";
import AddPhoto from "../../components/admin/AddPhoto";
import Pagination from "../../components/Pagination";
import { setAdminSearch, selectAdminSearch } from "../../redux/searchSlice";
import SearchBar from "../../components/SearchBar";
import Filter from "../../components/Filter";

const ModifyProduct = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const loadingDetails = useSelector(selectLoading);
  const [editModalOpened, setEditModalOpened] = useState(false);
  const [photoModalOpened, setPhotoModalOpened] = useState(false);
  const [productToEdit, setProductToEdit] = useState({});
  const [pagination, setPagination] = useState({});
  const [searchWord, setSearchWord] = useState("");
  const searchDetails = useSelector(selectAdminSearch);
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

  useEffect(() => {
    setSearchWord(searchDetails.query);
  }, []);

  const deleteProduct = async (productId) => {
    dispatch(setLoading(true));
    let response = await DeleteProduct(productId);
    if (response?.error) {
      await dispatch(closePopup());
      dispatch(openPopup({ message: response.message, isError: true }));
    } else {
      await dispatch(closePopup());
      dispatch(openPopup({ message: response }));
      getAllProducts();
    }
    dispatch(setLoading(false));
  };

  const deletePhoto = async (productId, photoId) => {
    dispatch(setLoading(true));
    let response = await DeletePhoto(productId, photoId);
    if (response?.error) {
      await dispatch(closePopup());
      dispatch(openPopup({ message: response.message, isError: true }));
    } else {
      await dispatch(closePopup());
      dispatch(openPopup({ message: response }));
      getAllProducts();
    }
    dispatch(setLoading(false));
  };

  const setMainPhoto = async (productId, photoId) => {
    dispatch(setLoading(true));
    let response = await PutSetMainPhoto(productId, photoId);
    if (response?.error) {
      await dispatch(closePopup());
      dispatch(openPopup({ message: response.message, isError: true }));
    } else {
      await dispatch(closePopup());
      dispatch(openPopup({ message: response }));
      getAllProducts();
    }
    dispatch(setLoading(false));
  };

  const searchProducts = async (searchKey) => {
    if (searchKey === "") {
      await dispatch(
        setAdminSearch({
          query: "",
          isActive: false,
        })
      );
    } else {
      await dispatch(
        setAdminSearch({
          query: searchKey,
          isActive: true,
        })
      );
    }
  };

  return (
    <div className="flex flex-col gap-4 items-start lg:items-center">
      <h1 className="font-medium text-xl sm:text-3xl pb-2">Modify Product</h1>
      <span className="w-24 h-4 border-black border-t-2 pb-4" />
      <SearchBar
        searchProducts={searchProducts}
        searchWord={searchWord}
        setSearchWord={setSearchWord}
        isAdmin={true}
      />
      <div className="grid gap-4 w-full">
        <div className="lg:px-8">
          <Filter
            productsWithReview={productsWithReview}
            setProductsWithReview={setProductsWithReview}
            productsOnSale={productsOnSale}
            setProductsOnSale={setProductsOnSale}
            productsInStock={productsInStock}
            setProductsInStock={setProductsInStock}
          />
        </div>

        {pagination.totalPages > 0 && (
          <div className="flex flex-col sm:flex-row gap-2 text-xs sm:items-center lg:px-8">
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
        {loadingDetails.loading === false &&
          (products.length === 0 ? (
            <p className="lg:px-8">Nothing to show here</p>
          ) : (
            products.map((product) => {
              return (
                <div key={product.id}>
                  <ModifyProductCard
                    product={product}
                    deleteProduct={deleteProduct}
                    deletePhoto={deletePhoto}
                    setEditModalOpened={setEditModalOpened}
                    setPhotoModalOpened={setPhotoModalOpened}
                    setProductToEdit={setProductToEdit}
                    setMainPhoto={setMainPhoto}
                  />
                </div>
              );
            })
          ))}
      </div>
      {Object.keys(pagination).length !== 0 && (
        <Pagination
          pagination={pagination}
          getAllProducts={getAllProducts}
          searchDetails={searchDetails}
        />
      )}
      {editModalOpened && (
        <EditProduct
          product={productToEdit}
          setModalOpened={setEditModalOpened}
          getAllProducts={getAllProducts}
        />
      )}
      {photoModalOpened && (
        <AddPhoto
          product={productToEdit}
          setModalOpened={setPhotoModalOpened}
          getAllProducts={getAllProducts}
        />
      )}
    </div>
  );
};

export default ModifyProduct;

import React, { useState, useEffect } from "react";
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
import { BsSearch } from "react-icons/bs";
import EditProduct from "../../components/admin/EditProduct";
import AddPhoto from "../../components/admin/AddPhoto";
import { scrollToTop } from "../../helpers/scrollToTop";

const ModifyProduct = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const loadingDetails = useSelector(selectLoading);
  const [editModalOpened, setEditModalOpened] = useState(false);
  const [photoModalOpened, setPhotoModalOpened] = useState(false);
  const [productToEdit, setProductToEdit] = useState({});
  const [pagination, setPagination] = useState({});
  const [searchWord, setSearchWord] = useState("");
  const [userSearched, setUserSearched] = useState(false);

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

  const searchProducts = () => {
    if (searchWord === "") {
      getAllProducts(1);
      setUserSearched(false);
    } else {
      getAllProducts(1, searchWord);
      setUserSearched(true);
    }
  };

  const setPaginationButtons = () => {
    const buttons = [];

    for (let i = 0; i < pagination.totalPages; i++) {
      buttons.push(
        <button
          type="button"
          onClick={() => {
            if (userSearched) {
              getAllProducts(i + 1, searchWord);
              scrollToTop();
            } else {
              getAllProducts(i + 1);
              scrollToTop();
            }
          }}
          key={i}
          disabled={pagination.currentPage === i + 1}
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
    <div className="flex flex-col gap-4 items-start lg:items-center">
      <h1 className="font-medium text-xl sm:text-3xl pb-2">Modify Product</h1>
      <span className="w-24 h-4 border-black border-t-2 pb-4" />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchProducts();
        }}
        className="flex w-full md:px-8"
      >
        <input
          type="text"
          onChange={(e) => setSearchWord(e.target.value)}
          className="rounded-l-md h-8 w-full px-2 outline-1 outline"
          placeholder="Search Products"
        />
        <button
          type="submit"
          className="grid place-content-center bg-undertone text-white h-8 w-8 transition-colors duration-300 rounded-r-md outline outline-1 outline-undertone hover:cursor-pointer hover:bg-primary hover:text-undertone"
        >
          <BsSearch />
        </button>
      </form>
      <div className="grid gap-4">
        {loadingDetails.loading === false &&
          (products.length === 0 ? (
            <p>Nothing to show here</p>
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
      <div className="flex gap-2">{setPaginationButtons()}</div>
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

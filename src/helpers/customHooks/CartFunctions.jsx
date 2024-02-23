import { useDispatch, useSelector } from "react-redux";
import { closePopup, openPopup } from "../../redux/popupSlice";
import {
  addCart,
  addProduct,
  deleteProduct,
  deleteAll,
  selectCart,
} from "../../redux/cartSlice";
import {
  GetUserCart,
  PostUserCart,
  PutUserCart,
  DeleteUserCart,
} from "../../api/accountRequests";
import { setLoading } from "../../redux/loadingSlice";

export function useCartFunctions() {
  const dispatch = useDispatch();
  let userLoggedIn = localStorage.getItem("token") !== null;
  const cart = useSelector(selectCart);

  const getCart = async (username) => {
    dispatch(setLoading(true));
    if (userLoggedIn) {
      let response = await GetUserCart(username);
      if (response?.error) {
        await dispatch(closePopup());
        dispatch(openPopup({ message: response.message, isError: true }));
      } else {
        await dispatch(closePopup());
        dispatch(addCart(response));
      }
    }
    dispatch(setLoading(false));
  };

  const postCart = async (username, cart, token) => {
    dispatch(setLoading(true));
    let response = await PostUserCart(username, cart, token);
    if (response?.error) {
      await dispatch(closePopup());
      dispatch(openPopup({ message: response.message, isError: true }));
    } else {
      await dispatch(closePopup());
      dispatch(addCart(response));
    }
    dispatch(setLoading(false));
  };

  const addToCart = async (product) => {
    if (product.mainPhoto === undefined) {
      product.mainPhoto = product.photos.find((photo) => photo.isMain === true);
    }

    if (userLoggedIn) {
      let username = localStorage.getItem("username");
      dispatch(setLoading(true));
      let response = await PutUserCart(username, product.name, true);
      if (response?.error) {
        await dispatch(closePopup());
        dispatch(openPopup({ message: response.message, isError: true }));
      } else {
        await dispatch(closePopup());
        dispatch(openPopup({ message: product.name + " added to cart" }));
        dispatch(addProduct(product));
      }
      dispatch(setLoading(false));
    } else {
      let foundProduct = cart.find(
        (cartProduct) => cartProduct.name == product.name
      );
      if (
        foundProduct !== undefined &&
        foundProduct.amount + 1 > foundProduct.stock
      ) {
        await dispatch(closePopup());
        dispatch(
          openPopup({ message: "Insufficient items in stock", isError: true })
        );
      } else {
        await dispatch(closePopup());
        dispatch(openPopup({ message: product.name + " added to cart" }));
        dispatch(addProduct(product));
      }
    }
  };

  const deleteFromCart = async (product) => {
    if (userLoggedIn) {
      let username = localStorage.getItem("username");
      dispatch(setLoading(true));
      let response = await PutUserCart(username, product.name, false);
      if (response?.error) {
        await dispatch(closePopup());
        dispatch(openPopup({ message: response.message, isError: true }));
      } else {
        await dispatch(closePopup());
        dispatch(openPopup({ message: product.name + " removed from cart" }));
        dispatch(deleteProduct(product));
      }
      dispatch(setLoading(false));
    } else {
      dispatch(deleteProduct(product));
    }
  };

  const deleteCart = async (username) => {
    if (userLoggedIn) {
      dispatch(setLoading(true));
      let response = await DeleteUserCart(username);
      if (response?.error) {
        await dispatch(closePopup());
        dispatch(openPopup({ message: response.message, isError: true }));
      } else {
        dispatch(deleteAll());
      }
      dispatch(setLoading(false));
    } else {
      dispatch(deleteAll());
    }
  };

  return { getCart, postCart, addToCart, deleteFromCart, deleteCart };
}

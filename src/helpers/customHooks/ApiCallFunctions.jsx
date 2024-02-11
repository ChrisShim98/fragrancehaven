import { useSelector, useDispatch } from "react-redux";
import { closePopup, openPopup } from "../../redux/popupSlice";
import { parseJWT } from "../parseJWT";
import { PostLogin, PostRegister } from "../../api/accountRequests";
import { setLoading } from "../../redux/loadingSlice";
import { useCartFunctions } from "./CartFunctions";
import {
  PostReview,
  DeleteReview,
  GetProductById,
} from "../../api/productRequests";
import { useNavigate } from "react-router-dom";

export function useApiCallFunctions() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { getCart } = useCartFunctions();

  const signIn = async (username, password) => {
    let response = await PostLogin(username, password);
    if (response?.error) {
      await dispatch(closePopup());
      dispatch(openPopup({ message: response.message, isError: true }));
    } else {
      parseJWT(response?.token);
      localStorage.setItem("email", response?.email);
    }
    await getCart(username);
    dispatch(setLoading(false));
  };

  const register = async (username, password, email) => {
    let response = await PostRegister(username, password, email);
    if (response?.error) {
      await dispatch(closePopup());
      dispatch(openPopup({ message: response.message, isError: true }));
    } else {
      parseJWT(response?.token);
      localStorage.setItem("email", response?.email);
      await dispatch(closePopup());
      dispatch(openPopup({ message: "Successfully registered" }));
    }
    dispatch(setLoading(false));
  };

  const submitReview = async (review, rating, productId) => {
    dispatch(setLoading(true));
    let productReview = {
      message: review,
      rating: rating,
      reviewerName: localStorage.getItem("username"),
    };

    let response = await PostReview(productId, productReview);
    if (response?.error) {
      await dispatch(closePopup());
      dispatch(openPopup({ message: response.message, isError: true }));
    } else {
      await dispatch(closePopup());
      dispatch(openPopup({ message: response }));
    }
    dispatch(setLoading(false));
  };

  const deleteReview = async (productId, reviewId) => {
    let response = await DeleteReview(productId, reviewId);
    if (response?.error) {
      await dispatch(closePopup());
      dispatch(openPopup({ message: response.message, isError: true }));
    } else {
      await dispatch(closePopup());
      dispatch(openPopup({ message: response }));
    }
    dispatch(setLoading(false));
  };

  const getProduct = async (productId) => {
    let response = await GetProductById(productId);
    if (response?.error) {
      navigate("/");
    } else {
      return response;
    }
    dispatch(setLoading(false));
  };

  return { signIn, register, submitReview, deleteReview, getProduct };
}

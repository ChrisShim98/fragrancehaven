import { useSelector, useDispatch } from "react-redux";
import { closePopup, openPopup } from "../../redux/popupSlice";
import { parseJWT } from "../parseJWT";
import { PostLogin, PostRegister } from "../../api/accountRequests";
import { setLoading } from "../../redux/loadingSlice";
import { useCartFunctions } from "./CartFunctions";

export function useApiCallFunctions() {
  const dispatch = useDispatch();
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

  return { signIn, register };
}

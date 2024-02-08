import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import popupReducer from "./popupSlice"
import loadingReducer from "./loadingSlice"

export default configureStore({
  reducer: {
    cart: cartReducer,
    popup: popupReducer,
    loading: loadingReducer,
  },
});

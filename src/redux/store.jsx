import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import popupReducer from "./popupSlice"

export default configureStore({
  reducer: {
    cart: cartReducer,
    popup: popupReducer
  },
});

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import popupReducer from "./popupSlice"
import userReducer from "./userSlice"

export default configureStore({
  reducer: {
    cart: cartReducer,
    popup: popupReducer,
    user: userReducer
  },
});

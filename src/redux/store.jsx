import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import popupReducer from "./popupSlice"
import loadingReducer from "./loadingSlice"
import searchReducer from "./searchSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    popup: popupReducer,
    loading: loadingReducer,
    search: searchReducer
  },
});

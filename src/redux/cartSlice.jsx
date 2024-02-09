import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    productDetail: {},
    favorites: []
  },
  reducers: {
    addProduct: (state, action) => {
      let productIndex = state.products.findIndex(
        (product) => product.id === action.payload?.id
      );

      if (productIndex === -1) {
        state.products.push(action.payload);
      } else {
        state.products[productIndex].amount += 1;
      }
    },
    deleteProduct: (state, action) => {
      let productIndex = state.products.findIndex(
        (product) => product.id === action.payload?.id
      );

      if (productIndex !== -1) {
        if (state.products[productIndex].amount <= 1) {
          state.products.splice(productIndex, 1);
        } else {
          state.products[productIndex].amount -= 1;
        }
      }
    },
    deleteAll: (state, action) => {
      let productIndex = state.products.findIndex(
        (product) => product.id === action.payload?.id
      );
      if (productIndex !== -1) {
        state.products.splice(productIndex, 1);
      }
    },
    addDetail: (state, action) => {
      state.productDetail = action.payload
    },
    editFavorite: (state, action) => {
      let favoritesIndex = state.favorites.findIndex(
        (favorites) => favorites.id === action.payload?.id
      );

      if (favoritesIndex === -1) {
        state.favorites.push(action.payload);
      } else {
        state.favorites.splice(favoritesIndex, 1);
      }
    },
  },
});

export const { addProduct, deleteProduct, deleteAll, addDetail, editFavorite } = cartSlice.actions;

export const selectCart = (state) => state.cart.products;
export const selectProductDetail = (state) => state.cart.productDetail;
export const selectFavorites = (state) => state.cart.favorites;

export default cartSlice.reducer;

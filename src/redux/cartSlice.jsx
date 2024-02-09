import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    productDetail: {},
    liked: [],
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
      state.productDetail = action.payload;
    },
    editLiked: (state, action) => {
      let likedIndex = state.liked.findIndex(
        (liked) => liked.id === action.payload?.id
      );

      if (likedIndex === -1) {
        state.liked.push(action.payload);
      } else {
        state.liked.splice(likedIndex, 1);
      }
    },
  },
});

export const { addProduct, deleteProduct, deleteAll, addDetail, editLiked } =
  cartSlice.actions;

export const selectCart = (state) => state.cart.products;
export const selectProductDetail = (state) => state.cart.productDetail;
export const selectLiked = (state) => state.cart.liked;

export default cartSlice.reducer;

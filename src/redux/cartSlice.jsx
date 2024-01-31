import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    productDetail: {}
  },
  reducers: {
    addProduct: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
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
    }
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, deleteProduct, deleteAll, addDetail } = cartSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCart = (state) => state.cart.products;
export const selectProductDetail = (state) => state.cart.productDetail;

export default cartSlice.reducer;

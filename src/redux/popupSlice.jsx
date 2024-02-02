import { createSlice } from "@reduxjs/toolkit";

export const popupSlice = createSlice({
  name: "popup",
  initialState: {
    popupDetail: {
      message: "",
      isOn: false,
      isError: false
    },
  },
  reducers: {
    openPopup: (state, action) => {
      state.popupDetail.isOn = true;
      state.popupDetail.message = action.payload;
    },
    closePopup: (state) => {
      state.popupDetail.isOn = false;
      state.popupDetail.message = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { openPopup, closePopup } = popupSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectPopup = (state) => state.popup.popupDetail;

export default popupSlice.reducer;

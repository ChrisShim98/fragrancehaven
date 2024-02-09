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
      state.popupDetail.message = action.payload?.message;
      state.popupDetail.isError = action.payload?.isError;
    },
    closePopup: (state) => {
      state.popupDetail.isOn = false;
      state.popupDetail.message = "";
      state.popupDetail.isError = false;
    },
  },
});

export const { openPopup, closePopup } = popupSlice.actions;

export const selectPopup = (state) => state.popup.popupDetail;

export default popupSlice.reducer;

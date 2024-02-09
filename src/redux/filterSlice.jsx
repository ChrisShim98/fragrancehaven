import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filterDetails: {
      isLiked: false,
    },
  },
  reducers: {
    setfilter: (state, action) => {
      // action.payload = {filterName: "", isFilterOn: false}
      state.filterDetails[action.payload.filterName] =
        action.payload.isFilterOn;
    },
    clearFilters: (state) => {
      state.filterDetails.isLiked = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setfilter, clearFilters } = filterSlice.actions;

export const selectfilter = (state) => state.filter.filterDetails;

export default filterSlice.reducer;

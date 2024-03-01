import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchDetail: {
      query: "",
      isActive: false,
    },
    adminSearchDetail: {
      query: "",
      isActive: false,
    },
    adminTransactionSearchDetail: {
      query: "",
      isActive: false,
    },
  },
  reducers: {
    setSearch: (state, action) => {
      state.searchDetail.query = action.payload?.query;
      state.searchDetail.isActive = action.payload?.isActive;
    },
    setAdminSearch: (state, action) => {
      state.adminSearchDetail.query = action.payload?.query;
      state.adminSearchDetail.isActive = action.payload?.isActive;
    },
    setAdminTransactionSearch: (state, action) => {
      state.adminTransactionSearchDetail.query = action.payload?.query;
      state.adminTransactionSearchDetail.isActive = action.payload?.isActive;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearch, setAdminSearch, setAdminTransactionSearch } = searchSlice.actions;

export const selectSearch = (state) => state.search.searchDetail;
export const selectAdminSearch = (state) => state.search.adminSearchDetail;
export const selectAdminTransactionSearch = (state) => state.search.adminTransactionSearchDetail;

export default searchSlice.reducer;

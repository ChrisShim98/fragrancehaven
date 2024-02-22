import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchDetail: {
        query: "",
        isActive: false
    },
    adminSearchDetail: {
        query: "",
        isActive: false
    }
  },
  reducers: {
    setSearch: (state, action) => {
      state.searchDetail.query = action.payload?.query;
      state.searchDetail.isActive = action.payload?.isActive;
    },
    setAdminSearch: (state, action) => {
      state.adminSearchDetail.query = action.payload?.query;
      state.adminSearchDetail.isActive = action.payload?.isActive;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setSearch, setAdminSearch } = searchSlice.actions;

export const selectSearch = (state) => state.search.searchDetail;
export const selectAdminSearch = (state) => state.search.adminSearchDetail;

export default searchSlice.reducer;

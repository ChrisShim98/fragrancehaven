import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchDetail: {
        query: "",
        isActive: false
    }
  },
  reducers: {
    setSearch: (state, action) => {
      state.searchDetail.query = action.payload?.query;
      state.searchDetail.isActive = action.payload?.isActive;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setSearch } = searchSlice.actions;

export const selectSearch = (state) => state.search.searchDetail;

export default searchSlice.reducer;

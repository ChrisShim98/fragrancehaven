import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    loadingDetail: {
        loading: false
    }
  },
  reducers: {
    setLoading: (state, action) => {
      state.loadingDetail.loading = action.payload;
    }
  },
});

export const { setLoading } = loadingSlice.actions;

export const selectLoading = (state) => state.loading.loadingDetail;

export default loadingSlice.reducer;

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

// Action creators are generated for each case reducer function
export const { setLoading } = loadingSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectLoading = (state) => state.loading.loadingDetail;

export default loadingSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allBrands: [],
  loading: true,
  error: null,
};

const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    getAllBrandsStart: (state) => {
      state.loading = true;
    },
    getAllBrandsSuccess: (state, action) => {
      state.allBrands = action.payload;
      state.loading = false;
      state.error = null;
    },
    getAllBrandsFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});
export const { getAllBrandsFailure, getAllBrandsStart, getAllBrandsSuccess } =
  brandSlice.actions;

export default brandSlice.reducer;

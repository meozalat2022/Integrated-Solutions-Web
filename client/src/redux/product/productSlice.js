import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
  bestDeals: [],
  latestProducts: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getAllProductsStart: (state) => {
      state.loading = true;
    },
    getAllProductsSuccess: (state, action) => {
      state.loading = false;
      state.allProducts = action.payload;
      state.error = null;
    },
    getAllProductsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getBestDealsStart: (state) => {
      state.loading = true;
    },
    getBestDealsSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.bestDeals = action.payload;
    },
    getBestDealsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getLatestProductsStart:(state)=>{
        state.loading = true
    },
    getLatestProductsSuccess:(state, action)=>{
        state.loading = false;
        state.latestProducts =action.payload;
        state.error = null;
    },
    getLatestProductsFailure:(state, action)=>{
        state.loading = false;
        state.error = action.payload;
    }
  },
});

export const {
  getAllProductsFailure,
  getAllProductsStart,
  getAllProductsSuccess,
  getBestDealsFailure,
  getBestDealsStart,
  getBestDealsSuccess,
  getLatestProductsFailure,
  getLatestProductsStart,
  getLatestProductsSuccess
} = productSlice.actions;
export default productSlice.reducer;

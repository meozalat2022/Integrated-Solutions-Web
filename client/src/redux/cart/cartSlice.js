import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { productId, title, imageUrl, price, promotionRate, quantity } =
        action.payload;
      const find = state.find((item) => item.productId === productId);
      if (find) {
        toast.success("Product Added Successfully", {
          hideProgressBar: false,
        });
        return state.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        state.push({
          ...action.payload,
        });
        toast.success("Product Added Successfully", {
          hideProgressBar: false,
        });
      }
    },
    increment(state, { payload }) {
      return state.map((item) =>
        item.productId === payload.productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
    },
    decrement(state, { payload }) {
      return state.map((item) =>
        item.productId === payload.productId
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      );
    },
    clear(state, { payload }) {
      return state.filter((item) => item.productId !== payload.productId);
    },
    clearCart(state) {
      return [];
    },
  },
});

export const { addToCart, increment, decrement, clear } = cartSlice.actions;
export default cartSlice.reducer;

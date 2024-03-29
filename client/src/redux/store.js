import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./user/userSlice";
import categoryReducer from "./category/categorySlice";
import brandReducer from "./brand/brandSlice";
import productReducer from "./product/productSlice";
import cartReducer from "./cart/cartSlice";
const rootReducer = combineReducers({
  user: userReducer,
  brand: brandReducer,
  category: categoryReducer,
  product: productReducer,
  cart: cartReducer,
});

const persistConfig = {
  key: "root",
  storage,
  version: 1,
  whitelist: ["cart", "user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistore = persistStore(store);

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Counter/CounterSlice";
import shopReducer from "../features/Shop/ShopSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    shop: shopReducer,
  },
});

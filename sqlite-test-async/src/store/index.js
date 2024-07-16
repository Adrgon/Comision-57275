import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Counter/CounterSlice";
import shopReducer from "../features/Shop/ShopSlice";
import cartReducer from "../features/Cart/CartSlice"
import authReducer from "../features/User/UserSlice"

import { shopApi } from "../services/shopServices";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../services/authService";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    shop: shopReducer,
    cart: cartReducer,
    auth: authReducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [authApi.reducerPath]: authApi.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
      .concat(shopApi.middleware)
      .concat(authApi.middleware)
});

setupListeners(store.dispatch)

export default store

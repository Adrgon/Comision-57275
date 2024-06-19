import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../fetures/Counter/CounterSlice";
import shopReducer from "../fetures/Shop/ShopSlice";

export default configureStore({
    reducer: {
        counter: counterReducer,
        shop: shopReducer,
    }
})

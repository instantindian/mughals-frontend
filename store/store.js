import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import addressSlice from "./addressSlice";


export default configureStore({
    reducer: {
        cart: cartSlice,
        address : addressSlice
    },
});
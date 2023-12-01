import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";


export const store = configureStore({
    // predefined key for holding all reducers : 'reducer'
    reducer:{
        // reduces should be key-value pair
        counter:counterSlice
    }
})
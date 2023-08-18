import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from "./sliceReducer";

export const sliceStore=configureStore({
    reducer:{
        leaveMangment:sliceReducer.reducer
    }
})



  
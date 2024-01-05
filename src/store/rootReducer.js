import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./Auth/slice";


export const rootReducer = combineReducers({
    auth: authReducer
})
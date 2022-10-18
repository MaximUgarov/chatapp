import { combineReducers } from "@reduxjs/toolkit";
import chat from "./slices/chat";



export const rootReducer = combineReducers({ chat });
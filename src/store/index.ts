import type { TypedUseSelectorHook } from "react-redux";
import { bindActionCreators, configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";

import { rootReducer as reducer } from "./root.reducer";
import chatMiddleware from "./middlewares/chat";
import * as chatActions from "./slices/chat";



const store = configureStore({
    devTools: process.env.NODE_ENV === "development",
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([chatMiddleware]),
});

const allActions = {
    ...chatActions
};

export type RootState = ReturnType<typeof reducer>;
export type RootStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useActions = () => {
    const dispatch = useAppDispatch();
    return bindActionCreators(allActions, dispatch);
};

export default store;
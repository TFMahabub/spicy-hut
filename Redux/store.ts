import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import menuPageSliceReducer from "./menuPageSlice/menuPageSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    menuPageSlice: menuPageSliceReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});

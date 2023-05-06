import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import menuPageSliceReducer from "./menuPageSlice/menuPageSlice";
import navbarSliceReducer from "./navbarSlice/navbarSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    menuPageSlice: menuPageSliceReducer,
    navbarSlice: navbarSliceReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

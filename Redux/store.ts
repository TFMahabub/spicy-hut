import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import authSlice from "./auth/authSlice";
import menuPageSliceReducer from "./menuPageSlice/menuPageSlice";
import navbarSliceReducer from "./navbarSlice/navbarSlice";

const store = configureStore({
  reducer: {
    menuPageSlice: menuPageSliceReducer,
    navbarSlice: navbarSliceReducer,
    auth: authSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});

export default store;

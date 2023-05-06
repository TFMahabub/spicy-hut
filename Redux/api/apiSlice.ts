import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://spicy-hut-server.vercel.app",
  }),
  endpoints: (builder) => ({
    getMenuItems: builder.query({
      query: () => "/menus",
    }),
  }),
});

export const { useGetMenuItemsQuery } = apiSlice;

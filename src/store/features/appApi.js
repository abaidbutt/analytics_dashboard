import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({
    // base url of backend API
    baseUrl: "http://127.0.0.1:5000/",
    // prepareHeaders is used to configure the header of every request and gives access to getState which we use to include the token from the store
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.userToken;
      if (token) {
        // include token in req header
        headers.set("authorization", `Bearer ${token}`);
        return headers;
      }
    },
  }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
      providesTags: ["Product"],
    }),
  }),
});
export const { useGetProductsQuery } = appApi;

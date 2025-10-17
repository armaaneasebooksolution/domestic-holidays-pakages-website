"use client";

import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "@/redux/slices/paginationSlice.js";
import searchReducer from "@/redux/slices/searchSlice.js";
import destinationReducer from "@/redux/slices/destinationSlice.js";
import blogsReducer from "@/redux/slices/blogSlice.js";

export const store = configureStore({
  reducer: {
    pagination: paginationReducer,
    search: searchReducer,
    destinations: destinationReducer,
    blogs: blogsReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

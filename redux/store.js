"use client";

import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "@/redux/slices/paginationSlice.js";
import searchReducer from "@/redux/slices/searchSlice.js";

export const store = configureStore({
  reducer: {
    pagination: paginationReducer,
    search: searchReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

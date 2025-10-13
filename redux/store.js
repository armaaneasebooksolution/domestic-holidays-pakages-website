"use client";

import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "@/redux/slices/paginationSlice.js";
import searchReducer from "@/redux/slices/searchSlice.js";
import destinationReducer from "@/redux/slices/destinationSlice.js";

export const store = configureStore({
  reducer: {
    pagination: paginationReducer,
    search: searchReducer,
    destinations: destinationReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

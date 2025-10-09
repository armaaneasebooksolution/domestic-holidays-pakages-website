"use client";

import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "@/redux/slices/paginationSlice.js";

export const store = configureStore({
  reducer: {
    pagination: paginationReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

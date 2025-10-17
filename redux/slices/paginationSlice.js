import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  destinations: { currentPage: 1, itemsPerPage: 10 },
  blogs: { currentPage: 1, itemsPerPage: 4 },
  packages: { currentPage: 1, itemsPerPage: 8 },
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPage: (state, action) => {
      const { section, page } = action.payload;
      if (state[section]) {
        state[section].currentPage = page;
      }
    },
    resetPage: (state, action) => {
      const { section } = action.payload;
      if (state[section]) {
        state[section].currentPage = 1;
      }
    },
  },
});

export const { setPage, resetPage } = paginationSlice.actions;
export default paginationSlice.reducer;

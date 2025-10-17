import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//  Async thunk to fetch blogs from JSON
export const getBlogs = createAsyncThunk("blogs/getBlogs", async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL || ""}/data/blogs.json`,
  );
  if (!res.ok) throw new Error("Failed to fetch blogs");
  return await res.json();
});

const blogsSlice = createSlice({
  name: "blogs",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load blogs";
      });
  },
});

export default blogsSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Methods for get destinations
export const getDestinations = createAsyncThunk(
  "destinations/get",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("/data/destinations.json");
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to load destinations");
    }
  },
);

// Initial State
const initialState = {
  data: [],
  loading: false,
  error: null,
};

// Destination Slice

const destinationSlice = createSlice({
  name: "destinations",
  initialState,
  reducers: {
    // manual setter (optional )
    setDestinations: (state, actions) => {
      state.data = actions.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getDestinations.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(getDestinations.fulfilled, (state) => {
      ((state.loading = false), (state.data = actions.payload));
    });

    builder.addCase(getDestinations.rejected, (state) => {
      state.loading = false;
      state.error = actions.payload;
    });
  },
});

export const { setDestinations } = destinationSlice.actions;
export default destinationSlice.reducer;

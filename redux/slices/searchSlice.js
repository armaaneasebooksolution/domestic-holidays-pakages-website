const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  destinations: "",
  blogs: "",
  packages: "",
  flights: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      const { section, term } = action.payload;
      if (state[section] !== undefined) {
        state[section] = term;
      }
    },
    resetSearchTerm: (state, action) => {
      const { section, term } = action.payload;
      if (state[section] !== undefined) {
        state[section] = "";
      }
    },
  },
});

export const { setSearchTerm, resetSearchTerm } = searchSlice.actions;

export default searchSlice.reducer;

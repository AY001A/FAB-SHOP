import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchedProducts: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchProduct(state, action) {
      state.searchedProducts = action.payload;
    },
  },
});

export const { searchProduct } = searchSlice.actions;

export default searchSlice.reducer;

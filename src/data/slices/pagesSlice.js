import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: "Home",
};

export const pagesSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { changePage } = pagesSlice.actions;

export default pagesSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuCategory: "all",
};

const allStateSlice = createSlice({
  name: "allState",
  initialState,
  reducers: {
    changMenuCategory: (state, action) => {
      state.menuCategory = action.payload.menuCategory;
    },
  },
});

export const { changMenuCategory } = allStateSlice.actions;
export default allStateSlice.reducer;

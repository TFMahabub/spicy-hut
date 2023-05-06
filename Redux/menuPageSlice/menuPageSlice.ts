import { createSlice } from "@reduxjs/toolkit";

interface IntialStateType {
  menusCategories: string;
}

const initialState: IntialStateType = {
  menusCategories: "all",
};

const aboutPageSlice = createSlice({
  name: "aboutPage",
  initialState,
  reducers: {
    setMenuCategories: (state: IntialStateType, action) => {
      state.menusCategories = action.payload;
    },
  },
});

export const { setMenuCategories } = aboutPageSlice.actions;
export default aboutPageSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

interface IntialStateType {
  searchOpenClose: boolean;
}

const initialState: IntialStateType = {
  searchOpenClose: false,
};

const navbarPageSlice = createSlice({
  name: "navbarSlice",
  initialState,
  reducers: {
    setSearchOpenClose: (state: IntialStateType) => {
      state.searchOpenClose = !state.searchOpenClose;
    },
  },
});

export const { setSearchOpenClose } = navbarPageSlice.actions;
export default navbarPageSlice.reducer;

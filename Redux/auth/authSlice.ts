import auth from "@/firebase.config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";

const initialState = {
  email: "",
  role: "",
  isLoading: true,
  isError: false,
  error: "",
};

export const createUserWithFirebase = createAsyncThunk(
  "auth/createUser",
  async ({ email, password }: { email: string; password: string }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    return data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUserWithFirebase.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(createUserWithFirebase.fulfilled, (state, { payload }: any) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.email = payload;
      })
      .addCase(createUserWithFirebase.rejected, (state, action: any) => {
        state.isLoading = false;
        state.isError = true;
        state.error = "";
        state.email = action.error.message;
      });
  },
});

export default authSlice.reducer;

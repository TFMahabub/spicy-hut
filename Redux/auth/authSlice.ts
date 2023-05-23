import auth from "@/firebase.config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

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
    return data.user.email;
  }
);

export const loginUserWithFirebase = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }: { email: string; password: string }) => {
    const data = await signInWithEmailAndPassword(auth, email, password);
    return data.user.email;
  }
);

export const signOutWithFirebase = createAsyncThunk(
  "auth/signOutUser",
  async () => {
    const data = await signOut(auth);
    return data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.email = payload;
      state.isLoading = false;
    },
  },
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
        state.email = "";
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      }) //login---------------------------------------------------
      .addCase(loginUserWithFirebase.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(loginUserWithFirebase.fulfilled, (state, { payload }: any) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.email = payload;
      })
      .addCase(loginUserWithFirebase.rejected, (state, action: any) => {
        state.isLoading = false;
        state.isError = true;
        state.email = "";
        state.error = action.error.message;
      }) //signout---------------------------------------------------
      .addCase(signOutWithFirebase.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(signOutWithFirebase.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.email = "";
      })
      .addCase(signOutWithFirebase.rejected, (state, action: any) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;

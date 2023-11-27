import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginRequest } from "./authAPI";

const initialState = {
  isLoading: false,
  user: null,
  error: null,
};

export const loginRequestThunk = createAsyncThunk(
  "post/loginRequestThunk",
  async (reqBody, { rejectWithValue }) => {
    try {
      return await loginRequest(reqBody);
    } catch (error) {
      return rejectWithValue(error?.response?.data.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loggedIn: (state, action) => {
      state.user = action.payload || null;
    },
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginRequestThunk.pending, (state) => {
      state.isLoading = true;
      state.user = null;
      state.error = null;
    });
    builder.addCase(loginRequestThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(loginRequestThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.user = null;
      state.error = action.payload;
    });
  },
});

export default authSlice.reducer;
export const { loggedIn, logout } = authSlice.actions;

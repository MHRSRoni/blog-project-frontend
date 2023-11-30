import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  emailVerifyRequest,
  forgotPasswordRequest,
  loginRequest,
  otpVerifyRequest,
  registerRequest,
  sendOtpRequest,
} from "./authAPI";

const initialState = {
  isLoading: false,
  user: null,
  error: null,
};

export const loginRequestThunk = createAsyncThunk(
  "auth/loginRequestThunk",
  async (reqBody, { rejectWithValue }) => {
    try {
      return await loginRequest(reqBody);
    } catch (error) {
      return rejectWithValue(error?.response?.data.message);
    }
  }
);

export const registerRequestThunk = createAsyncThunk(
  "auth/registerRequestThunk",
  async (reqBody, { rejectWithValue }) => {
    try {
      const { status } = await registerRequest(reqBody);
      if (status === 201) {
        const response = await sendOtpRequest(
          reqBody.email,
          "email verification"
        );
        return response.data;
      }
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const accountVerifyRequestThunk = createAsyncThunk(
  "auth/accountVerifyRequestThunk",
  async ({ email, subject, code }, { rejectWithValue }) => {
    try {
      const { data } = await otpVerifyRequest(email, subject, code);
      const response = await emailVerifyRequest(email, data["access-token"]);

      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);
export const otpVerifyRequestThunk = createAsyncThunk(
  "auth/otpVerifyRequestThunk",
  async ({ email, subject, code }, { rejectWithValue }) => {
    try {
      const response = await otpVerifyRequest(email, subject, code);

      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const resendOtpRequestThunk = createAsyncThunk(
  "auth/resendOtpRequestThunk",
  async ({ email, subject }, { rejectWithValue }) => {
    try {
      const response = await sendOtpRequest(email, subject);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const forgotPasswordRequestThunk = createAsyncThunk(
  "auth/forgotPasswordRequestThunk",
  async ({ email, accessToken, data }, { rejectWithValue }) => {
    try {
      const response = await forgotPasswordRequest({
        email,
        accessToken,
        data,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
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
    // for login
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

    // for register
    builder.addCase(registerRequestThunk.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(registerRequestThunk.fulfilled, (state) => {
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(registerRequestThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    });
  },
});

export default authSlice.reducer;
export const { loggedIn, logout } = authSlice.actions;

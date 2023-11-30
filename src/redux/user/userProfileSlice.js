import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userProfile } from "./userProfileApi";


const initialState = {
    isLoading: false,
    profile: {},
    error: null,
  };



// Async thunk for reading a user profile
export const getUserProfileThunk = createAsyncThunk(
  "/readUserProfileThunk",
  async () => {
    const profile = await userProfile();
    return profile;
  }
);


const profileSlice= createSlice({
    name: "profile",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      // readSingleBlogThunk api call
      builder.addCase(getUserProfileThunk.pending, (state) => {
        state.isLoading = true;
        state.profile = {};
        state.error = null;
      });
      builder.addCase(getUserProfileThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.profile = action.payload;
        state.error = null;
      });
      builder.addCase(getUserProfileThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.profile = {};
        state.error = action.payload;
      });
    },
  });


  export default profileSlice.reducer;

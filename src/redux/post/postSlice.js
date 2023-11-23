import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPosts } from "./postAPI";

const initialState = {
  isLoading: false,
  posts: {},
  error: null,
};

export const getPostThunk = createAsyncThunk(
  "post/getPostThunk",
  async (queryObj, { rejectWithValue }) => {
    try {
      return await getPosts(queryObj);
    } catch (error) {
      return rejectWithValue(error?.response?.data.message);
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // getPostThunk api call
    builder.addCase(getPostThunk.pending, (state) => {
      state.isLoading = true;
      state.posts = {};
      state.error = null;
    });
    builder.addCase(getPostThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
      state.error = null;
    });
    builder.addCase(getPostThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.posts = {};
      state.error = action.payload;
    });
  },
});

// export const {} = postSlice.actions;

export default postSlice.reducer;

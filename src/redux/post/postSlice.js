import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPosts } from "./postAPI";

const initialState = {
  isLoading: false,
  posts: [],
  error: null,
};

export const getPostThunk = createAsyncThunk("post/getPostThunk", async () => {
  const post = await getPosts();
  return post;
});

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPostThunk.pending, (state) => {
      state.isLoading = true;
      state.posts = [];
      state.error = null;
    });
    builder.addCase(getPostThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload?.data?.resultPosts;
      state.error = null;
    });
    builder.addCase(getPostThunk.rejected, (state) => {
      state.isLoading = true;
      state.posts = [];
      state.error = "some think went wrong";
    });
  },
});

// export const {} = postSlice.actions;

export default postSlice.reducer;

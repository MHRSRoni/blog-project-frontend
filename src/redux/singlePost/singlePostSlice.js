import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { singleBlog } from "./singlePostApi";


const initialState = {
    isLoading: false,
    posts: {},
    error: null,
  };



// Async thunk for reading a single blog
export const readSingleBlogThunk = createAsyncThunk(
  "post/readSingleBlogThunk",
  async (slugData) => {
    const post = await singleBlog(slugData);
    return post;
  }
);


const readSingleBlogSlice= createSlice({
    name: "post",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      // readSingleBlogThunk api call
      builder.addCase(readSingleBlogThunk.pending, (state) => {
        state.isLoading = true;
        state.posts = {};
        state.error = null;
      });
      builder.addCase(readSingleBlogThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
        state.error = null;
      });
      builder.addCase(readSingleBlogThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.posts = {};
        state.error = action.payload;
      });
    },
  });


  export default readSingleBlogSlice.reducer;


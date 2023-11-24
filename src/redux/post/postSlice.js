import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPosts, createPost, singleBlog } from "./postAPI";

const initialState = {
  isLoading: false,
  posts: {},
  error: null,
};

// Async thunk for creating a post
export const createPostThunk = createAsyncThunk(
  "post/createPostThunk",
  async (postData) => {
    const post = await createPost(postData);
    return post;
  }
);

// Async thunk for reading a single blog
export const readSingleBlogThunk = createAsyncThunk(
  "post/readSingleBlogThunk",
  async (slugData) => {
    const post = await singleBlog(slugData);
    return post;
  }
);


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

export default postSlice.reducer;

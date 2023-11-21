import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPosts, createPost, singleBlog } from "./postAPI";

const initialState = {
  isLoading: false,
  posts: [],
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
  async () => {
    const post = await singleBlog();
    return post;
  }
);

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
      state.error = "Something went wrong";
    });

    
    builder.addCase(createPostThunk.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(createPostThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      
      state.posts = [...state.posts, action.payload?.data?.createdPost];
      state.error = null;
    });
    builder.addCase(createPostThunk.rejected, (state) => {
      state.isLoading = false;
      state.error = "Something went wrong while creating a post";
    });
    
    
    builder.addCase(readSingleBlogThunk.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(readSingleBlogThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      
      state.singlePost = action.payload?.data;
      state.error = null;
    });
    builder.addCase(readSingleBlogThunk.rejected, (state) => {
      state.isLoading = false;
      state.error = "Something went wrong while creating a post";
    });
  },
});

export default postSlice.reducer;

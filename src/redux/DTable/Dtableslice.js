// dtableslice.js

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPostsByUId, deletePostBySlug } from "./Dtableapi";

const initialState = {
  isLoading: false,
  posts: [],
  error: null,
  modalOpen: false,
  postToDelete: null,
};

export const getPostsByUserIdThunk = createAsyncThunk(
  "/readUserProfileThunk",
  async (userId) => {
    const posts = await getPostsByUId(userId);
    return posts;
  }
);

export const deletePostThunk = createAsyncThunk(
  "/deletePostThunk",
  async (slugData) => {
    await deletePostBySlug(slugData);
    return slugData;
  }
);

const dTable = createSlice({
  name: "table",
  initialState,
  reducers: {
    setModalOpen: (state, action) => {
      state.modalOpen = action.payload;
    },
    setPostToDelete: (state, action) => {
      state.postToDelete = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPostsByUserIdThunk.pending, (state) => {
      state.isLoading = true;
      state.posts = [];
      state.error = null;
    });
    builder.addCase(getPostsByUserIdThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
      state.error = null;
    });
    builder.addCase(getPostsByUserIdThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.posts = [];
      state.error = action.payload;
    });
    builder.addCase(deletePostThunk.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(deletePostThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = state.posts.filter((post) => post._id !== action.payload);
      state.postToDelete = null;
    });
    builder.addCase(deletePostThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { setModalOpen, setPostToDelete } = dTable.actions;

export default dTable.reducer;

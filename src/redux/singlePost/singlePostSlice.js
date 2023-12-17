import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { singleBlog } from "./singlePostApi";

const initialState = {
  isLoading: false,
  post: {},
  error: null,
};

// Async thunk for reading a single blog

export const readSingleBlogThunk = createAsyncThunk(
  "post/readSingleBlogThunk",
  async (slug, { rejectWithValue }) => {
    try {
      const response = await singleBlog(slug);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data.message);
    }
  }
);

const readSingleBlogSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    resetSingleBlogState: (state) => {
      state.isLoading = false;
      state.post = {};
      state.error = null;
    },
    singlePostUpdateLike: (state, action) => {
      const targetObj = state.post;
      const userIdIndex = targetObj.react.reactUserId.findIndex(
        (id) => id === action.payload.userId
      );

      if (userIdIndex === -1) {
        targetObj.react.reactUserId.push(action.payload.userId);
        targetObj.react.like = targetObj.react.like + 1;
      } else {
        targetObj.react.reactUserId.splice(userIdIndex, 1);
        targetObj.react.like = targetObj.react.like - 1;
      }
    },
  },
  extraReducers: (builder) => {
    // readSingleBlogThunk api call
    builder.addCase(readSingleBlogThunk.pending, (state) => {
      state.isLoading = true;
      state.post = {};
      state.error = null;
    });
    builder.addCase(readSingleBlogThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
      state.error = null;
    });
    builder.addCase(readSingleBlogThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.post = {};
      state.error = action.payload;
    });
  },
});

export default readSingleBlogSlice.reducer;
export const { resetSingleBlogState, singlePostUpdateLike } =
  readSingleBlogSlice.actions;

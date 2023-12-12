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
export const { resetSingleBlogState } = readSingleBlogSlice.actions;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCommentRequest, postCommentRequest } from "./commentApi";

const initialState = {
  isLoading: false,
  isSuccess: false,
  totalComment: 0,
  currentPage: 1,
  comments: [],
  error: null,
};

export const getCommentThunk = createAsyncThunk(
  "comment/getCommentThunk",
  async ({ postId, page }, { rejectWithValue }) => {
    try {
      return await getCommentRequest(postId, page);
    } catch (error) {
      return rejectWithValue(error?.response?.data.message);
    }
  }
);

export const getViewMoreCommentThunk = createAsyncThunk(
  "comment/getViewMoreCommentThunk",
  async ({ postId, page }, { rejectWithValue }) => {
    try {
      return await getCommentRequest(postId, page);
    } catch (error) {
      return rejectWithValue(error?.response?.data.message);
    }
  }
);
export const postCommentThunk = createAsyncThunk(
  "comment/postCommentThunk",
  async ({ _id, comment }, { rejectWithValue }) => {
    try {
      return await postCommentRequest(_id, comment);
    } catch (error) {
      return rejectWithValue(error?.response?.data.message);
    }
  }
);

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.totalComment = 0;
      state.currentPage = 1;
      state.comments = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCommentThunk.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.totalComment = 0;
      state.comments = [];
      state.error = null;
    });

    builder.addCase(getCommentThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.currentPage = Number(action.payload.currentPage);
      state.totalComment = action.payload.totalComment;
      state.comments = [...action.payload.comments];
      state.error = null;
    });

    builder.addCase(getCommentThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    });
    // view more thunk
    builder.addCase(getViewMoreCommentThunk.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
    });

    builder.addCase(getViewMoreCommentThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.currentPage = Number(action.payload.currentPage);
      state.comments = [...state.comments, ...action.payload.comments];
      state.error = null;
    });

    builder.addCase(getViewMoreCommentThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    });

    // new comment
    builder.addCase(postCommentThunk.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
    });

    builder.addCase(postCommentThunk.fulfilled, (state) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.currentPage = 1;
      state.error = null;
    });

    builder.addCase(postCommentThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    });
  },
});

export default commentSlice.reducer;
export const { reset } = commentSlice.actions;

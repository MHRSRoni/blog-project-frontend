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
export const getMorePostThunk = createAsyncThunk(
  "post/getMorePostThunk",
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
  reducers: {
    updateLike: (state, action) => {
      const targetObj = state.posts.resultPosts.find(
        (item) => item._id === action.payload.postId
      );

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
    // getPostThunk api call
    builder.addCase(getPostThunk.pending, (state) => {
      state.isLoading = true;
      state.posts = {};
      state.error = null;
    });
    builder.addCase(getPostThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data;
      state.error = null;
    });
    builder.addCase(getPostThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.posts = {};
      state.error = action.payload;
    });

    builder.addCase(getMorePostThunk.fulfilled, (state, action) => {
      const previousPost = state.posts.resultPosts;
      state.posts = {
        ...state.posts,
        // eslint-disable-next-line no-unsafe-optional-chaining
        resultPosts: [...previousPost, ...action?.payload?.data?.resultPosts],
      };
      state.error = null;
    });
    builder.addCase(getMorePostThunk.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export default postSlice.reducer;
export const { updateLike } = postSlice.actions;

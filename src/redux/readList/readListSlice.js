import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getReadList, updateReadListRequest } from "./readListAPI";

const initialState = {
  isLoading: false,
  readList: null,
  error: null,
};

export const getReadListThunk = createAsyncThunk(
  "readList/getReadListThunk",
  async (_, { rejectWithValue }) => {
    try {
      return await getReadList();
    } catch (error) {
      return rejectWithValue(error?.response?.data.message);
    }
  }
);
export const updateReadListThunk = createAsyncThunk(
  "readList/updateReadListThunk",
  async (postId, { rejectWithValue, dispatch }) => {
    try {
      const result = await updateReadListRequest(postId);
      if (result === true) {
        await dispatch(getReadListThunk());
        return result;
      }
    } catch (error) {
      return rejectWithValue(error?.response?.data.message);
    }
  }
);

const readListSlice = createSlice({
  name: "readList",
  initialState,
  reducers: {
    resetReadList: (state) => {
      state.isLoading = false;
      state.readList = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // for get readList
    builder.addCase(getReadListThunk.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getReadListThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.readList = action.payload;
      state.error = null;
    });
    builder.addCase(getReadListThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.readList = null;
      state.error = action.payload;
    });
  },
});

export default readListSlice.reducer;
export const { resetReadList } = readListSlice.actions;

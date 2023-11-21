import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategory } from "./categoryAPI";
const initialState = {
  isLoading: false,
  category: [],
  all: [],
  error: null,
};

export const getCategoryThunk = createAsyncThunk(
  "category/getCategoryThunk",
  async (_, { rejectWithValue }) => {
    try {
      return await getCategory();
    } catch (error) {
      return rejectWithValue(error?.response?.data.message);
    }
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    loadMore: (state) => {
      state.category = state.all;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCategoryThunk.pending, (state) => {
      state.isLoading = true;
      state.category = [];
      state.all = [];
      state.error = null;
    });
    builder.addCase(getCategoryThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.category = action.payload.data.slice(0, 7);
      state.all = action.payload.data;
      state.error = null;
    });
    builder.addCase(getCategoryThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.category = [];
      state.all = [];
      state.error = action.payload;
    });
  },
});

export default categorySlice.reducer;
export const { loadMore } = categorySlice.actions;

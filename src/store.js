import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./redux/post/postSlice";

const store = configureStore({
  reducer: {
    post: postReducer,
  },
});

export default store;

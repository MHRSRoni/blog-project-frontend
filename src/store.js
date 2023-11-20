import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./redux/post/postSlice";
import authReducer from "./redux/auth/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
  },
});

export default store;

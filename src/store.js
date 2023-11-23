import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./redux/post/postSlice";
import authReducer from "./redux/auth/authSlice";
import categoryReducer from "./redux/category/categorySlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postReducer,
    category: categoryReducer,
  },
});

export default store;

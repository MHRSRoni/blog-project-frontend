// store.js

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/auth/authSlice";
import postReducer from "./redux/post/postSlice";
import categoryReducer from "./redux/category/categorySlice";
import readSingleBlogReducer from "./redux/singlePost/singlePostSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postReducer,
    category: categoryReducer,
    readSingleBlog: readSingleBlogReducer
  },
});

export default store;

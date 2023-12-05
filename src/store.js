// store.js

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/auth/authSlice";
import postReducer from "./redux/post/postSlice";
import categoryReducer from "./redux/category/categorySlice";
import readSingleBlogReducer from "./redux/singlePost/singlePostSlice";
import profileReducer from "./redux/user/userProfileSlice";
import tableReducer from "./redux/DTable/Dtableslice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postReducer,
    category: categoryReducer,
    readSingleBlog: readSingleBlogReducer,
    profile: profileReducer,
    table: tableReducer
  },
});

export default store;

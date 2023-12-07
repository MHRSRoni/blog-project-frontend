import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import Post from "./pages/Post";
import { ResetEmail } from "./pages/ResetEmail";
import UserDashboard from "./pages/UserDashboard";
import CreatePost from "./pages/CreatePost";
import EditBlogPage from "../src/components/Dashboard-UI/EditPost";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/user/Profile";
import { Register } from "./pages/auth/Register";
import { Login } from "./pages/auth/Login";
import ReadList from "./pages/user/ReadList";
import { Toaster } from "react-hot-toast";
import DTable from "./components/Dashboard-UI/DTable";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocalStorage } from "./utilities/SessionHelper";
import { loggedIn } from "./redux/auth/authSlice";
import axios from "./utilities/axiosInstance";
import SearchPage from "./pages/SearchPage";
import CategoryPage from "./pages/CategoryPage";
import { ForgotPassword } from "./pages/auth/ForgotPassword";

import VerifyOtp from "./pages/auth/VerifyOtp";
import SendOtp from "./pages/auth/SendOtp";
import AddCategory from "./pages/user/AddCategory";

function App() {
  const [loading, setLoading] = useState(true);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // only first time checking user already loggedIn or not
  useEffect(() => {
    const loggedInUser = getLocalStorage("user");
    if (loggedInUser) {
      dispatch(loggedIn(loggedInUser));
    }
    setLoading(false);
  }, []);

  // axios interceptor
  useEffect(() => {
    if (user) {
      axios.interceptors.request.use(function (config) {
        config.headers.token = user?.token;
        return config;
      });
    }
  }, [user]);

  return loading ? (
    "loading..."
  ) : (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />
          <Route path="/send-otp" element={<SendOtp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/resetemail" element={<ResetEmail />} />
          <Route path="/post/read" element={<Post />} />
          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
            <Route path="edit-post/:slug" element={<EditBlogPage />} />

          <Route path="/user/dashboard" element={<UserDashboard />}>
            <Route index element={<DTable />} />
            <Route path="read-list" element={<ReadList />} />
            <Route path="create-post" element={<CreatePost />} />
            <Route path="profile" element={<Profile />} />
            <Route path="addCategory" element={<AddCategory />} />
          </Route>
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;

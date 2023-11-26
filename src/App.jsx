import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import Post from "./pages/Post";
import { ResetPass } from "./pages/ResetPass";
import { ResetEmail } from "./pages/ResetEmail";
import UserDashboard from "./pages/UserDashboard";
import CreatePost from "./pages/CreatePost";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Register } from "./pages/auth/Register";
import Otp from "./pages/auth/Otp";
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
          <Route path="/otp" element={<Otp />} />
          <Route path="/resetPass" element={<ResetPass />} />
          <Route path="/resetemail" element={<ResetEmail />} />
          {/* <Route path="/post/:id" element={<Post />} /> */}
          {/* <Route path="/post" element={<Post />} /> */}
          {/* <Route path="/post/read" element={<Post />} /> */}

          <Route path="/post/read" element={<Post />} />

          <Route path="/about" element={<About />} />
            <Route path="create-post" element={<CreatePost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/user/dashboard" element={<UserDashboard />}>
            <Route index element={<DTable />} />
            <Route path="read-list" element={<ReadList />} />
            {/* <Route path="create-post" element={<CreatePost />} /> */}
          </Route>
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;

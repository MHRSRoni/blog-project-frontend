import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import Post from "./pages/Post";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Register } from "./pages/auth/Register";
import Otp from "./pages/auth/Otp";
import { Login } from "./pages/auth/Login";
import UserDashboard from "./pages/user/UserDashboard";
import ReadList from "./pages/user/ReadList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/user/read-list" element={<ReadList />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

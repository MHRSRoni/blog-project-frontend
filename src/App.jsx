import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

import Layout from "./pages/Layout";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import Otp from "./pages/Otp";
import NoPage from "./pages/NoPage";
import Post from "./pages/Post";
import About from "./pages/About";
import Contact from "./pages/Contact";

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
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

import Layout from "./pages/Layout";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import Otp from "./pages/Otp";
import NoPage from "./pages/NoPage";
import Post from "./pages/Post";
/* import UDash from "./pages/UserDashboard"; */

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/udash" element={<UDash />} /> */}
          <Route path="/otp" element={<Otp />} />
          <Route path="/post/:id" element={<Post />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import SinglePost from "./pages/SinglePostPage";
import { RegForm } from "./components/Userlog/RegForm";
import { Login } from "./components/Userlog/Login";
import Otp from "./components/Userlog/Otp";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/blog" element={<SinglePost />} />
        <Route path="/register" element={<RegForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<Otp />} /> {/* Add the Otp component route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;


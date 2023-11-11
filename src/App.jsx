import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import { RegForm } from "./components/Userlog/RegForm";
import { Login } from "./components/Userlog/Login";
import Otp from "./components/Userlog/Otp"; // Import the Otp component

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/register" element={<RegForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<Otp />} /> {/* Add the Otp component route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;


import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar/NavBar";

const Layout = () => {
  return (
    <div className="bg-slate-50 relative">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;

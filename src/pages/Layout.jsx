import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { getReadListThunk } from "../redux/readList/readListSlice";

const Layout = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  if (user?.data && user?.token) {
    dispatch(getReadListThunk());
  }
  return (
    <div className="bg-slate-50 relative">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;

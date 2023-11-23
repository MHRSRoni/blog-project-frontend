import { Navigate, Outlet, useLocation } from "react-router-dom";
import DSidebar from "../components/Dashboard-UI/DSideBar";
import { useSelector } from "react-redux";

const UserDashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();

  if (!user?.token && user?.role !== "user") {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container mx-auto">
      <div className="flex gap-3 mt-4">
        <div className="left h-screen basis-3/12">
          <DSidebar />
        </div>
        <div className="right basis-9/12">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;


import DSidebar from "../components/Dashboard-UI/DSideBar"
import DTable from "../components/Dashboard-UI/DTable"


const UserDashboard = () => {
    return (
      <div className="flex">
        <DSidebar />
        <DTable />
      </div>
    );
  };
  
  export default UserDashboard;
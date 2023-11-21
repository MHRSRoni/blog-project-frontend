
import DSidebar from "../components/Dashboard-UI/DSideBar"
import DTable from "../components/Dashboard-UI/DTable"


const UserDashboard = () => {


  
    return (
      <div className="container mx-auto">


      
      <div className="flex gap-3 mt-4">

      <div className="left h-screen basis-3/12"><DSidebar /></div>  
      <div className="right basis-9/12"><DTable /></div>  
        
        
      </div>
      </div>
    );
  };
  
  export default UserDashboard;
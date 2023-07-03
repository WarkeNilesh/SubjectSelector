import Sidebar from "../../../components/sidebar/Sidebar";

import "./dashbord.css";
import Widget from "../../../components/widget/Widget";
import Dashboardtable from "../../../components/table/dashboardtable"


const Home = () => {
  
  return (
    <div className="dashboard">
     <Sidebar  />
      <div className="homeContainer">
      
        <div className="widgets">
          <Widget  choice ="student" />
          <Widget  choice ="course" />
  
        </div>
        
        <div className="listContainer">
          <div className="listTitle">STUDENTS WITH RESPECTIVE COURSES</div>
          <Dashboardtable />
        </div>
      </div>
    </div>
  );
};

export default Home;

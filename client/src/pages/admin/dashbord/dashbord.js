import Sidebar from "../../../components/sidebar/Sidebar";

import "./dashbord.css";
import Widget from "../../../components/widget/Widget";

import All from "../../../components/table/table";

const Home = (props) => {
  const {role} = props;
  return (
    <div className="dashboard">
     <Sidebar role = {role} />
      <div className="homeContainer">
      
        <div className="widgets">
          <Widget  choice ="student" />
          <Widget  choice ="course" />
  
        </div>
        
        <div className="listContainer">
          <div className="listTitle">STUDENTS WITH RESPECTIVE COURSES</div>
          <All page = "dashboard" />
        </div>
      </div>
    </div>
  );
};

export default Home;

import "./new.css";
import Sidebar from "../../../components/sidebar/Sidebar";
import All from "../../../components/table/table"
import { Link } from "react-router-dom";
import Button from '@mui/material/Button'
import { useEffect, useState } from "react";


const New = (props) => {
 
  const {data,choices} = props;
 
  const [choice, setChoice] = useState(null);
  useEffect(() => {
    setChoice(choices);
  }, [choices]);

  
  const CHOICE = choice ? choice.toUpperCase() : "";

  let role;
  {(data.isadmin)?role = 'admin':role = 'student'}
  return (
    <div className="new">
       <Sidebar  role = {role}/>
      <div className="newContainer">
     
        <div className="top" style={{margin: '20px', marginTop :'100px', padding:'0px', paddingLeft:'30px'}}>
          <div className="role"><h1>{CHOICE}</h1></div>
          <Link to={"/newentity"+choice} style={{ textDecoration: "none" ,color:"black"} }>
          <div className="button" ><Button style={{width:'110px',marginRight:'30px'}} variant="contained">ADD NEW</Button></div>
          </Link>
        </div>
        <div className="students">
      {choice === "student"?<All page = "student" />: <All  page = "course"/>}
         
          
        </div>
      </div>
    </div>
  );
};

export default New;

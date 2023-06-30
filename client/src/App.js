import Dashbord from "./pages/admin/dashbord/dashbord"
import New from "./pages/admin/new/New"
import Course from "../src/pages/student/course/course"
import Home from "./pages/common/Homepage/home";
import Profile from "./pages/common/profile/profile"
import NewEntity from "./pages/admin/newentity/newentity";
import Login from "./pages/common/auth/login";
import Contact_Us from "../../client/src/pages/common/Contact/Contact"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import useFetch from "./hooks/useFetch";

function App() {
  const { data, loading, error } = useFetch("http://localhost:4000/user/getuser?username=av");
  let role;
  {(data.isadmin)?role = 'admin':role = 'student'}
  // console.log(data);
  
let access;
switch (role) {
    
  case 'admin':
   
    access = ( 
      <>
         <Route exact path="/students" element={<New data = {data} choices = "student"/>} />
         <Route exact path="/courses" element={<New data = {data} choices = "course" />} />
         <Route exact path="/dashboard" element={<Dashbord role = {role} />} />
         <Route exact path="/Newentitycourse" element={<NewEntity role = {role} choice="course"  />} />
        <Route exact path="/Newentitystudent" element={<NewEntity role = {role} choice="student" />} />
      </>
    );
    break;
  case 'student':
    access = (
      <>
        <Route exact path="/course" element={<Course role = {role} />} />
       
      </>
    );
   
    break;
    
}

  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/ContactUs" element={<Contact_Us />} />
  
       
        
        {access}
      
        
       
        {/* <Route exact path="/newCourse" element={<NewCourse />} />  */}
        <Route exact path="/profile" element={<Profile data = {data} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import Dashbord from "./pages/admin/dashbord/dashbord";
import New from "./pages/admin/new/New";
import Course from "../src/pages/student/course/course";
import Home from "./pages/common/Homepage/home";
import Profile from "./pages/common/profile/profile";
import NewEntity from "./pages/admin/newentity/newentity";
import Login from "./pages/common/auth/login";
import Contact_us from "../../client/src/pages/common/Contact/Contact";
import About_us from "../../client/src/pages/common/aboutus/AboutUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import { useEffect, useState } from "react";

function App() {
  let [role, setRole] = useState(null);
  let [data, setData] = useState(null);

  useEffect(() => {
    let storedData = localStorage.getItem("userData");
  
    if (storedData) {
      let parsedData = JSON.parse(storedData);
      setData(parsedData);
      setRole(parsedData.isadmin ? "admin" : "student");
    }
  }, 'userData');
  


  let access;
  switch (role) {
    case "admin":
      access = (
        <>
          <Route exact path="/students" element={<New role={role} choices="student" />} />
          <Route exact path="/courses" element={<New role={role} choices="course" />} />
          <Route exact path="/dashboard" element={<Dashbord role={role} />} />
          <Route exact path="/Newentitycourse" element={<NewEntity role={role} choice="course" />} />
          <Route exact path="/Newentitystudent" element={<NewEntity role={role} choice="student" />} />
        </>
      );
      break;
    case "student":
      access = (
        <>
          <Route exact path="/course" element={<Course role={role} />} />
        </>
      );
      break;
    default:
      access = null;
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/ContactUs" element={<Contact_us />} />
          <Route exact path="/AboutUs" element={<About_us />} />

          {access}

          
          <Route exact path="/profile" element={<Profile data={data} role = {role} />} />
          <Route exact path="/logout" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import "./course.css"
import Sidebar from "../../../components/sidebar/Sidebar";
import Grid from '@mui/material/Grid';
import FeaturedPost from '../../../components/FeaturedPost/featuredpost';
import useFetch from "../../../hooks/useFetch";
import { useContext } from "react";
import { AuthContext } from '../../../context/AuthContext';
import { CircularProgress } from "@mui/material";
const New = () => {
    const { user } = useContext(AuthContext);

    if (user == null) {
        <CircularProgress />
    }
    const { data} = useFetch("http://127.0.0.1:8800/api/course/getcourses");
    
    return (
        <div className="course">
            <Sidebar />


            <div className="newContainer" >

                <div className="topplace" >
                    <div ><h1 >COURSE</h1></div>
                </div>
            


            <div className="topbar">
                <div className="role"><h1>Ongoing Courses</h1></div>

                <Grid container spacing={4}>
                    {data.map((obj) => (
                        <FeaturedPost key={obj.course_code} post={obj} 
                        username={user.username} button="ENROLL" />
                    ))}
                </Grid>
            </div>
            <div className="topbar" >
                <div className="role"><h1>Your Courses</h1></div>

                <Grid container spacing={4}>
                    {user.courses.map((obj) => (
                        <FeaturedPost key={obj.course_code} post={obj} button="REMOVE" />
                    ))}
                </Grid>
            </div>

            </div>

        </div>
    );
};

export default New;

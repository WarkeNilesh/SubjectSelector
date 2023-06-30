import "./widget.css";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import BookIcon from '@mui/icons-material/Book';
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import LoadingButton from '@mui/lab/LoadingButton/LoadingButton';


const Widget = ({ choice }) => {
  

  let url;

  if (choice === 'course') {
    url = '/course/getCourseCount';
   
  }
   if (choice === 'student') {
    url = '/user/getStudentCount';
  }

  const CHOICE = choice ? choice.toUpperCase() : "";


  const { data, loading, error } = useFetch(`http://localhost:4000${url}`);
  console.log(data);
  

  return (
    <div className="widget">
      <div className="left">
        <span className="title"> TOTAL {CHOICE}S</span>
        {loading
                    ? "loading..."
                    :(
        <span className="counter">
          {data.count}
        </span>)}
        <Link to={`/${choice}s`}>  <span className="link">All {choice}s</span> </Link>
       
      </div>
    </div>
  );
};

export default Widget;

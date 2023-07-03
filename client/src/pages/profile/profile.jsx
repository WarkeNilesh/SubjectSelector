import "./profile.css";

import Sidebar from "../../components/sidebar/Sidebar"
// import Table from "../../../components/table/table";
import useFetch from '../../hooks/useFetch';
import { AuthContext } from '../../context/AuthContext';
import { useContext} from "react";

const Profile = () => {
 const { user } = useContext(AuthContext);

  if (user == null) {
    <h5>loading....</h5>
  }

  const { data, loading } = useFetch(`/users/${user._id}`);
  if (loading) {
    return <h5>Loading....</h5>;
  }

  const role = data.isAdmin ? 'admin' : 'student';
  console.log(role);

  let access;
  switch (role) {
    
    case 'student':
      access = <>
      <div className="bottom">
            <h1 className="title">Last Transactions</h1>
            {/* <Table  /> */}
          </div>
      </>;
      break;
    default:
      access = null;
  }

 
  console.log(data);
 
  return (
    <div className="Profile">
    
    <Sidebar  />
        <div className="ProfileContainer">
      
          <div className="top">
            <div className="left">

              <h1 className="title">Information</h1>
              <div className="item">
                <img
                  src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                  alt=""
                  className="itemImg"
                />
                <div className="details">
                  <h1 className="itemTitle">{data.name}</h1>
                  <div className="detailItem">
                    <span className="itemKey">PRN:</span>
                    <span className="itemValue">
                    {data.username}
                    </span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Email:</span>
                    <span className="itemValue">{data.email}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Phone:</span>
                    <span className="itemValue">{data.phone}</span>
                  </div>

                  
                </div> 
               </div>
            </div>

          </div>
       
          
        </div>
      

    </div >
  );
};

export default Profile;

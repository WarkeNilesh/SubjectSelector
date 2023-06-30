import "./profile.css";
import Sidebar from "../../../components/sidebar/Sidebar";
import Table from "../../../components/table/table";
import useFetch from "../../../hooks/useFetch";


const Student = (props) => {
  
  const {data} = props;
 
  // console.log(data);
  let role;
  {(data.isadmin)?role = 'admin':role = 'student'}
  return (
    <div className="Student">
    
        <Sidebar role={role} />
        <div className="StudentContainer">
      
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
       
          <div className="bottom">
            <h1 className="title">Last Transactions</h1>
            <Table data = {data} />
          </div>
        </div>
      

    </div >
  );
};

export default Student;

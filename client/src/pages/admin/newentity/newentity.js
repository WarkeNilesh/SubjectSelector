
import Sidebar from "../../../components/sidebar/Sidebar";

import { useState } from "react";

import axios from "axios";
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import "./newentity.css";


const Newentity = (props) => {
  const { role,choice } = props;
  const uppercaseChoice = choice.toUpperCase();

  const [files, setFiles] = useState("");
  const [info, setInfo] = useState({});
  const [rooms, setRooms] = useState([]);

  

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSelect = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setRooms(value);
  };
  
  console.log(files)

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const list = await Promise.all(
        Object.values(files).map(async (file) => {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "upload");
          const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/lamadev/image/upload",
            data
          );

          const { url } = uploadRes.data;
          return url;
        })
      );

      const newhotel = {
        ...info,
        rooms,
        photos: list,
      };

      await axios.post("/hotels", newhotel);
    } catch (err) {console.log(err)}
  };


  let form;


  switch (choice) {
    
    case 'student':
     
      form = ( 
        <>
         <form>
            <Typography variant="h6" gutterBottom>
        New_User
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="PRN"
            name="address1"
            label="PRN"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="Email_id"
            name="address2"
            label="College_Email_id"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="Number"
            name="address2"
            label="Phone_Number"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
       
        </Grid>
        <Grid item xs={12}>
        <Button className="Button" variant="contained">SUBMIT</Button>
        </Grid>
        
      </Grid>
            </form>
        </>
      );
      break;
    case 'course':
      form = (
        <>
         
         <form>
            <Typography variant="h6" gutterBottom>
        New_Course
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="Course"
            name="address1"
            label="Course_name"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id=""
            name="address2"
            label="Course_code"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Course"
            name="address1"
            label="Course_description"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        
        <Grid item xs={12}>
        <Button className="Button" variant="contained">SUBMIT</Button>
        </Grid>
        
      </Grid>
            </form>
        </>
      );
     
      break;
      
  }


  return (
    <div className="new">
      
      <div className="newContainer">
      <Sidebar role = {role} />
        <div className="top" >
          <h1> ADD NEW {uppercaseChoice}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img className="Img"
              src={
                files
                  ? URL.createObjectURL(files[0])
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            
             {form}



          </div>
        </div>
      </div>
    </div>
  );
};

export default Newentity;

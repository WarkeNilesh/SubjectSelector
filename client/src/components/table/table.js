import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./table.css";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
const All = (props) => {
  const { page } = props;
  
 
  let url;

  if (page === "student") {
    url = "/user/getstudents";
  } else if (page === "dashboard") {
    url = "/user/getstudents";
  } else {
    url = "/course/getcourses";
  }

  const { data, loading } = useFetch(`http://localhost:4000${url}`);

  console.log(data);

  let tableHeader;
  let tableBody;

  switch (page) {
    case "dashboard":
      tableHeader = (
        <>
          <TableCell className="tableCell"  align="center" valign="middle"  style={{backgroundColor:"#0059B2", color: "white",fontSize : "20px"}}  >USERNAME</TableCell>
          <TableCell className="tableCell"  align="center" valign="middle"  style={{backgroundColor:"#0059B2", color: "white",fontSize : "20px"}} >NAME</TableCell>
          <TableCell className="tableCell"  align="center" valign="middle"  style={{backgroundColor:"#0059B2", color: "white",fontSize : "20px"}} >EMAIL</TableCell>
          <TableCell className="tableCell"  align="center" valign="middle"  style={{backgroundColor:"#0059B2", color: "white",fontSize : "20px"}} >COURSES</TableCell>
          <TableCell className="tableCell"  align="center" valign="middle"  style={{backgroundColor:"#0059B2", color: "white",fontSize : "20px"}} >ACTION</TableCell>
        </>
      );
      tableBody = (
        <>
          {loading ? (
            "LOADING...."
          ) : (
            data &&
            data.map((data) => (
              <TableRow key={data.username} className="tablerow">
                <TableCell className="tableCell" align="center" valign="middle">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {data.username}{" "}
                  </Link>
                </TableCell>

                <TableCell className="tableCell" align="center" valign="middle">
                 {data.name}
                </TableCell>

                <TableCell className="tableCell" align="center" valign="middle">{data.email}</TableCell>
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <TableCell className="tableCell" align="center" valign="middle">{data.courses}</TableCell>
                </Link>

                <TableCell className="tableCell" align="center" valign="middle">
                  <Button
                    variant="contained"
                    style={{ margin: "10px" }}
                    className="button"
                  >
                    UPDATE
                  </Button>
                  <Button
                    variant="contained"
                    style={{ margin: "10px" }}
                    className="button"
                  >
                    DELETE
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </>
      );
      break;

    case "student":
      tableHeader = (
        <>
          <TableCell className="tableCell"  align="center" valign="middle"  style={{backgroundColor:"#0059B2", color: "white",fontSize : "20px"}} >PRN</TableCell>
          <TableCell className="tableCell"  align="center" valign="middle"  style={{backgroundColor:"#0059B2", color: "white",fontSize : "20px"}} >Name</TableCell>
          <TableCell className="tableCell"  align="center" valign="middle"  style={{backgroundColor:"#0059B2", color: "white",fontSize : "20px"}} >College mail ID</TableCell>
          <TableCell className="tableCell"  align="center" valign="middle"  style={{backgroundColor:"#0059B2", color: "white",fontSize : "20px"}} >Contact no</TableCell>
          <TableCell className="tableCell"  align="center" valign="middle"  style={{backgroundColor:"#0059B2", color: "white",fontSize : "20px"}} >Action</TableCell>
        </>
      );
      tableBody = (
        <>
          {loading ? (
            "LOADING...."
          ) : (
            data &&
            data.map((data) => (
              <TableRow key={data.username} className="tablerow">
                <TableCell className="tableCell" align="center" valign="middle">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {data.username}{" "}
                  </Link>
                </TableCell>

                <TableCell className="tableCell" align="center" valign="middle">
                  {data.name}
                </TableCell>

                <TableCell className="tableCell" align="center" valign="middle">{data.email}</TableCell>
                <TableCell className="tableCell" align="center" valign="middle">{data.phone}</TableCell>

                <TableCell className="tableCell" align="center" valign="middle">
                  <Button
                    variant="contained"
                    style={{ margin: "10px" }}
                    className="button"
                  >
                    UPDATE
                  </Button>
                  <Button
                    variant="contained"
                    style={{ margin: "10px" }}
                    className="button"
                  >
                    DELETE
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </>
      );
      break;

    case "course":
      tableHeader = (
        <>
          <TableCell style={{backgroundColor:"#0059B2", color: "white",fontSize : "20px"}} className="tableCell"  align="center" valign="middle" >Course Code</TableCell>
          <TableCell style={{backgroundColor:"#0059B2", color: "white",fontSize : "20px"}} className="tableCell"  align="center" valign="middle" >Course Name</TableCell>
          <TableCell style={{backgroundColor:"#0059B2", color: "white",fontSize : "20px"}} className="tableCell"  align="center" valign="middle" >Faculty</TableCell>
          <TableCell style={{backgroundColor:"#0059B2", color: "white",fontSize : "20px"}} className="tableCell"  align="center" valign="middle" >Action</TableCell>
        </>
      );
      tableBody = (
        <>
          {loading ? (
            "LOADING...."
          ) : (
            data &&
            data.map((data) => (
              <TableRow key={data.course_code} className="tablerow">
                <TableCell className="tableCell" align="center" valign="middle">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {data.course_code}{" "}
                  </Link>
                </TableCell>
                <TableCell className="tableCell" align="center" valign="middle">
                  {data.name}
                </TableCell>
                <TableCell className="tableCell" align="center" valign="middle">{data.faculty}</TableCell>

                <TableCell className="tableCell" align="center" valign="middle">
                  <Button
                    variant="contained"
                    style={{ margin: "10px" }}
                    className="button"
                  >
                    UPDATE
                  </Button>
                  <Button
                    variant="contained"
                    style={{ margin: "10px" }}
                    className="button"
                  >
                    DELETE
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </>
      );
      break;
  }
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>{tableHeader}</TableRow>
        </TableHead>

        <TableBody>{tableBody}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default All;

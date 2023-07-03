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

const All = () => {

  const { data, loading } = useFetch(`/users/getstudents`);

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>

          <TableCell className="tableCell"  align="center" valign="middle"  style={{backgroundColor:"#0059B2", color: "white",fontSize : "20px"}}  >USERNAME</TableCell>
          <TableCell className="tableCell"  align="center" valign="middle"  style={{backgroundColor:"#0059B2", color: "white",fontSize : "20px"}} >NAME</TableCell>
          <TableCell className="tableCell"  align="center" valign="middle"  style={{backgroundColor:"#0059B2", color: "white",fontSize : "20px"}} >EMAIL</TableCell>
          <TableCell className="tableCell"  align="center" valign="middle"  style={{backgroundColor:"#0059B2", color: "white",fontSize : "20px"}} >COURSES</TableCell>
          <TableCell className="tableCell"  align="center" valign="middle"  style={{backgroundColor:"#0059B2", color: "white",fontSize : "20px"}} >ACTION</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
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
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default All;

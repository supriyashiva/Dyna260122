import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

import db from "../firebase";
import { DataGrid } from "@material-ui/data-grid";
import EditIcon from "@material-ui/icons/Edit";
import { collection, query, where } from "firebase/firestore";

import {
  Box,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  withStyles,
} from "@material-ui/core";
//import { PieChart, Pie } from "recharts";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#607d8b",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

// function createData( Cid, Cname, Ccontact, Cemail, client,Husname,edit) {
//   return {  Cid, Cname, Ccontact, Cemail, client,Husname,edit };
// }

// const rows = [
//   createData(1, 111, 6.0, 'gmail@gmail', "Dynamec", 6.0),
//   createData(2, 222, 9.0, 'viki@gmail', "wired", 33),
//   createData(3, 333, 262, 'rock@gmail', "roller", 6.0),
//   createData(4, 444, 262,'yuv@gmail' ,"motor", 6.0),
//   createData(5, 555, 305, 'kit@gmail', "driller", 4.3),

// ];

const useStyles = makeStyles({
  table: {
    minWidth: 900,
  },
  paper: {
    textAlign: "center",
    width: "100%",
    padding: "10px",
    backgroundColor: "gray",
  },
  tm: {
    marginTop: 30,
  },
  rootcol: {
    "& .header-name": {
      backgroundColor: "#8860CD",
      fontSize: 17,
      fontFamily: "Poppins Regular",
      fontStyle: "bold",
    },
  },
});

function User() {
  const history = useHistory();
  const [info1, setInfo1] = useState("");
  const [name, setName] = useState("");
  const [createData, setCreateData] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    db.collection("casefiles").onSnapshot((snapshot) => {
      setCreateData(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    //console.log({id });
    //console.log(data);
  }, []);

  // const handleDelete = async (id) => {
  //     if (window.confirm("Are you sure to delete this record")) {
  //         alert(id)
  //         db.collection("user").where("UserName", "==", id).get()
  //             .then(querySnapshot => { querySnapshot.docs[0].ref.delete() });
  //     };

  // }

  return (
    <>
      <Container maxWidth="lg">
        <h1>Case file Page</h1>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Button
              onClick={() => history.push("/CreateUserForm")}
              type="submit"
              color="secondary"
              variant="contained"
              endIcon={<KeyboardArrowRightIcon />}
            >
              Create File
            </Button>
          </Grid>

          <Grid item xs={10}>
            <div style={{ height: 400, width: "100%" }}>
              {/* <DataGrid width={100} rows={info}  columns={columns} pageSize={5} /> */}
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      {/* <StyledTableCell>View</StyledTableCell>  */}
                      <StyledTableCell>ClientId </StyledTableCell>
                      <StyledTableCell>Case Number</StyledTableCell>
                      <StyledTableCell>Year of Case</StyledTableCell>
                      <StyledTableCell>state</StyledTableCell>
                      <StyledTableCell>District</StyledTableCell>
                      <StyledTableCell>Court complex</StyledTableCell>
                      <StyledTableCell>Edit</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {createData?.map(({ id, data }) => (
                      <StyledTableRow>
                        {/* <StyledTableCell component="th" scope="row">
                        <Box display="flex">
                          {/* <Box>
                        {row.view}
                        </Box>  */}
                        {/* <Button onClick={() => history.push("/devicedetail")}>
                            <VisibilityIcon />
                          </Button> */}
                        {/* </Box> */}
                        {/* </StyledTableCell>  */}
                        <StyledTableCell>{data.clientid}</StyledTableCell>
                        <StyledTableCell>{data.casenumber}</StyledTableCell>
                        <StyledTableCell>{data.year}</StyledTableCell>
                        <StyledTableCell>{data.state}</StyledTableCell>
                        <StyledTableCell>{data.district}</StyledTableCell>
                        <StyledTableCell>{data.courtcomplex}</StyledTableCell>
                        <StyledTableCell>
                          <Box display="flex">
                            <Box>
                              <Button>
                                <EditIcon />
                              </Button>
                            </Box>
                          </Box>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Grid>

          {/* {info.map(item => (
                        <Grid item xs={12} md={6} lg={4} key={info.UserName}>
                            <UserCard data={item} handleDelete={handleDelete} />
                        </Grid>
                    ))}  */}
        </Grid>
      </Container>
    </>
  );
}
export default User;

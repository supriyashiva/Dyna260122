import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
 import MaterialTable from "material-table";

import {
  Box,
  Grid,
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
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import DeviceCard from "../components/DeviceCard";
import db from "../firebase";
import { DataGrid } from "@material-ui/data-grid";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import EditIcon from "@material-ui/icons/Edit";
// import { id } from "date-fns/locale";

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

function createData(Cid, Cname, Ccontact, Cemail,fathername,  Husname, edit) {
  return { Cid, Cname, Ccontact, Cemail, fathername, Husname, edit };
}

const rows = [
    
    createData(1, 111, 99003456, "gmail@gmail", "Dynamec", 6.0),
    createData(2, 222, 9.0, "viki@gmail", "wired", 33),
    createData(3, 333, 262, 'rock@gmail', "roller", 6.0),
    createData(4, 444, 262,'yuv@gmail' ,"motor", 6.0),
    createData(5, 555, 305, 'kit@gmail', "driller", 4.3),
 ];
 

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

function Devices() {
  const history = useHistory();
  const classes = useStyles();
  const [info, setInfo] = useState([]);
  const [name, setName] = useState([]);
  const [contact, setContact] = useState([]);
  const [mail, setMail] = useState([]);
  const [fname, setFname] = useState([]);
  
  
    useEffect(()=>{
  
    db.collection("example")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        
         const data1 = doc.data().clientid;
        const data2 = doc.data().clientname;
        const data3 = doc.data().contact;
        const data4 = doc.data().dateinstalled;
        const data5 = doc.data().farmeraddress;
        
        setInfo((arr) => [...arr, data1]);
        setName((arr) => [...arr, data2]);
        setContact((arr) => [...arr, data3]);
        setMail((arr) => [...arr, data4]);
        setFname((arr) => [...arr, data5]);
        
      });
    });
  }, []);

  
  return (
    <>
    
      <Container maxWidth="lg">
        <h1>Client Details Page</h1>

        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Button
              onClick={() => history.push("/cdf")}
              type="submit"
              color="secondary"
              variant="contained"
              endIcon={<KeyboardArrowRightIcon />}
            >
              Create Client
            </Button>
          </Grid>
          <div className={classes.tm}>
            <h1></h1>
          </div>
          {/* <div> */}
          <Grid item xs={11} className={classes.rootcol}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    {/* <StyledTableCell>View</StyledTableCell>  */}
                    <StyledTableCell>Client Id </StyledTableCell>
                    <StyledTableCell>Client name</StyledTableCell>
                    <StyledTableCell>Client contact</StyledTableCell>
                    <StyledTableCell>Client Email_id</StyledTableCell>
                    <StyledTableCell>Father name</StyledTableCell>
                    <StyledTableCell>Husband name</StyledTableCell>
                    <StyledTableCell>Edit</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow>
                      {/* <StyledTableCell component="th" scope="row">
                        <Box display="flex">
                          <Box>
                        {row.Cid}
                        </Box> 
                          <Button onClick={() => history.push("/devicedetail")}>
                            <VisibilityIcon />
                          </Button> 
                        </Box> 
                       </StyledTableCell>   */}
                       
                      <StyledTableCell>{info}</StyledTableCell>
                      <StyledTableCell>{name}</StyledTableCell>
                      <StyledTableCell>{contact}</StyledTableCell>
                      <StyledTableCell>{row.Cemail}</StyledTableCell>
                      <StyledTableCell>{row.fathername}</StyledTableCell>
                      
                      <StyledTableCell>{row.Husname}</StyledTableCell>
                       
                      {/* <StyledTableCell>{row.client}</StyledTableCell>
                      <StyledTableCell>{row.Husname}</StyledTableCell> */}
                      <StyledTableCell>
                        <Box display="flex">
                          <Box>
                            <Button onClick={() => history.push("/edit")}>
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
          </Grid>
          {/* </div> */}
          {/* <Grid item xs={2} >

                        <PieChart width={200} height={400}>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                dataKey="num"
                                outerRadius={100}
                                labelLine={false}
                                label={renderCustomizedLabel}
                            >
                                {data.map((entry, index) => (
                                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </Grid> */}

          <div className={classes.tm}>
            {info.map((item) => (
              <Grid item lg={2} key={info.iimei}>
                {/* <DeviceCard data={item} handleDelete={handleDelete} /> */}
              </Grid>
            ))}
          </div>
        </Grid>
      </Container>
    </>
  );
}
export default Devices;

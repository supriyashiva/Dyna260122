import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
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
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";

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

function createData( imei, entity, deviceid, devicename, client,Husname,edit) {
  return {  imei, entity, deviceid, devicename, client,Husname,edit };
}

const rows = [
  createData(1, 111, 6.0, 'gmail@gmail', "Dynamec", 6.0),
  createData(2, 222, 9.0, 'viki@gmail', "wired", 33),
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

const data = [
  { name: "BLR", num: 2 },
  { name: "MYS", num: 1 },
];
const columns = [
  {
    field: "Imei",
    headerName: "Imei",
    width: 110,
    headerClassName: "header-name",
  },
  {
    field: "Entity",
    headerName: "Entity",
    width: 120,
    headerClassName: "header-name",
  },
  {
    field: "Deviceid",
    headerName: "DeviceId",
    width: 140,
    headerClassName: "header-name",
  },
  {
    field: "Devicename",
    headerName: "Device Name",
    width: 190,
    headerClassName: "header-name",
  },
  {
    field: "Client",
    headerName: "Client",
    width: 120,
    headerClassName: "header-name",
  },
  {
    field: "Farmername",
    headerName: "Husband Name",
    width: 190,
    headerClassName: "header-name",
  },

  {
    field: "Farmername",
    headerName: "Farmer Name",
    width: 190,
    headerClassName: "header-name",
  },
  // {
  //   field: "view",
  //   headerName: "View",
  //   width: 120,

  //   headerClassName: "header-name",
  // },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const COLORS = ["#3DCC91", "#FFB366", "#FF7373", "#FFCC00", "#3B22FF"];

function Devices() {
  const history = useHistory();
  const [info, setInfo] = useState([]);
  const classes = useStyles();

  // useEffect(() => {
  //   db.collection("court")
  //      .get()
  //      .then((querySnapshot) => {
  //        //Loop through the data and store
  //        //it in array to display
  //        querySnapshot.forEach((element) => {
  //          var data = element.data();
  //       setInfo((arr) => [...arr, data]);
  //        });
  //     });
  //  }, []);

  const handleDelete =  (id) => {
    if (window.confirm("Are you sure to delete this record?")) {
      alert(id);
      db.collection("court")
        .where("deviceid", "==", id)
        .get()
        .then((querySnapshot) => {
          querySnapshot.docs[0].ref.delete();
        });
    }
    const newDevices = info.filter((note) => note.deviceid != id);
    setInfo(newDevices);
    //     await fetch('https://nov22-3c43a-default-rtdb.firebaseio.com/devices.json' + id, {
    //         method: 'DELETE'
    //     })
    //     const newDevices = alldevices.filter(note => note.id != id)
    //     setAllDevices(newDevices)
  };

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
                    <StyledTableRow >
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
                      <StyledTableCell>{row.imei}</StyledTableCell>
                      <StyledTableCell>{row.entity}</StyledTableCell>
                      <StyledTableCell>{row.deviceid}</StyledTableCell>
                      <StyledTableCell>{row.devicename}</StyledTableCell>
                      <StyledTableCell>{row.client}</StyledTableCell>
                      <StyledTableCell>{row.Husname}</StyledTableCell>
                      <StyledTableCell>
                        <Box display="flex">
                          <Box>
                            <Button onClick={() => history.push("/cdf")} >
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
                <DeviceCard data={item} handleDelete={handleDelete} />
              </Grid>
            ))}
          </div>
        </Grid>
      </Container>
    </>
  );
            }
export default Devices;

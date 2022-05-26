import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import MaterialTable from "material-table";
import Dialog from "@material-ui/core/Dialog";
import {Box,Grid,makeStyles,Paper,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,
  withStyles,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import db from "../firebase";
import EditIcon from "@material-ui/icons/Edit";
import Searchfield from "../components/Searchfield";
import CustomizedDialogs from "../components/Dialog";
import CreateDeviceForm from "./CreateDeviceForm";
import DataTablenew from "../components/tables/DataTablenew";
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
  const [customersData, setCustomersData] = useState([]);

  useEffect(() => {
    db.collection("example").onSnapshot((snapshot) => {
      setCustomersData(
        snapshot.docs.map((doc) => ({
          // Cid, Cname, Ccontact, Cemail,fathername,  Husname, edit
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    console.log({ customersData });
  }, []);

  return (
    <>
      <Container maxWidth="lg">
        <h1>Client Details Page</h1>

        <Grid container spacing={0}>
          {/* <Grid item xs={6}>
            <Searchfield />
          </Grid> */}

          <Grid item xs={6}>

          <CustomizedDialogs>
        <CreateDeviceForm/>
        </CustomizedDialogs>

            {/* <Button
              //onClick={() => history.push("/cdf")}
              onClick={() => history.push("/dialog")}
              type="submit"
              color="secondary"
              variant="contained"
              endIcon={<KeyboardArrowRightIcon />}
            >
              Create Client
            </Button> */}
          </Grid>
          <div className={classes.tm}>
            <h1> </h1>
          </div>
          {/* <Grid item xs={6}><Searchfield/></Grid>  */}
          {/* <div style={{marginBottom:"10px"}}><Searchfield/></div> */}
          {/* <div> */}
          <Grid item xs={11} className={classes.rootcol}>
            <DataTablenew/>
            {/* <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    
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
                  {customersData?.map(({ id, data }) => (
                    <StyledTableRow>
                      <StyledTableCell>{data.clientid}</StyledTableCell>
                      <StyledTableCell>{data.clientname}</StyledTableCell>
                      <StyledTableCell>{data.clientcontact}</StyledTableCell>
                      <StyledTableCell>{data.dateinstalled}</StyledTableCell>
                      <StyledTableCell>{data.farmeraddress}</StyledTableCell>

                      <StyledTableCell>{data.client}</StyledTableCell>

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
            </TableContainer> */}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
export default Devices;

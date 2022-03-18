import React, { useState, useEffect, useLayoutEffect, label } from "react";
import {
  Typography,
  Container,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  Radio,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
//import MenuItem from "@material-ui/core/MenuItem";
import firebase from "firebase";
import db from "../firebase";
import { collection, getDocs, query } from "firebase/firestore";

import { useHistory } from "react-router-dom";

import useStyles from "../components/MyStyle";
import { format } from "date-fns";

function CreateDeviceForm() {
  const classes = useStyles();
  const history = useHistory();
  const [clientid, setClientId] = useState("");
  const [clientname, setClientname] = useState("");
  const [fathername, setFatherName] = useState("");
  const [dateOfBirth, setDOB] = useState("");
  const [husbandName, setHusbandName] = useState("");
  const [clientcontact, setClientContact] = useState("");
  const [emailid, setEmailid] = useState("");
  const [permanentaddr, setPermanentaddr] = useState("");
  const [presentaddr, setPresentaddr] = useState("");
  const [brieffacts, setBrieffacts] = useState("");

  useEffect(() => {
    db.collection("caseID")
      .get()
      .then((querySnapshot) => {
        //Loop through the data and store
        //it in array to display
        querySnapshot.forEach((doc) => {
          //var data = element.data();
          var data = doc.data().idvalue;

          data = data.toString();
          // setClientId((arr)  [...arr, data]);
          switch (data.length) {
            case 3:
              setClientId("220" + data);
              break;
            case 2:
              setClientId("2200" + data);
              break;
            case 1:
              setClientId("22000" + data);
              break;
            default:
              setClientId("Hellloo");
          }
        });
      });
  });

  const handleClick1 = () => {
    //adding textfield data to firestore collection

    alert("my device id is incrementing now");
    db.collection("ClientMaster")
      .doc(clientid.toString()+" - " +clientname.toString())
      .set({
        ClientId: clientid,
        ClientName: clientname,
        Fathername: fathername,
        DateOfBirth: dateOfBirth,
        HusbandName: husbandName,
        Clientcontact: clientcontact,
        Emailid: emailid,
        PermanentAdd: permanentaddr,
        PresentAdd: presentaddr,
        brieffacts: brieffacts,
      })
      .then((docRef) => {
        alert("Data Successfully Submitted");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });

    //incrementing firestore field value after every click
    const increment = firebase.firestore.FieldValue.increment(1);
    const statsref = db.collection("caseID").doc("counter");
    const batch = db.batch();
    batch.set(statsref, { idvalue: increment }, { merge: true });
    batch.commit();
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };
  return (
    <>
      <Container maxWidth="md">
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h4">ADD NEW Client</Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <h3>Client ID : {clientid} </h3>
              {/* <label
                style={{ width: "100%" }}
                id="Clientid"
                disabled={true}
                label="Client ID"
                value={clientid}
                variant="outlined"
                onChange={(e) => setClientId(e.target.value)}
              /> */}
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                onClick={handleClick1}
                style={{ height: "40px", width: "130px", marginLeft: "20px" }}
                variant="contained"
                type="submit"
                color="secondary"
              >
                Save
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                style={{ width: "100%" }}
                // id="devicename"

                label="Client Name"
                variant="outlined"
                onChange={(e) => setClientname(e.target.value)}
                value={clientname}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="client"
                label="Father Name"
                variant="outlined"
                onChange={(e) => setFatherName(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                style={{ width: "100%" }}
                id="Clientaddress"
                label="Date of Birth "
                variant="outlined"
                onChange={(e) => setDOB(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="Farmeraddress"
                label="Husband Name"
                variant="outlined"
                onChange={(e) => setHusbandName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="Adharnumber"
                label="Client contact#"
                variant="outlined"
                onChange={(e) => setClientContact(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="Dateinstalled"
                label="Email Id"
                variant="outlined"
                onChange={(e) => setEmailid(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                style={{ width: "100%" }}
                id="Clientcontact"
                label="Client Permanent address"
                variant="outlined"
                multiline
                rows={3}
                onChange={(e) => setPermanentaddr(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="Farmercontact"
                label="Cleient present address"
                variant="outlined"
                multiline
                rows={3}
                onChange={(e) => setPresentaddr(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id="Aadharnumber"
                label="Brief Facts"
                variant="outlined"
                multiline
                rows={3}
                onChange={(e) => setBrieffacts(e.target.value)}
              />
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
}

export default CreateDeviceForm;

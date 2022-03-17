import React, { useState, useEffect,useLayoutEffect, label } from "react";
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
import { collection, getDocs,query } from "firebase/firestore";

import { useHistory } from "react-router-dom";

import useStyles from "../components/MyStyle";

function CreateDeviceForm() {
  const classes = useStyles();
  const history = useHistory();
  const [info, setInfo] = useState([]);
  const [clientname, setClientname] = useState("");
  const [client, setClient] = useState("");
  const [clientaddress, setClientAddress] = useState("");
  const [farmeraddress, setFarmerAddress] = useState("");
  const [contact, setContact] = useState("");
  const [clientcontact, setClientContact] = useState("");
  const [farmercontact, setFarmerContact] = useState("");
  const [dateinstalled, setDateInstalled] = useState("");
  const [adharnumber, setAdharNumber] = useState("");

  const [clientid, setClientId] = useState("");
  
useEffect(() => {
    db.collection("example")
       .get()
       .then((querySnapshot) => {
         //Loop through the data and store
         //it in array to display
         querySnapshot.forEach((doc) => {
           //var data = element.data();
           var data=doc.data().clientname;
           var data1=doc.data().contact;
           setClientname((arr) => [...arr, data]);
           setContact((arr) => [...arr, data1]);
           //console.log(doc.data().clientname);
         });
      });
   }, [],);

  

  


  const handleClick1 = () => {
    //adding textfield data to firestore collection
     
    alert("my device id is incrementing now");
    db.collection("example")
      .add({
        clientid: clientid,
        clientname: clientname,
        client: client,
        clientaddress: clientaddress,
        farmeraddress: farmeraddress,
        contact: contact,
        dateinstalled: dateinstalled,
        clientcontact: clientcontact,
        farmercontact: farmercontact,
        adharnumber: adharnumber,
      })
      .then((docRef) => {
        alert("Data Successfully Submitted");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });

    //incrementing firestore field value after every click
    const increment=firebase.firestore.FieldValue.increment(1);
    const statsref=db.collection('caseID').doc('counter')
    const batch=db.batch();
    batch.set(statsref,{idvalue: increment},{merge: true});
    batch.commit();
  };
  

  const handleClick2 = () => {

    
    //read data from firestore

    db.collection("caseID")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          console.log(" hellooooo", doc.data().idvalue);
           const a1=(doc.data().idvalue);
           
           setClientId("22000" +  parseInt(a1+1));
        });
      });
    console.log(clientid);
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
                onClick={handleClick2}
                style={{ marginLeft: "20px" }}
                variant="contained"
                type="submit"
              >
                Generate_Id
              </Button>  

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
                value={client}
                label="Father Name"
                variant="outlined"
                onChange={(e) => setClient(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                style={{ width: "100%" }}
                id="Clientaddress"
                label="Date of Birth "
                variant="outlined"
                onChange={(e) => setClientAddress(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="Farmeraddress"
                label="Husband Name"
                variant="outlined"
                onChange={(e) => setFarmerAddress(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="Adharnumber"
                label="Client contact#"
                variant="outlined"
                onChange={(e) => setContact(e.target.value)}
                value={contact}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="Dateinstalled"
                label="Email Id"
                variant="outlined"
                onChange={(e) => setDateInstalled(e.target.value)}
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
                onChange={(e) => setClientContact(e.target.value)}
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
                onChange={(e) => setFarmerContact(e.target.value)}
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
                onChange={(e) => setAdharNumber(e.target.value)}
              />
            </Grid>

            {/* <Grid item xs={12} sm={6}>
                            <TextField style={{ width: '100%' }}
                                id="Entity"
                                label="Entity"
                                variant="outlined"
                                onChange={e => setEntity(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth
                                id="Device IMEI"
                                label="Device IMEI"
                                variant="outlined"
                                onChange={e => setImei(e.target.value)}
                            />
                        </Grid> */}
            {/* <Grid item xs={12} sm={6}></Grid>
            <Grid item xs={12} sm={6}>
              <Button type="submit" color="secondary" variant="contained">
                Save
              </Button>
            </Grid> */}
          </Grid>
        </form>
      </Container>
    </>
  );
}

export default CreateDeviceForm;

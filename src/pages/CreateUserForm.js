import React, { useEffect, useState } from "react";
import { Typography, Container, Button, Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import db from "../firebase";
import { auth } from "../firebase";
import {
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  makeStyles,
} from "@material-ui/core";
import {getDocs,where,query,querysnapshot,collectionGroup,collection} from "firebase/firestore";

const useStyles = makeStyles((theme) => ({
  formControl: {
    //   marginTop:"5px",
    width: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function CreateUserForm() {
  
  const classes = useStyles();
  const history = useHistory();
  const [casenumber, setCaseNumber] = useState("");
  const [state, setState] = useState("");
  const [clientid, setClientid] = useState("");
  const [district, setDistrict] = useState("");
  const [year, setYear] = useState("");
  const [courthall, setCourtHall] = useState("");
  const [dateof, setDateof] = useState("");
  const [casetype, setCasetype] = useState("");
  const [hear, setHear] = useState("");
  const [info, setInfo] = useState([]);

  
  const handleStateChange=(e)=>{
    
    // console.log({myStatelists});
    // const q = query(collection(db, "ComplexMaster"), where("Complex1", "==", true));

    // const querySnapshot = await  getDocs(q);
    // querySnapshot.forEach((doc) => {
    // // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
// });

    
};

  
  

  const myStatelists=['State 1', 'State 2','State 3','State 4'];
  const listStateitems=myStatelists.map((myStatelists)=><li>{myStatelists}</li>)
  
  const myDistrictlists=['Dist 1', 'Dist 2','Dist 3','Dist 4'];
  const listDistrictitems=myDistrictlists.map((myDistrictlists)=><li>{myDistrictlists}</li>)
  
  
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    
    const userData = {
      casenumber: casenumber,
      state: state,
      clientid: clientid,
      district: district,
      year: year,
      courthall: courthall,
      dateof: dateof,
      casetype: casetype,
      hear: hear,
    };
    // db.collection("District")
    //   .get()
    //   .then((snapshot) => {
    //     snapshot.docs.forEach((doc) => {
    //       console.log(" hellooooo", doc.data().A);
    //        //const a1=(doc.data().idvalue);
           
    //        setDistrict("hello",doc.data().A);
    //     });
    //   });
    
  };
    
  
  return (
    <>
      <Container maxWidth="md">
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h4">ADD NEW CASE</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                style={{ width: "100%" }}
                id="casenumber"
                label="Case Number"
                variant="outlined"
                onChange={(e) => setCaseNumber(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                style={{ height: "40px", width: "130px" }}
                variant="contained"
                type="submit"
                color="secondary"
                
              >
                Save
              </Button>
              
              
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Select State
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                   value={state}
                   
                   onChange={(e) => setState(e.target.value)}
                   //onChange={handleStateChange}
                   
                   
                  
                >
                  
                  
                  <MenuItem value="list">
                    {myStatelists[0]}
                  </MenuItem>
                  <MenuItem value="karnataka">{myStatelists[1]}</MenuItem>
                  <MenuItem value="Maharashtra">{myStatelists[2]}</MenuItem>
                  <MenuItem value="Andra">{myStatelists[3]}</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Client Id
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={clientid}
                  onChange={(e) => setClientid(e.target.value)}
                  label="Age"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                  <MenuItem value={30}>30</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Select District
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={district}
                  
                  onChange={(e) => setDistrict(e.target.value)}
                  label="Age"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="belgum">belgam</MenuItem>
                  <MenuItem value="banglore">banglore</MenuItem>
                  <MenuItem value="Hasan">Hasan</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                style={{ width: "100%" }}
                id="year"
                label="Year of  Case"
                variant="outlined"
                onChange={(e) => setYear(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Court Complex
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={courthall}
                  onChange={(e) => setCourtHall(e.target.value)}
                  label="District"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="court of small cases">Chief Judge,court of small causes</MenuItem>
                  <MenuItem value="CMM court banglore">Chief Metropolitian magistrate CMM court banglore</MenuItem>
                  <MenuItem value="Mayo Hall">ADD small causes Court judges MAYO Hall</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                style={{ width: "100%" }}
                label="Date of "
                variant="outlined"
                onChange={(e) => setDateof(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Case Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={casetype}
                  onChange={(e) => setCasetype(e.target.value)}
                  label="District"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="c.c criminal">C.C-criminal Case</MenuItem>
                  <MenuItem value="crime ">C.C-crime case</MenuItem>
                  <MenuItem value="crime appeal">CRL.A-Crime Appeal</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                style={{ width: "100%" }}
                id="Hear"
                label="Next date of hearing"
                variant="outlined"
                onChange={(e) => setHear(e.target.value)}
              />
            </Grid>
          </Grid>
          {/* <Button style={{marginTop:"10px"}} type="submit" color="secondary" variant="contained">Add User </Button> */}
        </form>
      </Container>
    </>
  );
  }
export default CreateUserForm;

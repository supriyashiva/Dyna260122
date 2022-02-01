import React from "react";
import {
  Typography,
  TextField,
  Grid,
  Container,
  Link,
  Button,
} from "@material-ui/core";

function CreateDevice() {
  return (
    <>
      <Container size="md">
        <Typography
          variant="h6"
          color="textSecondary"
          component="h2"
          gutterBottom
        >
          <h1 align="left">Create Device</h1>
          <TextField id="Device ID" label="Device ID" variant="outlined" />
          <TextField
            id="Display Name"
            label="Display Name"
            variant="outlined"
          />
          <h2 align="left"> Farmer Details</h2>
          <Grid xs={6}>
            <form noValidation autoComplete="off">
              <TextField
                id="Installed Client"
                label="Installed Client"
                variant="outlined"
              />
              <TextField
                id="Farmer Name"
                label="Farmer Name"
                variant="outlined"
              />
              <TextField
                id="Client Address"
                label="Client Address"
                variant="outlined"
              />
              <TextField
                id="Farmer Address"
                label="Farmer Address"
                variant="outlined"
              />
              <TextField
                id="Client Contact"
                label="Client Contact"
                variant="outlined"
              />
              <TextField
                id="Farmer Contact"
                label="Farmer Contact"
                variant="outlined"
              />
              <TextField
                id="date"
                label="Installed Date"
                type="date"
                variant="outlined"
              />
              <TextField
                id="Aadhar Number"
                label="Aadhar Number"
                variant="outlined"
              />
              <TextField id="Entity" label="Entity" variant="outlined" />
              <TextField
                id="Device IMEI"
                label="Device IMEI"
                variant="outlined"
              />
            </form>
          </Grid>
          <h2 align="left"> Pump Details</h2>
          <Grid xs={6} spacing={2}>
            <form noValidation autoComplete="off">
              <TextField
                id="Motor Make"
                label="Motor Make"
                variant="outlined"
              />
              <TextField
                id="Controller Make"
                label="Controller Make"
                variant="outlined"
              />
              <TextField
                id="Motor Rating"
                label="Motor Rating"
                variant="outlined"
              />
              <TextField
                id="Controller Rating"
                label="Controller Rating"
                variant="outlined"
              />
              <TextField id="Pump Head" label="Pump Head" variant="outlined" />
              <TextField
                id="Installed Gps Location"
                label="Installed Gps Location"
                variant="outlined"
              />
              <TextField
                id="Motor Pump Type"
                label="Motor Pump Type"
                variant="outlined"
              />
              <TextField
                id="PV Panel Make"
                label="PV Panel Make"
                variant="outlined"
              />
              <TextField
                id="Motor Pump category"
                label="Motor Pump category"
                variant="outlined"
              />
              <TextField
                id="PV Panel Wattage"
                label="PV Panel Wattage"
                variant="outlined"
              />
              <TextField
                id="Pump Serial Number"
                label="Pump Serial Number"
                variant="outlined"
              />
              <TextField
                id="PV Array Wattage"
                label="PV Array Wattage"
                variant="outlined"
              />
              <TextField
                id="Motor Serial Number"
                label="Motor Serial Number"
                variant="outlined"
              />
              <TextField
                id="No of PV Panel Connected"
                label="No of PV Panel Connected"
                variant="outlined"
              />
            </form>
          </Grid>
          <Link to="/Devices">
            <Button variant="contained" color="primary">
              Submit
            </Button>
          </Link>
        </Typography>
      </Container>
    </>
  );
}

export default CreateDevice;

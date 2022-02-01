import React, { useState } from "react"
import { Typography, Container, Button, Grid, Paper } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import { useHistory } from 'react-router-dom'
import db from '../firebase';

import useStyles from '../components/MyStyle';

function CreateDeviceForm() {
    const classes = useStyles();
    const history = useHistory();

    const [deviceid, setDeviceId] = useState("");
    const [devicename, setDeviceName] = useState("");
    const [client, setClient] = useState("");
    const [farmername, setFarmerName] = useState("");
    const [clientaddress, setClientAddress] = useState("");
    const [farmeraddress, setFarmerAddress] = useState("");
    const [clientcontact, setClientContact] = useState("");
    const [farmercontact, setFarmerContact] = useState("");
    const [dateinstalled, setDateInstalled] = useState("");
    const [adharnumber, setAdharNumber] = useState("");
    const [entity, setEntity] = useState("");
    const [imei, setImei] = useState("");
    const [myid, setMyid] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        //alert(`Device Name ${devicename}`)
        const deviceData = {
            Deviceid: deviceid,
            Devicename: devicename,
            Client: client,
            Farmername: farmername,
            Clientaddress: clientaddress,
            Farmeraddress: farmeraddress,
            Clientcontact: clientcontact,
            Farmercontact: farmercontact,
            Dateinstalled: dateinstalled,
            Adharnumber: adharnumber,
            Entity: entity,
            Imei: imei,
            id: imei,
        };
        // Add data to the store
        db.collection("devices").doc(imei).set(deviceData)
            .then((docRef) => {
                alert("Data Successfully Submitted");
                history.replace('/devices');
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }
    return (
        <>
            <Container maxWidth="md">


                <form noValidate autoComplete="off"
                    onSubmit={handleSubmit} >

                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant="h4">
                                ADD NEW DEVICE
                                </Typography>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField style={{ width: '100%' }}
                                id="Device ID"
                                label="Device ID"
                                variant="outlined"
                                onChange={e => setDeviceId(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth
                                id="Display Name"
                                label="Display Name"
                                variant="outlined"
                                onChange={e => setDeviceName(e.target.value)} />
                        </Grid>

                        <Grid item xs={12}>
                            <Typography variant="h6">
                                FARMER DETAILS
                                </Typography>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField style={{ width: '100%' }}
                                id="Installed Client"
                                label="Installed Client"
                                variant="outlined"
                                onChange={e => setClient(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth
                                id="Farmer Name"
                                label="Farmer Name"
                                variant="outlined"
                                onChange={e => setFarmerName(e.target.value)}
                            />
                        </Grid>


                        <Grid item xs={12} sm={6}>
                            <TextField style={{ width: '100%' }}
                                id="Client Address"
                                label="Client Address"
                                variant="outlined"
                                onChange={e => setClientAddress(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth
                                id="Farmer Address"
                                label="Farmer Address"
                                variant="outlined"
                                onChange={e => setFarmerAddress(e.target.value)}
                            />
                        </Grid>


                        <Grid item xs={12} sm={6}>
                            <TextField style={{ width: '100%' }}
                                id="Client Contact"
                                label="Client Contact"
                                variant="outlined"
                                onChange={e => setClientContact(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth
                                id="Farmer Contact"
                                label="Farmer Contact"
                                variant="outlined"
                                onChange={e => setFarmerContact(e.target.value)}
                            />
                        </Grid>


                        <Grid item xs={12} sm={6}>
                            <TextField style={{ width: '100%' }}
                                id="date"

                                type="date"
                                variant="outlined"
                                onChange={e => setDateInstalled(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth
                                id="Aadhar Number"
                                label="Aadhar Number"
                                variant="outlined"
                                onChange={e => setAdharNumber(e.target.value)}
                            />
                        </Grid>


                        <Grid item xs={12} sm={6}>
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
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button
                                type="submit"
                                color="secondary"
                                variant="contained">
                                Save
                            </Button>
                        </Grid>









                    </Grid>


                </form>

            </Container>
        </>)
}

export default CreateDeviceForm
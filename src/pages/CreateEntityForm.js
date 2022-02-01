import React, { useState } from "react"
import { Typography, Container, Button, Grid, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import { useHistory } from 'react-router-dom'
import db from '../firebase'
function CreateEntityForm() {
    //const classes = useStyles();
    const history = useHistory();
    const [Name, setName] = useState("");
    const [ParentEntity, setParentEntity] = useState("");
    const [Address, setAddress] = useState("");
    const [City, setCity] = useState("");
    const [State, setState] = useState("");
    const [Pin, setPin] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        //alert(`Device Name ${devicename}`)
        const entityData = {
            iName: Name,
            iParentEntity: ParentEntity,
            iAddress: Address,
            iCity: City,
            iState: State,
            iPin: Pin,
        };
        db.collection("entity").add(entityData)
            .then((docRef) => {
                alert("Data Successfully Submitted");
                history.replace('./entity')
            })
            .catch((error) => {
                console.error("Error adding Document:", error);
            });
    }
    return (
        <>
            <Container maxWidth="md">
                <form noValidate autoComplete="off" onSubmit={handleSubmit} >
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant="h4">ADD NEW ENTITY</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField style={{ width: '100%' }}
                                id="Name"
                                label="City Code"
                                variant="outlined"
                                onChange={e => setName(e.target.value)} />
                        </Grid>
                        <Grid item xs={12} sm={6}>

                            <FormControl fullwidth variant='outlined' style={{ width: '100%' }}>
                                <InputLabel id="ParentEntity">ParentEntity</InputLabel>
                                <Select
                                    onChange={e => setParentEntity(e.target.value)}
                                >
                                    <MenuItem value="KAR"> KAR</MenuItem>
                                </Select>
                            </FormControl>

                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField style={{ width: '100%' }}
                                id="Address"
                                label="Address"
                                variant="outlined"
                                onChange={e => setAddress(e.target.value)} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField style={{ width: '100%' }}
                                id="City"
                                label="City Name"
                                variant="outlined"
                                onChange={e => setCity(e.target.value)} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField style={{ width: '100%' }}
                                id="State"
                                label="State"
                                variant="outlined"
                                onChange={e => setState(e.target.value)} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField style={{ width: '100%' }}
                                id="Pin"
                                label="pin"
                                variant="outlined"
                                onChange={e => setPin(e.target.value)} />
                        </Grid>
                    </Grid>
                    <Button type="submit" color="secondary" variant="contained">Submit </Button>
                </form>
            </Container>
        </>)

}
export default CreateEntityForm;
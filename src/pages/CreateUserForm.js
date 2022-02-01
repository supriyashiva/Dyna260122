import React, { useEffect, useState } from "react"
import { Typography, Container, Button, Grid } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import { useHistory } from 'react-router-dom'
import db from '../firebase'
import { auth } from '../firebase';
import { MenuItem, Select, FormControl, InputLabel, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    formcontrol: {
        minWidth: 100
    }
}));
function CreateUserForm() {
    const classes = useStyles();
    const history = useHistory();
    const [UserName, setUserName] = useState("");
    const [EmailId, setEmailId] = useState("");
    const [Password, setPassword] = useState("");
    const [Entity, setEntity] = useState("");
    const [Role, setRole] = useState("");
    const [info, setInfo] = useState([]);

    useEffect(() => {

        db.collection("entity").get().then((querySnapshot) => {
            // Loop through the data and store
            // it in array to display
            querySnapshot.forEach(element => {
                var data = element.data();
                setInfo(arr => [...arr, data]);
            });
        })

    }, [])

    const handleSubmit = (evt) => {
        evt.preventDefault();
        //alert(`Device Name ${devicename}`)
        const userData = {
            UserName: UserName,
            EmailId: EmailId,
            Password: Password,
            Entity: Entity,
            Role: Role,
            id: EmailId,
        };

        auth.createUserWithEmailAndPassword(
            userData.EmailId,
            userData.Password
        ).then((resp) => {
            return db.collection("user").doc(resp.user.uid).set(userData)
                .then((docRef) => {
                    alert("Data Successfully Submitted");
                    history.replace('./users')
                })
                .catch((error) => {
                    console.error("Error adding Document:", error);
                });
        }
        )
    }
    return (
        <>
            <Container maxWidth="md">
                <form noValidate autoComplete="off" onSubmit={handleSubmit} >
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant="h4">ADD NEW USER</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField style={{ width: '100%' }}
                                id="UserName"
                                label="UserName"
                                variant="outlined"
                                onChange={e => setUserName(e.target.value)} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField style={{ width: '100%' }}
                                id="EmailId"
                                label="EmailId"
                                variant="outlined"
                                onChange={e => setEmailId(e.target.value)} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField style={{ width: '100%' }}
                                id="Password"
                                label="Password"
                                variant="outlined"
                                onChange={e => setPassword(e.target.value)} />
                        </Grid>
                        <Grid item xs={12} sm={6}>

                            <FormControl className={classes.formcontrol}>
                                <InputLabel>Entity </InputLabel>
                                <Select onChange={e => setEntity(e.target.value)}>
                                    {info.map(item => (
                                        <MenuItem value={item.iName}> {item.iName} </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField style={{ width: '100%' }}
                                id="Role"
                                label="Role"
                                variant="outlined"
                                onChange={e => setRole(e.target.value)} />
                        </Grid>

                    </Grid>
                    <Button type="submit" color="secondary" variant="contained">Add User </Button>
                </form>
            </Container>
        </>)

}
export default CreateUserForm;
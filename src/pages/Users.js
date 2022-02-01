import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import UserCard from '../components/UserCard';
import db from '../firebase';
import { DataGrid } from "@material-ui/data-grid";
import { PieChart, Pie } from "recharts";


const data = [
    { name: "Geeksforgeeks", students: 400 },
    { name: "Technical scripter", students: 700 },
];

const columns = [
    {
        field: "UserName",
        headerName: "User Name",
        width: 150,
    },
    {
        field: "EmailId",
        headerName: "Email Id",
        width: 200,
    },
    {
        field: "Entity",
        headerName: "Entity",
        width: 150,
    },
    {
        field: "Role",
        headerName: "Role",
        width: 200,
    },

];


function User() {
    const history = useHistory();
    const [info, setInfo] = useState([]);

    useEffect(() => {

        db.collection("user").get().then((querySnapshot) => {
            // Loop through the data and store
            // it in array to display
            querySnapshot.forEach(element => {
                var data = element.data();
                setInfo(arr => [...arr, data]);
            });
        })

    }, [])

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure to delete this record")) {
            alert(id)
            db.collection("user").where("UserName", "==", id).get()
                .then(querySnapshot => { querySnapshot.docs[0].ref.delete() });
        };
        const newUser = info.filter(note => note.UserName !== id)
        setInfo(newUser)

        //     await fetch('https://nov22-3c43a-default-rtdb.firebaseio.com/devices.json' + id, {
        //         method: 'DELETE'
        //     })
        //     const newDevices = alldevices.filter(note => note.id != id)
        //     setAllDevices(newDevices)
    }

    return (
        <>
            <Container maxWidth="lg">
                <h1>User Page</h1>
                <Grid container spacing={3}>
                    <Grid item xs={12} >
                        <Button
                            onClick={() => history.push('/CreateUserForm')}
                            type="submit"
                            color="secondary"
                            variant="contained"
                            endIcon={<KeyboardArrowRightIcon />}>
                            Create User
                    </Button>
                    </Grid>

                    <Grid item xs={9} >
                        <DataGrid width={100} rows={info} columns={columns} pageSize={5} />
                    </Grid>
                    <Grid item xs={3} >
                        <PieChart width={200} height={400}>
                            <Pie
                                data={data}
                                dataKey="students"
                                outerRadius={100}
                                fill="green"
                            />
                        </PieChart>


                    </Grid>

                    {info.map(item => (
                        <Grid item xs={12} md={6} lg={4} key={info.UserName}>
                            <UserCard data={item} handleDelete={handleDelete} />
                        </Grid>
                    ))}

                </Grid>
            </Container>
        </>
    )
}
export default User;
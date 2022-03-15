import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import UserCard from '../components/UserCard';
import db from '../firebase';
import { DataGrid } from "@material-ui/data-grid";
//import { PieChart, Pie } from "recharts";


// const data = [
//     { name: "Geeksforgeeks", students: 400 },
//     { name: "Technical scripter", students: 700 },
// ];


const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: "User Name",
        headerName: "Court name",
        width: 150,
        
    },
    {
        field: "EmailId",
        headerName: "Court rank",
        width: 200,
    },
    {
        field: "Entity",
        headerName: "Court hall",
        width: 150,
    },
    {
        field: "Role",
        headerName: "Court location",
        width: 200,
    },

];
const rows = [
    { id: 1, UserName: 'Snow', EmailId: 'Jon', Entity: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },

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
            <Container  maxWidth="lg">
                <h1>Case file Page</h1>
                <Grid container spacing={3}>
                    <Grid item xs={12} >
                        <Button
                            onClick={() => history.push('/CreateUserForm')}
                            type="submit"
                            color="secondary"
                            variant="contained"
                            endIcon={<KeyboardArrowRightIcon />}>
                            Create File
                    </Button>
                    </Grid>

                    <Grid item xs={10} >
                     <div style={{ height: 400, width: '100%' }}> 
                        <DataGrid width={100} rows={info}  columns={columns} pageSize={5} />
                         </div> 
                    </Grid>
                    
                    
                      
                    


                    
                     {/* {info.map(item => (
                        <Grid item xs={12} md={6} lg={4} key={info.UserName}>
                            <UserCard data={item} handleDelete={handleDelete} />
                        </Grid>
                    ))}  */}

                </Grid>
            </Container>
         </>
    )
}
export default User;
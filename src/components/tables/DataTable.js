import React, { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import db from '../../firebase';

const columns = [
    { field: 'UserName', headerName: 'User Name', width: 200 },
    { field: 'Role', headerName: 'Role', width: 150 },
    { field: 'EmailId', headerName: 'Email ID ', width: 250 },
    { field: 'Entity', headerName: 'Entity Name', width: 200 },

];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataTable() {

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


    return (
        <div style={{ height: 400, width: '70%' }}>
            <DataGrid
                rows={info}
                columns={columns}
                pageSize={5}
                disableSelectionOnClick
            />
        </div>
    );
}

import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import {Box, Button, Card, CardActionArea, Grid} from '@material-ui/core'
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import VisibilityIcon from '@material-ui/icons/Visibility'; 
import EditIcon from '@material-ui/icons/Edit';
import { useHistory } from 'react-router-dom';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor:'#607d8b' ,
    color: theme.palette.common.white,
    
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(view ,imei, entity, deviceid, devicename, client,energy) {
  return { view,imei, entity,deviceid, devicename,client,energy };
}

const rows = [
  createData('555',111, 6.0,99, 'Dynamec', 6.0,0),
  createData('7788', 222, 9.0, 37, 'wired',33,0),
  createData('Edit',333, 262, 16.0, 'roller', 6.0,0),
  createData('Edit',444, 262, 16.0, 'motor', 6.0,0),
  createData('Edit',555, 305, 3.7, 'driller', 4.3,0),
  createData('Edit',666, 356, 16.0, 'pipes', 3.9,0),
  
];

const useStyles = makeStyles({
  table: {
    minWidth: 900,
    
    
    
  },
  paper:{
    textAlign:"center",
    width:"100%",
    padding:"10px",
    backgroundColor:"#5c6bc0",
  
  }
});

export default function Tablepage1() {
    const history = useHistory();
  const classes = useStyles();

  return (
    <div>
      <Button style={{float:"right",marginRight:"30px"}}> Download</Button>
    
    
     <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead >
          
         <TableRow >
            
          <StyledTableCell >date/time</StyledTableCell>
            <StyledTableCell>Dc Bus</StyledTableCell>
            <StyledTableCell >DC Current</StyledTableCell>
            <StyledTableCell >Motor voltage</StyledTableCell>
            <StyledTableCell >Motor current </StyledTableCell>
            <StyledTableCell >Frequency</StyledTableCell>
            <StyledTableCell >Energy</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody >
          {rows.map((row) => (
            <StyledTableRow key={row.view} >
              <StyledTableCell component="th" scope="row">
               <Box display="flex">
                         <Box>
                        {row.view}
                        </Box> 
                        
               </Box>
              </StyledTableCell>
              <StyledTableCell >{row.imei}</StyledTableCell>
              <StyledTableCell >{row.entity}</StyledTableCell>
              <StyledTableCell>{row.deviceid}</StyledTableCell>
              <StyledTableCell >{row.devicename}</StyledTableCell>
              <StyledTableCell >{row.client}</StyledTableCell>
              <StyledTableCell >
              <Box display="flex">
                 <Box>
                   {row.energy}
                 </Box>
              </Box>
              </StyledTableCell>
              
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> 
    </div>
  );
}

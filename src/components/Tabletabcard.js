import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { Box,Grid,Divider} from '@material-ui/core';



export default function Tabletabcard() {
  //const classes = useStyles();
  
  return (
    <Grid container spacing={1}>
      <Grid item xs={6} sm={3} lg={3}>
      <Box ml={1} mt={2}  style={{width:"220px",boxShadow:"5px 20px 20px 5px #8860CD"}} >
      <Box bgcolor="white" color="black">
      <CardContent style={{ display: "flex",flexDirection:"column"  }}>
          <Typography style={{display:"flex"}}>
            Farmer Name:EMMVEE  
          </Typography>
          <Box style={{display:"flex"}}>
              <Typography>
                  Name:MECWIN(EMMVEE)
              </Typography>
              
          </Box>
          <Typography >
              IMEI:8661003556278
          </Typography>
          </CardContent>
          </Box>

          </Box>
    
   </Grid>
   <Grid item xs={6} sm={3} lg={3}>
   <Box ml={1} mt={2}  style={{width:"220px",boxShadow:"5px 20px 20px 5px #8860CD"}} >
      <Box bgcolor="white" color="black">
      <CardContent style={{ display: "flex",flexDirection:"column"  }}>
          <Typography style={{display:"flex"}}>
            Water pumped
            </Typography>
          <Box style={{display:"flex"}}>
              <Typography>
                  Update at:
              </Typography>
            
          </Box>
          <Typography >
              Signal:
          </Typography>
          </CardContent>
          </Box>

          </Box>
   </Grid>

   <Grid item xs={6} sm={3} lg={3}>
   <Box ml={1} mt={2}  style={{width:"220px",boxShadow:"5px 20px 20px 5px #8860CD"}} >
      <Box bgcolor="white" color="black">
      <CardContent style={{ display: "flex",flexDirection:"column", justifyContent: "center", alignItems: "center"  }}>
          <Typography style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            Map Data
          </Typography>
          <Box style={{display:"flex",alignItems:"center"}}>
              <Typography>
                  464
              </Typography>
              <ArrowUpward style={{color:"green",marginLeft:"30px"}}/>
          </Box>
          <Typography >
              Compared to last month
          </Typography>
          </CardContent>
          </Box>

          </Box>

   </Grid>

   <Grid item xs={6} sm={3} lg={3}>
      <Box ml={1} mt={2}  style={{width:"220px",boxShadow:"5px 20px 20px 5px #8860CD"}} >
      <Box bgcolor="white" color="black">
      <CardContent style={{ display: "flex",flexDirection:"column"  }}>
          <Typography style={{display:"flex"}}>
            Farmer Name:EMMVEE  
          </Typography>
          <Box style={{display:"flex"}}>
              <Typography>
                  Status
              </Typography>
              
          </Box>
          <Typography >
              IMEI:8661003556278
          </Typography>
          </CardContent>
          </Box>

          </Box>
    
   </Grid>
     


    </Grid>
  );
}
    
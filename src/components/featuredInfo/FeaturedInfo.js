import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { Box,Grid,Divider} from '@material-ui/core';

{/*const useStyles = makeStyles({
  root: {
    
    boxShadow:"5px 20px 20px 5px #8860CD",
    
    },
    root1:{
      width:200,
    height:200,
    marginLeft:"20px",
    marginTop:"20px",
    backgroundColor:"#afb42b",
    
    boxShadow:"5px 20px 20px 5px #8860CD",
    },
    root2:{
        width:200,
      height:200,
      marginLeft:"20px",
      marginTop:"20px",
      backgroundColor:"#ff9800",
      
      boxShadow:"5px 20px 20px 5px #8860CD",
      },
    box:{
      display:"flex",
      
    },
  
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 14,
  },
});*/}

export default function FeaturedInfo() {
  //const classes = useStyles();
  
  return (
    <Grid container spacing={1}>
      <Grid item xs={6} sm={3} lg={3} >
      <Box ml={1} mt={2}  style={{width:"220px",boxShadow:"5px 20px 20px 5px #8860CD"}} >
      <Box bgcolor="orange" color="white" >
      <CardContent style={{ display: "flex",flexDirection:"column", justifyContent: "center", alignItems: "center"  }}>
          <Typography style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            Running Hours  
          </Typography>
          <Box style={{display:"flex",alignItems:"center"}}>
              <Typography>
                  464
              </Typography>
              <ArrowDownward style={{color:"red",marginLeft:"30px"}}/>
          </Box>
          <Typography  >
              Compared to last month
          </Typography>
          </CardContent>
          </Box>

          </Box>
    
   </Grid>
   <Grid item xs={6} sm={3} lg={3} >
   <Box ml={1} mt={2}  style={{width:"220px",boxShadow:"5px 20px 20px 5px #8860CD"}} >
      <Box bgcolor="dodgerblue" color="white">
      <CardContent style={{ display: "flex",flexDirection:"column", justifyContent: "center", alignItems: "center"  }}>
          <Typography style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            Water Pumped 
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
      <Box bgcolor="orange" color="white">
      <CardContent style={{ display: "flex",flexDirection:"column", justifyContent: "center", alignItems: "center"  }}>
          <Typography style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            Energy Generated
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
       
   <Box ml={1} mt={2} style={{width:"200px",boxShadow:"5px 20px 20px 5px #8860CD"}} >
        <Box bgcolor="dodgerblue" color="white">
       <CardContent style={{ display: "flex",flexDirection:"column", justifyContent: "center", alignItems: "center"  }}>
         <Typography style={{ display: "flex", justifyContent: "center", alignItems: "center"  }} >Device Data</Typography>
         
         <Box display="flex" justifyContent="center" alignItems="center">
           <Box >
             <Box display="flex" justifyContent="center" alignItems="center">
               <Typography>ON :</Typography>
               <Typography>5</Typography>
             </Box>
             <Box display="flex" justifyContent="center" alignItems="center">
               <Typography>OFF :</Typography>
               <Typography>8</Typography>
             </Box>
           </Box>
           
    
        <Divider style={{marginLeft:"15px",height:"40px",width:"3px",backgroundColor:"grey"}} orientation="vertical"/>
        <Box ml={2} >
          <Box display="flex" justifyContent="center" alignItems="center" width="450">
            <Typography>OnLine :</Typography>
            <Typography>5</Typography>
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography>OffLine :</Typography>
            <Typography>8</Typography>
          </Box>
        </Box>
        </Box>

                 
              </CardContent>
              </Box>
              </Box>
              
        
              

   
     </Grid>
     


    </Grid>
  );
}
    
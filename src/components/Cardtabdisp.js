import { Grid } from '@material-ui/core';
import React from 'react';
import Cardtab from '../components/Cardtab';

export default function Cardtabdisp(){
    return(
        
        <Grid container >
            <Grid item xs={12} style={{display:"flex"}}>
                <Cardtab/>
                <Cardtab/>
                <Cardtab/>
                <Cardtab/>
                
           </Grid>
           <Grid item xs={12} style={{display:"flex"}}>
                <Cardtab/>
                <Cardtab/>
                <Cardtab/>
                <Cardtab/>
                
           </Grid>
           <Grid item xs={12} style={{display:"flex"}}>
                <Cardtab/>
                <Cardtab/>
                <Cardtab/>
                <Cardtab/>
                
           </Grid>
           
            

        </Grid>
        
    )
}



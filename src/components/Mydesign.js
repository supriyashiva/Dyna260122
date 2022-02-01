import { Grid, Paper } from '@material-ui/core';

function Mydesign() {
    return (

        <Grid container spacing={3}>

            <Grid item xs={6} sm={4}>
                <Paper >1/4 Size</Paper>
            </Grid>
            <Grid item xs={6} sm={4}>
                <Paper >1/4 Size</Paper>
            </Grid>
            <Grid item xs={6} sm={4}>
                <Paper >1/4 Size</Paper>
            </Grid>
            <Grid item xs={6} sm={6}>
                <Paper >1/4 Size</Paper>
            </Grid>
            <Grid item xs={6} sm={6}>
                <Paper >1/4 Size</Paper>
            </Grid>

        </Grid>
    )

}

export default Mydesign
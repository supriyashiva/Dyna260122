import { makeStyles } from '@material-ui/core';

const drawerWidth = 240
const useStyles = makeStyles((theme) => {
    return {
        drawer: {
            width: drawerWidth,
              backgroundColor:"#009688",
             
        },
        drawerPaper: {
            width: drawerWidth,
             backgroundColor:"#009688",
        },
        active: {
            // background: '#f4f4f4',
            backgroundColor:"light gray",
        },
        title: {
            textAlign:"center",
            fontWeight:"bold",
            justifyContent:"center",
            // marginTop:"10px",
            color:"white",
            
            //  backgroundColor:"#b2dfdb",
              //padding: theme.spacing(2),
        },

        appbar: {
            width: `calc(100% - ${drawerWidth}px)`,
            // backgroundColor:"#009688",
            
        },
        date: {
            flexGrow: 1,
            marginLeft:"250px",
        },
        avatar: {
            marginLeft: theme.spacing(2)
        },
        page: {
            background: 'white',
            width: '100%',
        },
        root: {
            display: "flex"
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            
        },
        toolbar: theme.mixins.toolbar
    }
})

export default useStyles;

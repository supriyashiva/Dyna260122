import { makeStyles } from '@material-ui/core';

const drawerWidth = 240
const useStyles = makeStyles((theme) => {
    return {
        drawer: {
            width: drawerWidth
        },
        drawerPaper: {
            width: drawerWidth
        },
        active: {
            background: '#f4f4f4'
        },
        title: {
            padding: theme.spacing(2)
        },

        appbar: {
            width: `calc(100% - ${drawerWidth}px)`
        },
        date: {
            flexGrow: 1
        },
        avatar: {
            marginLeft: theme.spacing(2)
        },
        page: {
            background: '#f9f9f9',
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

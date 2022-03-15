import { Button, AppBar, Toolbar, Typography, Avatar } from '@material-ui/core';

import useStyles from './MyStyle';
import { format } from 'date-fns';
import { auth } from '../firebase';

function MyAppbar() {
    const classes = useStyles();
    return (
        <AppBar style={{backgroundColor:"#009688"}} className={classes.appbar}>
            <Toolbar>
                <Typography className={classes.date}>
                    Today is the {format(new Date(), 'do MMMM Y')}
                </Typography>
                <Button
                    variant="contained"
                    onClick={() => auth.signOut()} >Logout</Button>
                <Typography className={classes.avatar}>
                    Admin
                </Typography>
                {/* src='/Tejas.jpeg' */}
                <Avatar src='/.jpeg' className={classes.avatar} />
            </Toolbar>
        </AppBar>
    )

}

export default MyAppbar
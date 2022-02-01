import { Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Container } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import DevicesIcon from '@material-ui/icons/Devices';
import PeopleIcon from '@material-ui/icons/People';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import AssessmentIcon from '@material-ui/icons/Assessment';
import { useHistory, useLocation } from 'react-router-dom'

import useStyles from './MyStyle';



function MyDrawer() {

    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();

    const menuItems = [
        {
            text: 'Dashboard',
            icon: <DashboardIcon color="secondary" />,
            path: '/'
        },
        {
            text: 'Devices',
            icon: <DevicesIcon color="secondary" />,
            path: '/devices'
        },
        {
            text: 'Users',
            icon: <PeopleIcon color="secondary" />,
            path: '/users'
        },
        {
            text: 'Entity',
            icon: <LabelImportantIcon color="secondary" />,
            path: '/entity'
        },
        {
            text: 'Reports',
            icon: <AssessmentIcon color="secondary" />,
            path: '/reports'
        },


    ]

    return (


       
        <Drawer className={classes.drawer}
            variant="permanent"
            anchor="left"
            classes={{ paper: classes.drawerPaper }}
        >

            <div>
                <Typography variant="h5" className={classes.title}>Dynamec</Typography>
            </div>



            <List>
                {menuItems.map((item) => (
                    <ListItem
                        button
                        key={item.text}
                        onClick={() => history.push(item.path)}
                        className={location.pathname == item.path ? classes.active : null}
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
        
    )
}

export default MyDrawer;
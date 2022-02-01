import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Cardtabdisp from '../Cardtabdisp';
import Tablepage1 from '../Tablepage1';
import ConfigTable from '../ConfigTable';
import Graphtable from '../tables/Graphtable';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      {/* <AppBar position="static"> */}
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="CARD" {...a11yProps(0)} style={{backgroundColor:"#ef5350",width:"230px",fontWeight:"bold"}} />
          <Tab label="TABLE" {...a11yProps(1)} style={{backgroundColor:"yellowgreen",width:"230px",fontWeight:"bold"}}/>
          <Tab label="CONFIGURE" {...a11yProps(2)} style={{backgroundColor:"#ef5350",width:"230px",fontWeight:"bolder"}} />
          <Tab label="Graph View" {...a11yProps(2)} style={{backgroundColor:"yellowgreen",width:"230px",fontWeight:"bolder"}} />
        </Tabs>
      {/* </AppBar> */}
      <TabPanel value={value} index={0}>
        <Cardtabdisp/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Tablepage1/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ConfigTable/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Graphtable/>
      </TabPanel>
    </div>
  );
}

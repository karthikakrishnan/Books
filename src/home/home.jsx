import React, { useEffect } from 'react';
import axios from 'axios'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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

export function Home() {

useEffect(() => {
    setIntro('Intro')
    }, [])

  const [value, setValue] = React.useState(0);
  const [intro, setIntro] = React.useState('')
  const [booksList, setBooksList] = React.useState('')

  const handleChange = (event, newValue) => {
    setValue(newValue)
    if (newValue === 0) {
        console.log('call intro api')
        setIntro('Intro')
    } else if(newValue === 1) {
        console.log('call books list api')
        setBooksList('Books list')
    }
};

  return (
    <div>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Intro" />
          <Tab label="Books" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {intro}
      </TabPanel>
      <TabPanel value={value} index={1}>
      {booksList}
      </TabPanel>
    </div>
  );
}

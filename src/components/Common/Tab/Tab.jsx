/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

// const useStyles = makeStyles(theme => ({
//   root: {
//     backgroundColor: theme.palette.background.paper,
//     width: 500,
//   },
// }));

const FullWidthTabs = ({ names, children }) => {
  const classes = {}; // useStyles();
  // const theme = useTheme();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color="default"
        style={{
          marginTop: 12,
          backgroundColor: 'transparent',
          border: 'none',
          boxShadow: 'none',
          borderBottom: '0.5px solid #C7CBD5',
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          style={{
            color: '#1976D2',
          }}
          // variant="fullWidth"
        >
          {names.map(i => (
            // eslint-disable-next-line react/jsx-key
            <Tab
              style={{
                fontWeight: 'bold',
                fontSize: 16,
                lineHeight: '19px',
                fontFamily: 'Helvetica',
                textTransform: 'none',
              }}
              label={i}
            />
          ))}
        </Tabs>
      </AppBar>
      <SwipeableViews axis="x" index={value} onChangeIndex={handleChangeIndex}>
        {children}
      </SwipeableViews>
    </div>
  );
};

export default FullWidthTabs;

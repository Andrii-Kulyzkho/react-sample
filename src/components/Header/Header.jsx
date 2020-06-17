import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import styles from './styles';

const Header = ({ classes }) => {
  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolbar} style={{ boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)'}}>
        {/* <Typography component="h1" variant="h6" color="inherit" className={classes.titleBox}>
          <SearchIcon />
          <p className={classes.title}>Search</p>
        </Typography> */}
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired
};

export default withTheme()(withStyles(styles)(Header));

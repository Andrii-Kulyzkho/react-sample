import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withTheme, withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import ArrowForward from '@material-ui/icons/ArrowForward';
import { Drawer } from '@material-ui/core';
import AccountDetails from './AccountDetails/AccountDetails';
import styles from './styles';
import logo from '../../assets/logo.png';

const SideBar = ({ classes }) => {
  const [open, setOpen] = useState(true);

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classNames(
          classes.drawerPaper,
          !open && classes.drawerPaperClose,
        ),
      }}
      open={open}
      onClick={() => !open && setOpen(true)}
    >
      <a href="/">
        <img className={classes.logo} src={logo} alt="" />
      </a>
      {open ? (
        <CloseIcon
          style={{
            color: 'white',
            position: 'absolute',
            right: 10,
            top: 25,
          }}
          onClick={() => setOpen(false)}
        />
      ) : (
        <ArrowForward
          style={{
            color: 'white',
            position: 'absolute',
            right: 10,
            top: 25,
          }}
          onClick={() => setOpen(false)}
        />
      )}
      {open && <AccountDetails />}
    </Drawer>
  );
};

SideBar.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
};

export default withTheme()(withStyles(styles)(SideBar));

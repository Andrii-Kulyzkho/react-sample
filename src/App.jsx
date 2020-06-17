import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root';
import { SnackbarProvider } from 'notistack';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import Router from './router';
// import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import theme from './theme';
// import './assets/favicon.ico';
import style from './styles';
import './App.css';

const App = ({ classes }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        <div className={classes.App}>
          <div className={classes.AppRoot}>
            <SideBar />
            <main className={classes.AppContext}>
              {/* <Header /> */}
              <Router />
            </main>
          </div>
        </div>
      </SnackbarProvider>
    </MuiThemeProvider>
  );
};

App.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
};

export default hot(withStyles(style)(App));

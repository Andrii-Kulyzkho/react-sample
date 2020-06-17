/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProfileList from './components/Profiles/ProfileList/ProfileList';
import ProfileDetails from './components/Profiles/ProfileDetails/ProfileDetails';
import CallBack from './components/Callback/Callback';
import SignIn from './components/SignIn/SignIn';

const ExternalRedirect = ({ to }) => {
  useEffect(() => {
    window.location = to;
  }, []);

  return <section>Redirecting...</section>;
};
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      const token = sessionStorage.getItem('token');
      const loggedIn = !!token;

      return loggedIn ? (
        <Component {...props} />
      ) : (
        <ExternalRedirect
          to={
            process.env.NODE_ENV !== 'development'
              ? 'https://myloginqa.sample.com:8080/idp/startSSO.ping?PartnerSpId=sample:connectui:dev'
              : 'https://mylogin.sample.com:8080/idp/startSSO.ping?PartnerSpId=sample%3Aconnect%3Aproduction'
          }
        />
      );
    }}
  />
);
export default () => {
  return (
    <BrowserRouter>
      <Switch>
        {process.env.NODE_ENV !== 'development' && (
          <Route path="/signin" exact component={SignIn} />
        )}
        <Route path="/callback" component={CallBack} />
        {process.env.NODE_ENV !== 'development' ? (
          <PrivateRoute path="/" exact component={ProfileList} />
        ) : (
          <Route path="/" exact component={ProfileList} />
        )}
        <Route
          path="/profile/:id"
          render={props => <ProfileDetails id={props.match.params.id} />}
        />
      </Switch>
    </BrowserRouter>
  );
};

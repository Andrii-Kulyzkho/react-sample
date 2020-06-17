import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import { Redirect } from 'react-router-dom';

const Callback = ({ location }) => {
  const [token, setToken] = useState(sessionStorage.getItem('token'));

  useEffect(() => {
    if (location.search) {
      const query = new URLSearchParams(location.search);
      const newToken = query.get('token');
      setToken(newToken);
      sessionStorage.setItem('token', newToken);
      const tokenData = jwt_decode(newToken);

      sessionStorage.setItem('userid', tokenData.userid);
      window.location.reload();
    }
  }, []);

  return token ? <Redirect to="/" /> : <div />;
};

Callback.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};

export default Callback;

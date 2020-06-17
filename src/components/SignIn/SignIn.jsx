import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const SignIn = () => {
  const [token, setToken] = useState(null);
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = () => {
    sessionStorage.setItem('token', token);
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <div style={{ paddingTop: 50 }}>
      <h4> Temporary webpage to replace SSO</h4>
      <form style={{ paddingTop: 50 }}>
        Token:
        <input
          style={{ width: '50%' }}
          onChange={e => setToken(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Submit & Redirect
        </button>
      </form>
    </div>
  );
};

SignIn.propTypes = {};

export default SignIn;

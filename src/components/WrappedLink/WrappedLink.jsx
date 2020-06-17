import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const WrappedLink = ({ to, children }) => {
  return (
    <Button size="small" color="primary">
      <Link
        style={{
          display: 'block',
          height: '100%',
          textDecoration: 'none',
          color: 'rgba(0, 0, 0, 0.87)',
        }}
        to={to}
      >
        {children}
      </Link>
    </Button>
  );
};

WrappedLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default WrappedLink;

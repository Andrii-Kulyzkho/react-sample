import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import style from './styles';

const PatentCard = ({ data, classes }) => {
  return (
    <div className={classes.root}>
      <Typography className={classes.name}>{data.title}</Typography>
      <Typography className={classes.role}>{data.role}</Typography>
      <Typography className={classes.period}>{data.period}</Typography>
      <Typography className={classes.description}>
        {data.description}
      </Typography>
    </div>
  );
};

PatentCard.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  data: PropTypes.arrayOf(Object),
};

PatentCard.defaultProps = {
  data: [],
};

export default withStyles(style)(PatentCard);

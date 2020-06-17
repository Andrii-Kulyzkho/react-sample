import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import style from './styles';

const ExperienceListItem = ({ data, classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant="subtitle2" className={classes.position}>
        {data.position}
      </Typography>
      <Typography variant="h3" className={classes.company}>
        {data.company}
      </Typography>
    </div>
  );
};

ExperienceListItem.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  data: PropTypes.shape({
    position: PropTypes.string,
    company: PropTypes.string,
  }),
};

ExperienceListItem.defaultProps = {
  data: [],
};

export default withStyles(style)(ExperienceListItem);

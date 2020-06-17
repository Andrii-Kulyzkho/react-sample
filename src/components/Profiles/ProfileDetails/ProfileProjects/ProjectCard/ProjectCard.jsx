import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import style from './styles';

const ProjectCard = ({ data, classes }) => {
  return (
    <div className={classes.root}>
      <Typography className={classes.name}>{data.name}</Typography>
      <Typography className={classes.role}>{data.role}</Typography>
      <Typography
        className={classes.period}
      >{`${data.from_date} - ${data.to_date}`}</Typography>
      <Typography className={classes.description}>
        {data.description}
      </Typography>
    </div>
  );
};

ProjectCard.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  data: PropTypes.shape({
    from_date: PropTypes.string,
    role: PropTypes.string,
    to_date: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  }),
};

ProjectCard.defaultProps = {
  data: [],
};

export default withStyles(style)(ProjectCard);

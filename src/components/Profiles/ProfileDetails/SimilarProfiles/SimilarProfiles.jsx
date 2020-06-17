import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ProfileCard from './ProfileCard/ProfileCard';
import style from './styles';

const data = [
  {
    name: 'Stephanus Huggins',
    position: 'Project Manager',
    location: 'Santa Clara, CA',
    img: '../avatar.png',
    description: 'Python, R, Flask, Data Science, BID<, DFM-SIM, prevetive maintenance'
  },
  {
    name: 'Stephanus Huggins',
    position: 'Project Manager',
    location: 'Santa Clara, CA',
    img: '../avatar.png',
    description: 'Python, R, Flask, Data Science, BID<, DFM-SIM, prevetive maintenance'
  },
  {
    name: 'Stephanus Huggins',
    position: 'Project Manager',
    location: 'Santa Clara, CA',
    img: '../avatar.png',
    description: 'Python, R, Flask, Data Science, BID<, DFM-SIM, prevetive maintenance'
  },
  {
    name: 'Stephanus Huggins',
    position: 'Project Manager',
    location: 'Santa Clara, CA',
    img: '../avatar.png',
    description: 'Python, R, Flask, Data Science, BID<, DFM-SIM, prevetive maintenance'
  }
];

const ProfileProjects = ({ classes }) => {
  return (
    <Card className={classes.mask}>
      <Grid container style={{ textAlign: 'left' }}>
        <Grid item xs={12}>
          <Typography className={classes.title}>SIMILAR PROFILES</Typography>
        </Grid>
        <Grid container item xs={12}>
          {data.map(i => (
            <ProfileCard data={i} />
          ))}
        </Grid>
      </Grid>
    </Card>
  );
};

ProfileProjects.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired
};

export default withStyles(style)(ProfileProjects);

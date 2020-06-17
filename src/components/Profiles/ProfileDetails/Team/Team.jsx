import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import TeamCard from './TeamCard/TeamCard';
import style from './styles';

const ProfileProjects = ({ classes, manager, peers, subs }) => {
  return (
    <Card className={classes.mask}>
      <Grid container style={{ textAlign: 'left' }}>
        <Grid item xs={12}>
          <Typography className={classes.title}>TEAM</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>Reports to</Typography>
        </Grid>
        <Grid item xs={12}>
          {/* TO-DO: Only one? */}
          <TeamCard data={manager} />
        </Grid>
        <Grid item xs={12}>
          <Typography>Works with</Typography>
        </Grid>
        <Grid item xs={12}>
          {peers.map((value, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <TeamCard key={i} data={value} />
          ))}
        </Grid>
        {subs && subs.length > 0 && (
          <Grid item xs={12}>
            <Typography>Manages</Typography>
          </Grid>
        )}
        <Grid item xs={12}>
          {subs.map((value, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <TeamCard key={i} data={value} />
          ))}
        </Grid>
      </Grid>
    </Card>
  );
};

ProfileProjects.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  peers: PropTypes.arrayOf(
    PropTypes.shape({
      profile: PropTypes.string,
      name: PropTypes.string,
      role: PropTypes.string,
      location: PropTypes.string,
      highlight: PropTypes.string,
      id: PropTypes.string,
    }),
  ),
  manager: PropTypes.arrayOf(
    PropTypes.shape({
      profile: PropTypes.string,
      name: PropTypes.string,
      role: PropTypes.string,
      location: PropTypes.string,
      highlight: PropTypes.string,
      id: PropTypes.string,
    }),
  ),
  subs: PropTypes.arrayOf(
    PropTypes.shape({
      profile: PropTypes.string,
      name: PropTypes.string,
      role: PropTypes.string,
      location: PropTypes.string,
      highlight: PropTypes.string,
      id: PropTypes.string,
    }),
  ),
};

ProfileProjects.defaultProps = {
  peers: null,
  manager: null,
};

export default withStyles(style)(ProfileProjects);

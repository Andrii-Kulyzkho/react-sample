/* eslint-disable no-return-assign */
import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import config from '../../../../../config';
import style from './styles';

const TeamCard = ({ data, classes }) => {
  return (
    <Grid
      style={{ cursor: 'pointer' }}
      container
      // eslint-disable-next-line prettier/prettier
      onClick={() => window.location.href = `/profile/${data.id}`}
    >
      <Grid
        item
        xs={8}
        style={{
          padding: '18px 0px',
          maxWidth: '100%',
          flexBasis: '100%',
        }}
      >
        <div style={{ display: 'flex' }}>
          <div>
            <img
              className={classes.profilePicture}
              src={`${config.imageAPI}${data.id}.png`}
              alt=""
            />
          </div>
          <div style={{ paddingLeft: 19, textAlign: 'left' }}>
            <h2 className={classes.name}>{data.name}</h2>
            <p className={classes.position}>{data.role}</p>
            <p className={classes.location}>{data.location}</p>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

TeamCard.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  data: PropTypes.arrayOf(Object),
};

TeamCard.defaultProps = {
  data: [],
};

export default withStyles(style)(TeamCard);

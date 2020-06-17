import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ExperienceListItem from './ExperienceListItem/ExperienceListItem';
import style from './styles';

const Experience = ({ classes, data }) => {
  const [openAll, setOpenAll] = useState(false);

  return (
    <Card className={classes.mask}>
      <Grid container style={{ textAlign: 'left' }}>
        <Grid item xs={12}>
          <Typography variant="subtitle1" className={classes.title}>
            EXPERIENCE
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {(openAll || data.length <= 3 ? data : data.slice(0, 3)).map(
            (value, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <ExperienceListItem key={i} data={value} />
            ),
          )}
          <div style={{ margin: '10px 0px' }}>
            {!openAll && data.length > 3 && (
              <a
                href="#"
                onClick={() => {
                  return setOpenAll(true);
                }}
              >
                {`View All (${data.length - 3})...`}
              </a>
            )}
          </div>
        </Grid>
      </Grid>
    </Card>
  );
};

Experience.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      from_date: PropTypes.string,
      role: PropTypes.string,
      to_date: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
    }),
  ).isRequired,
};

export default withStyles(style)(Experience);

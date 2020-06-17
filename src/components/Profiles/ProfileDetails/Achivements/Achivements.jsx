import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PublicationCard from './PublicactionCard/PublicationCard';
// import PatentCard from './PatentCard/PatentCard';
import style from './styles';

// eslint-disable-next-line no-unused-vars
const ProfileProjects = ({ classes, publications, patents }) => {
  const [openAll, setOpenAll] = useState(false);

  return (
    <Card className={classes.mask}>
      <Grid container style={{ textAlign: 'left' }}>
        <Grid item xs={12}>
          <Typography variant="subtitle1" className={classes.title}>
            PUBLICATIONS
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {(openAll || publications.length <= 3
            ? publications
            : publications.slice(0, 3)
          ).map((data, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <PublicationCard key={index} data={data} />
          ))}
          <div style={{ margin: '10px 0px' }}>
            {!openAll && publications.length > 3 && (
              <a
                href="#"
                onClick={() => {
                  return setOpenAll(true);
                }}
              >
                {`View All Publications (${publications.length - 3})...`}
              </a>
            )}
          </div>
        </Grid>
        {/* <Grid item xs={12}>
          <Typography variant="subtitle1" className={classes.title}>PATENTS</Typography>
        </Grid>
        <Grid item xs={12}>
          {patents.map(i => (
            <PatentCard data={i} />
          ))}
        </Grid> */}
      </Grid>
    </Card>
  );
};

ProfileProjects.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  publications: PropTypes.arrayOf(
    PropTypes.shape({
      conference: PropTypes.string,
      title: PropTypes.string,
    }),
  ).isRequired,
  patents: PropTypes.string,
};

export default withStyles(style)(ProfileProjects);

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import fetch from 'isomorphic-fetch';
import { withTheme, withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './styles';
import config from '../../../config';

const AccountDetails = ({ classes }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [openAll, setOpenAll] = useState(false);
  const [redirect] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      const url = config.profileAPI;
      fetch(url, {
        method: 'GET',
        headers: {
          Authentication: token,
          'Content-Type': 'application/json',
        },
      })
        .then(response => {
          if (response.status >= 400) {
            setError('Bad response from server');
          }
          return response.json();
        })
        .then(result => {
          console.log('result', result);
          setData(result[0]);
        });
    }
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (redirect) return <Redirect to={redirect} />;

  if (!data)
    return (
      <CircularProgress
        style={{
          display: 'block',
          position: 'fixed',
          zIndex: 1031,
          top: '50%',
          right: '40%',
        }}
      />
    );

  if (!data.skills) {
    data.skills = [];
  }

  return (
    <div>
      <div className="fourth-step">
        <img
          className={classes.avatar}
          // src={`${config.imageAPI}${data.id}.png`}
          src="https://randomuser.me/api/portraits/men/22.jpg"
          alt=""
        />
        <h2 className={classes.title}>{data.name}</h2>
        <p className={classes.position}>{data.role}</p>
        <p className={classes.address}>{data.location}</p>
        {data.name && (
          <button
            type="button"
            className={classes.button}
            onClick={() => {
              // TO-DO: fix me
              window.location.href = `/profile/${data.id}`;
              // setRedirect(`/profile/${data.id}`);
            }}
          >
            Edit Profile
          </button>
        )}
      </div>
      <div className={classes.skillList}>
        {(openAll || data.skills.length <= 5
          ? data.skills
          : data.skills.slice(0, 5)
        ).map(i => (
          <span key={i} className={classes.skillChip}>
            {i}
          </span>
        ))}
        <div style={{ margin: '10px 0px' }}>
          {!openAll && data.skills.length > 5 && (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a
              style={{ color: 'white', textDecoration: 'none' }}
              href="#"
              onClick={() => {
                return setOpenAll(true);
              }}
            >
              {`View All (${data.skills.length - 5})...`}
            </a>
          )}
        </div>
      </div>
      {/* <div className={classes.linkList}>
        <a className={classes.link} href={msgHref}>
          <EmailIcon className={classes.icon} />
          Message
        </a>
        <a className={classes.link} href="#">
          <BookmarkIcon className={classes.icon} />
          Saved Profiles
        </a>
      </div> */}
    </div>
  );
};

AccountDetails.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
};

export default withTheme()(withStyles(styles)(AccountDetails));

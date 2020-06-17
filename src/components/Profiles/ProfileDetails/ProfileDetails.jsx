/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import ChevronIcon from '@material-ui/icons/ChevronLeft';
import Team from './Team/Team';
// import FetchContext from '../../../contexts/FetchContext';
// import SimilarProfiles from './SimilarProfiles/SimilarProfiles';
import TabContainer from '../../Common/Tab/TabContainer/TabContainer';
import ProfileProjects from './ProfileProjects/ProfileProjects';
import ProfileCard from './ProfileCard/ProfileCard';
import Achivements from './Achivements/Achivements';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import About from './About/About';
import Tab from '../../Common/Tab/Tab';
import config from '../../../config';
import style from './styles';

import Onboarding from './Onboarding/Onboarding';

const ProfileDetails = ({ id, classes }) => {
  // const user = sessionStorage.getItem('user');
  // const token = JSON.parse(user).credentials.SessionToken;
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    const token = sessionStorage.getItem('token');
    const url = `${config.profileAPI}${id}`;
    await fetch(url, {
      method: 'GET',
      headers: {
        Authentication: token,
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (response.status >= 400) {
          throw new Error('Bad response from server');
        }
        return response.json();
      })
      .then(result => {
        setData(result);
      })
      .catch(e => {
        throw new Error(e);
      });
  };
  useEffect(async () => {
    try {
      await fetchData();
    } catch (e) {
      setError(e.message);
    }
  }, []);

  if (error) return <div>{error}</div>;
  if (!data) return <div>Loading...</div>;
  const noData =
    !data.about &&
    data.skills.length === 0 &&
    data.projects.length === 0 &&
    data.publications.length === 0 &&
    data.experience.length === 0 &&
    data.education.length === 0;

  const userId = sessionStorage.getItem('userid');
  const ownProfile = userId === data.id;
  return (
    <Grid container style={{ paddingLeft: 51, paddingRight: 56 }}>
      <Grid item xs={12}>
        <a className={classes.backLink} href="/">
          <ChevronIcon />
          <p style={{ padding: 0, margin: 0 }}>Back to search results</p>
        </a>
      </Grid>
      <Grid item xs={12}>
        <ProfileCard
          data={{
            id: data.id,
            name: data.name,
            role: data.role,
            location: data.location,
            about: data.about,
            office: data.office,
            years: data.years,
            org: data.org,
            email: data.email,
            bu: data.bu,
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Tab names={['Profile', 'Team']}>
          <TabContainer>
            <Grid container>
              <Grid item xs={12}>
                {noData && !ownProfile ? (
                  <div
                    style={{
                      marginTop: 60,
                      color: '#2B3642',
                      fontFamily: 'Helvetica',
                      fontSize: 20,
                      lineHeight: '24px',
                    }}
                  >
                    “No data for
                    <b> {data.name} </b>
                    was found. CONNECT is still learning…”
                  </div>
                ) : (
                  <div>
                    {(ownProfile || data.about || data.skills.length > 0) && (
                      <About
                        id={data.id}
                        about={data.about}
                        skills={data.skills}
                        refetch={() => fetchData()}
                      />
                    )}
                    {data.projects.length > 0 && (
                      <ProfileProjects data={data.projects} />
                    )}
                    {data.publications.length > 0 && (
                      <Achivements
                        publications={data.publications}
                        patents={data.patents}
                      />
                    )}
                    {data.experience.length > 0 && (
                      <Experience data={data.experience} />
                    )}
                    {data.education.length > 0 && (
                      <Education data={data.education} />
                    )}
                  </div>
                )}
              </Grid>
              {/* <Grid item xs={4}>
                </Grid> */}
            </Grid>
          </TabContainer>
          <TabContainer>
            <Team peers={data.peers} manager={data.manager} subs={data.subs} />
          </TabContainer>
        </Tab>
      </Grid>
      {/* <Grid item xs={12}>
        <SimilarProfiles />
      </Grid> */}
      <Onboarding />
    </Grid>
  );
};

ProfileDetails.propTypes = {
  id: PropTypes.number.isRequired,
  classes: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(withStyles(style)(ProfileDetails));

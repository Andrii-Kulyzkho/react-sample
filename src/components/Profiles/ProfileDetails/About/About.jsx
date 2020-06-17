/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withSnackbar } from 'notistack';
import { Grid, Card, Typography, Divider } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import { withStyles } from '@material-ui/core/styles';
import AboutEditForm from './AboutEditForm/AboutEditForm';
import SkillsEditDialog from './SkillsEditDialog/SkillsEditDialog';
import SkillChip from './SkillChip';
import style from './styles';

const About = ({ classes, id, about, skills, enqueueSnackbar, refetch }) => {
  const userId = sessionStorage.getItem('userid');
  const ownProfile = userId === id;
  const [openAll, setOpenAll] = useState(false);
  const [isAboutEditFormOpen, setIsAboutEditFormOpen] = useState(false);
  const [isSkillsEditFormOpen, setIsSkillsEditFormOpen] = useState(false);

  return (
    <Card className={classes.mask}>
      <Grid container style={{ textAlign: 'left' }}>
        {(about || ownProfile) && (
          <div className="fifth-step" style={{ width: '100%' }}>
            <Grid
              item
              xs={12}
              style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="subtitle1" className={classes.title}>
                ABOUT
              </Typography>
              {ownProfile && !isAboutEditFormOpen ? (
                <AddIcon
                  style={{ cursor: 'pointer' }}
                  onClick={() => setIsAboutEditFormOpen(true)}/>
              ) : (
                <ClearIcon
                  style={{ cursor: 'pointer' }}
                  onClick={() => setIsAboutEditFormOpen(false)}/>
              )}
            </Grid>
            <Grid item xs={12}>
              {isAboutEditFormOpen ? (
                <AboutEditForm
                  data={about}
                  onClose={message => {
                    if (message) {
                      enqueueSnackbar(message.message, {
                        variant: message.variant,
                      });
                    }
                    setIsAboutEditFormOpen(false);
                    refetch();
                  }}/>
              ) : (
                <Typography className={classes.text}>{about}</Typography>
              )}
            </Grid>
          </div>
        )}
        {about && skills && (
          <Grid item xs={12}>
            <Divider style={{ margin: '40px 0px' }} />
          </Grid>
        )}
        {(ownProfile || (skills && skills.length > 0)) && (
          <div className="sixth-step" style={{ width: '100%' }}>
            <Grid
              item
              xs={12}
              style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="subtitle1" className={classes.title}>
                SKILLS
              </Typography>
              {ownProfile && (
                <AddIcon
                  style={{ cursor: 'pointer' }}
                  onClick={() => setIsSkillsEditFormOpen(true)}/>
              )}
            </Grid>
            <Grid item xs={12} style={{ display: 'flex', flexWrap: 'wrap' }}>
              {isSkillsEditFormOpen ? (
                <SkillsEditDialog
                  open={isSkillsEditFormOpen}
                  handleClose={message => {
                    if (message) {
                      enqueueSnackbar(message.message, {
                        variant: message.variant,
                      });
                    }
                    setIsSkillsEditFormOpen(false);
                    refetch();
                  }}
                  skills={skills}/>
              ) : (
                skills.map(i => <SkillChip text={i} />)
              )}
            </Grid>
          </div>
        )}
      </Grid>
    </Card>
  );
};

About.propTypes = {
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

export default withSnackbar(withStyles(style)(About));

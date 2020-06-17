/* eslint-disable indent */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

const styles = {
  skillChip: {
    display: 'flex',
    alignItems: 'center',
    padding: '5px 10px',
    width: 'fit-content',
    border: '1px solid #DDE5F3',
    borderRadius: 12.5,
    backgroundColor: 'rgba(221,229,243,0.3)',
    color: '#3F4E5D',
    fontSize: 12,
    lineHeight: '14px',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    margin: 4,
    cursor: 'pointer',
  },
};

const SkillChip = ({ classes, text, onClick }) => {
  return (
    <div className={classes.skillChip} onClick={onClick}>
      {text} <CloseIcon style={{ width: 18 }} />
    </div>
  );
};

SkillChip.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  text: PropTypes.string.isRequired,
};

export default withStyles(styles)(SkillChip);

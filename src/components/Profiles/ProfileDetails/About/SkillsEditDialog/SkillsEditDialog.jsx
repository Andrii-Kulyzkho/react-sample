import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import {
  Dialog,
  DialogActions,
  DialogContent,
  Divider,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AutoForm from 'uniforms-material/AutoForm';
import AutoField from 'uniforms-material/AutoField';
import SubmitField from 'uniforms-unstyled/SubmitField';
import ErrorsField from 'uniforms-material/ErrorsField';
import SkillChip from './SkillChip';
import config from '../../../../../config';
import schema from './schema';
import style from './styles';

const SkillsEditDialog = ({ skills, open, handleClose, classes }) => {
  const [values, setValues] = useState(skills);
  const addSkill = value => {
    setValues([...values, value]);
  };

  const deleteSkill = value => {
    const newValues = values.filter(i => i !== value);
    setValues(newValues);
  };
  const handleSubmit = () => {
    // Workaround: Use values instead doc
    const url = config.skillsPatchAPI;
    const token = sessionStorage.getItem('token');
    fetch(url, {
      method: 'PATCH',
      headers: {
        Authentication: token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ skills: values }),
    })
      .then(response => {
        if (response.status >= 400) {
          throw new Error('Bad response from server');
        }
        return response.json();
      })
      .then(() => {
        handleClose({ variant: 'success', message: 'Skills were saved.' });
      })
      .catch(e => {
        throw new Error(e);
      });
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <h2 id="form-dialog-title" className={classes.title}>
        ADD SKILLS
      </h2>
      <AutoForm schema={schema} onSubmit={handleSubmit}>
        <DialogContent>
          <AutoField name="skills" onChange={addSkill} />
          <div style={{ padding: 10, display: 'flex', flexWrap: 'wrap' }}>
            {values.map(i => (
              // eslint-disable-next-line react/jsx-key
              <SkillChip text={i} onClick={() => deleteSkill(i)} />
            ))}
          </div>
          <ErrorsField />
          <Divider style={{ margin: '10px 0px' }} />
        </DialogContent>
        <DialogActions style={{ paddingRight: 20, paddingBottom: 10 }}>
          <Button
            className={classes.cancelBtn}
            onClick={handleClose}
            color="primary"
          >
            Cancel
          </Button>
          <SubmitField className={classes.submitBtn} />
        </DialogActions>
      </AutoForm>
    </Dialog>
  );
};

SkillsEditDialog.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  skills: PropTypes.arrayOf(Object),
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

SkillsEditDialog.defaultProps = {
  skills: [],
};

export default withStyles(style)(SkillsEditDialog);

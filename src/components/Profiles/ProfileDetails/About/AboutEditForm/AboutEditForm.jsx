/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';
import { withStyles } from '@material-ui/core/styles';
import AutoForm from 'uniforms-material/AutoForm';
import AutoFields from 'uniforms-material/AutoFields';
import SubmitField from 'uniforms-unstyled/SubmitField';
import ErrorsField from 'uniforms-material/ErrorsField';
import config from '../../../../../config';
import schema from './schema';
import style from './styles';

const AboutEditForm = ({ classes, data, onClose }) => {
  const handleSubmit = doc => {
    const url = config.aboutAPI;
    const token = sessionStorage.getItem('token');
    fetch(url, {
      method: 'PATCH',
      headers: {
        Authentication: token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(doc),
    })
      .then(response => {
        if (response.status >= 400) {
          throw new Error('Bad response from server');
        }
        return response.json();
      })
      .then(() => {
        onClose({ variant: 'success', message: 'About text was saved.' });
      })
      .catch(e => {
        throw new Error(e);
      });
  };
  return (
    <div>
      <AutoForm schema={schema} model={{ about: data }} onSubmit={handleSubmit}>
        <AutoFields className={classes.textField} />
        <SubmitField className={classes.submitBtn} />
        <ErrorsField />
      </AutoForm>
    </div>
  );
};

AboutEditForm.propTypes = {};

export default withStyles(style)(AboutEditForm);

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';
import NoSsr from '@material-ui/core/NoSsr';
import { Async } from 'react-select';
import { withStyles } from '@material-ui/core/styles';
import connectField from 'uniforms/connectField';
import components from './components';
import config from '../../../../../../config';
import styles from './styles';

const SkillsSearchField = ({ classes, onChange, value }) => {
  const [inputValue, setInputValue] = useState('');
  const fetchData = async (input, callback) => {
    const token = sessionStorage.getItem('token');
    const { skillsAPI } = config;

    await fetch(`${skillsAPI}${input}`, {
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
        const formattedResult = result.skills.map(i => ({
          value: i,
          label: i,
        }));
        callback([
          { value: inputValue, label: inputValue },
          ...formattedResult,
        ]);
      })
      .catch(e => {
        throw new Error(e);
      });
  };

  const loadOptions = (_value, callback) => {
    fetchData(inputValue, callback);
  };

  return (
    <div className={classes.root}>
      <NoSsr>
        <Async
          classes={classes}
          loadOptions={loadOptions}
          components={components}
          // eslint-disable-next-line no-shadow
          onChange={value => {
            onChange(value.value);
          }}
          onKeyDown={({ key }) => {
            const letters = /^[A-Za-z]+$/;
            if (key === 'Backspace' || key === 'Delete') {
              const text = window.getSelection().toString();
              if (text) {
                setInputValue(inputValue.replace(text, ''));
              } else {
                setInputValue(inputValue.slice(0, -1));
              }
            } else if (
              key.length === 1 &&
              (key.match(letters) || key === ' ' || key === '(' || key === ')')
            ) {
              setInputValue(`${inputValue}${key}`);
            }
          }}
          inputValue={inputValue}
          value={value && { value, label: value }}
          placeholder="Search for skills (ex. Data Analysis)"
          autoFocus={false}
          openMenuOnFocus={false}
          openMenuOnClick={false}
        />
      </NoSsr>
    </div>
  );
};

SkillsSearchField.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(
  connectField(SkillsSearchField),
);

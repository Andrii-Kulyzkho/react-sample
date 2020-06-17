/* eslint-disable react/destructuring-assignment */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import NoSsr from '@material-ui/core/NoSsr';
import Select from 'react-select';
import { withStyles } from '@material-ui/core/styles';
import components from './components';
import styles from './styles';

const CustomSelect = ({
  classes,
  theme,
  options,
  placeholder,
  isMulti,
  showValues,
  value,
  closeMenuOnSelect,
  onChange,
}) => {
  // eslint-disable-next-line no-shadow
  const handleChange = value => {
    onChange(value);
  };

  const selectStyles = {
    input: base => ({
      ...base,
      color: theme.palette.text.primary,
      '& input': {
        font: 'inherit',
      },
    }),
  };

  return (
    <div className={classes.root}>
      <NoSsr>
        <Select
          isMulti={isMulti}
          classes={classes}
          styles={selectStyles}
          showValues={showValues}
          options={options}
          components={components}
          closeMenuOnSelect={closeMenuOnSelect}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          isClearable
          isSearchable
          hideSelectedOptions={false}
        />
      </NoSsr>
    </div>
  );
};

CustomSelect.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  theme: PropTypes.instanceOf(Object).isRequired,
  options: PropTypes.instanceOf(Object).isRequired,
  placeholder: PropTypes.string.isRequired,
  isMulti: PropTypes.bool.isRequired,
  showValues: PropTypes.bool.isRequired,
  value: PropTypes.instanceOf(Object).isRequired,
  closeMenuOnSelect: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(CustomSelect);

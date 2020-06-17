/* eslint-disable radix */
/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import CancelIcon from '@material-ui/icons/Cancel';
import CloseIcon from '@material-ui/icons/Close';
import config from '../../../config';

// eslint-disable-next-line no-unused-vars
function NoOptionsMessage(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

function Control(props) {
  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          value: props.selectProps.inputValue,
          ...props.innerProps,
        },
      }}
      {...props.selectProps.inputValue}
    />
  );
}

function Option(props) {
  const id = parseInt(props.data.value);
  return (
    <MenuItem
      buttonRef={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400,
      }}
      {...props.innerProps}
    >
      {!isNaN(id) && (
        <img
          className={props.selectProps.classes.profilePicture}
          src={`${config.imageAPI}${id}.png`}
          alt=""
        />
      )}
      {props.children}
    </MenuItem>
  );
}

function Placeholder(props) {
  return (
    <Typography
      color="textSecondary"
      style={{
        fontSize: 40,
        color: '#BDBDBD',
        width: '100%',
        fontWeight: 'normal',
      }}
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function SingleValue(props) {
  return (
    <Typography
      className={props.selectProps.classes.singleValue}
      {...props.innerProps}
    >
      {/* {props.children} */}
    </Typography>
  );
}

function ValueContainer(props) {
  return (
    <div
      className={props.selectProps.classes.valueContainer}
      style={{ justifyContent: 'center' }}
    >
      {props.children}
    </div>
  );
}

function MultiValue(props) {
  return (
    props.selectProps.showValues && (
      <Chip
        tabIndex={-1}
        label={props.children}
        className={classNames(props.selectProps.classes.chip, {
          [props.selectProps.classes.chipFocused]: props.isFocused,
        })}
        onDelete={props.removeProps.onClick}
        deleteIcon={<CancelIcon {...props.removeProps} />}
      />
    )
  );
}

function Menu(props) {
  return (
    <Paper
      square
      className={props.selectProps.classes.paper}
      {...props.innerProps}
    >
      {props.children}
    </Paper>
  );
}

function GroupHeading(props) {
  return (
    <Typography
      variant="subtitle1"
      style={{ textAlign: 'left', paddingLeft: 10, paddingBottom: 10 }}
    >
      {props.children}
    </Typography>
  );
}

const ClearIndicator = props => {
  const {
    getStyles,
    innerProps: { ref, ...restInnerProps },
  } = props;
  return (
    <div
      {...restInnerProps}
      ref={ref}
      style={getStyles('clearIndicator', props)}
    >
      <div className={props.selectProps.classes.cross}>
        <CloseIcon />
      </div>
    </div>
  );
};

const components = {
  GroupHeading,
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage: () => null,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
  IndicatorSeparator: () => null,
  DropdownIndicator: () => null,
  ClearIndicator,
};

export default components;

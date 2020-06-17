/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';
import NoSsr from '@material-ui/core/NoSsr';
import { Async } from 'react-select';
import { withStyles } from '@material-ui/core/styles';
import components from './components';
import config from '../../../config';
import styles from './styles';

class Autocomplete extends React.Component {
  handleChange = name => (value, options) => {
    this.setState({ [name]: value });
    this.props.onChange(value, options);
  };

  handleOnKeyDown = e => {
    this.props.onKeyDown(e);
  };

  fetchData = async (input, callback) => {
    const token = sessionStorage.getItem('token');
    // const user = sessionStorage.getItem('user');
    // const token = JSON.parse(user).credentials.SessionToken;
    const { skillsAPI } = config;
    const url = `${config.peopleAPI}/${input}`;
    await fetch(url, {
      method: 'GET',
      headers: {
        Authentication: token,
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (response.status >= 400) {
          console.log('Bad response from server');
        }
        return response.json();
      })
      .then(async result => {
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
          .then(result2 => {
            const mappedResult1 = result.peoplelist.map(i => ({
              value: i.id,
              label: i.name,
            }));
            const mappedResult2 = result2.skills.map(i => ({
              value: i,
              label: i,
            }));
            const totalResult = [
              {
                label: 'Input',
                options: [{ value: input, label: input }],
              },
              {
                label: 'Suggested Searches',
                options: mappedResult2,
              },
              {
                label: 'People',
                options: mappedResult1,
              },
            ];
            callback(totalResult);
          })
          .catch(e => {
            throw new Error(e);
          });
      });
  };

  loadOptions = (inputValue, callback) => {
    this.fetchData(inputValue, callback);
  };

  render() {
    const { classes, placeholder, value, className } = this.props;

    return (
      <div className={className}>
        <NoSsr>
          <Async
            classes={classes}
            loadOptions={(inputValue, callback) =>
              this.loadOptions(value, callback)
            }
            components={components}
            inputValue={value}
            value={value && { value, label: value }}
            onKeyDown={this.handleOnKeyDown.bind(this)}
            onChange={this.handleChange('single').bind(this)}
            placeholder={placeholder}
            autoFocus={false}
            openMenuOnFocus={false}
            openMenuOnClick={false}
            closeMenuOnSelect
            isClearable
          />
        </NoSsr>
      </div>
    );
  }
}

Autocomplete.propTypes = {
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.instanceOf(Object).isRequired,
  className: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(Autocomplete);

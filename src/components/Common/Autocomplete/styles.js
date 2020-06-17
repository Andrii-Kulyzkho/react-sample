import { emphasize } from '@material-ui/core/styles/colorManipulator';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 25,
    width: 180,
    padding: '5px 15px',
  },
  input: {
    fontSize: 40,
    color: '#BDBDBD',
    width: '100%',
    fontWeight: 'normal',
    justifyContent: 'center',
    display: 'flex',
    padding: 0,
    opacity: '1 !important',
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    // flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === 'light'
        ? theme.palette.grey[300]
        : theme.palette.grey[700],
      0.08,
    ),
  },
  noOptionsMessage: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  singleValue: {
    fontSize: 16,
  },
  placeholder: {
    color: 'rgba(0, 0, 0, 0.8)',
    position: 'absolute',
    left: 2,
    fontSize: 16,
    fontWeight: 'bold',
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
  divider: {
    height: theme.spacing.unit * 2,
  },
  profilePicture: {
    boxSizing: 'border-box',
    height: 43,
    width: 43,
    border: '1px solid #1976D2',
    borderRadius: '50%',
    float: 'left',
    marginRight: 5,
  },
  cross: {
    color: '#E5E2E2',
    cursor: 'pointer',
  },
});

export default styles;

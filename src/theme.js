import { createMuiTheme } from '@material-ui/core/styles';

// All the following keys are optional.
// We try our best to provide a great default value.
const theme = createMuiTheme({
  palette: {
    primary: {
      //   light: palette.primary[300],
      main: '#1976D2',
      //   dark: palette.primary[700],
      //   contrastText: getContrastText(palette.primary[500])
    },
    secondary: {
      //   light: palette.secondary.A200,
      main: '#2D89EF',
      //   dark: palette.secondary.A700,
      //   contrastText: getContrastText(palette.secondary.A400)
    },
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: ['Helvetica'],
    subtitle1: {
      opacity: 0.9,
      color: '#3F4E5D',
      fontFamily: 'Helvetica',
      fontWeight: 'bold',
      fontSize: 14,
      lineHeight: '17px',
      paddingBottom: 30,
    },
    subtitle2: {
      opacity: 0.9,
      color: '#000000',
      fontFamily: 'Helvetica',
      fontWeight: 'bold',
      fontSize: 16,
      lineHeight: '18px',
      textDecoration: 'underline',
      paddingBottom: 5,
    },
    h3: {
      opacity: 0.9,
      color: '#000000',
      fontFamily: 'Helvetica',
      fontSize: 16,
      lineHeight: '18px',
      paddingBottom: 5,
    },
  },
  overrides: {
    MuiTableBody: {
      root: {
        cursor: 'pointer',
      },
    },
    MuiDialog: {
      paper: {
        minWidth: 600,
        maxWidth: '100% !important',
      },
    },
    MuiToolbar: {
      regular: {
        display: 'flex',
        backgroundColor: '#fff',
      },
    },
    MuiCard: {
      root: {
        border: '1px solid #E5E2E2',
        borderRadius: 2,
        boxShadow: 'none',
      },
    },
    MuiCardActionArea: {
      root: {
        textAlign: '-webkit-center',
      },
    },
    MuiCardContent: {
      root: {
        padding: '5px 16px',
      },
    },
    MuiCardActions: {
      root: {
        justifyContent: 'center',
      },
      // action: {
      //   fontSize: 12,
      //   color: 'black',
      //   fontWeight: 'bold',
      //   padding: 0
      // }
    },
    MuiButton: {
      label: {
        // fontSize: 12,
        // color: 'white',
        textTransform: 'none',
        // fontWeight: 'bold',
        padding: 0,
      },
    },
    MUITableWrapper: {
      responsiveScroll: {
        maxHeight: 'auto',
      },
    },
    SideBar: {
      drawerPaperClose: {
        width: 108,
      },
    },
    MuiInput: {
      underline: {
        '&:before': {
          borderBottom: 'none',
        },
      },
    },
    MuiAvatar: {
      root: {
        width: 57,
        height: 57,
      },
    },
    MuiPaper: {
      elevation4: {
        boxShadow: '0 2px 8px 0 rgba(0,0,0,0.05)',
      },
    },
    MuiInputLabel: {
      root: {
        display: 'none',
      },
    },
  },
});

export default theme;

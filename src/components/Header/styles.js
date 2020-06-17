const drawerWidth = 257;

const styles = theme => ({
  appBar: {
    backgroundColor: 'transparent',
    zIndex: theme.zIndex.drawer - 1,
    position: 'initial',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    // width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  chartContainer: {
    marginLeft: -22
  },
  tableContainer: {
    height: 320
  },
  titleBox: {
    color: 'black',
    display: 'flex',
    alignItems: 'center'
  },
  title: {
    margin: 10,
    fontSize: 16
  }
});

export default styles;

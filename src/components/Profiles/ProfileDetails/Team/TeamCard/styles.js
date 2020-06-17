const styles = () => ({
  profilePicture: {
    boxSizing: 'border-box',
    height: 70,
    width: 70,
    border: '2px solid #BBDEFB',
    borderRadius: '50%',
    float: 'left',
  },
  mask: {
    width: 'auto',
    padding: '29px 42px',
    maxWidth: 974,
    margin: '0px 8px',
    border: '1px solid #E5E2E2',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    boxShadow: '0 7px 5px 0 rgba(199,199,199,0.5)',
  },
  shape: {
    height: 18,
    width: 20,
  },
  name: {
    color: '#1976D2',
    fontFamily: 'Helvetica',
    fontSize: 16,
    fontWeight: 'bold',
    margin: '4px 0px',
    lineHeight: '19px',
  },
  position: {
    color: '#212121',
    fontFamily: 'Helvetica',
    fontSize: 16,
    margin: 0,
    lineHeight: '19px',
  },
  location: {
    color: '#757575',
    fontFamily: 'Helvetica',
    fontSize: 14,
    margin: 0,
    lineHeight: '17px',
  },
  iconsHidden: {
    height: 18,
    width: 22,
    opacity: 0.9,
  },
  hideProfile: {
    opacity: 0.83,
    color: '#757575',
    fontFamily: 'Helvetica',
    fontSize: 14,
    fontWeight: 'bold',
    margin: 0,
    lineHeight: '17px',
    textDecoration: 'none',
  },
});

export default styles;

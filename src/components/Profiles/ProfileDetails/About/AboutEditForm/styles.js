const styles = () => ({
  submitBtn: {
    backgroundColor: '#1976D2',
    border: 'none',
    borderRadius: 4,
    textDecoration: 'none',
    padding: '12px 32px',
    opacity: 0.9,
    color: '#FFFFFF',
    fontFamily: 'Helvetica',
    fontSize: 14,
    lineHeight: '18px',
    display: 'inline-block',
    marginTop: 14,
    cursor: 'pointer',
  },
  textField: {
    '& textarea': {
      border: '1px solid #eee',
      padding: '7px',
    },
    '& div': {
      margin: '0',
      padding: '0',
    },
  },
});

export default styles;

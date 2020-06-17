import React from 'react';
import PropTypes from 'prop-types';
import ReactSVG from 'react-svg';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import emailIcon from '../../../../../assets/icons/outline-email-24px.svg';
import bookmarkIcon from '../../../../../assets/icons/baseline-bookmark_border-24px.svg';
import shareIcon from '../../../../../assets/icons/share-outline.svg';

const styles = {
  card: {
    width: 235,
    height: 308,
    margin: 10,
    textAlign: '-webkit-center'
  },
  media: {
    backgroundSize: 'contain',
    height: 77,
    width: 77,
    margin: 10,
    borderRadius: '50%',
    border: '3px solid #8080804f'
  },
  name: {
    color: '#1976D2',
    fontFamily: 'Helvetica',
    fontSize: 16,
    fontWeight: 'bold',
    margin: '4px 0px',
    lineHeight: '19px'
  },
  position: {
    fontSize: 14,
    lineHeight: '17px',
    fontFamily: 'Helvetica',
    margin: 5
  },
  address: {
    fontSize: 12,
    lineHeight: '14px',
    fontFamily: 'Helvetica',
    fontWeight: 300,
    margin: 5
  },
  description: {
    fontSize: 11
  },
  wrapper: {
    fill: '#757575'
  }
};

const ProfileCard = ({ classes, data: profile }) => {
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={profile.img} title={profile.name} />
      <CardContent>
        <p className={classes.name}>{profile.name}</p>
        <p className={classes.position}>{profile.position}</p>
        <p className={classes.address}>{profile.location}</p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ReactSVG svgClassName={classes.wrapper} src={emailIcon} />
          <ReactSVG svgClassName={classes.wrapper} src={bookmarkIcon} />
          <ReactSVG svgClassName={classes.wrapper} src={shareIcon} />
        </div>
        <Typography component="p" className={classes.description}>
          {`"${profile.description}"`}
        </Typography>
      </CardContent>
    </Card>
  );
};

ProfileCard.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired
};

export default withStyles(styles)(ProfileCard);

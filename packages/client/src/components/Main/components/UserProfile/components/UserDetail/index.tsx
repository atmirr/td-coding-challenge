import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Grid, Box } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import { UserDetailType } from '../../index';

const useStyles = makeStyles(({ palette, spacing }) => ({
  navigation: {
    paddingBottom: spacing(2),
  },
  backButton: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  arrowBackIcon: {
    color: palette.text.primary,
  },
  backLabel: {
    paddingLeft: spacing(0.5),
    color: palette.text.primary,
  },
  detailsContainer: {
    paddingTop: spacing(2),
  },
}));

function UserDetail({
  name,
  username,
  rating,
  favorites,
  visits,
  size,
  location,
}: UserDetailType) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.navigation}>
        <Link to="/" className={classes.backButton}>
          <ArrowBack className={classes.arrowBackIcon} />
          <Typography component="span" className={classes.backLabel}>
            Back
          </Typography>
        </Link>
      </div>
      <Card>
        <CardContent>
          <Typography component="h2" variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {username}
          </Typography>
          <Grid container className={classes.detailsContainer}>
            <Box>
              <Typography variant="subtitle1" gutterBottom>
                Rating:
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Favorites:
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Visits:
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Size:
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Location:
              </Typography>
            </Box>
            <Box pl={3}>
              <Typography variant="subtitle1" gutterBottom>
                {rating}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {favorites}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {visits}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {size}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {location}
              </Typography>
            </Box>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

export default UserDetail;

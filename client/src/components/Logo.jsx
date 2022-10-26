import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

  gridContainer: {
    margin: '10px 5%',
    justifyContent: 'left',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'row',
    },
  },
  container: {
    width: '850px',
    margin: '100px 29%',
    padding: 0,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
}));
export default function Logo() {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.gridContainer}>
        <h1>VJob</h1>
      </Grid>
      <Grid container className={classes.gridContainer}>
        <h3>Freelancing Website with Video Conferencing Support</h3>
      </Grid>
    </div>
  );
}

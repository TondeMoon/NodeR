import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { useStyles } from './App.styles';

const FrontPageBottom = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Have an account?</h1>
      <Link to={'/login'} style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="secondary">
          Sign In
        </Button>
      </Link>
      &nbsp;
      <Link to={'/sign-up'} style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="primary">
          Login
        </Button>
      </Link>
    </div>
  );
};

export default FrontPageBottom;

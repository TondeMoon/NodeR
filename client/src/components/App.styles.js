import { makeStyles, createStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
      textAlign: 'center',
    },
  })
);

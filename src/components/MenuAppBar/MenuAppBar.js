import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appbarbutton: {
    color: "white",
    backgroundColor: "transparent",
    height: "inherit",
  },
  gridroot: {
    height: "100%",
  }
}));

export default function MenuAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        
        <Toolbar>
          <Grid container className={classes.gridroot}>
            <Grid item>
              <Typography variant="subtitle1" className={classes.title}>
                LOGO
              </Typography>
            </Grid>
            <Grid item>
              <Button className={classes.appbarbutton}>Summary</Button>
            </Grid>
            <Grid item>
              <Button className={classes.appbarbutton}>Rank Tracker</Button>
            </Grid>
            <Grid item>
              <Button className={classes.appbarbutton}>Competitor Analysis</Button>
            </Grid>
            <Grid item>
              <Button className={classes.appbarbutton}>Trends</Button>
            </Grid>
            <Grid item>
              <Button className={classes.appbarbutton}>On-Page Audit (Coming Soon)</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
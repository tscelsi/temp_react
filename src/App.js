import React from "react";
import { withStyles } from "@material-ui/core";
import MenuAppBar from "./components/MenuAppBar/MenuAppBar";
import RankTracker from "./components/RankTracker/RankTracker";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import "./App.css";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import "date-fns";

const styles = {
  appBar: {
    height: "64px"
  },
  appContainer: {
    height: "calc(100vh-64px)"
  },
  container: {
    width: "100%",
    height: "inherit"
  }
};

function App(props) {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div>
        <Grid container spacing={1} className={props.classes.container}>
          <Grid item xs={12}>
            <Paper>
              <MenuAppBar></MenuAppBar>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <RankTracker></RankTracker>
          </Grid>
        </Grid>
      </div>
    </MuiPickersUtilsProvider>
  );
}

export default withStyles(styles)(App);

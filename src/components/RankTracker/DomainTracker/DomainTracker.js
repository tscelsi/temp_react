import React, { Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const styles = {
  submenu: {
    backgroundColor: "orange"
  }
};

class RankTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGeneral: 1,
      isKeyword: 0,
      isDomain: 0
    };
  }

  render() {
    return (
      <Fragment>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper>
              <Typography>Domain: photoboothrental.co</Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper>NUM PAGES RANKING IN DOMAIN</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper>AVERAGE RANK FOR DOMAIN</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper>BEST RANKING FOR DOMAIN (PAGE URL AND RANK)</Paper>
          </Grid>
          <Grid item xs={12}>
            TABLE (LIST OF PAGES WITHIN DOMAIN THAT ARE RANKING)
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(RankTracker);

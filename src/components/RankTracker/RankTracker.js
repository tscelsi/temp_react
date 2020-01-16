import React from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import { Tab } from "@material-ui/core";
import RankTrackerOverview from "./RankTrackerOverview/RankTrackerOverview";
import Grid from "@material-ui/core/Grid";
import KeywordTracker from "./KeywordTracker/KeywordTracker";
import DomainTracker from "./DomainTracker/DomainTracker";

const styles = {
  submenu: {
    backgroundColor: "orange",
    height: "40px"
  },
  container: {
    height: "calc(100%-64px)"
  }
};

class RankTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currTab: 0,
      homePage: "https://www.photoboothdealsaustralia.com.au"
    };
  }

  handleTabClick = (e, newTab) => {
    this.setState({
      currTab: newTab
    });
  };

  render() {
    return (
      <Grid spacing={2} container>
        <Grid item xs={12}>
          <Paper square>
            <Tabs
              centered
              value={this.state.currTab}
              onChange={this.handleTabClick}
            >
              <Tab value={0} label="Overview"></Tab>
              <Tab value={1} label="Keyword Tracker"></Tab>
              <Tab value={2} label="Domain Tracker"></Tab>
            </Tabs>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          {this.state.currTab === 0 ? <RankTrackerOverview /> : null}
          {this.state.currTab === 1 ? <KeywordTracker /> : null}
          {this.state.currTab === 2 ? <DomainTracker /> : null}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(RankTracker);

import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import {
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Table
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import KeywordTrackerChart from "./KeywordTrackerChart";
import { Card, CardHeader, CardContent, Divider } from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";

const columns = [
  {
    id: "keyword",
    label: "Keyword",
    minWidth: 170
  },
  {
    id: "latest_rank",
    label: "Latest Rank",
    minWidth: 100,
    align: "right"
  },
  {
    id: "latest_update_time",
    label: "Last Updated",
    minWidth: 100,
    align: "right"
  },
  {
    id: "monthly_rank_up_down",
    label: "Monthly Rank Up/Down",
    minWidth: 100,
    align: "right"
  },
  {
    id: "keywords_in_h1_up_down",
    label: "Keywords In <h1> Compared to Average",
    minWidth: 100,
    align: "right"
  }
];

const rows = [
  {
    keyword: "photo+booth+hire+melbourne",
    latest_rank: 4,
    latest_update_time: "10/01/2020",
    monthly_rank_up_down: 6,
    keywords_in_h1_up_down: -3
  },
  {
    keyword: "photo+booths+melbourne",
    latest_rank: 8,
    latest_update_time: "10/01/2020",
    monthly_rank_up_down: -1,
    keywords_in_h1_up_down: 2
  }
];

/*
DISPLAYS HOW A SPECIFIC KEYWORD IS TRACKING OVER TIME.
*/

const styles = {
  tracker: {
    backgroundColor: "orange"
  },
  formStyle: {
    flexGrow: 1
  }
};

class RankTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keywords: [],
      currKeyword: "photo booth hire melbourne",
      currDateFrom: new Date("2020-01-14T21:11:54"),
      page: 0,
      rowsPerPage: 10
    };
  }

  handleKeywordSelect = event => {
    this.setState({ currKeyword: event.target.value });
  };

  handleDateFromSelect = event => {
    this.setState({ currDateFrom: event.target.value });
  };

  handleDateChange = date => {
    this.setState({ currDateFrom: date });
  };

  render() {
    return (
      <Fragment>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Card>
              <Typography variant="h6">photoboothrental.co</Typography>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="filled">
              <InputLabel htmlFor="keyword-simple">Keyword</InputLabel>
              <Select
                native
                value={this.state.currKeyword}
                onChange={this.handleKeywordSelect}
                inputProps={{
                  name: "Keyword",
                  id: "keyword-simple"
                }}
              >
                <option value={"photo booth hire melbourne"}>
                  photo booth hire melbourne
                </option>
                <option value={"photo booths melbourne"}>
                  photo booths melbourne
                </option>
                <option value={"photo booth deals melbourne"}>
                  photo booth deals melbourne
                </option>
              </Select>
              <FormHelperText id="my-helper-text">
                Select a Keyword that you are ranking for.
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={6} />
          <Grid item xs={4}>
            <Card>
              <CardHeader subheader="Last Updated At: "></CardHeader>
              <Divider />
              <CardContent>
                <Typography>14/01/2020</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardHeader subheader="Current Rank: "></CardHeader>
              <Divider />
              <CardContent>
                <Typography>14</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardHeader subheader="Monthly Rank: "></CardHeader>
              <Divider />
              <CardContent>
                <Typography>13</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card raised>
              <CardHeader subheader="Rank Over Time"></CardHeader>
              <Divider />
              <CardContent>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Start showing rank from: "
                  value={this.state.currDateFrom}
                  onChange={this.handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                />
              </CardContent>
              <KeywordTrackerChart></KeywordTrackerChart>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <TableContainer className={this.props.classes.container}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    {columns.map(col => {
                      return (
                        <TableCell
                          key={col.id}
                          align={col.align}
                          style={{ minWidth: col.minWidth }}
                        >
                          {col.label}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(
                      this.state.page * this.state.rowsPerPage,
                      this.state.page * this.state.rowsPerPage +
                        this.state.rowsPerPage
                    )
                    .map(row => {
                      return (
                        <TableRow hover key={row.keyword}>
                          {columns.map(col => {
                            const value = row[col.id];
                            if (col.id === "keywords_in_h1_up_down") {
                              return (
                                <TableCell
                                  key={col.id}
                                  align={col.align}
                                  style={{ minWidth: col.minWidth }}
                                >
                                  {col.format && typeof value === "number"
                                    ? col.format(value)
                                    : value}
                                </TableCell>
                              );
                            }

                            return (
                              <TableCell
                                key={col.id}
                                align={col.align}
                                style={{ minWidth: col.minWidth }}
                              >
                                {col.format && typeof value === "number"
                                  ? col.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(RankTracker);

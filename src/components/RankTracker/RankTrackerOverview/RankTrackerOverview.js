import React, { Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles, Divider } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import {
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TablePagination
} from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import { CardHeader, CardContent } from "@material-ui/core";

const columns = [
  {
    id: "query_name",
    label: "Keyword",
    minWidth: 170
  },
  {
    id: "rank",
    label: "Latest Rank",
    minWidth: 100,
    align: "right"
  },
  {
    id: "last_check",
    label: "Last Updated",
    minWidth: 100,
    align: "right"
  },
  {
    id: "avg_rank",
    label: "Monthly Average Rank",
    minWidth: 100,
    align: "right"
  },
  {
    id: "worst_rank",
    label: "Monthly Worst Rank",
    minWidth: 100,
    align: "right"
  },
  {
    id: "best_rank",
    label: "Monthly Best Rank",
    minWidth: 100,
    align: "right"
  },
  {
    id: "rank_diff",
    label: "Rank Diff.",
    minWidth: 100,
    align: "right"
  }
];

const rows = [
  {
    _id: "hire+photo+booth+for+party",
    last_data: {
      query_name: "hire photo booth for party",
      query_id: "5e006f87bec7a2288a4edf9a",
      rank: 1,
      last_check: "15/01/2020",
      keywords_in_h1: 0,
      keywords_in_h2: 0,
      keywords_in_h3: 7,
      keywords_in_h4: 0,
      keywords_in_h5: 0,
      keywords_in_h6: 0,
      keywords_in_p: 11,
      keywords_in_span: 0,
      keywords_in_alt: 7
    }
  },
  {
    _id: "party+photo+booth+rental",
    last_data: {
      query_name: "party photo booth rental",
      query_id: "5e006f86bec7a2288a4edf79",
      rank: 1,
      last_check: "15/01/2020",
      keywords_in_h1: 0,
      keywords_in_h2: 0,
      keywords_in_h3: 7,
      keywords_in_h4: 0,
      keywords_in_h5: 0,
      keywords_in_h6: 0,
      keywords_in_p: 11,
      keywords_in_span: 0,
      keywords_in_alt: 6
    }
  },
  {
    _id: "party+photobooth",
    last_data: {
      query_name: "party photobooth",
      query_id: "5e006f87bec7a2288a4edf97",
      rank: 1,
      last_check: "15/01/2020",
      keywords_in_h1: 0,
      keywords_in_h2: 0,
      keywords_in_h3: 2,
      keywords_in_h4: 0,
      keywords_in_h5: 0,
      keywords_in_h6: 0,
      keywords_in_p: 3,
      keywords_in_span: 0,
      keywords_in_alt: 3
    }
  },
  {
    _id: "photo+booth+for+parties",
    last_data: {
      query_name: "photo booth for parties",
      query_id: "5e006f88bec7a2288a4edfbb",
      rank: 1,
      last_check: "15/01/2020",
      keywords_in_h1: 1,
      keywords_in_h2: 0,
      keywords_in_h3: 6,
      keywords_in_h4: 0,
      keywords_in_h5: 0,
      keywords_in_h6: 0,
      keywords_in_p: 10,
      keywords_in_span: 0,
      keywords_in_alt: 6
    }
  },
  {
    _id: "photo+booth+fun",
    last_data: {
      query_name: "photo booth fun",
      query_id: "5e006f87bec7a2288a4edf92",
      rank: 2,
      last_check: "15/01/2020",
      keywords_in_h1: 0,
      keywords_in_h2: 0,
      keywords_in_h3: 5,
      keywords_in_h4: 0,
      keywords_in_h5: 0,
      keywords_in_h6: 0,
      keywords_in_p: 10,
      keywords_in_span: 0,
      keywords_in_alt: 5
    }
  },
  {
    _id: "party+photo+booths",
    last_data: {
      query_name: "party photo booths",
      query_id: "5e006f87bec7a2288a4edf99",
      rank: 4,
      last_check: "15/01/2020",
      keywords_in_h1: 0,
      keywords_in_h2: 0,
      keywords_in_h3: 4,
      keywords_in_h4: 0,
      keywords_in_h5: 0,
      keywords_in_h6: 0,
      keywords_in_p: 8,
      keywords_in_span: 0,
      keywords_in_alt: 3
    }
  },
  {
    _id: "party+photo+booth",
    last_data: {
      query_name: "party photo booth",
      query_id: "5e006f87bec7a2288a4edf8c",
      rank: 4,
      last_check: "15/01/2020",
      keywords_in_h1: 0,
      keywords_in_h2: 0,
      keywords_in_h3: 7,
      keywords_in_h4: 0,
      keywords_in_h5: 0,
      keywords_in_h6: 0,
      keywords_in_p: 11,
      keywords_in_span: 0,
      keywords_in_alt: 6
    }
  },
  {
    _id: "photobooth+rental",
    last_data: {
      query_name: "photobooth rental",
      query_id: "5e006f85bec7a2288a4edf49",
      rank: 5,
      last_check: "13/01/2020",
      keywords_in_h1: 0,
      keywords_in_h2: 0,
      keywords_in_h3: 0,
      keywords_in_h4: 0,
      keywords_in_h5: 0,
      keywords_in_h6: 0,
      keywords_in_p: 1,
      keywords_in_span: 0,
      keywords_in_alt: 2
    }
  },
  {
    _id: "party+photo+booth+hire",
    last_data: {
      query_name: "party photo booth hire",
      query_id: "5e006f85bec7a2288a4edf52",
      rank: 6,
      last_check: "14/01/2020",
      keywords_in_h1: 0,
      keywords_in_h2: 0,
      keywords_in_h3: 7,
      keywords_in_h4: 0,
      keywords_in_h5: 0,
      keywords_in_h6: 0,
      keywords_in_p: 11,
      keywords_in_span: 0,
      keywords_in_alt: 6
    }
  },
  {
    _id: "photo+booth+party",
    last_data: {
      query_name: "photo booth party",
      query_id: "5e006f88bec7a2288a4edfbf",
      rank: 6,
      last_check: "15/01/2020",
      keywords_in_h1: 0,
      keywords_in_h2: 0,
      keywords_in_h3: 7,
      keywords_in_h4: 0,
      keywords_in_h5: 0,
      keywords_in_h6: 0,
      keywords_in_p: 11,
      keywords_in_span: 0,
      keywords_in_alt: 6
    }
  },
  {
    _id: "photo+booth+for+hire",
    last_data: {
      query_name: "photo booth for hire",
      query_id: "5e006f87bec7a2288a4edf7e",
      rank: 8,
      last_check: "13/01/2020",
      keywords_in_h1: 0,
      keywords_in_h2: 0,
      keywords_in_h3: 5,
      keywords_in_h4: 0,
      keywords_in_h5: 0,
      keywords_in_h6: 0,
      keywords_in_p: 9,
      keywords_in_span: 0,
      keywords_in_alt: 6
    }
  },
  {
    _id: "hire+a+photobooth",
    last_data: {
      query_name: "hire a photobooth",
      query_id: "5e006f87bec7a2288a4edf7f",
      rank: 8,
      last_check: "13/01/2020",
      keywords_in_h1: 1,
      keywords_in_h2: 0,
      keywords_in_h3: 3,
      keywords_in_h4: 1,
      keywords_in_h5: 0,
      keywords_in_h6: 0,
      keywords_in_p: 7,
      keywords_in_span: 0,
      keywords_in_alt: 4
    }
  },
  {
    _id: "party+booth",
    last_data: {
      query_name: "party booth",
      query_id: "5e006f88bec7a2288a4edfc4",
      rank: 8,
      last_check: "11/01/2020",
      keywords_in_h1: 0,
      keywords_in_h2: 0,
      keywords_in_h3: 5,
      keywords_in_h4: 0,
      keywords_in_h5: 0,
      keywords_in_h6: 0,
      keywords_in_p: 7,
      keywords_in_span: 0,
      keywords_in_alt: 4
    }
  },
  {
    _id: "hire+a+photo+booth",
    last_data: {
      query_name: "hire a photo booth",
      query_id: "5e006f86bec7a2288a4edf77",
      rank: 8,
      last_check: "13/01/2020",
      keywords_in_h1: 1,
      keywords_in_h2: 0,
      keywords_in_h3: 8,
      keywords_in_h4: 1,
      keywords_in_h5: 0,
      keywords_in_h6: 0,
      keywords_in_p: 15,
      keywords_in_span: 0,
      keywords_in_alt: 7
    }
  },
  {
    _id: "hire+photo+booth",
    last_data: {
      query_name: "hire photo booth",
      query_id: "5e006f87bec7a2288a4edf7b",
      rank: 9,
      last_check: "13/01/2020",
      keywords_in_h1: 0,
      keywords_in_h2: 0,
      keywords_in_h3: 5,
      keywords_in_h4: 0,
      keywords_in_h5: 0,
      keywords_in_h6: 0,
      keywords_in_p: 9,
      keywords_in_span: 0,
      keywords_in_alt: 5
    }
  },
  {
    _id: "hire+photobooth",
    last_data: {
      query_name: "hire photobooth",
      query_id: "5e006f87bec7a2288a4edf80",
      rank: 9,
      last_check: "13/01/2020",
      keywords_in_h1: 0,
      keywords_in_h2: 0,
      keywords_in_h3: 0,
      keywords_in_h4: 0,
      keywords_in_h5: 0,
      keywords_in_h6: 0,
      keywords_in_p: 1,
      keywords_in_span: 0,
      keywords_in_alt: 2
    }
  },
  {
    _id: "photo+booth+hire",
    last_data: {
      query_name: "photo booth hire",
      query_id: "5e006f85bec7a2288a4edf42",
      rank: 12,
      last_check: "13/01/2020",
      keywords_in_h1: 0,
      keywords_in_h2: 0,
      keywords_in_h3: 5,
      keywords_in_h4: 0,
      keywords_in_h5: 0,
      keywords_in_h6: 0,
      keywords_in_p: 9,
      keywords_in_span: 0,
      keywords_in_alt: 5
    }
  },
  {
    _id: "photobooth+hire",
    last_data: {
      query_name: "photobooth hire",
      query_id: "5e006f85bec7a2288a4edf46",
      rank: 12,
      last_check: "13/01/2020",
      keywords_in_h1: 0,
      keywords_in_h2: 0,
      keywords_in_h3: 0,
      keywords_in_h4: 0,
      keywords_in_h5: 0,
      keywords_in_h6: 0,
      keywords_in_p: 1,
      keywords_in_span: 0,
      keywords_in_alt: 2
    }
  },
  {
    _id: "all+party+photo+booths",
    last_data: {
      query_name: "all party photo booths",
      query_id: "5e006f87bec7a2288a4edf98",
      rank: 24,
      last_check: "14/01/2020",
      keywords_in_h1: 0,
      keywords_in_h2: 0,
      keywords_in_h3: 4,
      keywords_in_h4: 0,
      keywords_in_h5: 0,
      keywords_in_h6: 0,
      keywords_in_p: 11,
      keywords_in_span: 0,
      keywords_in_alt: 3
    }
  }
];

const aggregations = {
  "party+photo+booths": {
    _id: "party+photo+booths",
    monthly_avg_rank: 3.9375,
    monthly_worst_rank: 6,
    monthly_best_rank: 3
  },
  "party+photo+booth+rental": {
    _id: "party+photo+booth+rental",
    monthly_avg_rank: 1.0,
    monthly_worst_rank: 1,
    monthly_best_rank: 1
  },
  "photo+booth+for+hire": {
    _id: "photo+booth+for+hire",
    monthly_avg_rank: 8.0,
    monthly_worst_rank: 8,
    monthly_best_rank: 8
  },
  "photo+booth+fun": {
    _id: "photo+booth+fun",
    monthly_avg_rank: 3.625,
    monthly_worst_rank: 12,
    monthly_best_rank: 2
  },
  "photobooth+rental": {
    _id: "photobooth+rental",
    monthly_avg_rank: 5.0,
    monthly_worst_rank: 5,
    monthly_best_rank: 5
  },
  "party+photo+booth": {
    _id: "party+photo+booth",
    monthly_avg_rank: 2.466666666666667,
    monthly_worst_rank: 4,
    monthly_best_rank: 1
  },
  "party+photobooth": {
    _id: "party+photobooth",
    monthly_avg_rank: 1.0,
    monthly_worst_rank: 1,
    monthly_best_rank: 1
  },
  "hire+photo+booth": {
    _id: "hire+photo+booth",
    monthly_avg_rank: 9.0,
    monthly_worst_rank: 9,
    monthly_best_rank: 9
  },
  "hire+a+photobooth": {
    _id: "hire+a+photobooth",
    monthly_avg_rank: 8.0,
    monthly_worst_rank: 8,
    monthly_best_rank: 8
  },
  "party+booth": {
    _id: "party+booth",
    monthly_avg_rank: 8.0,
    monthly_worst_rank: 8,
    monthly_best_rank: 8
  },
  "hire+photobooth": {
    _id: "hire+photobooth",
    monthly_avg_rank: 9.0,
    monthly_worst_rank: 9,
    monthly_best_rank: 9
  },
  "photobooth+hire": {
    _id: "photobooth+hire",
    monthly_avg_rank: 12.0,
    monthly_worst_rank: 12,
    monthly_best_rank: 12
  },
  "party+photo+booth+hire": {
    _id: "party+photo+booth+hire",
    monthly_avg_rank: 7.066666666666666,
    monthly_worst_rank: 9,
    monthly_best_rank: 4
  },
  "photo+booth+party": {
    _id: "photo+booth+party",
    monthly_avg_rank: 5.733333333333333,
    monthly_worst_rank: 7,
    monthly_best_rank: 5
  },
  "hire+photo+booth+for+party": {
    _id: "hire+photo+booth+for+party",
    monthly_avg_rank: 1.0,
    monthly_worst_rank: 1,
    monthly_best_rank: 1
  },
  "all+party+photo+booths": {
    _id: "all+party+photo+booths",
    monthly_avg_rank: 14.357142857142858,
    monthly_worst_rank: 25,
    monthly_best_rank: 6
  },
  "photo+booth+hire": {
    _id: "photo+booth+hire",
    monthly_avg_rank: 12.0,
    monthly_worst_rank: 12,
    monthly_best_rank: 12
  },
  "photo+booth+for+parties": {
    _id: "photo+booth+for+parties",
    monthly_avg_rank: 1.0,
    monthly_worst_rank: 1,
    monthly_best_rank: 1
  },
  "hire+a+photo+booth": {
    _id: "hire+a+photo+booth",
    monthly_avg_rank: 8.0,
    monthly_worst_rank: 8,
    monthly_best_rank: 8
  }
};

const rank_diff = [
  { keyword: "party+photo+booth", diff: -2 },
  { keyword: "party+photobooth", diff: 0 },
  { keyword: "photobooth+rental", diff: 0 },
  { keyword: "hire+photo+booth", diff: 0 },
  { keyword: "hire+a+photobooth", diff: 0 },
  { keyword: "party+photo+booth+rental", diff: 0 },
  { keyword: "photo+booth+for+hire", diff: 0 },
  { keyword: "party+photo+booths", diff: -4 },
  { keyword: "photo+booth+fun", diff: -11 },
  { keyword: "hire+photo+booth+for+party", diff: 0 },
  { keyword: "photo+booth+hire", diff: 0 },
  { keyword: "photo+booth+party", diff: 1 },
  { keyword: "all+party+photo+booths", diff: -6 },
  { keyword: "hire+a+photo+booth", diff: 0 },
  { keyword: "photo+booth+for+parties", diff: 0 },
  { keyword: "photobooth+hire", diff: 0 },
  { keyword: "party+booth", diff: 0 },
  { keyword: "hire+photobooth", diff: 0 },
  { keyword: "party+photo+booth+hire", diff: 2 }
];

const styles = {
  root: {
    width: "100%"
  },
  container: {
    maxHeight: "calc(85vh - 64px - 48px)"
  }
};

class RankTrackerOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      rowsPerPage: 10,
      keyword_graph_open: false,
      last_x_days: 14
    };
  }

  componentDidMount = () => {
    console.log("ComponentDidMount");
    
  };

  handleRowsPerPageChange = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  handlePageChange = (event, newPage) => {
    this.setState({ page: newPage });
  };

  handleRowClick = (event, keyword) => {
    console.log(keyword);
    this.setState({ keyword_graph_open: true });
    // make db request for historical data for keyword
  };

  handleGraphClose = () => {
    this.setState({ keyword_graph_open: false });
  };

  render = () => {
    return (
      <Fragment>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Paper>
              <Typography variant="h4">
                Home Page: photoboothrental.co
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Card raised>
              <Typography variant="h6">Average Rank</Typography>
              <Divider />
              <CardContent>
                {(
                  rows.reduce((total, row) => {
                    return total + row.last_data.rank;
                  }, 0) / rows.length
                ).toFixed(2)}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card raised>
              <Typography variant="h6">
                Last {this.state.last_x_days} Days Up/Down
              </Typography>
              <Divider />
              <CardContent>
                {rank_diff.reduce((total, keyword) => {
                  return total + keyword.diff;
                }, 0)}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card raised>
              <CardHeader title="Keyword Overview"></CardHeader>
              <Divider />
              <CardContent>
                <TableContainer className={this.props.classes.container}>
                  <Table stickyHeader>
                    <TableHead>
                      <TableRow>
                        {columns.map(col => {
                          let value = col.label;
                          if (col.id === "avg_rank") {
                            value =
                              "Last " +
                              this.state.last_x_days +
                              " Days Average Rank";
                          } else if (col.id === "worst_rank") {
                            value =
                              "Last " +
                              this.state.last_x_days +
                              " Days Worst Rank";
                          } else if (col.id === "best_rank") {
                            value =
                              "Last " +
                              this.state.last_x_days +
                              " Days Best Rank";
                          }
                          return (
                            <TableCell
                              key={col.id}
                              align={col.align}
                              style={{ minWidth: col.minWidth }}
                            >
                              {value}
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
                          const row_data = row.last_data;
                          return (
                            <TableRow
                              hover
                              key={row_data.query_id}
                              onClick={event =>
                                this.handleRowClick(event, row_data.query_name)
                              }
                            >
                              {columns.map(col => {
                                let value = row_data[col.id];

                                if (col.id === "avg_rank") {
                                  value = Math.round(
                                    aggregations[
                                      row_data.query_name.replace(/ /g, "+")
                                    ].monthly_avg_rank
                                  );
                                } else if (col.id === "best_rank") {
                                  value =
                                    aggregations[
                                      row_data.query_name.replace(/ /g, "+")
                                    ].monthly_best_rank;
                                } else if (col.id === "worst_rank") {
                                  value =
                                    aggregations[
                                      row_data.query_name.replace(/ /g, "+")
                                    ].monthly_worst_rank;
                                } else if (col.id === "rank_diff") {
                                  value =
                                    aggregations[
                                      row_data.query_name.replace(/ /g, "+")
                                    ].monthly_worst_rank -
                                    aggregations[
                                      row_data.query_name.replace(/ /g, "+")
                                    ].monthly_best_rank;
                                } else {
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
                <TablePagination
                  rowsPerPageOptions={[10, 20, 50]}
                  component="div"
                  count={rows.length}
                  rowsPerPage={this.state.rowsPerPage}
                  page={this.state.page}
                  onChangePage={this.handlePageChange}
                  onChangeRowsPerPage={this.handleRowsPerPageChange}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Modal
          open={this.state.keyword_graph_open}
          onClose={this.handleGraphClose}
        >
          <div>EYY</div>
        </Modal>
      </Fragment>
    );
  };
}

export default withStyles(styles)(RankTrackerOverview);

import React, { Component } from "react";
import {
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Table
} from "@material-ui/core";

const columns = {
    
}



class KeywordTrackerTable extends Component {
  render() {
    return (
      <div>
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
                    <TableRow
                      hover
                      key={row.keyword}
                      onClick={event => this.handleRowClick(event, row.keyword)}
                    >
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
                              {value >= 0 ? (
                                <ArrowUpwardSharpIcon></ArrowUpwardSharpIcon>
                              ) : (
                                <ArrowDownwardSharpIcon></ArrowDownwardSharpIcon>
                              )}
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
        <TablePagination
          rowsPerPageOptions={[10, 20, 50]}
          component="div"
          count={rows.length}
          rowsPerPage={this.state.rowsPerPage}
          page={this.state.page}
          onChangePage={this.handlePageChange}
          onChangeRowsPerPage={this.handleRowsPerPageChange}
        />
      </div>
    );
  }
}

export default KeywordTrackerTable;

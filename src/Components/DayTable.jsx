import React from 'react';

/* Material UI */
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  transactionsNumberText: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "15px",
    color: "#B3B3B3",
  },
  transactionsText: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "15px",
    color: "#000000",
  },
  revenueNumberText: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "17px",
    textAlign: "right",
    color: "#000000",
  },
  numberText: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "17px",
    textAlign: "right",
    color: "#000000",
  },
  dateText: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "17px",
    color: "#4D4D4D",
  },
  headerText: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "17px",
    color: "#000000",
  },
  tableRoot: {
    width: "1500px",
    background: "#FFFFFF",
    border: "1px solid #EBEBEB",
    boxSizing: "border-box",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.05)",
    borderRadius: "8px",
  },
}));

export default function DayTable(props) {

  const classes = useStyles();

  if (props.data)
    return (
      <div style={{marginLeft: 50, marginTop: -50}}>
        <h1>Per day</h1>
        <TableContainer className={classes.tableRoot} component={Paper}>
          <Table >
            <TableHead>
              <TableRow>
                <TableCell classes={{root: classes.headerText}}>Date</TableCell>
                <TableCell align="right" classes={{root: classes.headerText}}>Revenue</TableCell>
                <TableCell align="center" classes={{root: classes.transactionsText}}>Transactions</TableCell>
                <TableCell align="right" classes={{root: classes.headerText}}>Refunds</TableCell>
                <TableCell align="center" classes={{root: classes.transactionsText}}>Transactions</TableCell>
                <TableCell align="right" classes={{root: classes.headerText}}>Chargeback</TableCell>
                <TableCell align="center" classes={{root: classes.transactionsText}}>Transactions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.data.map((day) => (
                <TableRow key={day.date}>
                  <TableCell classes={{root: classes.dateText}} component="th" scope="row">
                    {day.date}
                  </TableCell>
                  <TableCell align="right" classes={{root: classes.revenueNumberText}}>{'€' + day.revenue.toFixed(2)}</TableCell>
                  <TableCell align="center" classes={{root: classes.transactionsNumberText}}>{day.revenueTransactions}</TableCell>
                  <TableCell align="right" classes={{root: classes.numberText}}>{'€' + day.refunds.toFixed(2)}</TableCell>
                  <TableCell align="center" classes={{root: classes.transactionsNumberText}}>{day.refundsTransactions}</TableCell>
                  <TableCell align="right" classes={{root: classes.numberText}}>{'€' + day.chargeback.toFixed(2)}</TableCell>
                  <TableCell align="center" classes={{root: classes.transactionsNumberText}}>{day.chargebackTransactions}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  else
    return (
      <div>
        No data given to the component
      </div>
    )
}
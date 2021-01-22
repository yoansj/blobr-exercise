import React from 'react';

/* Material UI */
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fbfbfb",
    height: 400,
  },
  statistics: {
    color: "#000000",
    left: "290px",
    top: "24px",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "31px",
    marginLeft: 50,
  },
  cardRoot: {
    background: "#FFFFFF",
    border: "1px solid #EBEBEB",
    boxSizing: "border-box",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.05)",
    borderRadius: "8px",
    width: 400,
    height: 180,
    margin: 50,
  },
  cardTopLeftText: {
    width: "68px",
    height: "19px",
    left: "306px",
    top: "837px",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "19px",
    color: "#000000",
    marginLeft: 16,
    display: "inline-block"
  },
  cardTopRightText: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "15px",
    color: "#B3B3B3",
    display: "inline-block",
    marginLeft: 177+45,
  },
  cardMiddleLeftText: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "25px",
    lineHeight: "29px",
    color: "#000000",
    display: "inline-block",
    marginLeft: 16,
  },
  cardMiddleRightText: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "25px",
    lineHeight: "29px",
    color: "#000000",
    display: "inline-block",
    marginLeft: 232+50,
  },
  cardDownLeftText: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "15px",
    color: "#B3B3B3",
    display: "inline-block",
    marginLeft: 16,
  },
  cardDownRightText: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "15px",
    color: "#B3B3B3",
    display: "inline-block",
    marginLeft: 276+50,
  },
  cardComparaisonText: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "19px",
    color: "#000000",
    display: "inline-block",
    marginLeft: 16,
  },
}));

export default function Revenues(props) {

  const consumeData = () => {
    let totalRevenue = 0;
    let totalTransactions = 0;
    let totalRefounds = 0;
    let totalRefoundsTransactions = 0;
    let totalChargeback = 0;
    let totalChargebackTransactions = 0;

    props.data.forEach((day) => {
      totalRevenue += day.revenue;
      totalTransactions += day.revenueTransactions;
      totalRefounds += day.refunds;
      totalRefoundsTransactions += day.refundsTransactions;
      totalChargeback += day.chargeback;
      totalChargebackTransactions += day.chargebackTransactions;
    })

    return ({
      totalRevenue: '€' + totalRevenue.toFixed(2),
      totalTransactions,
      totalRefounds: '€' + totalRefounds.toFixed(2),
      totalRefoundsTransactions,
      totalChargeback: '€' + totalChargeback.toFixed(2),
      totalChargebackTransactions
    })
  }

  const [data] = React.useState(() => consumeData());

  const classes = useStyles();

  if (!props.data)
    return (
      <div>
        No data provided
      </div>
    )

  return (
    <div className={classes.root}>
      <h1 className={classes.statistics}>Statistics</h1>
      <div style={{display: "flex", marginTop: -50}}>
        <Card classes={{root: classes.cardRoot}}>
          <h1 className={classes.cardTopLeftText}>Revenue</h1>
          <h1 className={classes.cardTopRightText}>Transactions</h1>
          <Divider />
          <h1 className={classes.cardMiddleLeftText}>{data.totalRevenue}</h1>
          <h1 className={classes.cardMiddleRightText}>{data.totalTransactions}</h1>
          <Divider />
          <h1 className={classes.cardComparaisonText}>Compared to last year</h1>
          <div style={{marginTop: -8}}>
            <h1 className={classes.cardDownLeftText}>€0.00</h1>
            <h1 className={classes.cardDownRightText}>0</h1>
          </div>
        </Card>
        <Card classes={{root: classes.cardRoot}}>
          <h1 className={classes.cardTopLeftText}>Refunds</h1>
          <h1 className={classes.cardTopRightText}>Transactions</h1>
          <Divider />
          <h1 className={classes.cardMiddleLeftText}>{data.totalRefounds}</h1>
          <h1 className={classes.cardMiddleRightText}>{data.totalRefoundsTransactions}</h1>
          <Divider />
          <h1 className={classes.cardComparaisonText}>Compared to last year</h1>
          <div style={{marginTop: -8}}>
            <h1 className={classes.cardDownLeftText}>€0.00</h1>
            <h1 className={classes.cardDownRightText}>0</h1>
          </div>
        </Card>
        <Card classes={{root: classes.cardRoot}}>
          <h1 className={classes.cardTopLeftText}>Chargeback</h1>
          <h1 className={classes.cardTopRightText}>Transactions</h1>
          <Divider />
          <h1 className={classes.cardMiddleLeftText}>{data.totalChargeback}</h1>
          <h1 className={classes.cardMiddleRightText}>{data.totalChargebackTransactions}</h1>
          <Divider />
          <h1 className={classes.cardComparaisonText}>Compared to last year</h1>
          <div style={{marginTop: -8}}>
            <h1 className={classes.cardDownLeftText}>€0.00</h1>
            <h1 className={classes.cardDownRightText}>0</h1>
          </div>
        </Card>
      </div>
    </div>
  )
}
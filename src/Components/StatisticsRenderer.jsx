import React from 'react';
import PropTypes from 'prop-types';

/* Material UI */
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';

/* Recharts */
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const BlueRadio = withStyles({
  root: {
    color: "#0071F2"
  },
  disabled: {
    color: "#0071F2"
  }
})((props) => <Radio color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
  currentPeriodText: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "17px",
    color: "#0071F2",
    display: "inline-block",
  },
  previousPeriodText: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "17px",
    color: "#59BBFF",
    display: "inline-block",
    marginLeft: 60,
  },
  sept2020: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "17px",
    color: "#B3B3B3",
    display: "inline-block",
    marginLeft: 5,
  },
  cardRoot: {
    width: 280,
    height: 150,
    background: "#FFFFFF",
    border: "1px solid #EBEBEB",
    boxSizing: "border-box",
    boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.08)",
    borderRadius: "8px",
  },
  cardBold: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "17px",
    color: "#000000",
    marginLeft: 16,
  },
  cardGrey: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "17px",
    color: "#B3B3B3B3",
    marginLeft: 16,
  },
  cardTotal: {
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "17px",
    color: "#000000",
    marginLeft: 16,
    display: "inline-block",
  },
  cardTotalNumber: {
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "17px",
    color: "#000000",
    marginRight: 16,
    display: "inline-block",
    textAlignLast: "end",
    float: "right",
  },
  cardLastYearNumber: {
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "17px",
    color: "#B3B3B3B3",
    marginRight: 16,
    textAlignLast: "end",
    float: "right",
  },
}));


export default function StatisticsRenderer(props) {

  const classes = useStyles();

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload) {
      return (
        <Card className={classes.cardRoot}>
          <h1 className={classes.cardBold}>{`${label}`}</h1>
          <h1 className={classes.cardGrey}>{`${label.replace("2020", "2019")}`}</h1>
          <Divider />
          <h1 className={classes.cardTotal}>Total: </h1>
          <h1 className={classes.cardTotalNumber}>€{payload[0].value.toFixed(2)}</h1>
          <br />
          <h1 className={classes.cardLastYearNumber}>€0.00</h1>
        </Card>
      );
    }
    return null;
  };

  return (
    <div style={{marginBottom: 20, marginTop: 20}}>
      <h1 className={classes.currentPeriodText}>
        <BlueRadio /> Current period
        <h1 className={classes.sept2020}> (September 2020) </h1>
      </h1>
      <h1 className={classes.previousPeriodText}>
        <BlueRadio /> Previous period
        <h1 className={classes.sept2020}> (September 2019) </h1>
      </h1>
      <LineChart
        width={1590}
        height={400}
        data={props.data}
        margin={{
          top: 20,
          left: 50,
          bottom: 30,
        }}
      >
        <CartesianGrid
          strokeDasharray="3 0"
          vertical={false}
        />
        <XAxis
          dataKey="date"
          allowDataOverflow
          interval={1}
          tick={{fontSize: 12, width: 39, height: 30, color: "#000000", fontFamily: "Inter", textAlign: "center"}}
        />
        <YAxis
          dataKey="revenue"
          unit="€"
        />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="#0071F2"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
}

StatisticsRenderer.propTypes = {
  /**
   * Data used by the component
   * @see revenues.json
   */
  data: PropTypes.array.isRequired,
}
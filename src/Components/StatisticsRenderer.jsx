import React from 'react';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';

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
    display: "inline-block"
  },
  previousPeriodText: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "17px",
    color: "#59BBFF",
    display: "inline-block",
    marginLeft: 60
  },
  sept2020: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "17px",
    color: "#B3B3B3",
    display: "inline-block",
    marginLeft: 5
  }
}));


export default function StatisticsRenderer(props) {

  const classes = useStyles();

  return (
    <div>
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
          bottom: 5,
        }}
      >
        <CartesianGrid
          strokeDasharray="3 0"
          vertical={false}
        />
        <XAxis
          dataKey="date"
        />
        <YAxis
          dataKey="revenue"
          label={{ value: 'Euro', angle: -90, position: 'insideLeft' }}
        />
        <Tooltip />
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
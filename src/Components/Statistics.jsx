import React from 'react';

/* Material UI */
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import PeriodManager from './PeriodManager';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    backgroundColor: "#FFFFFF",
    color: "#000000",
  },
  pageTitle: {
    color: "#000000",
    width: "122px",
    height: "31px",
    left: "290px",
    top: "24px",
    fontStyle: "normal",
    fontWeight: 'bold',
    fontSize: "26px",
    lineHeight: "31px",
    paddingLeft: 30,
  },
}))

export default function Statistics(props) {

  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div>
        <h1 className={classes.pageTitle}>Statistics</h1>
        <Divider />
      </div>
      <PeriodManager />
    </main>
  )
}
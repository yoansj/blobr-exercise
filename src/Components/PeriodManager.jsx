import React from 'react';

/* Material UI */
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MonthsScroller from './MonthsScroller';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#FFFFFF"
  },
  monthRenderer: {
    position: "absolute",
    left: "949px",
    top: "119px",
  },
  leftButton: {
    border: "1px solid #EBEBEB",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    width: 80,
    height: 32,
  },
  rightButton: {
    border: "1px solid #EBEBEB",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    width: 80,
    height: 32,
  },
  middleButton: {
    border: "1px solid #EBEBEB",
    borderRadius: 0,
    width: 80,
    height: 32,
  },
  buttonText: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 'normal',
    fontSize: "14px",
    lineHeight: "17px",
    textTransform: "none",
  },
  selectedButtonText: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: '600',
    fontSize: "14px",
    lineHeight: "17px",
    textTransform: "none",
    color: '#0071F2'
  }
}))

export default function PeriodManager() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.monthRenderer}>
        <Button classes={{root: classes.leftButton}} variant="outlined">
          <h1 className={classes.buttonText}>Days</h1>
        </Button>
        <Button classes={{root: classes.middleButton}} variant="outlined">
          <h1 className={classes.buttonText}>Weeks</h1>
        </Button>
        <Button classes={{root: classes.middleButton}} variant="outlined">
          <h1 className={classes.selectedButtonText}>Months</h1>
        </Button>
        <Button classes={{root: classes.middleButton}} variant="outlined">
          <h1 className={classes.buttonText}>Quarters</h1>
        </Button>
        <Button classes={{root: classes.middleButton}} variant="outlined">
          <h1 className={classes.buttonText}>Year</h1>
        </Button>
        <Button classes={{root: classes.rightButton}} variant="outlined">
          <h1 className={classes.buttonText}>Custom...</h1>
        </Button>
      </div>
      <div>
        <MonthsScroller />
      </div>
    </div>
  )
}
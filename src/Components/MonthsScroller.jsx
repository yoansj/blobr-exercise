import React, { useState, useEffect } from 'react';

/* Material UI */
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { LeftArrowIcon, RightArrowIcon } from '../Icons';

const months = [
  {month: "January", year: "2019", index: 0},
  {month: "February", year: "2019", index: 1},
  {month: "March", year: "2019", index: 2},
  {month: "April", year: "2019", index: 3},
  {month: "June", year: "2019", index: 4},
  {month: "July", year: "2019", index: 5},
  {month: "August", year: "2019", index: 6},
  {month: "September", year: "2019", index: 7},
  {month: "November", year: "2019", index: 8},
  {month: "December", year: "2019", index: 9},
  {month: "January", year: "2020", index: 10},
  {month: "February", year: "2020", index: 11},
  {month: "March", year: "2020", index: 12},
  {month: "April", year: "2020", index: 13},
  {month: "June", year: "2020", index: 14},
  {month: "July", year: "2020", index: 15},
  {month: "August", year: "2020", index: 16},
  {month: "September", year: "2020", index: 17},
]

const useStyles = makeStyles((theme) => ({
  leftButton: {
    border: "1px solid #EBEBEB",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    width: 136,
    height: 50,
  },
  rightButton: {
    border: "1px solid #EBEBEB",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    width: 136,
    height: 50,
  },
  middleButton: {
    border: "1px solid #EBEBEB",
    borderRadius: 0,
    width: 136,
    height: 50,
  },
  monthText: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: '600',
    fontSize: "14px",
    lineHeight: "17px",
    textTransform: "none",
    textAlign: "center",
  },
  yearText: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 'normal',
    fontSize: "12px",
    lineHeight: "15px",
    textTransform: "none",
    textAlign: "center",
  },
  selectedMonthText: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: '600',
    fontSize: "14px",
    lineHeight: "17px",
    textTransform: "none",
    color: '#0071F2'
  }
}))

export default function MonthsScroller() {

  const classes = useStyles();

  /* Number of months rendered by the component */
  const monthsToRender = 10;

  const getMonthsArray = (index, monthsToRender, setCutMonths) => {
    let newMonths = months;
    newMonths = newMonths.slice(index, index + monthsToRender + 1);
    setCutMonths(newMonths);
    return (newMonths);
  }

  const [index, setIndex] = useState(8);
  const [cutMonths, setCutMonths] = useState(() => {
    let newMonths = months;
    newMonths = newMonths.slice(index, index + monthsToRender + 1);
    return (newMonths);
  });

  const nextMonth = () => {

  }

  useEffect(() => {
    getMonthsArray(index, monthsToRender, setCutMonths);
  }, [index])

  if (cutMonths)
    return (
      <div>
        {cutMonths.map((elem) => {
          if (elem.index === index) {
            return (
              <Button startIcon={<LeftArrowIcon />} key={elem.index}>
                <div style={{display: "block"}}>
                  <h1 className={classes.monthText}>{elem.month}</h1>
                  <h1 className={classes.yearText}>{elem.year}</h1>
                </div>
              </Button>
            )
          } else if (elem.index === (index + monthsToRender - 1)) {
            return (
              <Button endIcon={<RightArrowIcon />} key={elem.index}>
                <div style={{display: "block"}}>
                  <h1 className={classes.monthText}>{elem.month}</h1>
                  <h1 className={classes.yearText}>{elem.year}</h1>
                </div>
              </Button>
            )
          } else {
            return (
              <Button key={elem.index}>
                <div style={{display: "block"}}>
                  <h1 className={classes.monthText}>{elem.month}</h1>
                  <h1 className={classes.yearText}>{elem.year}</h1>
                </div>
              </Button>
            )
          }
        })}
      </div>
    )
  else
    return (
      <div>
        Empty
      </div>
    )
}
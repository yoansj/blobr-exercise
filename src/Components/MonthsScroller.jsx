import React, { useState, useEffect } from 'react';

/* Material UI */
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { LeftArrowIcon, RightArrowIcon } from '../Icons';

/**
 * Used by the scroller to scroll between months
 * Not a perfect solution but does the job
 * (Indexes have to be ordered correctly)
 * (Selected is only used to render the September text in blue)
 */
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
  {month: "September", year: "2020", index: 17, selected: true},
]

const useStyles = makeStyles((theme) => ({
  leftButton: {
    border: "1px solid #EBEBEB",
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    width: 166,
    height: 50,
  },
  rightButton: {
    border: "1px solid #EBEBEB",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    width: 166,
    height: 50,
  },
  middleButton: {
    border: "1px solid #EBEBEB",
    backgroundColor: "#FFFFFF",
    borderRadius: 0,
    width: 146,
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
    newMonths = newMonths.slice(index, index + monthsToRender);
    setCutMonths(newMonths);
    return (newMonths);
  }

  const [index, setIndex] = useState(8);

  const [cutMonths, setCutMonths] = useState(() => {
    let newMonths = months;
    newMonths = newMonths.slice(index, index + monthsToRender + 1);
    return (newMonths);
  });
  const [scrollableRef, setScrollableRef] = useState();

  /**
   * Switch to the next month
   */
  const nextMonth = () => {
      setIndex(prev => prev + 1);
  }

  /**
   * Switch to the previous month
   */
  const prevMonth = () => {
    if (index !== months[0].index)
      setIndex(prev => prev - 1);
  }

  /* Called on scroll */
  const ScrollHandler = (event) => {
    var e = window.event || event;
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    if (delta === 1) nextMonth();
    else prevMonth();
  }

  /* Overflow useEffect for the scroller */
  useEffect(() => {
    if (months[months.length - 1].index - (index) < monthsToRender - 1) {
      setIndex(prev => prev - 1);
    }
    if (index < 0)
      setIndex(0)
    getMonthsArray(index, monthsToRender, setCutMonths);
  }, [index])

  /* Add the scroll to the Scroller div */
  useEffect(() => {
    if (scrollableRef && scrollableRef.addEventListener) {
      scrollableRef.addEventListener("mousewheel", ScrollHandler, false);
      scrollableRef.addEventListener("DOMMouseScroll", ScrollHandler, false);
    } else if (scrollableRef) {
      scrollableRef.attachEvent("onmousewheel", ScrollHandler, false);
    }
  }, [scrollableRef]);

  if (cutMonths)
    return (
      <div onScroll={(e) => console.log(e)} ref={(d) => setScrollableRef(d)}>
        {cutMonths.map((elem) => {
          if (elem.index === index) {
            return (
              <Button
                classes={{root: classes.leftButton}}
                startIcon={<IconButton onClick={prevMonth}><LeftArrowIcon /></IconButton>}
                key={elem.index}
              >
                <div style={{ display: "block" }}>
                  <h1 className={classes.monthText}>{elem.month}</h1>
                  <h1 className={classes.yearText}>{elem.year}</h1>
                </div>
              </Button>
            );
          } else if (elem.index === index + monthsToRender - 1) {
            return (
              <Button
                classes={{root: classes.rightButton}}
                endIcon={<IconButton onClick={nextMonth}><RightArrowIcon /></IconButton>}
                key={elem.index}
              >
                <div style={{ display: "block" }}>
                  <h1 className={elem.selected ? classes.selectedMonthText : classes.monthText}>{elem.month}</h1>
                  <h1 className={classes.yearText}>{elem.year}</h1>
                </div>
              </Button>
            );
          } else {
            return (
              <Button
                classes={{root: classes.middleButton}}
                key={elem.index}
              >
                <div style={{ display: "block" }}>
                  <h1 className={classes.monthText}>{elem.month}</h1>
                  <h1 className={classes.yearText}>{elem.year}</h1>
                </div>
              </Button>
            );
          }
        })}
      </div>
    );
  else
    return (
      <div>
        If you see this message it means something really bad has happened
      </div>
    )
}
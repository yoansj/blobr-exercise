import React from 'react';
import PropTypes from 'prop-types';

/* Material UI */
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#0071F2"
  },
  selected: {
    color: "#FFFFFF",
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "19px",
  },
  notSelected: {
    color: "#B3B3B3",
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "19px",
  }
}));

export default function SidebarButton(props) {

  const classes = useStyles();

  return (
    <ListItem className={props.selected ? classes.root : []} button>
      <ListItemIcon>
        {props.icon}
      </ListItemIcon>
      <ListItemText classes={{primary: (props.selected ? classes.selected : classes.notSelected)}} primary={props.title} />
    </ListItem>
  )
}

SidebarButton.propTypes = {
  /**
   * Title of the button
   */
  title: PropTypes.string.isRequired,

  /**
   * Icon of the button (supports any Material UI Icon component)
   */
  icon: PropTypes.node,

  /**
   * If the button is selected it backgrounds becomes blue
   */
  selected: PropTypes.bool,

  /**
   * Fired when the user clicks the button
   */
  onClick: PropTypes.func,
}
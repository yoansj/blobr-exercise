import React from 'react';
import PropTypes from 'prop-types';

/* Material UI */
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export default function SidebarButton(props)
{
  return (
    <ListItem button>
      <ListItemIcon>
        {props.icon}
      </ListItemIcon>
      <ListItemText primary={props.title} />
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
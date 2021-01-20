import React from 'react';

/* Material UI */
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';

import SidebarButton from './SidebarButton';
import { GetStartedIcon, TransactionsIcon, StatisticsIcon, SettingsIcon, HelpIcon } from '../Icons';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: 250,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 250,
    background: "#222222",
    color: "#FFFFFF"
  },
  // necessary for content to be below app bar
  toolbar: {...theme.mixins.toolbar, backgroundColor: "#000000", color: "#AAAA"},
  content: {
    flexGrow: 1,
    backgroundColor: "#000000",
    padding: theme.spacing(3),
  },
}));

export default function Sidebar(props) {

  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{ paper: classes.drawerPaper }}
      anchor="left"
    >
      <div className={classes.toolbar}>
        Ecriture en gras avec nom de l'entreprise (?)
        Nom du péon (en vert)
        Bouton du péon
      </div>
      <Divider />
      <List>
        <SidebarButton title="Get started" icon={<GetStartedIcon />} />
        <SidebarButton title="Transactions" icon={<TransactionsIcon />} />
        <SidebarButton title="Statistics" icon={<StatisticsIcon />} />
        <SidebarButton title="Settings" icon={<SettingsIcon />} />
        <SidebarButton title="Help center" icon={<HelpIcon />} />
      </List>
    </Drawer>
  );
}
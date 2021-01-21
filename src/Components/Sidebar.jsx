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
  submenu: {
    ...theme.mixins.toolbar,
    backgroundColor: "#000000",
    width: 250,
    height: 91,
    left: 0,
    top: 0,
  },
  pearsonTitle: {
    color: "#FFFFFF",
    position: "absolute",
    width: "200px",
    height: "24px",
    left: "20px",
    top: "20px",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "20px",
    lineHeight: "24px"
  },
  userName: {
    color: "#4CD964",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 19,
    position: "absolute",
    width: "200px",
    height: "24px",
    left: "20px",
    top: "-90px",
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
      <div className={classes.submenu}>
        <h1 className={classes.pearsonTitle}>Pearson Specter Litt</h1>
        <h1 className={classes.userName}>Mike Ross</h1>
      </div>
      <Divider />
      <List>
        <SidebarButton title="Get started" icon={<GetStartedIcon />} />
        <SidebarButton title="Transactions" icon={<TransactionsIcon />} />
        <SidebarButton selected title="Statistics" icon={<StatisticsIcon />} />
        <SidebarButton title="Settings" icon={<SettingsIcon />} />
        <SidebarButton title="Help center" icon={<HelpIcon />} />
      </List>
    </Drawer>
  );
}
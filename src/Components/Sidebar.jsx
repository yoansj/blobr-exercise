import React from 'react';

/* Material UI */
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';

import SidebarButton from './SidebarButton';
import {
  GetStartedIcon,
  TransactionsIcon,
  StatisticsIcon,
  SettingsIcon,
  HelpIcon,
  UpArrowIcon,
  DownArrowIcon,
  AccountIcon,
  OrganizationIcon,
  LogoutIcon,
} from "../Icons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: 250,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 250,
    background: "#222222",
    color: "#FFFFFF",
  },
  submenu: {
    ...theme.mixins.toolbar,
    backgroundColor: "#000000",
    width: 250,
    height: 91,
    left: 0,
    top: 0,
  },
  openedSubmenu: {
    ...theme.mixins.toolbar,
    backgroundColor: "#333333",
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
    lineHeight: "24px",
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
  profileButton: {
    position: "absolute",
    left: "205px",
    top: "58px",
  },
  profilePopover: {
    width: "210px",
    height: "116px",
    left: "20px",
    top: "79px",
    background: "#FFFFFF",
    border: "1px solid #EBEBEB",
    boxSizing: "border-box",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "8px",
  },
  popoverText: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "19px",
    color: "#000000",
  },
}));

export default function Sidebar(props) {

  const [open, setOpen] = React.useState(false);
  const [anchor, setAnchor] = React.useState(null);

  const classes = useStyles();

  const clickHandler = (event) => {
    setAnchor(event.currentTarget)
    setOpen(true);
  }

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{ paper: classes.drawerPaper }}
      anchor="left"
    >
      <div className={!open ? classes.submenu : classes.openedSubmenu}>
        <h1 className={classes.pearsonTitle}>Pearson Specter Litt</h1>
        <h1 className={classes.userName}>Mike Ross</h1>
        <div className={classes.profileButton}>
          <IconButton onClick={clickHandler}>
            {open ? <UpArrowIcon /> : <DownArrowIcon />}
          </IconButton>
        </div>
        <Popover
          open={open}
          onClose={() => setOpen(prev => !prev)}
          anchorEl={anchor}
          anchorOrigin={{vertical: "bottom", horizontal: "left" }}
          classes={{paper: classes.profilePopover}}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <h1 className={classes.popoverText}><AccountIcon />  Account settings</h1>
          <h1 className={classes.popoverText}><OrganizationIcon />  New organization</h1>
          <h1 className={classes.popoverText}><LogoutIcon />  Log out</h1>
        </Popover>
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
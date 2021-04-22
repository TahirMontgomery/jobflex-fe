import React from "react";
import "./_.scss";
import Logo from "../../assets/Logo.svg";
import DashboardIcon from "@material-ui/icons/Dashboard";
import WorkIcon from "@material-ui/icons/Work";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MessageIcon from "@material-ui/icons/Message";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import SettingsIcon from "@material-ui/icons/Settings";
import { Link, useLocation, useRouteMatch } from "react-router-dom";
import { Button } from "@material-ui/core";
import { ExitToApp } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth0 } from "@auth0/auth0-react";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText("#6095D8"),
    backgroundColor: "#6095D8",
    "&:hover": {
      backgroundColor: "#6095D8",
    },
  },
}));

interface SidebarProps {
  open: Boolean;
  currentRoute: String;
}

function Sidebar({ open, currentRoute }: SidebarProps) {
  const classes = useStyles();
  const { logout } = useAuth0();
  const location = useLocation();
  const match = useRouteMatch();
  //   console.log(location);
  //   console.log(match);

  const links = [
    {
      name: "Dashboard",
      to: "/dashboard",
      img: <DashboardIcon fontSize="large" />,
    },
    {
      name: "Job Board",
      to: "/board",
      img: <WorkIcon fontSize="large" />,
    },
    {
      name: "Applicants",
      to: "/applicants",
      img: <AccountCircleIcon fontSize="large" />,
    },
    {
      name: "Inbox",
      to: "/inbox",
      img: <MessageIcon fontSize="large" />,
    },
    {
      name: "Calendar",
      to: "/calendar",
      img: <CalendarTodayIcon fontSize="large" />,
    },
    //   {
    //     name: "Analytics",
    //     to: "/analytics",
    //   },
    {
      name: "Settings",
      to: "/settings",
      img: <SettingsIcon fontSize="large" />,
    },
  ];

  function checkActive() {
    return !open ? "active" : "";
  }

  return (
    <div className={`sidebar ${checkActive()}`}>
      <div className="sidebar__header">
        <img src={Logo} alt="App Logo" />
        <h3>JobFlex</h3>
      </div>
      <hr />
      <div className="sidebar__body">
        <ul className="sidebar__links">
          {links.map((link) => (
            <li
              key={link.to}
              className={`sidebar__link ${
                currentRoute == link.to ? "active" : ""
              }`}
            >
              {link.img}
              <Link to={link.to}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar__footer">
        <Button
          onClick={() => {
            logout();
          }}
          size="large"
          className={classes.root}
          variant="contained"
        >
          <ExitToApp />
        </Button>
      </div>
    </div>
  );
}

export default Sidebar;

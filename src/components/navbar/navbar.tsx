import React from "react";
import "./navbar.scss";
import {
  TextField,
  InputAdornment,
  Button,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { useAuth0 } from "@auth0/auth0-react";
const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#6095d8",
      },
    },
  },
  icon: {
    color: "#6095d8",
  },
});

function Navbar() {
  const classes = useStyles();
  const { user, logout } = useAuth0();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="navbar">
      <div className="navbar__brand">
        <h3>JobFlex</h3>
      </div>

      <div className="navbar__profile">
        <div>
          <TextField
            className={classes.root}
            size="small"
            id="outlined-basic"
            variant="outlined"
            placeholder="Search..."
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon className={classes.icon} />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <img src={user?.picture} alt="Profile Picture" />
          <ArrowDropDownIcon />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={() => logout()}>Logout</MenuItem>
        </Menu>
        <h3>{user?.name}</h3>
      </div>
    </div>
  );
}

export default Navbar;

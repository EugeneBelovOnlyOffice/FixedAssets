import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { LOGIN_ROUTE } from "../utils/consts";
import { Context } from "../index";
import { useAuthState } from "react-firebase-hooks/auth";
import { IconButton } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import ComputerIcon from '@mui/icons-material/Computer';



const Navbar = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  return (
    <AppBar color="" position="static">
      <Toolbar variant="dense">
        <Grid container spacing={2}>
          <Grid item>
            <IconButton component={Link} to="/home">
              <HomeIcon fontSize="large" color="primary"/>
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton component={Link} to="/list">
              <ComputerIcon fontSize="large" color="primary"/>
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton component={Link} to="/chat">
            <ChatIcon fontSize="large" color="primary"/>
            </IconButton>
          </Grid>
        </Grid>

        {user ? (
          <Button color="primary" onClick={() => auth.signOut()} variant={"outlined"}>
            Exit
          </Button>
        ) : (
          <NavLink to={LOGIN_ROUTE}>
            <Button color="primary" variant={"outlined"}>Login</Button>
          </NavLink>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

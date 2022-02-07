import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { LOGIN_ROUTE } from "../utils/consts";
import { Context } from "../index";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  return (
    <AppBar color={""} position="static">
      <Toolbar variant="dense">
        <Grid container spacing={2}>
          <Grid item>
            <Link to="/login">Login Link</Link>
          </Grid>
          <Grid item>
            <Link style={{ flexGrow: 1 }} to="/chat">
              Chat Link
            </Link>
          </Grid>
        </Grid>

        {user ? (
          <Button onClick={() => auth.signOut()} variant={"outlined"}>
            Exit
          </Button>
        ) : (
          <NavLink to={LOGIN_ROUTE}>
            <Button variant={"outlined"}>Login</Button>
          </NavLink>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

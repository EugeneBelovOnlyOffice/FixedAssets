import React, { useContext } from "react";
import Button from "@mui/material/Button";
import { Context } from "../index";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";

const Login = () => {
  const { auth } = useContext(Context);
  const login = async () => {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);
  };

  return (
    <div>
      <Card sx={{ minWidth: 70, margin: 50, mt: 10 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Fixed Assets
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Lear
          </Typography>
          <Typography variant="body2">
            Please use your google account to login.
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={login}>Google login</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Login;

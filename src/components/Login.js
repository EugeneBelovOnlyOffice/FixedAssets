import React, {useContext} from 'react';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {Context} from "../index"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const Login = () => {
    const {auth} = useContext(Context)
    const login = async () =>{

        const provider = new GoogleAuthProvider();
        const {user}= await signInWithPopup(auth,provider)
        console.log(user)
    }
    return (
        <div>
<Container>
    <Grid container
          style={{height: window.innerHeight - 50}}
          alignItem={"center"}
          justify={"center"}
    >
        <Grid style={{width:400, background:"lightgray"}}
        container
        alignItems={"center"}
        direction={"column"}>
        <Box p={5}>

            <Button onClick={login} variant={"outlined"}>Google login</Button>
        </Box>
    </Grid>
    </Grid>
</Container>
        </div>
    );
};

export default Login;
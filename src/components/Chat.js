import React, { useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../index";
import { Button, Container, Grid, TextField } from "@mui/material";
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useCollectionData } from "react-firebase-hooks/firestore";


const Chat = () => {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState("");


  const sendMessage = async () => {

      const data = {
          name: user,
          email: user.email,
          text: value
      };
      await firestore().collection('messages').add(data)
};

  
    return (
      <Container>
        <Grid
          justify={"center"}
          style={{ height: window.innerHeight - 50, marginTop: 20 }}
        >
          <div
            style={{
              width: "80%",
              height: "60vh",
              border: "1px solid lightgray",
              overflowY: "auto",
            }}
          ></div>
          <Grid
            container
            direction={"column"}
            alignItems={"flex-end"}
            style={{ width: "80%" }}
          >
            <TextField
              style={{ width: "100%" }}
              rowsMax={2}
              variant={"outlined"}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <Button variant={"outlined"} onClick={sendMessage}>
              Send
            </Button>
          </Grid>
        </Grid>
      </Container>
    );
  };

export default Chat;

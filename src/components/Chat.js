import React, { useContext, useState } from "react";
import { Button, Container, Grid, TextField } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, collection, setDoc, getDoc } from "firebase/firestore";
import { Context } from "../index";

const Chat = () => {
  const { auth } = useContext(Context);
  const { firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState("");
  const [fbvalue, setFbValue] = useState("");
  const messagesRef = collection(firestore, "messages");

  const sendMessage = async () => {
    const data = {
      name: user.displayName,
      email: user.email,
      text: value,
    };

    await setDoc(doc(messagesRef, "NN"), data);

    pullMessage();
  };
  const pullMessage = async () => {
    setFbValue(
      (await getDoc(doc(messagesRef, "NN"))).data().text + " Эти данные из базы"
    );
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
        >
          {fbvalue}
        </div>
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

import React, { useContext, useState } from "react";
import { Button, Container, Grid, TextField } from "@mui/material";
import "firebase/firestore";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  getFirestore,
  doc,
  collection,
  setDoc,
  addDoc,
  Timestamp,
  query,
  where,
  getDocs,
  getDoc,
  
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const Chat = () => {
  const firebase = initializeApp({
    apiKey: "AIzaSyA9Dddkvnkci9rwTeuc3XkpZx8zTcoVwPU",
    authDomain: "fa-react-ccb7e.firebaseapp.com",
    projectId: "fa-react-ccb7e",
    storageBucket: "fa-react-ccb7e.appspot.com",
    messagingSenderId: "1006667397553",
    appId: "1:1006667397553:web:a5bca8c4ac072d9d0da590",
    measurementId: "G-VDXT891RQ7",
  });

  const auth = getAuth(firebase);
  const db = getFirestore(firebase);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState("");
  const [fbvalue, setFbValue] = useState("");
  const messagesRef = collection(db, "messages");


  const sendMessage = async () => {
    const data = {
      name: user.displayName,
      email: user.email,
      text: value,
    };

    await setDoc(doc(messagesRef, "NN"), data);
  
    pullMessage()
  };
  const pullMessage = async () => {setFbValue ((await getDoc(doc(messagesRef, "NN"))).data().text + " Эти данные из базы")}
 

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

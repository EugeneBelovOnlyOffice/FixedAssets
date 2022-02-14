import { Paper, Typography, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import React, { useContext, useState } from "react";
import { Button, Grid } from "@mui/material";
import { doc, collection, setDoc } from "firebase/firestore";
import { Context } from "../index";
import SelectItem from "./SelectItem";

const ItemForm = (props) => {
  const { firestore } = useContext(Context);
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [sn, setSn] = useState("");
  const [fa, setFa] = useState("");
  const [owner, setOwner] = useState("");
  const [responsible, setResponsible] = useState("");
  const [dept, setDept] = useState("");
  const [notes, setNotes] = useState("");

  const messagesRef = collection(firestore, "computers");

  //Function sends obj to Firebase

  const sendObj = async () => {
    const data = { name, model, sn, fa, owner, responsible, dept, notes };
    await setDoc(doc(messagesRef, name), data);
  };

  const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };

  const marginTop = { marginTop: 5 };
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an Item
          </Typography>
        </Grid>
        <form>
          <SelectItem />
          <TextField
            onChange={(e) => setName(e.target.value)}
            fullWidth
            label="Name"
            placeholder="Select type"
          />

          <TextField
            onChange={(e) => setModel(e.target.value)}
            fullWidth
            label="Model"
            placeholder="Enter model"
          />
          <TextField
            onChange={(e) => setSn(e.target.value)}
            fullWidth
            label="SN"
            placeholder="Enter SN"
          />
          <TextField
            onChange={(e) => setFa(e.target.value)}
            fullWidth
            label="FA"
            placeholder="Enter inventory number"
          />
          <TextField
            onChange={(e) => setOwner(e.target.value)}
            fullWidth
            label="Owner"
            placeholder="Enter owner"
          />
          <TextField
            onChange={(e) => setResponsible(e.target.value)}
            fullWidth
            label="Responsible"
            placeholder="Select responsible"
          />
          <TextField
            onChange={(e) => setDept(e.target.value)}
            fullWidth
            label="Dept"
            placeholder="Select department"
          />
          <TextField
            onChange={(e) => setNotes(e.target.value)}
            fullWidth
            label="Notes"
            placeholder="Notes"
          />
          <FormControl component="fieldset" style={marginTop}></FormControl>

          <Button onClick={sendObj} variant="outlined" color="primary">
            Submit
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default ItemForm;

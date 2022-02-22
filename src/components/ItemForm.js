import { Paper, Typography, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import React, { useContext, useState } from "react";
import { Button, Grid } from "@mui/material";
import { doc, collection, setDoc } from "firebase/firestore";
import { Context } from "../index";
import SelectItem from "./SelectItem";
import SelectBrandName from "./SelectBrandName";

const ItemForm = () => {
  const { firestore } = useContext(Context);
  const [model, setModel] = useState("");
  const [sn, setSn] = useState("");
  const [fa, setFa] = useState("");
  const [owner, setOwner] = useState("");
  const [responsible, setResponsible] = useState("");
  const [dept, setDept] = useState("");
  const [notes, setNotes] = useState("");


  

//Liffted state from SelectItem

const [selectDevice, setDevice] = React.useState('Desktop');

const handleChangeDevice = (selectDevice) => {
  setDevice(selectDevice);
};

//Liffted state from SelecBrandName
const [selectBrand, setBrand] = React.useState('Other');

const handleSelectBrand = (selectBrand) => {
  setBrand(selectBrand);
};

 //Function sends obj to Firebase

const messagesRef = collection(firestore, selectDevice);

  //Function sends obj to Firebase

  const sendObj = async () => {
    const data = { selectBrand, model,sn, fa, owner, responsible, dept, notes };
    await setDoc(doc(messagesRef, sn), data);
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
          <SelectItem handleChangeDevice = {handleChangeDevice.bind(this)} selectDevice={{selectDevice}}/>
          <SelectBrandName handleSelectBrand = {handleSelectBrand.bind(this)} selectBrand={{selectBrand}}/>
          

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

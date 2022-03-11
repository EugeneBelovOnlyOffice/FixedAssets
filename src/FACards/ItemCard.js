import React, {useContext, useState} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Paper, Typography, TextField } from "@mui/material";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Context } from "../index"
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  setDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";

import ItemForm from "../components/ItemForm";

const ItemCard = ({
  dept,
  fa,
  model,
  notes,
  owner,
  responsible,
  selectBrand,
  sn,
  selectDevice
}) => {

  const [chNotes, setNt] = useState(notes);

  const { firestore } = useContext(Context);
 
  const docRef = doc(firestore, selectDevice, sn);
  notes=chNotes
  const data = { selectBrand, model,sn, fa, owner, responsible, dept, notes};

  const pushDoc = async () => {
    const docSnap = await setDoc(docRef,data);
  console.log(docSnap.data())

  };




  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardContent>
          <Typography>Department: {dept}</Typography>
          <Typography>Inv: {fa}</Typography>
          <Typography>Model: {model}</Typography>
          <Typography>Serial: {sn}</Typography>
          <Typography>Owner: {owner}</Typography>
          <Typography>Issuer: {responsible}</Typography>
          <Typography>Brand: {selectBrand}</Typography>
          <Typography>Notes: {chNotes}</Typography>
          <TextField value={chNotes}  onChange={(e) => setNt(e.target.value)}
            fullWidth
            label="notes"></TextField>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={()=>pushDoc()} size="small" color="primary">
          Save
        </Button>
      </CardActions>
    </Card>
  );
};

export default ItemCard;

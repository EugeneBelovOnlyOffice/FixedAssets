import React, {useContext} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Context } from "../index"
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";

const ItemCard = ({
  dept,
  fa,
  model,
  notes,
  owner,
  responsible,
  selectBrand,
  key,
  sn,
  selectDevice
}) => {

  const { firestore } = useContext(Context);
 
  const docRef = doc(firestore, selectDevice, sn);

  const pullDoc = async () => {
    const docSnap = await getDoc(docRef);
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
          <Typography>Notes: {notes}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={()=>pullDoc()} size="small" color="primary">
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};

export default ItemCard;

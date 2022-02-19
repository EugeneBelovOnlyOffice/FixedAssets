import React, { useContext, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { IconButton, Button } from "@mui/material";
import { Link } from "react-router-dom";
import DataTable from "./DataTable";
import { collection, query, where, getDocs,getDoc,doc, onSnapshot } from "firebase/firestore";
import { Context } from "../index";

const List = () => {
  const { firestore } = useContext(Context);
  const q = query(collection(firestore, "Laptop"), where('owner','==','Eugene Belov'));


  const pullCollection = async () =>{
  const querySnapshot = await  getDocs(q);

querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});}


  return (
    <>
      <IconButton component={Link} to="/add" color="inherit">
        <AddIcon fontSize="large" color="primary" />
      </IconButton>
      <Button onClick={()=>pullCollection()} variant="outlined" color="primary">
            Pull
          </Button>
   
    </>
  );
};

export default List;

import React, { useContext, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { IconButton, Button } from "@mui/material";
import { Link } from "react-router-dom";
import DataTable from "./DataTable";
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { Context } from "../index";
import SelectItem from "./SelectItem";
import ItemCard from "../FACards/ItemCard";

const List = () => {

  
//Liffted state from SelectItem

const [selectDevice, setDevice] = React.useState('Desktop');

const handleChangeDevice = (selectDevice) => {
  setDevice(selectDevice);
};
 
  const { firestore } = useContext(Context);
  const q = query(
    collection(firestore, selectDevice)
  );
  var items =[]

  const pullCollection = async () => {
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
    
    items.push(doc.data())
 
    });
    console.log(items);
    items = []
    
 
  };

  const array =[{id : 1, sn : 1234},{id : 2, sn : 456},{id : 3, sn : 9999}]

  return (
    <>
      <IconButton component={Link} to="/add" color="inherit">
        <AddIcon fontSize="large" color="primary" />
      </IconButton>
      <SelectItem handleChangeDevice = {handleChangeDevice.bind(this)} selectDevice={{selectDevice}}/>
    
      <Button
        onClick={() => pullCollection()}
        variant="outlined"
        color="primary"
      >
        Pull
      </Button>
      {array.map((item) =><ItemCard device={item.sn}/>)}
    
    </>
  );
};

export default List;

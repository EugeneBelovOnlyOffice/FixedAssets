import React, { useContext, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { IconButton, Button, TextField } from "@mui/material";
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
import { async } from "@firebase/util";

const List = () => {
  //Liffted state from SelectItem

  const [selectDevice, setDevice] = React.useState("Desktop");
  const [firebaseArray, setfirebaseArray] = useState([]);


  const handleChangeDevice = (selectDevice) => {
    setDevice(selectDevice);
  };

  const { firestore } = useContext(Context);
  const col = collection(firestore, selectDevice);
 // const q = query(col, where("fa", "==", param));

  const pullCollection = async () => {
    const q = query(col);
    const querySnapshot = await getDocs(q);
    const items = [];
    querySnapshot.forEach((doc) => {
      items.push(doc.data());
    });
    setfirebaseArray(items);

    console.log(firebaseArray);
 
  };

  const pullOnChange = async (event) => {   

console.log(event)
const q = query(col, where("fa", "==", event));
const querySnapshot = await getDocs(q);
const items = [];
querySnapshot.forEach((doc) => {
  items.push(doc.data());
});
setfirebaseArray(items);

console.log(firebaseArray);
 
  }


  return (
    <>
      <IconButton component={Link} to="/add" color="inherit">
        <AddIcon fontSize="large" color="primary" />
      </IconButton>
      <SelectItem
        handleChangeDevice={handleChangeDevice.bind(this)}
        selectDevice={{ selectDevice }}
      />
      <TextField onChange={(e)=>pullOnChange(e.target.value)} fullWidth label="Search"></TextField>
      <Button
        onClick={() => pullCollection()}
        variant="outlined"
        color="primary"
      >
        Pull
      </Button>
      {firebaseArray.map((item) => (
        <ItemCard
          key={item.sn}
          sn={item.sn}
          dept={item.dept}
          fa={item.fa}
          model={item.model}
          notes={item.notes}
          owner={item.owner}
          responsible={item.responsible}
          selectBrand={item.selectBrand}
          selectDevice={selectDevice}
        />
      ))}
    </>
  );
};

export default List;

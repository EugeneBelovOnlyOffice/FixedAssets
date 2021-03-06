import React, { useContext, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { IconButton, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
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
import SelectOwner from "./SelectOwner";
import ItemCard from "../FACards/ItemCard";
import { async } from "@firebase/util";
import { CSVLink, CSVDownload } from "react-csv";

const List = () => {
  //Liffted state from SelectItem

  const [selectDevice, setDevice] = React.useState("Desktop");
  const [firebaseArray, setfirebaseArray] = useState([]);


  const handleChangeDevice = (selectDevice) => {
    setDevice(selectDevice);
  };
//Liffted state from SelectOwner
const [selectOwner, setOwner] = React.useState("");
const handleChangeOwner = (selectOwner) => {
  setOwner(selectOwner);
  console.log(selectOwner)
};

  const { firestore } = useContext(Context);
  const col = collection(firestore, selectDevice);


  const pullCollection = async () => {
    const q = query(col, where("owner", "==", selectOwner));
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

  const headers = [

    { label: "Department", key: "dept" },
    { label: "Responsible", key: "responsible" },
    { label: "Owner", key: "owner" },
    { label: "Serial", key: "sn" },
    { label: "Model", key: "model" },
    { label: "Brand", key: "selectBrand" },
    { label: "Inventory number", key: "fa" },
    { label: "Notes", key: "notes" },
  ]


  return (
    <>
      <IconButton component={Link} to="/add" color="inherit">
        <AddIcon fontSize="large" color="primary" />
      </IconButton>
      <SelectItem
        handleChangeDevice={handleChangeDevice.bind(this)}
        selectDevice={{ selectDevice }}
      />
      <SelectOwner
        handleChangeOwner={handleChangeOwner.bind(this)}
        selectOwner={{ selectOwner }}
      />
      <TextField onChange={(e)=>pullOnChange(e.target.value)} fullWidth label="Search"></TextField>
      <Button
        onClick={() => pullCollection()}
        variant="outlined"
        color="primary"
      >
        Pull
      </Button>
      <CSVLink data={firebaseArray} filename={'download.csv'} headers={headers}>Download</CSVLink>;
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

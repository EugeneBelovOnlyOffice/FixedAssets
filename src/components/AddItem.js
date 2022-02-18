import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";



const AddItem = ({ handleAddNewDevice },{addNewDevice}) => {
  return (
    <IconButton onClick={()=>handleAddNewDevice()} color="inherit">
      <AddIcon  fontSize="large" color="primary" />
    </IconButton>

  );
};

export default AddItem;

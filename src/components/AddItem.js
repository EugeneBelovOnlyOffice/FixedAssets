import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
import ItemForm from "./ItemForm";


const AddItem = () => {
  return (
    <IconButton color="inherit">
      <AddIcon fontSize="large" color="primary" />
    </IconButton>

  );
};

export default AddItem;

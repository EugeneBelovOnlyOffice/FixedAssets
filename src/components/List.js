import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import DataTable from "./DataTable";

const List = () => {
  return (
    <>
      <IconButton component={Link} to="/add" color="inherit">
        <AddIcon fontSize="large" color="primary" />
      </IconButton>
      <DataTable/>
    </>
  );
};

export default List;

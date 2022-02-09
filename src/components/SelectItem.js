import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AddItem from "./AddItem";

export default function SelectItem() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    
    <Box sx={{ minWidth: 120, mt: 1 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Device</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
         
          <MenuItem value={80}>All</MenuItem>
          <MenuItem value={10}>Desktop</MenuItem>
          <MenuItem value={20}>Laptop</MenuItem>
          <MenuItem value={30}>MFU</MenuItem>
          <MenuItem value={40}>Network Device</MenuItem>
          <MenuItem value={50}>Printer</MenuItem>
          <MenuItem value={60}>Server</MenuItem>
          <MenuItem value={70}>UPS</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

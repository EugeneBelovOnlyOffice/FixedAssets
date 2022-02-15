import React, {createContext} from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AddItem from "./AddItem";
import App from "../App";
import ItemForm from "./ItemForm";



export default function SelectItem(props) {
const {handleChange} = props.handleChange
const {selectDevice} = props.selectDevice
  return (
  
<>


    <Box sx={{ minWidth: 120, mt: 1 }}>
    
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Device</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectDevice}
          label="Device"
          onChange={handleChange}
        >
          <MenuItem value='All'>All</MenuItem>
  
          <MenuItem value='Desktop'>Desktop</MenuItem>
          <MenuItem value='Laptop'>Laptop</MenuItem>
          <MenuItem value={30}>MFU</MenuItem>
          <MenuItem value={40}>Network Device</MenuItem>
          <MenuItem value={50}>Printer</MenuItem>
          <MenuItem value={90}>Server</MenuItem>
          <MenuItem value={70}>UPS</MenuItem>
        </Select>
      </FormControl>
    </Box>

</>

  
  );
}

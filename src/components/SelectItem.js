import React, {createContext} from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AddItem from "./AddItem";
import App from "../App";
import ItemForm from "./ItemForm";



export default function SelectItem({handleChange},{selectDevice}) {

  const [value, setValue] = React.useState();

  return (
  
<>


    <Box sx={{ minWidth: 120, mt: 1 }}>
    
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Device</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Device"
          onChange={(e) => handleChange(e.target.value)}
        >
          <MenuItem value='All'>All</MenuItem>
          <MenuItem value='Desktop'>Desktop</MenuItem>
          <MenuItem value='Laptop'>Laptop</MenuItem>
          <MenuItem value='MFU'>MFU</MenuItem>
          <MenuItem value='Network Device'>Network Device</MenuItem>
          <MenuItem value='Printer'>Printer</MenuItem>
          <MenuItem value='Server'>Server</MenuItem>
          <MenuItem value='UPS'>UPS</MenuItem>
        </Select>
      </FormControl>
    </Box>

</>

  
  );
}

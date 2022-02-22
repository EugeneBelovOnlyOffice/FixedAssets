import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectItem({ handleChangeDevice },{selectDevice}) {


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
            onChange={(e) => handleChangeDevice(e.target.value)}
          >
           
            <MenuItem value="Desktop">Desktop</MenuItem>
            <MenuItem value="Laptop">Laptop</MenuItem>
            <MenuItem value="MFU">MFU</MenuItem>
            <MenuItem value="Network Device">Network Device</MenuItem>
            <MenuItem value="Printer">Printer</MenuItem>
            <MenuItem value="Server">Server</MenuItem>
            <MenuItem value="UPS">UPS</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
}

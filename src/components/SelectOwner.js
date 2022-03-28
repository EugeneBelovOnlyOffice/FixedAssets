import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectOwner({ handleChangeOwner },{selectOwner}) {


  return (
    <>
      <Box sx={{ minWidth: 120, mt: 1 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Owner</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectOwner}
            label="Owner"
            onChange={(e) => handleChangeOwner(e.target.value)}
          >
           
            <MenuItem value="Popov">Popov</MenuItem>
            <MenuItem value="Belov">Belov</MenuItem>
            <MenuItem value="Barinow">Barinow</MenuItem>
            <MenuItem value="Sykin">Sykin</MenuItem>
            <MenuItem value="Kabalinskaya">Kabalinskaya</MenuItem>
            <MenuItem value="Ryabinin">Ryabinin</MenuItem>
            <MenuItem value="Pervushkin">Pervushkin</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
}

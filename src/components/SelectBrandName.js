import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectBrandName({ handleSelectBrand },{selectBrand}) {
    const [value, setValue] = React.useState();
  
    return (
      <>
        <Box sx={{ minWidth: 120, mt: 1 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Brand</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={value}
              label="Brand"
              onChange={(e) => handleSelectBrand(e.target.value)}
            >
              <MenuItem value="Other">Other</MenuItem>
              <MenuItem value="Lenovo">Lenovo</MenuItem>
              <MenuItem value="DELL">DELL</MenuItem>
              <MenuItem value="HP">HP</MenuItem>
              <MenuItem value="IBM">IBM</MenuItem>
              <MenuItem value="APC">APC</MenuItem>
              <MenuItem value="Samsung">Samsung</MenuItem>
              <MenuItem value="Xiaomi">Xiaomi</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </>
    );
  }
  
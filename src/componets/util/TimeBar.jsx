import React from 'react';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Box} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { timeBarOptions as options } from '../../assert/data/constants';


function TimeBar({ selectedIndex, onMenuItemClick }) {
 
  
  return (
    <Box display="flex"  alignItems="center" alignContent="flex-end">
      <Box>Time horizon</Box>
      <FormControl sx={{ m: 1, minWidth: 80}} size="small">
        <Select
          value={selectedIndex}
          autoWidth
          onChange={onMenuItemClick}
          IconComponent={() => <KeyboardArrowDownIcon />}
        >
          {options.map((option, index) => (
            <MenuItem key={option} value={index}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};


export default TimeBar
import React from 'react'
import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from '../../theme';

function DashbordHeader(props) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
         <Box px={3} pt={3} pb={1} sx ={{borderBottom: 2, borderColor: colors.white[100]}}>
            <Typography
            variant="h3"
            color={colors.white[100]}
            fontWeight="bold"
            sx={{ m: "0 0 5px 0" }}
            >
            {props.title}
            </Typography>
  
         </Box>
  
  )
}

export default DashbordHeader
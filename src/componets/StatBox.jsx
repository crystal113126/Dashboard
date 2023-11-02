
import React from 'react';
import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material" ;
import { tokens } from "../theme";


const StatBox = (props) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const increaseValue = parseFloat(props.increase.replace(/%/, ''));
     
 
    // Determine the color based on the sign of 'increase'
    const increaseColor = increaseValue  >= 0 ? colors.greenAccent[500] : colors.redAccent[500]; // Define your red color here
 
    return (
        <Box width="100%" ml={1} mr={1} p={2} backgroundColor={colors.primary[400]}>
            <Box>
                <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{ color: colors.white[100] }}
                >
                    {props.title}
                </Typography>
            </Box>

            <Box display="flex" justifyContent="space-between" mt="2px">
                <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
                </Typography>
                <Typography
                    variant="h4"
                    fontStyle="italic"
                    sx={{ color: increaseColor }} // Set the color based on increase
                >
                    {props.increase}
                </Typography>
            </Box>
            <Box display="flex" justifyContent="flex-end">
                <Typography variant="h6" sx={{ color: colors.grey[300], alignContent: 'right' }}>
                    {props.subtitle}
                </Typography>
            </Box>
        </Box>
    )
}

export default StatBox;

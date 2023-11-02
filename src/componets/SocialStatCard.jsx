
import React from 'react';
import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material" ;
import { tokens } from '../theme';

const SocialStatCard = (props) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const increaseValue = parseFloat(props.increase.replace(/%/, ''));
    const increaseColor = increaseValue >= 0 ? colors.greenAccent[500] : colors.redAccent[500]; // Define your red color here
 
    return (
        <Box width="100%"  backgroundColor={colors.primary[400]}>
           <Box sx ={{borderBottom: 1, borderColor: colors.grey[500]}}>
            <Box ml={2} mt={2}  >
                <Typography
                variant="h5"
                fontWeight="bold"
                sx={{ color: colors.white[100] }}
                >
                {props.title}
                </Typography>
                <Typography 
                variant="h3" 
                sx={{ color: colors.white[100],  
                alignContent:'right'}}>
                {props.number}
                </Typography> 
            </Box>
            <Box display='flex' gap ={1} ml={3} mb={3}>
                <Typography
                variant="h6"
                sx={{ color: increaseColor }}
                >
                {props.increase}
                </Typography>
                <Typography
                variant="h6"
                sx={{ color: colors.grey[500] }}
                >
                {props.time}
                </Typography>
            </Box>
            </Box> 
            <Box height="80%" m="-50 0 0 0">
            </Box>
        
        </Box>
    )
}



export default SocialStatCard;
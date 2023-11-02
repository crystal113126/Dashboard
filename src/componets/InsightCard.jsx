import React from 'react';
import { useTheme, Box,Typography  } from '@mui/material';
import { tokens } from '../theme'; // Adjust the path as needed
import BarChartGender from './chart/BarChart';




function InsightCard(props) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box ml = {1} mr={3} mt={2} gridColumn="span 6" alignContent="center" backgroundColor={colors.primary[400]}>
     <Box m= {2} sx ={{borderBottom: 1, borderColor: colors.grey[500]}}>
     <Box
                mb={2}
                p="0 30px"
                display="flex "
                justifyContent="space-between"
                alignItems="center"
                >
                <Typography
                variant="h4"
                fontWeight="bold"
                sx={{ color: colors.white[100] }}
                >
                {props.title}
                </Typography>
            </Box>
        </Box>

        <Box height="250px" >
        <BarChartGender data={props.data} keys = {props.keys} />
      </Box>
    </Box>
  );
}

export default InsightCard;

import React from 'react';
import { useTheme, Box } from '@mui/material';
import { tokens } from '../theme'; // Adjust the path as needed
import LineChartTest from './chart/LineChartArea'; // Adjust the path as needed
import SocialStatCard from './SocialStatCard';
function HealthStatCard({ title, number, increase, time, data, days }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box ml={1} mr={3} gridColumn="span 6" backgroundColor={colors.primary[400]}>
      <SocialStatCard
            title={title}
            number={number}
            increase={increase}
            time={time}/>
      <Box height="250px" m="-20px 0 0 0">
        <LineChartTest data={data} days={days} />
      </Box>
    </Box>
  );
}

export default HealthStatCard;

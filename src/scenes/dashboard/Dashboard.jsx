import React, { useEffect, useState } from 'react'
import { Box, useTheme, Typography} from "@mui/material";
import { tokens } from '../../theme';
import DashbordHeader from '../../componets/global/DashboardHeader';
import DashboardNav from '../../componets/nav/DashboardNav';
import TimeBar from '../../componets/util/TimeBar';
import StatBox from '../../componets/StatBox';
import { totalTitle } from '../../assert/data/mockData'
import { useTimeBar } from '../../TimeBarContent';
import { subtitles } from '../../assert/data/constants';
import { fetchFromAPI } from '../../componets/util/fetchFromAPI';
import { daysSelect } from '../../assert/data/constants';
import Loader from '../../componets/util/loader';


function Dashboard() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const { selectedIndex, handleMenuItemClick } = useTimeBar ();
    const subt = subtitles[selectedIndex];
    const days = daysSelect[selectedIndex];
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const userId = "test_id"; // when have id need change here; 
    // fetchdatafrom API

    useEffect(() => {
        const url = `difference?userId=${userId}&days=${days}`;

        fetchFromAPI(url)
            .then(data => {
                // Handle the response here (data is already parsed JSON)
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [userId, days, selectedIndex]);
     // remove when the url works;
  
return (
    <Box mr={2}>
        <DashbordHeader title="Brand Dashboard"/>
        <DashboardNav />
        <Box display="flex" justifyContent="flex-end" m={2}>
        <TimeBar selectedIndex={selectedIndex} onMenuItemClick={handleMenuItemClick} />
        </Box>

        {/* GRID & CHARTS */}
        
        <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
        ml={2} mr={2}
        > 
         {loading? (<Loader/>) :(Object.keys(data).map((key, index) => (
                    <Box
                        gridColumn={`span ${3}`}
                        key={index}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <StatBox
                            title={totalTitle[index]}
                            increase={(data[key] * 100).toFixed(2) + '%'}
                            subtitle={subt}
                        />
                    </Box>
                ))
            )} 
        {/* ROW 2 */}
        <Box
            gridColumn="span 6 "
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            ml={1} mr={1}
            >
                <Box
                mt="25px"
                p="0 30px"
                display="flex "
                justifyContent="space-between"
                alignItems="center"
                >
                <Typography
                    variant="h5"
                    fontWeight="600"
                    color={colors.grey[100]}
                >
                    Social followers vs sales
                </Typography>
                </Box>

                <Box height="250px" m="-20px 0 0 0">
              
                </Box>
            </Box>

            <Box
            gridColumn="span 6"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            ml={1} mr={1}
            >
                <Box
                mt="25px"
                p="0 30px"
                display="flex "
                justifyContent="space-between"
                alignItems="center"
                >
                <Typography
                    variant="h5"
                    fontWeight="600"
                    color={colors.grey[100]}
                >
                    Social followers vs sales
                </Typography>
                </Box>
                <Box height="250px" m="-20px 0 0 0">
               
                </Box>

            </Box>

            {/*Row 3*/}
            <Box
          gridColumn="span 12"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
          m={1}
        >
          <Typography variant="h5" fontWeight="600">
            Compare
          </Typography>
        
            <Box height="250px" m="-20px 0 0 0">
           
            </Box>
            </Box>



        </Box>
       

         
    </Box>
    

    )

}

export default Dashboard;
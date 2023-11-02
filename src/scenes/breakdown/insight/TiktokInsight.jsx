import React, { useState, useEffect } from 'react';
import { Box, useTheme, Button, Typography} from "@mui/material";
import { tokens } from '../../../theme';
import DashbordHeader from '../../../componets/global/DashboardHeader';
import BreakNav from '../../../componets/nav/BreakNav';

import { useTimeBar } from '../../../TimeBarContent';
import TimeBar from '../../../componets/util/TimeBar';
import { daysSelect, subtitles, navItemsInsight as navItems, keys, ageKeys,twoToThreeLetterCodeMapping } from '../../../assert/data/constants';
import { fetchFromAPI } from '../../../componets/util/fetchFromAPI';
import { createBarData, createNivoData, formatDataForNivo , createGeographyData} from '../../../componets/formatdata/FormatData';
import HealthStatCard from '../../../componets/HealthStatCard';
import Loader from '../../../componets/util/loader';
import InsightCard from '../../../componets/InsightCard';
import GeoCard from '../../../componets/GeoCard';

function TiktokInsight() {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const { selectedIndex, handleMenuItemClick } = useTimeBar();
    const days = daysSelect[selectedIndex];
    const time = subtitles[selectedIndex];
  
    const [tkData, setTkData] = useState(null);
    const userId = "test_id";
    const [loading, setLoading] = useState(true);
   // fetchdatafrom API
    useEffect(() => {
        const url = `audienceInsights?userId=${userId}&days=${days}`;
          fetchFromAPI(url)
          .then(data => {
              setTkData(data.TikTok);
              setLoading(false);
              console.log(data.TikTok);
          })
          .catch(error => {
              console.error('Error:', error);
          });
    }, [userId, days, selectedIndex]);

    let nivoDataFollowers = [];
      let nivoDataNewFollowers = [];
      let formatGenderData  = [];
      let formatAgeData = [];
      let formatGeoData = [];

      if (!loading) 
      {
       nivoDataFollowers = createNivoData(tkData, "follower", "TikTok");
       nivoDataNewFollowers = createNivoData(tkData, "newfollower", "TikTok");
       formatAgeData = formatDataForNivo(createBarData(tkData,["TikTok"],"age"), ageKeys);
       formatGenderData = formatDataForNivo(createBarData(tkData,["TikTok"],"gender"), keys);
       formatGeoData = createGeographyData(createBarData(tkData,["TikTok"],"country" )[0], twoToThreeLetterCodeMapping);
      }


return (
      <Box>
      <DashbordHeader title="Brand Dashboard"/>
      <Box  display="flex" justifyContent="flex-end" mr="100px">
         <Button              
            variant="h6"
            color="primary"
            sx ={{borderBottom: 2, borderColor: colors.purple[500]}}
 >
    <Typography variant="h6" fontWeight="bold" >
              Social Channel Breakdown
              </Typography>
          </Button>
     </Box>
      <BreakNav navItems = {navItems }/>
      <Box display="flex" justifyContent="flex-end">
      <TimeBar selectedIndex={selectedIndex} onMenuItemClick={handleMenuItemClick} />
  
      </Box>
      {loading ? (<Loader/>) : (
       <Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="400px"
            gap="10px"
            ml={2} mr={2}>


           <HealthStatCard 
            title="Follower"
            number="?"
            increase="?"//{totalReach.toString()}
            time={time}
            data={nivoDataFollowers}
            days = {days}
           />

           <HealthStatCard 
            title="New Follower"
            number= "?"
            increase="?" //{totalReach.toString()}
            time={time}
            data={nivoDataNewFollowers}
            days = {days}
           />
           <InsightCard
               title = "Gender"
               data  = {formatGenderData}
               keys = {keys}
               />
           <InsightCard
               title = "Age"
               data = {formatAgeData}
               keys = {ageKeys}
               />
           <GeoCard 
           title = "Locaiton"
           data = {formatGeoData}/>
           
           </Box>
        )}
      </Box>
)}


export default TiktokInsight
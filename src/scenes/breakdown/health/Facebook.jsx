import React, { useState, useEffect } from 'react';
import { Box, useTheme, Button, Typography} from "@mui/material";
import { tokens } from '../../../theme';
import DashbordHeader from '../../../componets/global/DashboardHeader';
import BreakNav from '../../../componets/nav/BreakNav';

import { useTimeBar } from '../../../TimeBarContent';
import TimeBar from '../../../componets/util/TimeBar';
import { daysSelect, subtitles, navItemsHealth as navItems  } from '../../../assert/data/constants';
import { fetchFromAPI } from '../../../componets/util/fetchFromAPI';
import { createNivoData } from '../../../componets/formatdata/FormatData';
import HealthStatCard from '../../../componets/HealthStatCard';
import Loader from '../../../componets/util/loader';



function Facebook() {
      const theme = useTheme();
      const colors = tokens(theme.palette.mode);
      const { selectedIndex, handleMenuItemClick } = useTimeBar();
      const days = daysSelect[selectedIndex];
     const time = subtitles[selectedIndex];
      const [fbData, setFbData] = useState(null);
      const userId = "test_id";
      const [loading, setLoading] = useState(true);
     // fetchdatafrom API
      useEffect(() => {
            const url = `brandHealthTracker?userId=${userId}&days=${days}`;
            fetchFromAPI(url)
            .then(data => {
                setFbData(data.Facebook);
                setLoading(false);
                console.log(data.Facebook);
            })
            .catch(error => {
                console.error('Error:', error);
            });
      }, [userId, days, selectedIndex]);

      let nivoDataReach = [];
      let nivoDataLike = [];
      let nivoDataProfile = [];
      let nivoDataComments = [];
      let nivoDataVideoViews = [];
      let nivoDataShares = [];

      if (!loading) 
      {
       nivoDataReach = createNivoData(fbData, "reach", 'Facebook');
       nivoDataLike = createNivoData(fbData, "likes", 'Facebook');
       nivoDataProfile = createNivoData(fbData, "profileVisits", 'Facebook');
       nivoDataComments = createNivoData(fbData, "comments", 'Facebook');
       nivoDataVideoViews = createNivoData(fbData, "videoViews", 'Facebook');
       nivoDataShares = createNivoData(fbData, "shares", 'Facebook');
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
        <BreakNav navItems={navItems}/>
        <Box display="flex" justifyContent="flex-end">
        <TimeBar selectedIndex={selectedIndex} onMenuItemClick={handleMenuItemClick} />
    
        </Box>

         {loading ? (<Loader/>) : (
        
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="400px"
          gap="10px"
          ml={2} mr={2}
        > 
        <HealthStatCard
        title = "Reach"
        number = "?"
        increase= "?"
        time ={time}
        data = {nivoDataReach}
        days = {days}
         />


         
           <HealthStatCard
            title="Likes"
            number="?"
            increase="?"//{totalLikes.toString()}
            time={time}
            data={nivoDataLike}
            days = {days}
          />
          <HealthStatCard
            title="Profile Visits"
            number="?"
            increase="?"//{totalProfile.toString()}
            time={time}
            data={nivoDataProfile}
            days = {days}
          />
  
            <HealthStatCard
            title="Comments"
            number="?"
            increase="?" //{totalComments.toString()}
            time={time}
            data={nivoDataComments}
            days = {days}
          />
           <HealthStatCard
            title="Video Views"
            number="?"
            increase= "?"//{totalViews.toString()}
            time={time}
            data={nivoDataVideoViews}
            days = {days}
          />
           <HealthStatCard
            title="Shares"
            number="?"
            increase="?"//{totalShares.toString()}
            time={time}
            data={nivoDataShares}
            days = {days}
          /> 
        </Box>
        )} 
         
  
    
    </Box>



  )
}
export default Facebook;
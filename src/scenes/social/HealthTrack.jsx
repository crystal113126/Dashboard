import React, { useState, useEffect } from 'react';
import { Box, useTheme, Button } from '@mui/material';
import { tokens } from '../../theme';
import DashbordHeader from '../../componets/global/DashboardHeader';
import DashboardNav from '../../componets/nav/DashboardNav';
import SocialNav from '../../componets/nav/SocialNav';
import TimeBar from '../../componets/util/TimeBar';
import { useTimeBar } from '../../TimeBarContent';
import { Link } from 'react-router-dom';
import { healthTrakerKeywords } from '../../assert/data/constants';
import Keyword from '../../componets/Keyword';
import { subtitles,  daysSelect } from '../../assert/data/constants';
import HealthStatCard from '../../componets/HealthStatCard';
import { fetchFromAPI } from '../../componets/util/fetchFromAPI';
import Loader from '../../componets/util/loader';
import { createNivoDataTotal } from '../../componets/formatdata/FormatData';


function HealthTrack() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { selectedIndex, handleMenuItemClick } = useTimeBar();
  const time = subtitles[selectedIndex];
 
  const days = daysSelect[selectedIndex];
  const userId = "test_id"; // need change based on usr id;
 const [loading, setLoading] = useState(true);
 const [healthData, setHealthData] = useState(null);

 // fetchdatafrom API
    useEffect(() => {
        const url = `brandHealthTracker?userId=${userId}&days=${days}`;
        fetchFromAPI(url)
        .then(data => {
            // Handle the response here (data is already parsed JSON)
            setHealthData(data);
            setLoading(false);
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}, [userId, days, selectedIndex]);

const data = healthData;


  let totalReach = 0;
  let totalLikes = 0;
  let totalProfile = 0;
  let totalComments = 0;
  let totalViews = 0;
  let totalShares = 0;

  let nivoDataReach = [];
  let nivoDataLike = [];
  let nivoDataProfile = [];
  let nivoDataComments = [];
  let nivoDataVideoViews = [];
  let nivoDataShares = [];
  

  if (!loading) 
  {
   nivoDataReach = createNivoDataTotal(data, ["Facebook", "TikTok"],'reach');
   nivoDataLike = createNivoDataTotal(data, ["Facebook", "TikTok"],"likes");
   nivoDataProfile = createNivoDataTotal(data,["Facebook", "TikTok"], "profileVisits");
   nivoDataComments = createNivoDataTotal(data,["Facebook", "TikTok"], "comments");
   nivoDataVideoViews = createNivoDataTotal(data, ["Facebook", "TikTok"],"videoViews");
   nivoDataShares = createNivoDataTotal(data, ["Facebook", "TikTok"],"shares");
   const totalData = data.Total;


  if (totalData.length > 0) {
    for (const entry of totalData) {
      totalReach += entry.reach;
      totalLikes += entry.likes;
      totalProfile += entry.profileVisits;
      totalComments += entry.comments;
      totalViews += entry.videoViews;
      totalShares += entry.shares;
    }
}
}

  return (
    <Box>
      <DashbordHeader title="Brand Dashboard" />
      <DashboardNav />

      <Box mr={2} display="flex" justifyContent="space-between" alignItems="flex-start">
        <Box>
          <SocialNav />
          <Box display="flex" gap={1} ml={2} mb={2}>
            {healthTrakerKeywords.map((keyword, index) => (
              <Keyword key={index} word={keyword} />
            ))}
          </Box>
        </Box>
        <Box mt={2}>
          <TimeBar selectedIndex={selectedIndex} onMenuItemClick={handleMenuItemClick} />
        </Box>
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
          title="Reach"
          number="?"
          increase={totalReach.toString()}
          time={time}
          data={nivoDataReach}
          days = {days}
        />

         <HealthStatCard
          title="Likes"
          number="?"
          increase={totalLikes.toString()}
          time={time}
          data={nivoDataLike}
          days = {days}
        />
        <HealthStatCard
          title="Profile Visits"
          number="?"
          increase={totalProfile.toString()}
          time={time}
          data={nivoDataProfile}
          days = {days}
        />

          <HealthStatCard
          title="Comments"
          number="?"
          increase={totalComments.toString()}
          time={time}
          data={nivoDataComments}
          days = {days}
        />
         <HealthStatCard
          title="Video Views"
          number="234"
          increase={totalViews.toString()}
          time={time}
          data={nivoDataVideoViews}
          days = {days}
        />
         <HealthStatCard
          title="Shares"
          number="?"
          increase={totalShares.toString()}
          time={time}
          data={nivoDataShares}
          days = {days}
        /> 

        
      </Box>
      )}

    

      <Box display="flex" justifyContent="flex-end" mr={5}>
        <Link style={{ textDecoration: 'none' }} to="/dashboard/social/health/facebook">
          <Button variant="contained" color="primary" sx={{ borderBottom: 1, borderColor: colors.purple[500] }}>
            Social Channel Breakdown
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default HealthTrack;

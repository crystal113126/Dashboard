import React, {useState, useEffect} from 'react';
import { Box, useTheme, Button} from "@mui/material";
import { tokens } from '../../theme';
import DashbordHeader from '../../componets/global/DashboardHeader';
import DashboardNav from '../../componets/nav/DashboardNav';
import SocialNav from '../../componets/nav/SocialNav';
import TimeBar from '../../componets/util/TimeBar';
import { useTimeBar } from '../../TimeBarContent';
import { subtitles } from '../../assert/data/constants';
import { insightKeywords as keywords, daysSelect, keys, ageKeys, twoToThreeLetterCodeMapping} from '../../assert/data/constants';
import Keyword from '../../componets/Keyword';
import { Link } from 'react-router-dom';
import { fetchFromAPI } from '../../componets/util/fetchFromAPI';
import HealthStatCard from '../../componets/HealthStatCard';
import InsightCard from '../../componets/InsightCard';
import GeoCard from '../../componets/GeoCard';
import Loader from '../../componets/util/loader';
import { createNivoDataTotal, createBarDataTotal, formatDataForNivo, createGeographyData, locationData} from '../../componets/formatdata/FormatData';

function Insights() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const{selectedIndex, handleMenuItemClick} = useTimeBar();
    const time = subtitles[selectedIndex];
    const days = daysSelect[selectedIndex];
    const [insightData, setInsightData] = useState(null);
    const [loading, setLoading] = useState(true);
    const userId = "test_id"; // when have id need change here; 
    // fetchdatafrom API
    useEffect(() => {
        const url = `audienceInsights?userId=${userId}&days=${days}`;
        fetchFromAPI(url)
        .then(data => {
            // Handle the response here (data is already parsed JSON)
            setInsightData(data);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}, [userId, days, selectedIndex]);

let nivoDataFollowers = [];
let nivoDataNewFollowers= [];
let formatGenderData =[];
let formatAgeData = [];
let geoDataFacebook = [];
let geoDataTiktok = [];

let totalFollower = 0;
let increaseFollower = 0;
if (!loading) {
    nivoDataFollowers = createNivoDataTotal(insightData,["Facebook", "TikTok"], "follower");
    nivoDataNewFollowers = createNivoDataTotal(insightData,["Facebook", "TikTok"], "newfollower");
  
    formatGenderData = formatDataForNivo(createBarDataTotal(insightData, ["Facebook", "TikTok"],"gender"), keys); 
    formatAgeData = formatDataForNivo(createBarDataTotal(insightData, ["Facebook", "TikTok"], "age"), ageKeys);

   // Locaion data
    geoDataFacebook = createGeographyData(locationData(insightData,"Facebook"), twoToThreeLetterCodeMapping);
    geoDataTiktok = createGeographyData(locationData(insightData, "TikTok"), twoToThreeLetterCodeMapping);
  

    const totals = insightData.Total;
    totalFollower = totals[totals.length - 1].followers;
    increaseFollower = totalFollower - totals[0].followers;
}
   
  return (
    <Box>
        <DashbordHeader title="Brand Dashboard"/>
        <DashboardNav />
        <Box display='flex' justifyContent="space-between" mr={2}> 
        <Box>
         <SocialNav/>
           <Box display= 'flex' gap = {1} ml={2} mb={2}>
                { keywords.map((keyword, index) =>(
                    <Keyword key = {index}
                    word = {keyword}
                    />
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
            ml={2} mr={2}>


           <HealthStatCard 
            title="Follower"
            number={totalFollower.toString()}
            increase={increaseFollower.toString()} //{totalReach.toString()}
            time={time}
            data={nivoDataFollowers}
            days = {days}
           />

          <HealthStatCard 
            title="New Follower"
            number={increaseFollower.toString()}
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
           data = {geoDataFacebook}/>
           
             <GeoCard 
             title = "Locaiton"
             data = {geoDataTiktok}/>
              </Box> 
       )}

      
        {/* breakdown button*/ }
        <Box display="flex" justifyContent="flex-end" mr={5}>
            <Link style={{ textDecoration: 'none' }} to="/dashboard/social/insight/facebook">
            <Button              
              variant="contained"
              color="primary"
              sx ={{borderBottom: 1, borderColor: colors.purple[500]}}
            >
                Social Channel Breakdown
            </Button>
             </Link>   
          </Box>     
    </Box>


  
  )
}


export default Insights;
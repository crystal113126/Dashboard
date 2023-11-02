import React from 'react';
import { Box, useTheme, Typography, IconButton } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { tokens } from '../../theme';
import AutoGraphIcon from '@mui/icons-material/AutoGraph'; 
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PagesIcon from '@mui/icons-material/Pages';


const SocialNav = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { pathname } = useLocation();
  const subpage = pathname.split('/')[3] || 'health'; // Adjust the index based on your route structure

  const activeLinkStyle = {
    textDecoration: 'none',
  };

  const getLinkStyle = (linkName) => {
    return {
      ...activeLinkStyle,
      color: subpage === linkName ? colors.white[100] :colors.grey[300],
    };
  };

  const getBoxStyle = (linkName) => {
    return {
      padding: 0.2,
      borderBottom: subpage === linkName ? 2 : 0,
      borderColor: colors.white[100],
    };
  };

  return (
    <Box display="flex">
      <nav>
        <Box display="flex"  justifyContent="space-round">
          <Link to="/dashboard/social/health" style={getLinkStyle('health')}>
            <Box m={2} mt={2} sx={getBoxStyle('health')}>
            <Typography
           variant="h6"
           fontWeight="bold"
           sx={{ m: "0 0 1px 1px" }}
          >  
            <IconButton> 
              <AutoGraphIcon/>
           </IconButton>
              Brand Health Tracker
              </Typography>
            </Box>
          </Link>

          <Link to="/dashboard/social/insight" style={getLinkStyle('insight')}>
            <Box m={2} mt={2} sx={getBoxStyle('insight')}>
            <Typography
           variant="h6"
           fontWeight="bold"
           sx={{ m: "0 0 1px 1px" }}>
             <IconButton> 
               <PeopleOutlineIcon/>
            </IconButton>
              Audience Insights
              </Typography>
            </Box>
          </Link>

          <Link to="/dashboard/social/content" style={getLinkStyle('content')}>
            <Box m={2} mt={2}  sx={getBoxStyle('content')}>
            <Typography
           variant="h6"
           fontWeight="bold"
           sx={{ m: "0 0 1px 0" }}>
            <IconButton> 
                <PagesIcon/>
            </IconButton> 
             Content Performance
              </Typography>
            </Box>
          </Link>
        </Box>
      </nav>
    </Box>
  );
};

export default SocialNav;

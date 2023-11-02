import React from 'react';
import { Box, useTheme, Typography} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { tokens } from '../../theme';


const BreakdownNav = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { pathname } = useLocation();
  const subpage = pathname.split('/')[4] || 'facebook'; // Adjust the index based on your route structure
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
      padding: 0.8,
      borderBottom: subpage === linkName ? 1 : 0,
      backgroundColor: subpage === linkName ? colors.grey[700] : colors.primary[500],
      borderColor: colors.blueAccent[300],
    };
  };

  return (
    <Box display="flex">
      <nav>
        <Box display="flex" gap={2}>
          <Link to={props.link + "facebook"} style={getLinkStyle('facebook')}>
            <Box ml={3} mt={2} sx={getBoxStyle('facebook')}>
            <Typography
           variant="h5"
           fontWeight="bold"
           sx={{ m: "0 0 2px 0px" }}
          >  
           
             Facebook
              </Typography>
            </Box>
          </Link>

          <Link to={props.link + "instagram"} style={getLinkStyle('instagram')}>
            <Box  mt={2} sx={getBoxStyle('instagram')}>
            <Typography
           variant="h5"
           fontWeight="bold"
           sx={{ m: "0 0 2px 0" }}
           >
             
               Instagram
               
              </Typography>
            </Box>
          </Link>

          <Link to= {props.link +"Tiktok"} style={getLinkStyle('tiktok')}>
            <Box mt={2}  sx={getBoxStyle('tiktok')}>
            <Typography
           variant="h5"
           fontWeight="bold"
           sx={{ m: "0 0 2px 0" }}
           >
             Tiktok
              </Typography>
            </Box>
          </Link>

          <Link to="/dashboard/social/health/Youtube" style={getLinkStyle('youtube')}>
            <Box m={0} mt={2}  sx={getBoxStyle('youtube')}>
            <Typography
           variant="h5"
           fontWeight="bold"
           sx={{ m: "0 0 2px 0" }}
           > 
             Youtube
              </Typography>
            </Box>
          </Link>
        </Box>
      </nav>
    </Box>
  );
};

export default BreakdownNav;

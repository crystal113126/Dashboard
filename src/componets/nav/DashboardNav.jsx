import React from 'react';
import { Box, useTheme, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { tokens } from '../../theme';

const DashboardNav = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { pathname } = useLocation();
  const subpage = pathname.split('/')[2] || 'dashboard'; // Adjust the index based on your route structure

  const activeLinkStyle = {
    textDecoration: 'none',
    // Add a line under the active link
    // borderBottom: subpage === 'dashboard' ? '2px solid black' : 'none',
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
      borderBottom: subpage === linkName ? 2 : 0,
      backgroundColor: subpage === linkName ? colors.grey[700] : colors.primary[500],
      borderColor: colors.blueAccent[500],
    };
  };

  return (
    <Box display="flex">
      <nav>
        <Box display="flex"  justifyContent="space-round">
          <Link to="/dashboard" style={getLinkStyle('dashboard')}>
            <Box ml={2} mt={2} sx={getBoxStyle('dashboard')}>
            <Typography
           variant="h5"
           fontWeight="bold"
           sx={{ m: "0 0 5px 0" }}
          > 
              Overview
              </Typography>
            </Box>
          </Link>

          <Link to="/dashboard/social" style={getLinkStyle('social')}>
            <Box m={1} mt={2} sx={getBoxStyle('social')}>
            <Typography
           variant="h5"
           fontWeight="bold"
           sx={{ m: "0 0 5px 0" }}>
              Social Channel Performances
              </Typography>
            </Box>
          </Link>

          <Link to="/dashboard/sale" style={getLinkStyle('sale')}>
            <Box m={1} mt={2}  sx={getBoxStyle('sale')}>
            <Typography
           variant="h5"
           fontWeight="bold"
           sx={{ m: "0 0 5px 0" }}>
              Sale Channel Performances
              </Typography>
            </Box>
          </Link>
        </Box>
      </nav>
    </Box>
  );
};

export default DashboardNav;

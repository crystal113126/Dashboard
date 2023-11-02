import React from 'react';
import { Box, Typography , useTheme} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { tokens } from '../../theme';
//import { navItemsHealth as navItems } from '../../assert/data/constants'; 

const BreakdownNavItem = ({ to, label, subpage, colors }) => {
  const isCurrentPage = subpage === label.toLowerCase();

  const linkStyle = {
    textDecoration: 'none',
    color: isCurrentPage ? colors.white[100] : colors.grey[300],
  };

  const boxStyle = {
    padding: 0.8,
    borderBottom: isCurrentPage ? 1 : 0,
    backgroundColor: isCurrentPage ? colors.grey[700] : colors.primary[500],
    borderColor: colors.blueAccent[500],
  };

  return (
    <Link to={to} style={linkStyle}>
      <Box ml={2} mt={2} sx={boxStyle}>
        <Typography variant="h5" fontWeight="bold" sx={{ m: "0 0 2px 0" }}>
          {label}
        </Typography>
      </Box>
    </Link>
  );
};

const BreakNav = ({navItems}) => {
  const { pathname } = useLocation();
  const subpage = pathname.split('/').pop() || 'facebook'; // Get the last part of the pathname
  const theme = useTheme();
  const colors = tokens(theme.palette.mode); // You should define theme somewhereconst theme = useTheme();

  return (
    <Box display="flex">
      <nav>
        <Box display="flex">
          {navItems.map((item, index) => (
            <BreakdownNavItem
              key={index}
              to={item.to}
              label={item.label}
              subpage={subpage}
              colors={colors}
            />
          ))}
        </Box>
      </nav>
    </Box>
  );
};

export default BreakNav;

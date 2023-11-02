import React  from 'react';
import { Box, IconButton, useTheme, Typography} from "@mui/material";
import { useContext } from "react";
import { tokens,ColorModeContext } from '../../theme';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Link } from 'react-router-dom';

const Header = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
    <Box display="flex" justifyContent="space-between" p={2} backgroundColor={colors.white[200]}>
        <Box display="flex" backgroundColor={colors.primary[400]} p = {2} sx={{ borderRadius: '10px' }}>
        <Typography variant="h4"
            color={colors.white[300]}
            fontWeight="bold">
            Brandplus.ai
       </Typography>
        </Box>
        <Box display= "flex" alignContent="center" alignItems="center">
            <IconButton onClick={colorMode.toggleColorMode} color="primary" >
                {theme.palette.mode === 'dark' ? (
                   <DarkModeOutlinedIcon/>
                ) : (<LightModeOutlinedIcon/> 
                )} 
            </IconButton>
            <IconButton color="primary">
            <NotificationsIcon/> 
            </IconButton>
            <Link to={'/signin'} >
            <IconButton color="primary"  >
            <PersonOutlineOutlinedIcon/>
            </IconButton>
            </Link>
        </Box>
    </Box>
    );
};

export default Header;

//
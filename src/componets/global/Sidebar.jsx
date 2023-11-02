import React  from 'react';
import { Box,useTheme, Typography } from "@mui/material";
import { Sidebar, Menu, MenuItem, sidebarClasses, SubMenu} from "react-pro-sidebar";
import { useState } from 'react';
import { tokens } from '../../theme';
import { Link } from 'react-router-dom';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AutoGraphIcon from '@mui/icons-material/AutoGraph'; 
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PagesIcon from '@mui/icons-material/Pages';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <MenuItem
        active={selected === title}
        style={{
          color: colors.grey[100],
          backgroundColor: colors.primary[500],
        }}
        onClick={() => setSelected(title)}
        icon={icon}
        component={<Link to={to}/>}
      >
        <Typography variant="h7" >{title}</Typography>
      </MenuItem>

    );
  };


const SideNav = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const[isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Brand Dashboard");
   

    return (
        <Box backgroundColor={colors.primary[500]} display='flex' flexDirection="column" position="relative"> 
          
          {/* <Typography variant="h4"fontWeight="bold" color={colors.grey[100]}>
                  Userbrand
                </Typography> */}
                {/* <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>  */}
        
        <Box style={{ display: 'flex', height: '100%', minHeight: '600px' }}>
          
        <Sidebar  rootStyles={{
               [`.${sidebarClasses.container}`]: {
                   backgroundColor: colors.primary[500],
                   },
                }}collapsed={isCollapsed}>
          
            <Menu iconShape="square">
            <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : <MenuOutlinedIcon />}
            style={{
                margin: "0px 0 0px 0",
                color: colors.primary[100],
              }}
         />
         
            <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Brand Dashboard"
              to="/dashboard"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              style={{
                color: colors.grey[200],
              }}
            />
             {!isCollapsed &&(
            <Typography
              variant="h6"
              color={colors.grey[100]}
              sx={{ m: "5px 0 5px 20px" }}
            >
              Key Performance
            </Typography>
            )}

            <SubMenu 
                      icon={< HubOutlinedIcon />}
                      style={{
                        margin: "0px 0 0px 0",
                        color: colors.primary[100],
    
                      }}
                      //component={<Link to={"/dashboard/social"}/>}
                      label = {"Social Channel"}>

                        <Item
                        title="Health Tracker"
                        to="/dashboard/social/health"
                        icon={<AutoGraphIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                        style={{
                            color: colors.primary[200],
                            backgroundColor:colors.grey[200],
                          }}
                        />

                        <Item
                        title="Audience Insights"
                        to="/dashboard/social/insight"
                        icon={<PeopleOutlineIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Item
                        title="Content Performance"
                        to="/dashboard/social/content"
                        icon={<PagesIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                        />


            </SubMenu>
      
            <Item
              title="Sales channel"
              to="/dashboard/sales"
              icon={< ShoppingBagOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="View Chart"
              to="/dashboard/view"
              icon={< EqualizerIcon />}
              selected={selected}
              setSelected={setSelected}
            />


            </Box>
           <Box sx={{ mt: "auto", position:"fixed", bottom: "1%", left: "5%",  borderTop: 1, borderTopColor: colors.grey[400]  }}  > 
    
           <Item
              title="Setting"
              to="/dashboard/setting"
              icon={ <SettingsIcon />}
              selected={selected}
              setSelected={setSelected}
            />

              <Item
              title="User"
              to="/dashboard/user"
              icon={ < AccountCircleIcon />}
              selected={selected}
              setSelected={setSelected}
               />
            </Box>
            </Menu>
            
      </Sidebar>
            </Box>
            </Box>

)};

export default SideNav;


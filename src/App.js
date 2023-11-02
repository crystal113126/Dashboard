import React  from 'react';
import { ThemeProvider } from "@emotion/react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline } from "@mui/material";
import { UserAuthContextProvider } from './context/UserAuthContext';
import { Routes, Route } from "react-router-dom";
import Dashboard from './scenes/dashboard/Dashboard';
import HealthTrack from './scenes/social/HealthTrack';
import Insights from './scenes/social/Insights';
import Facebook from './scenes/breakdown/health/Facebook';
import Tiktok from './scenes/breakdown/health/Tiktok';
import FackbookInsight from './scenes/breakdown/insight/FackbookInsight';
import TiktokInsight from './scenes/breakdown/insight/TiktokInsight';
import { TimeBarProvider } from './TimeBarContent';
import HeaderOnlyLayout from './HeaderOnlyLayout';
import SignIn from './scenes/user/signIn/SignIn';
import Layout from './Layout';
import Profile from './scenes/user/profile/Profile';
import Signup from './scenes/user/register/Signup';
import ProtectedRoute from './scenes/user/ProtectedRoute';

function App() {
  const[theme, colorMode] = useMode();
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <TimeBarProvider> 
        <UserAuthContextProvider>
         <Routes>
          <Route path ="/" element={<HeaderOnlyLayout/>}>
            <Route index element={<SignIn/>}/>
            <Route path ="/signup" element={<Signup/>} />
            <Route path ="/signin" element={<SignIn/>}/>
            <Route path = "/home" element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
          </Route>  
          <Route path = "/dashboard" element={<Layout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path = "/dashboard/social" element={<HealthTrack/>}/> 
            <Route path = "/dashboard/social/health" element={<HealthTrack/>}/>
            <Route path = "/dashboard/social/insight" element={<Insights/>}/>
            <Route path = "/dashboard/social/health/facebook" element={<Facebook/>}/> 
            <Route path = "/dashboard/social/health/tiktok" element={<Tiktok/>}/>  
            <Route path = "/dashboard/social/insight/facebook" element={<FackbookInsight/>}/> 
            <Route path = "/dashboard/social/insight/tiktok" element={<TiktokInsight/>}/>  
          </Route>
      </Routes> 
  
      </UserAuthContextProvider>
      </TimeBarProvider>
    </ThemeProvider>
    </ColorModeContext.Provider>
    
  );
}

export default App;

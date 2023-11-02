import React from 'react';
import {Outlet} from "react-router-dom";
import Header from './componets/global/Header';
import SideNav from './componets/global/Sidebar';
import Footbar from './componets/global/Footer';
// simport Footbar from './componets/global/Footer';


function Layout() {
  return (
    <div>
      <Header/>
      <div className="app">
      <SideNav/>
      <main className='content'>
      <Outlet />
      <Footbar/>
      </main>
    </div>
  </div>
  )
}

export default Layout
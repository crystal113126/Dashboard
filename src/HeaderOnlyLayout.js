import React from 'react';
import Header from './componets/global/Header';
import {Outlet} from "react-router-dom";
import Footbar from './componets/global/Footer';
function HeaderOnlyLayout() {
  return (
    <div>
      <Header />
      <main className="content"> 
      <Outlet />
      <Footbar className="centeried"/>
      </main>
    </div>
  );
}

export default HeaderOnlyLayout;

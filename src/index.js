import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./applications/customsource/global.css";
import Apploginpage from './applications/appauth/Apploginpage';
import { BrowserRouter,Route,Routes  } from 'react-router-dom';
import Apphostpage from './applications/Apphostpage';
import Userloginpage from './applications/users/userauth/Userloginpage';
import Userregistorpage from './applications/users/userauth/Userregistorpage';
import Userlandingpage from './applications/users/usersdashboard/Userlandingpage';

import Useraboutpage from './applications/users/usersdashboard/Useraboutpage';
import Userreportpage from './applications/users/usersdashboard/Userreportpage';
import Dashboard from './compo/Dashboard';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<BrowserRouter>
  <Routes>
    <Route path='' element={<Apploginpage/>}></Route>
    <Route path='apppage' element={<Apphostpage/>}></Route>
    <Route path='user-management' element={<Userloginpage/>}></Route>
    <Route path='user-management/registor' element={<Userregistorpage/>}></Route>
    <Route path='user-management/landing' element={<Userlandingpage/>}>
        <Route path='' element={<Dashboard/>}></Route>
        <Route path='about' element={<Useraboutpage/>}></Route>
        <Route path='report' element={<Userreportpage/>}></Route>

    </Route>
  </Routes>


</BrowserRouter>



  </React.StrictMode>
);


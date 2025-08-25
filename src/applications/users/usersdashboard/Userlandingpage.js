import React, { Fragment } from 'react'
import Appsidebarpage from '../../appshares/icons/Appsidebarpage'
import Appheaderpage from '../../appshares/icons/Appheaderpage'
import Mainpage from './Mainpage'

import Dashboard from '../../../compo/Dashboard'
import { Outlet } from 'react-router-dom'

function Userlandingpage() {
  return (
    <Fragment>
    <Appheaderpage></Appheaderpage>
    <div className='container-fluid'>
        <div className='row cus-page'>
            <div className='col-md-2 cus-bg'>
                <Appsidebarpage></Appsidebarpage>
            </div>
            <div className='col-md-10 bg-light'>
                   <Outlet></Outlet>
            </div>
        </div>
    </div>
    </Fragment>
  )
}

export default Userlandingpage
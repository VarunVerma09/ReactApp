import React from 'react'
import appicon from '../applications/appshares/icons/user.jpg';
import { Link } from 'react-router-dom';
import { Appmenu } from './controls/Appmentcontrol';

function Apphostpage() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 text-center p-5' >
          <h1> App List </h1>
        </div>
        {Appmenu.map((app) => {
          return (
            <div className='col-md-3 p-3 text-center'>
              <Link to={app.applink} class="card cus-flex shadow">
                <img src={appicon} class="card-img-top" alt="apiname" style={{ width: 100 }} />
                <h5 class="card-title">{app.appname}</h5>
              </Link>
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default Apphostpage
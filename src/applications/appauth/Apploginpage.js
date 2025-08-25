import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import usericons from '../appshares/icons/user.jpg';

function Apploginpage() {
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-5 bg-light shadow p-5'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 cus-flex'>
                                <p className='cususer border'> <img src={usericons}/></p>
                            </div>
                             <div className='col-12 text-center'>
                                <p className='h4 pb-5'>App Login Page</p>
                            </div>
                            <div className='col-md-12'>
                                <div className="mb-3">
                                    <label className="form-label"> <MdOutlineMailOutline/> Email address</label>
                                    <input type="email" className="form-control" />
                                </div>
                            </div>
                             <div className='col-md-12'>
                                <div className="mb-3">
                                    <label className="form-label"> <RiLockPasswordLine/> Password</label>
                                    <input type="password" className="form-control" />
                                </div>
                            </div>
                             <div className='col-md-12 text-center'>
                                <div className="mb-3">
                                   
                                    <input type='button' value="login" className='btn btn-success'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Apploginpage
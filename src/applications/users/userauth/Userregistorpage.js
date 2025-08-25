import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

function Userregistorpage() {
  return (
    <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-9 bg-light shadow p-5'>
                    <div className='container-fluid'>
                        <div className='row'>
                            
                             <div className='col-12 text-center'>
                                <p className='h4 pb-5'>User Registor Page</p>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label"> <MdOutlineMailOutline/> Email address</label>
                                    <input type="email" className="form-control" />
                                </div>
                            </div>
                             <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label"> <RiLockPasswordLine/> Password</label>
                                    <input type="password" className="form-control" />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label"> <RiLockPasswordLine/> Password</label>
                                    <input type="password" className="form-control" />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label"> <RiLockPasswordLine/> Password</label>
                                    <input type="password" className="form-control" />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label"> <RiLockPasswordLine/> Password</label>
                                    <input type="password" className="form-control" />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label"> <RiLockPasswordLine/> Password</label>
                                    <input type="password" className="form-control" />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label"> <RiLockPasswordLine/> Password</label>
                                    <input type="password" className="form-control" />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label"> <RiLockPasswordLine/> Password</label>
                                    <input type="password" className="form-control" />
                                </div>
                            </div>
                             <div className='col-12 text-center'>
                                <div className="mb-3">
                                   
                                    <input type='button' value="Registor Now" className='btn btn-success'/>
                                    <Link to="/user-management" className='ms-5'>login</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Userregistorpage
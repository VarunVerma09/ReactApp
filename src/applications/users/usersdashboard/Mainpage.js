import React from 'react'
import { BsGraphUpArrow } from "react-icons/bs";

function Mainpage() {
    return (
        <div className='container-fluid mt-3'>
            <div className='row'>
                <div className='col-md-3'>
                    <div class="card text-bg-primary mb-3">
                        <div class="card-body shadow">
                            <h5 class="card-title">Total Employee</h5>
                            <span className='h1'>8007</span> <span className='h1 float-end'><BsGraphUpArrow/></span>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div class="card text-bg-success mb-3">
                        <div class="card-body shadow">
                            <h5 class="card-title">Total Employee</h5>
                            <span className='h1'>8007</span> <span className='h1 float-end'><BsGraphUpArrow/></span>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div class="card text-bg-warning mb-3">
                        <div class="card-body shadow">
                            <h5 class="card-title">Total Employee</h5>
                            <span className='h1'>8007</span> <span className='h1 float-end'><BsGraphUpArrow/></span>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div class="card text-bg-danger mb-3">
                        <div class="card-body shadow">
                            <h5 class="card-title">Total Employee</h5>
                            <span className='h1'>8007</span> <span className='h1 float-end'><BsGraphUpArrow/></span>
                        </div>
                    </div>
                </div>

                <div className='col-md-8'>
                    <div class="card text-bg-light mb-3">
                        <div class="card-body shadow">
                           <h1>graph page</h1>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div class="card text-bg-light mb-3">
                        <div class="card-body shadow">
                           <h1>graph page</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mainpage
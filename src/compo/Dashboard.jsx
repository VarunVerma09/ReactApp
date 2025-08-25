import React from 'react';
import { BsGraphUpArrow } from "react-icons/bs";
import graph from "../applications/appshares/icons/graph.jpg"

const Dashboard = () => {
    return (
        <>
            <section className='grid'>
                <div>
                    <div class="card cus-bg text-white">
                        <div class="card-body ">
                            <h5 class="card-title">Total Employee</h5>
                            <span className='h1 text-white'>8007</span> <span className='h1 float-end'><BsGraphUpArrow /></span>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card text-bg-">
                        <div class="card-body ">
                            <h5 class="card-title">Target Achived </h5>
                            <span className='h1 text'>4000</span> <span className='h1 float-end'><BsGraphUpArrow /></span>
                        </div>
                    </div>
                </div><div>
                    <div class="card text-bg- ">
                        <div class="card-body ">
                            <h5 class="card-title">Flop Employee</h5>
                            <span className='h1'>4007</span> <span className='h1 float-end'><BsGraphUpArrow className='text'/></span>
                        </div>
                    </div>
                </div><div>
                    <div class="card text-bg-">
                        <div class="card-body ">
                            <h5 class="card-title">OverAll Ratio</h5>
                            <span className='h1'>91.01%</span> <span className='h1 float-end'><BsGraphUpArrow /></span>
                        </div>
                    </div>
                </div>
                <div><img src={graph} alt="" /></div>
                <div></div>
                <div></div>






            </section>
        </>
    );
}

export default Dashboard;

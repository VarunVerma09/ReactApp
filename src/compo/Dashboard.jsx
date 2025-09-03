import React, { useState, useEffect } from 'react';
import { BsGraphUpArrow } from "react-icons/bs";
import axios from 'axios';

const Dashboard = () => {
  const [mydata, setdata] = useState({});
  const [mydatalist, apidata] = useState([]);

  const myapi = () => {
    axios.get('https://dummyjson.com/products?limit=194').then((d) => {
      console.log(d.data);
      setdata(d.data);
      apidata(d.data.products);
    });
  };

  useEffect(() => {
    myapi();
  }, []);

  const updatelimit = (e) => {
    const value = e.target.value;
    
    axios.get(`https://dummyjson.com/products?limit=${value}`).then((d) => {
      setdata(d.data);
      apidata(d.data.products);
    });
  };

  return (
    <>
      <section className='grid'>
        <div>
          <div className="card cus-bg text-white">
            <div className="card-body">
              <h5 className="card-title">Total Data</h5>
              <span className='h1 text-white'>{mydata.total}</span>
              <span className='h1 float-end'><BsGraphUpArrow /></span>
            </div>
          </div>
        </div>

        <div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Your Limit</h5>
              <span className='h1'>{mydata.limit}</span>
              <span className='h1 float-end'><BsGraphUpArrow /></span>
            </div>
          </div>
        </div>

        <div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Skip Data</h5>
              <span className='h1'>{mydata.skip}</span>
              <span className='h1 float-end'><BsGraphUpArrow /></span>
            </div>
          </div>
        </div>

        <div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">OverAll Ratio</h5>
              <span className='h1'>91.01%</span>
              <span className='h1 float-end'><BsGraphUpArrow /></span>
            </div>
          </div>
        </div>


        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 col-sm-12 pt-2">
              <h4 className='text-center'>Select Limit To Display Data</h4>
              <select className=' w-100 p-3 form-select' onChange={updatelimit}>
                <option hidden>Select Limit</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="150">150</option>
                <option value="194">194</option>
              </select>
            </div>
            <div className="col-md-4 col-sm-12">asdfasdf</div>
            <div className="col-md-4 col-sm-12">asdfsd</div>
          </div>
        </div>
        <div></div>
        <div></div>


        <div className="row ">
          {mydatalist.map((d) => (
            <div className="col-lg-2 col-md-3 col-sm-6 col-12" key={d.id}>
              <div className="card h-100">
                <img src={d.thumbnail} alt={d.title} className="card-img-top img-fluid"
                style={{ objectFit: "contain" }} />
                <div className="card-body">
                  <h6 className="card-title">{d.title}</h6>
                  <p className="text-muted small mb-1">{d.category}</p>
                  <p className="fw-bold">₹{d.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

       
      </section>
    </>
  );
};

export default Dashboard

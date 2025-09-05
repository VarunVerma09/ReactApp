import React, { useState, useEffect } from 'react';
import { BsGraphUpArrow } from "react-icons/bs";
import axios from 'axios';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import NewChart from './NewChart';

const Dashboard = () => {
  const [mydata, setdata] = useState({});
  const [mydatalist, apidata] = useState([]);
  const [scat, setScat] = useState([]);


  const myapi = () => {
    axios.get('https://dummyjson.com/products?limit=194').then((d) => {

      setdata(d.data);
      apidata(d.data.products);
    });
  };

  useEffect(() => {
    myapi();
    filterByCategory();
  }, []);

  const addfilter = (e) => {
    const value = parseInt(e.target.value);

    axios.get('https://dummyjson.com/products?limit=194').then((data) => {
      const products = data.data.products;


      const filtered = products.filter((item) => item.price < value);

      
      apidata(filtered);
    });
  };
  const filterByCategory = (e) => {
    const value = e.target.value;

    axios.get('https://dummyjson.com/products?limit=194').then((d) => {
      const products = d.data.products;
      const filtered = products.filter((item) => item.category === value);
      apidata(filtered);
    });
  };



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
            <div className="col-md-4 col-sm-12">
              <h4 className='text-center mt-3 mb-4'>Filtter</h4>
              <select className=' w-100 p-3 form-select' onChange={addfilter}>
                <option hidden>Select Limit</option>
                <option value="20">Less then 100</option>
                <option value="100">Less then 300</option>
                <option value="100">Less then 500</option>
                <option value="100">Less then 1000</option>


              </select></div>
            <div className="col-md-4 col-sm-12">
              <h4 className='text-center mt-3 mb-4'>Category Filter</h4>
              <select className='form-select' onChange={filterByCategory}>
                <option hidden>Select Category</option>
                {scat.map((cat, i) => (
                  <option key={i} value={cat}>{cat}</option>
                ))}
              </select>
              
            </div>  
          </div>
        </div>
        <div></div>
        <div className='g-0 w-[80%]'><NewChart/></div>


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

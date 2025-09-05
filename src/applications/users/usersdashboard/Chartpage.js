import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const datas = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function Chartpage() {

  const [pdata, setpdata] = useState([]);
  const [scat, setscat] = useState([]);

  const myapi = () => {
    axios.get('https://dummyjson.com/products?limit=50').then((d) => {
      console.log(d.data.products)
      setpdata(d.data.products);

      const xyz = [...new Set(d.data.products.map(c => c.category))];
      console.log(xyz);

      setscat(xyz);


    });
  }


  useEffect(() => {
    myapi();
  }, []);





  return (
    <div className='container-fluid mt-3'>
      <div className='row'>
        <div className='col-md-3'>
          <select className='form-select'>
            <option>category</option>
            {scat.map((c) => {
              return <option>{c}</option>
            })}
          </select>
        </div>
         <div className='col-md-3'>
          <select className='form-select'>
            <option hidden>Select Limit</option>
            
          
          </select>
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          <h1>react chart </h1>
          <ResponsiveContainer width="100%" height={500}>
            <BarChart
              width={500}
              height={300}
              data={pdata}
            >
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="stock" fill="red" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default Chartpage

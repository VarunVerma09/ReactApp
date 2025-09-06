import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function Chartpage() {

  const [pdata, setpdata] = useState([]);
  const [scat, setscat] = useState([]);

  const myapi = () => {
    axios.get('https://dummyjson.com/products?limit=50').then((d) => {

      setpdata(d.data.products);

      const xyz = [...new Set(d.data.products.map(c => c.category))];


      setscat(xyz);


    });
  }
  const catagory = (e) => {
    const selectedCategory = e.target.value;

    axios.get('https://dummyjson.com/products?limit=200').then((d) => {
      const data = d.data.products;

      // filter items based on selected category
      const filterCatagory = data.filter((item) => item.category === selectedCategory);

      console.log(filterCatagory);
      setpdata(filterCatagory); // update chart with filtered data
    });
  };


  useEffect(() => {
    myapi();
  }, []);





  return (
    <div className='container-fluid mt-3'>
      <div className='row'>
        <div className='col-md-3'>
          <select className='form-select' onChange={catagory}>
            <option value="">Select Category</option>
            {scat.map((c, i) => (
              <option key={i} value={c}>{c}</option>
            ))}
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

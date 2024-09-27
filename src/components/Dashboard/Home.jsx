import React, { useState,useEffect } from 'react';
import { ChartsComponent } from './Analytics';
import { useAuth } from '../Auth/AuthContext';
import axios from 'axios';
import Cookies from 'js-cookie';



export const Home = () => {

  const { getRole } = useAuth();

  const role = getRole();
  const token = Cookies.get('authToken')

  const viteURL = import.meta.env.VITE_URL;

  const [statistics, setStatistics] = useState([]);

  const fetchData = async()=>{
    try{
      await axios.post(`${viteURL}/orders/statistics`,{authToken:token,role:role})
      .then((response)=>{
        console.log(response);
        
        const data = response.data;
        setStatistics(data);
      })
      .catch(()=>{
        console.log('Error fetching statistics')
      })
    }
    catch(err){

    }
  }

  useEffect(() => {
    fetchData();
  },[])

    return (
      <div>
        <div className="home-container mt-20">
          <div className="container mx-auto my-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 bg-gray-500 shadow-sm flex justify-between items-center rounded-lg">
                <div>
                  <h3 className="text-3xl font-bold text-black">{statistics.totalNewOrders}</h3>
                  <p className="text-black text-xl">New Orders</p>
                </div>
                <i className="fas fa-cart-shopping text-blue-800   text-6xl "></i>
              </div>
              <div className="p-6 bg-gray-500 shadow-sm flex justify-between items-center rounded-lg">
                <div>
                  <h3 className="text-3xl font-bold text-black">{statistics.confirmedOrders}</h3>
                  <p className="text-black text-xl">Orders Confirmed</p>
                </div>
                <i className="fas fa-circle-check text-red-600 text-6xl"></i>
              </div>
              <div className="p-6 bg-gray-500 shadow-sm flex justify-between items-center rounded-lg" >
                <div>
                  <h3 className="text-3xl font-bold text-black">{statistics.pendingOrders}</h3>
                  <p className="text-black text-xl">Orders Pending</p>
                </div>
                <i className="fas fa-rotate text-green-700 text-6xl"></i>
              </div>
          <div className="p-6 bg-gray-500 shadow-sm flex justify-between items-center rounded-lg" >
            <div>
              <h3 className="text-3xl font-bold text-black">{statistics.deliveringOrders}</h3>
              <p className="text-black text-xl">Orders Shipped</p>
            </div>
            <i className="fas fa-truck-fast text-amber-400 text-6xl"></i>
          </div>
        </div>
      </div>
  
    </div>
    <ChartsComponent></ChartsComponent>

    </div>
  )
}

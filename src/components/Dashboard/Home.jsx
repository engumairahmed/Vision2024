import React, { useState, useEffect } from 'react';
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

  const fetchData = async () => {
    try {
      await axios.post(`${viteURL}/orders/statistics`, { authToken: token, role: role })
        .then((response) => {
          const data = response.data;
          setStatistics(data);
        })
        .catch(() => {
          console.log('Error fetching statistics')
        })
    }
    catch (err) {

    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>
      <div className="home-container mt-20">
        <div className="container mx-auto my-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-gray-500 shadow-sm flex justify-between items-center rounded-lg">
              <div>
                <h3 className="text-3xl font-bold text-black">{statistics.totalNewOrders}</h3>
                <p className="text-black text-xl">Pending</p>
              </div>
              {/* <i className="fas fa-cart-shopping text-blue-800 text-6xl"></i> */}
              <i className="fa-solid fa-circle-exclamation text-red-500 text-6xl"></i>

            </div>
            <div className="p-6 bg-gray-500 shadow-sm flex justify-between items-center rounded-lg">
              <div>
                <h3 className="text-3xl font-bold text-black">{statistics.confirmedOrders}</h3>
                <p className="text-black text-xl">Orders Confirmed</p>
              </div>
              {/* <i className="fa-regular fa-thumbs-up text-green-700 text-6xl"></i> */}
              <i className="fa-solid fa-check-double text-green-700 text-6xl"></i>

            </div>
            <div className="p-6 bg-gray-500 shadow-sm flex justify-between items-center rounded-lg">
              <div>
                <h3 className="text-3xl font-bold text-black">{statistics.pendingOrders}</h3>
                <p className="text-black text-xl">Orders In-Process</p>
              </div>
              {/* <i className="fa-solid fa-circle-exclamation text-red-500 text-6xl"></i> */}
              <i className="fas fa-cart-shopping text-blue-800 text-6xl"></i>

            </div>
            <div className="p-6 bg-gray-500 shadow-sm flex justify-between items-center rounded-lg">
              <div>
                <h3 className="text-3xl font-bold text-black">{statistics.shippedOrders}</h3>
                <p className="text-black text-xl">Orders Shipped</p>
              </div>
              <i className="fa-solid fa-dolly text-amber-400 text-6xl"></i>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-2">
            <div className="p-6 bg-gray-500 shadow-sm flex justify-center items-center rounded-lg col-span-2">
              <div>
                <h3 className="text-2xl font-bold text-black">Out for Delivery: <strong>{statistics.deliveringOrders}</strong></h3>
              </div>
              <i className="fas fa-shipping-fast text-purple-900 text-6xl ml-4"></i>
            </div>
            <div className="p-6 bg-gray-500 shadow-sm flex justify-center items-center rounded-lg col-span-2">
              <div>
                <h3 className="text-2xl font-bold text-black">Cancelled Orders: <strong>{statistics.cancelledOrders}</strong></h3>
              </div>
              <i className="fa-solid fa-ban text-red-800 text-6xl ml-4"></i>
            </div>
          </div>
        </div>


      </div>
      <ChartsComponent></ChartsComponent>

    </div>
  )
}

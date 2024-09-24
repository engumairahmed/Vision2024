import React from 'react';
import { ChartsComponent } from './Analytics';


export const Home = () => {
    return (
      <div>
        <div className="home-container mt-20">
          <div className="container mx-auto my-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 bg-gray-500 shadow-sm flex justify-between items-center rounded-lg">
                <div>
                  <h3 className="text-3xl font-bold text-black">30</h3>
                  <p className="text-black text-xl">New Orders</p>
                </div>
                <i className="fas fa-cart-shopping text-blue-800   text-6xl "></i>
              </div>
              <div className="p-6 bg-gray-500 shadow-sm flex justify-between items-center rounded-lg">
                <div>
                  <h3 className="text-3xl font-bold text-black">20</h3>
                  <p className="text-black text-xl">Orders Confirmed</p>
                </div>
                <i className="fas fa-circle-check text-red-600 text-6xl"></i>
              </div>
              <div className="p-6 bg-gray-500 shadow-sm flex justify-between items-center rounded-lg" >
                <div>
                  <h3 className="text-3xl font-bold text-black">15</h3>
                  <p className="text-black text-xl">Orders Pending</p>
                </div>
                <i className="fas fa-rotate text-green-700 text-6xl"></i>
              </div>
          <div className="p-6 bg-gray-500 shadow-sm flex justify-between items-center rounded-lg" >
            <div>
              <h3 className="text-3xl font-bold text-black">50</h3>
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

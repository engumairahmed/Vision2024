import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

export const ChartsComponent = () => {
  const [productNames, setProductNames] = useState([]);
  const [productPrices, setProductPrices] = useState([]);
  const [orderStatusCounts, setOrderStatusCounts] = useState({});

  useEffect(() => {
    const fetchProductData = async () => {
      const reqData = await fetch("http://localhost:5000/products");
      const resData = await reqData.json();

      const prodNames = resData.map(item => item.name);
      const prodPrices = resData.map(item => item.price);

      setProductNames(prodNames);
      setProductPrices(prodPrices);
    };

    const fetchOrderStatusData = async () => {
      const reqData = await fetch("http://localhost:5000/orders/statistics");
      const resData = await reqData.json();

      setOrderStatusCounts(resData);
    };

    fetchProductData();
    fetchOrderStatusData();
  }, []);

  return (
    <div className="charts-container grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {/* Pie Chart for Products */}
      {productPrices.length > 0 && productNames.length > 0 && (
        <div className="chart-item">
          <Chart 
            type="pie" 
            width="100%"  
            series={productPrices} 
            options={{
              title: {
                text: 'Product Price Distribution',
                style: {
                  color: '#FF5733', 
                  fontSize: '20px',
                  fontWeight: 'bold'
                }
              },
              labels: productNames,
              responsive: [{
                breakpoint: 768,
                options: {
                  chart: { width: '100%' },
                  legend: { position: 'bottom' }
                }
              }]
            }} 
          />
        </div>
      )}

      {/* Donut Chart for Order Statuses */}
      {Object.keys(orderStatusCounts).length > 0 && (
        <div className="chart-item">
          <Chart 
            type="donut" 
            width="100%"  
            series={Object.values(orderStatusCounts)} 
            options={{
              title: {
                text: 'Order Status Distribution',
                style: {
                  color: '#FF5733', 
                  fontSize: '20px',
                  fontWeight: 'bold'
                }
              },
              labels: [
                'Total New Orders',
                'Confirmed Orders',
                'Pending Orders',
                'Delivering Orders',
                'Shipped Orders',
                'Cancelled Orders'
              ],
              responsive: [{
                breakpoint: 768,
                options: {
                  chart: { width: '100%' },
                  legend: { position: 'bottom' }
                }
              }]
            }} 
          />
        </div>
      )}
    </div>
  );
};

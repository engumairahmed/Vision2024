import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const ViewOrder = () => {
  const { orderId } = useParams(); // Get orderId from URL params
  const [order, setOrder] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const viteURL = import.meta.env.VITE_URL;

  const fetchOrder = async () => {
    try {
      const response = await axios.get(`${viteURL}/wholesaler/${orderId}`);
      setOrder(response.data);
      setLoading(false);
    } catch (error) {
      setError('Error fetching order details.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, [orderId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Order Details</h1>
      {order ? (
        <div className="space-y-4">
          <div>
            <strong>Order ID:</strong> {order._id}
          </div>
          <div>
            <strong>Retailer Name:</strong> {order.retailerName}
          </div>
          <div>
            <strong>Order Date:</strong> {new Date(order.orderDate).toLocaleDateString()}
          </div>
          <div>
            <strong>Status:</strong> {order.status}
          </div>
          <h2 className="text-xl font-semibold mt-6">Items</h2>
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Product Name</th>
                <th className="px-4 py-2 border">Quantity</th>
                <th className="px-4 py-2 border">Price</th>
              </tr>
            </thead>
            <tbody>
              {products.items.map((item) => (
                <tr key={item._id}>
                  <td className="px-4 py-2 border">{item.productName}</td>
                  <td className="px-4 py-2 border">{item.quantity}</td>
                  <td className="px-4 py-2 border">${item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No order details found.</p>
      )}
    </div>
  );
};
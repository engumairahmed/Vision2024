import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const ViewOrder = () => {
  const URL = import.meta.env.VITE_URL;
  const { id } = useParams(); // Get orderId from URL params
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const viteURL = import.meta.env.VITE_URL;

  const fetchOrder = async () => {
    try {
      const response = await axios.get(`${viteURL}/seller/order/${id}`);
      setOrder(response.data);
      setLoading(false);
    } catch (error) {
      setError("Error fetching order details.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg mt-20">
      <h1 className="text-3xl font-bold mb-4 text-blue-800">Order Details</h1>
      {order ? (
        <div className="space-y-4">
          <div>
            <strong>Order ID:</strong> {order.orderId}
          </div>
          <div>
            <strong>Retailer Name:</strong> {order.retailer.name}
          </div>
          <div>
            <strong>Order Date:</strong>{" "}
            {new Date(order.orderDate).toLocaleDateString()}
          </div>
          <div>
            <strong>Status:</strong>{" "}
            {order.status}
            <br/>
            <br/>
            <select className="ml-2">
              <option value="">Select Status</option>
              <option value="Pending">Pending</option>
              <option value="Delivered">Delivered</option>
              <option value="Out for Delivery">Out for Delivery</option>
              <option value="In Process">In Process</option>
            </select>
          </div>
          <h2 className="text-3xl font-semibold mt-6 text-blue-800">Items</h2>
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th scope="col" className="px-6 py-2">
                  Product
                </th>
                <th scope="col" className="px-6 py-2">
                  Category
                </th>
                <th scope="col" className="px-6 py-2">
                  Brand
                </th>
                <th scope="col" className="px-6 py-2">
                  Price
                </th>
                <th scope="col" className="px-6 py-2">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-2">
                  Image
                </th>
             
              </tr>
            </thead>
            <tbody>
              {/* Map through products array */}
              {order.products.map((product, index) => (
                <tr key={product.productId} className="border-t text-xs">
                  <td className="py-2 px-4 border">{product.name}</td>
                  <td className="py-2 px-4 border">{product.category}</td>
                  <td className="py-2 px-4 border">{product.brand}</td>
                  <td className="py-2 px-4 border">Rs. {product.price}</td>
                  <td className="text-center py-2 px-4 border">
                    {product.quantity}
                  </td>
                  <td
                    className="py-2 px-4 justify-item text-center"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      width="100"
                      height="100"
                      className="object-cover rounded"
                      src={`${URL + product.image}`}
                    />
                  </td>
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

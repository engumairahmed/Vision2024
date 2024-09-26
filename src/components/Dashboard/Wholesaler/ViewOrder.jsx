import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

export const ViewOrder = () => {

  const viteURL = import.meta.env.VITE_URL;

  const { id } = useParams();

  const authToken = Cookies.get("authToken");
  
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("");

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

  const updateOrderStatus = async (newStatus) => {

    await axios.put(`${viteURL}/update-order-status`, {
      orderId: order.orderId,
      newStatus: newStatus,
      authToken: authToken
    })
      .then((response) => {
        fetchOrder();
        toast.success(response.data.msg)
      })
      .catch((error) => { 

        console.log(error);
        
        setError("Axios catch error") 
      });
  };

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    setSelectedStatus(newStatus);
    if (newStatus) {
      updateOrderStatus(newStatus);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-gray-400 p-4 mt-20">
      <h1 className="text-3xl font-bold mb-4 text-black-800 underline">Order Details</h1>
      {order ? (
        <div className="space-y-4">
          <div>
            <strong>Order ID:</strong> {order.orderId}
          </div>
          <div>
            <strong>Order Date:</strong>{" "}
            {new Date(order.orderDate).toLocaleDateString()}
          </div>
          <div>
            <strong>Retailer Name:</strong> {order.retailer.name}
          </div>
          <div>
            <strong>Retailer Email:</strong> {order.retailer.email}
          </div>
          <div>
            <strong>Status:</strong>{" "}
            {order.status}
            <br />
            <br />
            <select className="ml-2 border px-2 py-1 rounded "
              value={selectedStatus}
              onChange={handleStatusChange}
            >
              <option value="">Select Status</option>
              <option value="pending">Pending</option>
              <option value="delivered">Delivered</option>
              <option value="out-for-delivery">Out for Delivery</option>
              <option value="in-process">In Process</option>
            </select>
          </div>
          <h2 className="text-3xl font-semibold mt-6 text-black-800 underline">Items</h2>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="border-b border-gray-400">
                <th scope="col" className="px-6 py-2">
                  Product
                </th>
                <th scope="col" className="px-6 py-2">
                  Category
                </th>
                <th scope="col" className="px-6 py-2">
                  Brand
                </th>
                <th scope="col" className="px-6 py-2 ">
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
              {order.products.map((product, index) => (
                <tr key={product.productId} className="border-b border-gray-300">
                  <td className="py-2 px-4 border">{product.name}</td>
                  <td className="py-2 px-4 border border-gray-300">{product.category}</td>
                  <td className="py-2 px-4 border border-gray-300">{product.brand}</td>
                  <td className="py-2 px-4 border border-gray-300">Rs. {product.price}</td>
                  <td className="text-center py-2 px-4 border border-gray-300">
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
                      src={`${viteURL + product.image}`}
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

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

export const OrderDetails = () => {
    const viteURL = import.meta.env.VITE_URL;
    const { id } = useParams();

    const authToken = Cookies.get('authToken');

    const [orderData, setOrderData] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState("");


    const fetchData = async () => {
        try {
            await axios.get(`${viteURL}/retailer/order/${id}`)
                .then((res) => {
                    setOrderData(res.data);
                });
        } catch (error) {
            console.error('Error fetching data', error);
        }
    };

    
  const updateOrderStatus = async (newStatus) => {
    if(newStatus==="Cancel"){
        newStatus = "cancelled";
    }
    try {
      const response = await axios.put(`${viteURL}/update-order-status`, {
        orderId: orderData.orderId,
        newStatus: newStatus,
        authToken: authToken,
      });
      fetchData();
      toast.success(response.data.msg);
    } catch (error) {
      console.log(error);
      toast.error(error)
      setError("Error updating order status.");
    }
  };

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    setSelectedStatus(newStatus);
    if (newStatus) {
      updateOrderStatus(newStatus);
    }
  };


    const statusTransitions = {
        pending: ["Cancel"],
        "in-process": [],
        "out-for-delivery": [],
        returned: [],
        delivered: [],
        cancelled: [],
    };

    useEffect(() => {
        fetchData();

    }, [id]);

    if (!orderData) {
        return <div>Loading...</div>;
    }

    const availableStatusOptions = statusTransitions[orderData.status] || [];

    return (
        <div className="order-container mt-20">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-gray-300 p-4">
                <h1 className="mb-4 text-3xl font-bold text-black-900 underline">Order Details</h1>
                <h6 className="mb-4 text-lg font-bold text-black-900">Order Number: {orderData.orderId}</h6>
                <h6 className="mb-4 text-lg font-bold text-black-900">Seller Name: {orderData.wholesaler.name}</h6>
                <h6 className="mb-4 text-lg font-bold text-black-900">Date: {new Date(orderData.createdAt).toLocaleDateString()}</h6>
                <h6 className="mb-4 text-lg font-bold text-black-900">Total Amount: {orderData.amount}</h6>
                <h6 className="mb-4 text-lg font-bold text-black-900">Status: {orderData.status}</h6>
                {orderData.status === "pending" ? (
                    <select
                    className="ml-2 border px-2 py-1 rounded"
                    value={selectedStatus}
                    onChange={handleStatusChange}
                >
                    <option value="">Select Status</option>
                    {availableStatusOptions.map((status) => (
                        <option key={status} value={status}>
                            {status.charAt(0).toUpperCase() + status.slice(1)}
                        </option>
                    ))}
                </select>
                ) : (
                    <div></div>
                )}
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 bg-white border border-gray-200 rounded-lg shadow-sm mt-2">
                    <thead className="text-sm text-gray-600 bg-white dark:text-green-400">
                        <tr>
                            <th scope="col" className="px-6 py-2">Product</th>
                            <th scope="col" className="px-6 py-2">Category</th>
                            <th scope="col" className="px-6 py-2">Brand</th>
                            <th scope="col" className="px-6 py-2">Price</th>
                            <th scope="col" className="px-6 py-2">Quantity</th>
                            <th scope="col" className="px-6 py-2">Image</th>
                        </tr>
                    </thead>
                    <tbody>


                        {/* Map through products array */}
                        {orderData.products.map((product, index) => (
                            <tr key={product.productId} className="border-t text-xs">
                                <td className="py-2 px-4 border">{product.name}</td>
                                <td className="py-2 px-4 border">{product.category}</td>
                                <td className="py-2 px-4 border">{product.brand}</td>
                                <td className="py-2 px-4 border">Rs. {product.price}</td>
                                <td className="text-center py-2 px-4 border">{product.quantity}</td>
                                <td className="py-2 px-4 border"><img src={`${viteURL + product.image}`} className='w-25 h-20 object-cover rounded'></img></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

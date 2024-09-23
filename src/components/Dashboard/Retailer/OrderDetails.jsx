import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const OrderDetails = () => {
    const viteURL = import.meta.env.VITE_URL;
    const { id } = useParams();

    const [orderData, setOrderData] = useState(null);

    const fetchData = async () => {
        try {
             await axios.get(`${viteURL}/retailer/order/${id}`)
            .then((res)=>{
                setOrderData(res.data);
            });
        } catch (error) {
            console.error('Error fetching data', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    if (!orderData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="order-container mt-20">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-gray-500 p-4">
                <h1 className="mb-4 text-3xl font-bold text-black-900">Order Details</h1>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 bg-white border border-gray-200 rounded-lg shadow-sm">
                    <thead className="text-sm text-blue-800 bg-white dark:text-green-400">
                        <tr className="border px-6 py-3">
                            <th className="py-3 px-6 " colSpan={2}>Order Number: {orderData.orderId}</th>
                            <th className="py-3 px-6 " colSpan={2}>Seller Name: {orderData.wholesaler.name}</th>
                            <th className="py-2 px-4 ">Email : {orderData.wholesaler.email}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="col" className="px-6 py-2">Product</th>
                            <th scope="col" className="px-6 py-2">Category</th>
                            <th scope="col" className="px-6 py-2">Brand</th>
                            <th scope="col" className="px-6 py-2">Price</th>
                            <th scope="col" className="px-6 py-2">Quantity</th>
                            <th scope="col" className="px-6 py-2">Status</th>
                            <th scope="col" className="px-6 py-2">Date</th>
                        </tr>

                        {/* Map through products array */}
                        {orderData.products.map((product, index) => (
                            <tr key={product.productId} className="border-t text-xs">
                                <td className="py-2 px-4 border">{product.name}</td>
                                <td className="py-2 px-4 border">{product.category}</td>
                                <td className="py-2 px-4 border">{product.brand}</td>
                                <td className="py-2 px-4 border">Rs. {product.price}</td>
                                <td className="text-center py-2 px-4 border">{product.quantity}</td>
                                <td className="py-2 px-4 border">{product.status}</td>
                                <td className="py-2 px-4 border">
                                    {new Date(product.createdAt).toLocaleDateString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

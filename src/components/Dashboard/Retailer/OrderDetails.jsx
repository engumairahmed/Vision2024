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
        console.log(id);
        
    }, [id]);

    if (!orderData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="order-container mt-20">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-gray-300 p-4">
                <h1 className="mb-4 text-3xl font-bold text-black-900 underline">Order Details</h1>
                <h6 className="mb-4 text-lg font-bold text-black-900">Order Number: {orderData.orderId}</h6>
                <h6 className="mb-4 text-lg font-bold text-black-900">Seller Name: {orderData.wholesaler.name}</h6>
                <h6 className="mb-4 text-lg font-bold text-black-900">Date: {new Date(orderData.createdAt).toLocaleDateString()}</h6>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 bg-white border border-gray-200 rounded-lg shadow-sm">
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
                                <td className="py-2 px-4 border"><img src={`${viteURL+product.image}`} className='w-25 h-20 object-cover rounded'></img></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

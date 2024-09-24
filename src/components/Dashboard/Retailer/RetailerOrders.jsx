import React, { useState, useEffect } from 'react'
import { useAuth } from '../../Auth/AuthContext';
import axios from 'axios';
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export const RetailerOrders = () => {

    const viteURL = import.meta.env.VITE_URL;

    const { getUserId } = useAuth();
    const id = getUserId();

    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const ordersPerPage = 5;
    const [orderData, setOrders] = useState([]);

    const fetchData = async () => {
        try {
             await axios.get(`${viteURL}/retailer/orders/${id}`)
                .then((response) => {
                    setOrders(response.data);
                })
                .catch();
            // if (response.data.length > 0) {
            //   setOrders(response.data); 
            // }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleView = (id) => {
        console.log(id);
        navigate(`/dashboard/retailer/order/${id}`)
        
    }

    const filteredOrders = orderData.filter(
        (order) =>
            console.log()

        // order.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        // order.product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);

    const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="order-container mt-20">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-gray-500 p-4">
                <h1 className="mb-4 text-3xl font-bold text-black-900">Order's Table</h1>
                <div className="flex flex-col sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
                    <label htmlFor="table-search" className="sr-only">
                        Search
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <FaSearch />
                        </div>
                        <input
                            type="text"
                            id="table-search"
                            value={searchTerm}
                            onChange={handleSearch}
                            className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search for products..."
                        />
                    </div>
                </div>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 bg-white border border-gray-200 rounded-lg shadow-sm">
                    {orderData.map((order) => (
                        <React.Fragment key={order._id.orderId}>

                            <thead className="text-sm text-blue-800 bg-white dark:text-green-400">
                                <tr className="border px-6 py-3">
                                    <th className="py-3 px-6" colSpan={2}>Seller Name : {order.wholesaler.name}</th>
                                    <th className="py-2 px-4" colSpan={2}>Email : {order.wholesaler.email}</th>
                                    <th></th>
                                    <th colSpan={2}><button className="text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-6 py-1.5" onClick={()=>handleView(order._id.orderId)}>View Details</button></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className=''>
                                    <th scope="col" className="px-6 py-2">
                                        Order No
                                    </th>
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
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-2">
                                        Date
                                    </th>
                                </tr>

                                {order.orders.map((item, index) => {
                                    return (
                                        <tr key={`${item._id}-${index}`} className="border-t text-xs">
                                            <td className="py-2 px-4 border">{order._id.orderId}</td>
                                            <td className="py-2 px-4 border">{item.product.name}</td>
                                            <td className="py-2 px-4 border">{item.product.category}</td>
                                            <td className="py-2 px-4 border">{item.product.brand}</td>
                                            <td className="py-2 px-4 border">Rs. {item.product.price}</td>
                                            <td className="text-center py-2 px-4 border">{item.quantity}</td>
                                            <td className="py-2 px-4 border">{item.status}</td>
                                            <td className="py-2 px-4 border">
                                                {new Date(item.createdAt).toLocaleDateString()}
                                            </td>
                                        </tr>
                                    );
                                })}

                            </tbody>
                        </React.Fragment>
                    ))}
                </table>
                <div className="flex justify-center mt-4">
                    <ul className="inline-flex -space-x-px text-base h-10">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <li key={index}>
                                <button
                                    onClick={() => paginate(index + 1)}
                                    className={`flex items-center justify-center px-4 h-10 leading-tight ${index + 1 === currentPage
                                        ? "text-blue-600 bg-blue-50"
                                        : "text-gray-500 bg-white"
                                        } border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                                    style={{ color: "black" }}
                                >
                                    {index + 1}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

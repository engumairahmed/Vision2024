import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import { useAuth } from "../Auth/AuthContext";

export const OrderManagement = () => {
  const viteURL = import.meta.env.VITE_URL;

  const { getUserId } = useAuth();
  const id = getUserId();

  const [dropdowns, setDropdowns] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const ordersPerPage = 5;
  const [orderData, setOrders] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${viteURL}/seller/orders/${id}`)
        .then((response) => {
          setOrders(response.data);
          console.log(response.data);

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

  const toggleDropdown = (orderId, index) => {
    const dropdownKey = `${orderId}-${index}`;
    setDropdowns((prevState) => ({
      ...prevState,
      [dropdownKey]: !prevState[dropdownKey],
    }));
  };

  const handleChangeStatus = (index, newStatus) => {
    console.log(`Changing status for order ${index} to ${newStatus}`);
    const updatedOrders = [...orderData];
    updatedOrders[index].status = newStatus;
    setOrders(updatedOrders);
    setDropdowns({});
  };

  const handleDelete = () => {
    // Add delete logic here
  };

  const handleUpdate = () => {
    // Add update logic here
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

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
          <thead className="text-xs text-blue-700 uppercase bg-green-50 dark:bg-green-700 dark:text-green-400">
            <tr>
              <th scope="col" className="p-4">
                {/* Checkbox column (optional) */}
              </th>
              <th scope="col" className="px-6 py-3">
                Order No
              </th>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Brand
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {orderData.map((order) => (
              <React.Fragment key={order._id.orderId}>
                <tr className="border bg-gray-200">
                  <td className="text-center block px-4 py-2 text-sm text-gray-700">{order.retailer.name}</td>
                  <td className="col">{order.retailer.email}</td>
                </tr>
                {order.orders.map((item, index) => {
                  const dropdownKey = `${order._id.orderId}-${index}`;
                  return (
                    <tr key={`${item._id}-${index}`} className="border-t">
                      {/* Retailer Name */}
                      <td className="py-2 px-4">
                        {index === 0 && (
                          <span rowSpan={order.orders.length}>{order.retailer.name}</span>
                        )}
                      </td>
                      <td className="py-2 px-4 border">{order._id.orderId}</td>
                      <td className="py-2 px-4 border">{item.product.name}</td>
                      <td className="py-2 px-4 border">{item.product.category}</td>
                      <td className="py-2 px-4 border">{item.product.brand}</td>
                      <td className="py-2 px-4 border">Rs. {item.product.price}</td>
                      <td className="py-2 px-4 border">{item.quantity}</td>
                      <td className="py-2 px-4 border">{item.status}</td>
                      <td className="py-2 px-4 border">
                        {new Date(item.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-3 relative">
                        <button
                          onClick={() => toggleDropdown(order._id.orderId, index)}
                          className="text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
                          style={{ color: "black" }}
                        >
                          {item.status}
                        </button>
                        {dropdowns[dropdownKey] && (
                          <div className="absolute right-0 mt-1 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                            <div
                              className="py-1"
                              role="menu"
                              aria-orientation="vertical"
                              aria-labelledby="options-menu"
                            >
                              <button
                                onClick={() => handleChangeStatus(index, "pending")}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                              >
                                Pending
                              </button>
                              <button
                                onClick={() => handleChangeStatus(index, "in-progress")}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                              >
                                In-progress
                              </button>
                              <button
                                onClick={() => handleChangeStatus(index, "out-for-delivery")}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                              >
                                Out-for-Delivery
                              </button>
                              <button
                                onClick={() => handleChangeStatus(index, "delivered")}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                              >
                                Delivered
                              </button>
                              <button
                                onClick={() => handleChangeStatus(index, "cancelled")}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                              >
                                Cancelled
                              </button>
                            </div>
                          </div>
                        )}
                      </td>
                    </tr>
                  )
                })}
              </React.Fragment>
            ))}
          </tbody>
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

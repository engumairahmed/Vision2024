import { React, useState } from "react";

export const OrderManagement2 = () => {
  // const URL = "https://tradevista-api-production.up.railway.app"; // Use this URL when integrating the API

  const [dropdowns, setDropdowns] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedWholesaler, setSelectedWholesaler] = useState("All");

  const productsPerPage = 5;
  const pageNumbersToShow = 3;

  const [Order, setOrders] = useState([
    { id: "1", wholesalername: "Wholesaler B", productname: "Product X", quantity: "10", price: "$100", total: "$1000", orderdate: "2024-08-23", status: "Pending" },
    { id: "2", wholesalername: "Wholesaler A", productname: "Product Y", quantity: "10", price: "$100", total: "$1000", orderdate: "2024-08-23", status: "Pending" },
    { id: "3", wholesalername: "Wholesaler C", productname: "Product Z", quantity: "10", price: "$100", total: "$1000", orderdate: "2024-08-23", status: "Pending" },
    { id: "4", wholesalername: "Wholesaler B", productname: "Product D", quantity: "10", price: "$100", total: "$1000", orderdate: "2024-08-23", status: "Pending" },
    // ...
  ]);

  const toggleDropdown = (index) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleChangeStatus = (index, newStatus) => {
    const updatedOrders = [...Order];
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

  const filteredOrders = Order.filter((order) => {
    const searchLower = searchTerm.toLowerCase();
    const isWholesalerMatch = selectedWholesaler === "All" || order.wholesalername === selectedWholesaler;
    return (
      isWholesalerMatch &&
      (order.id.toLowerCase().includes(searchLower) ||
        order.wholesalername.toLowerCase().includes(searchLower) ||
        order.productname.toLowerCase().includes(searchLower) ||
        order.quantity.toLowerCase().includes(searchLower) ||
        order.price.toLowerCase().includes(searchLower) ||
        order.total.toLowerCase().includes(searchLower) ||
        order.orderdate.toLowerCase().includes(searchLower) ||
        order.status.toLowerCase().includes(searchLower))
    );
  });

  const indexOfLastOrder = currentPage * productsPerPage;
  const indexOfFirstOrder = indexOfLastOrder - productsPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);

  const totalPages = Math.ceil(filteredOrders.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getPageNumbers = () => {
    const startPage = Math.max(1, currentPage - Math.floor(pageNumbersToShow / 2));
    const endPage = Math.min(startPage + pageNumbersToShow - 1, totalPages);

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <div className="Order-container mt-20">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-gray-500 p-4">
        <h1 className="mb-4 text-3xl font-bold text-black-900">Orders Table</h1>

        <div className="flex flex-col sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              value={searchTerm}
              onChange={handleSearch}
              className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for Orders..."
            />
          </div>
        </div>

        <table className="w-full text-sm text-left text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm">
          <thead className="text-xs text-blue-700 uppercase bg-green-50">
            <tr>
              <th scope="col" className="p-2"></th>
              <th scope="col" className="px-2 py-1">S No</th>
              <th scope="col" className="px-2 py-1">O ID</th>
              <th scope="col" className="px-2 py-1">Wholesaler Name</th>
              <th scope="col" className="px-2 py-1">Product Name</th>
              <th scope="col" className="px-2 py-1">Order Quantity</th>
              <th scope="col" className="px-2 py-1">Order Price</th>
              <th scope="col" className="px-2 py-1">Order Date</th>
              <th scope="col" className="px-2 py-1">Order Status</th>
              <th scope="col" className="px-2 py-1">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order, index) => (
              <tr key={index} className="bg-white border-b hover:bg-gray-50">
                <td className="p-2"></td>
                <td className="px-2 py-1">{indexOfFirstOrder + index + 1}</td>
                <td className="px-2 py-1">{order.id}</td>
                <td className="px-2 py-1">{order.wholesalername}</td>
                <td className="px-2 py-1">{order.productname}</td>
                <td className="px-2 py-1">{order.quantity}</td>
                <td className="px-2 py-1">{order.price}</td>
                <td className="px-2 py-1">{new Date(order.orderdate).toLocaleDateString()}</td>
                <td className="px-6 py-3 relative">
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
                    style={{ color: "black" }}
                  >
                    {order.status}
                  </button>
                  {dropdowns[index] && (
                    <div className="absolute right-0 mt-1 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                      <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        <button
                          onClick={() => handleChangeStatus(index, "Pending")}
                          className="text-gray-900 block px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          Pending
                        </button>
                        <button
                          onClick={() => handleChangeStatus(index, "Completed")}
                          className="text-gray-900 block px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          Completed
                        </button>
                        <button
                          onClick={() => handleChangeStatus(index, "Cancelled")}
                          className="text-gray-900 block px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          Cancelled
                        </button>
                      </div>
                    </div>
                  )}
                </td>
                <td className="px-6 py-3">
                  <button
                    onClick={() => handleUpdate()}
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete()}
                    className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <nav className="flex items-center justify-between pt-4">
          <div className="inline-flex items-center">
            {getPageNumbers().map((number) => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={`px-3 py-1.5 rounded-lg ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border border-blue-500'} hover:bg-blue-500 hover:text-white transition-colors duration-150 ease-in-out`}
              >
                {number}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

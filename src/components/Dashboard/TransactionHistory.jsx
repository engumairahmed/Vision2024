import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Cookies from "js-cookie";

export const TransactionHistory = () => {

  const viteURL = import.meta.env.VITE_URL;

  const token = Cookies.get('authToken');

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRetailer, setSelectedRetailer] = useState("All");
  const transactionsPerPage = 5;

  const [transactionsData, setTransactions] = useState([])

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilter = (event) => {
    setSelectedRetailer(event.target.value);
  };

  const filteredTransactions = transactionsData.filter(
    (transaction) =>
      (selectedRetailer === "All" ||
        transaction.user.name === selectedRetailer) &&
      (transaction.user.name.toLowerCase().includes(
        searchTerm.toLowerCase()
      ) ||
        transaction.DateTime.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = filteredTransactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  const totalPages = Math.ceil(
    filteredTransactions.length / transactionsPerPage
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const retailers = [
    ...new Set(transactionsData.map((transaction) => transaction.user.name)),
  ];

  const fetchData = async () => {
    console.log(token)
    await axios.post(`${viteURL}/transactions`, { authToken: token })
      .then((response) => {
        const transaction = response.data
        setTransactions(transaction)
      })
      .catch((error) => {
        console.error('Error fetching data', error);
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="transaction-container mt-20">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-gray-500 p-4">
        <h1 className="mb-4 text-3xl font-bold text-gray-900">Transaction Table</h1>
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
              placeholder="Search for transactions..."
            />
          </div>
          <select
            id="retailer-filter"
            value={selectedRetailer}
            onChange={handleFilter}
            className="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="All">All</option>
            {retailers.map((retailer, index) => (
              <option key={index} value={retailer}>
                {retailer}
              </option>
            ))}
          </select>
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 bg-white border border-gray-200 rounded-lg shadow-sm">
          <thead className="text-xs text-blue-700 uppercase bg-green-50 dark:bg-green-700 dark:text-green-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Retailer Name
              </th>
              <th scope="col" className="px-6 py-3">
                Date & Time
              </th>
              <th scope="col" className="px-6 py-3">
                Type
              </th>
              <th scope="col" className="px-6 py-3">
                Credit Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Debit Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Balance
              </th>
            </tr>
          </thead>
          <tbody>
            {currentTransactions.map((transaction, index) => (
              transaction.transactions.map((trans, transIndex) => (
                <tr
                  key={`${index}-${transIndex}`} // Use a combination of indexes for unique keys
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="px-6 py-3" style={{ color: "black" }}>
                    {transaction.user.name}
                  </td>
                  <td className="px-6 py-3" style={{ color: "black" }}>
                    {new Date(trans.createdAt).toLocaleString()}
                  </td>
                  <td className="px-6 py-3" style={{ color: "black" }}>
                    {trans.paymentMode}
                  </td>
                  <td className="px-6 py-3" style={{ color: "black" }}>
                    {trans.creditAmount} {/* Display the amount of the individual transaction */}
                  </td>
                  <td className="px-6 py-3" style={{ color: "black" }}>
                    {trans.debitAmount} {/* Display the amount of the individual transaction */}
                  </td>
                  <td className="px-6 py-3" style={{ color: "black" }}>
                    {trans.balance} {/* Display running balance for the user */}
                  </td>                  
                </tr>
              ))
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

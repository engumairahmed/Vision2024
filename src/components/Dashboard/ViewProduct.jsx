import React, { useState, useEffect } from "react";
import axios from "axios";

export const ViewProduct = ({user}) => {

  const URL = import.meta.env.VITE_URL

  const User = user;
  
  const [userId , setUserId] = useState();

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const productsPerPage = 5;
  const pageNumbersToShow = 3;

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDelete = () => { };

  const handleUpdate = () => {
    // Add update logic here
  };

  const fetchData = async (id) => {
    await axios.get(`${URL}/store-products/${id}`)
    .then(
      (response) => {
        setProducts(response.data);
      }
    )
    .catch(
      (error) => {
        console.error("Error fetching data:", error);
      }
    )
  };

  const filteredProducts = products.filter(
    (product) =>
      product._id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.quantity.toString().includes(searchTerm) ||
      product.price.toString().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentproducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getPageNumbers = () => {
    const startPage = Math.max(
      1,
      currentPage - Math.floor(pageNumbersToShow / 2)
    );
    const endPage = Math.min(startPage + pageNumbersToShow - 1, totalPages);

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  useEffect(() => {    
    if(User){
      let id = User.id;
      fetchData(id);  
      console.log(id);
         
       
    }
  },[user]);

  return (
    <div className="order-container mt-20">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-gray-500 p-4">
        <h1 className="mb-4 text-3xl font-bold text-black-900">
          View Products
        </h1>
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
              placeholder="Search for products..."
            />
          </div>
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 bg-white border border-gray-200 rounded-lg shadow-sm">
          <thead className="text-xs text-blue-700 uppercase bg-green-50 dark:bg-green-700 dark:text-green-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  {/* <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /> */}
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Product Image
              </th>
              <th scope="col" className="px-6 py-3">
                Product Name
              </th>
              <th scope="col" className="px-6 py-3">
                Product Brand
              </th>
              <th scope="col" className="px-6 py-3">
                Product Category
              </th>
              <th scope="col" className="px-6 py-3">
                Product Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Product Price
              </th>
              <th scope="col" className="px-6 py-3">
                Product Description
              </th>


              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentproducts.map((product, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="p-4"></td>
                <td className="px-6 py-3" style={{ color: "black" }}>
                  {indexOfFirstProduct + index + 1}
                </td>
                <td
                  className="px-6 py-3 border-b border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white"
                  style={{ color: "black" }}
                >
                  <img
                    className="w-16 h-16 object-cover rounded"
                    src={`http://localhost:5000${product.image}`}
                    alt={product.name}
                  />
                </td>
                <td className="px-6 py-3" style={{ color: "black" }}>
                  {product.name}
                </td>
                <td className="px-6 py-3" style={{ color: "black" }}>
                  {product.brand}
                </td>
                <td className="px-6 py-3" style={{ color: "black" }}>
                  {product.category}
                </td>
                <td className="px-6 py-3" style={{ color: "black" }}>
                  {product.quantity}
                </td>
                <td className="px-6 py-3" style={{ color: "black" }}>
                  {product.price}
                </td>
                <td className="px-6 py-3" style={{ color: "black" }}>
                  {product.description}
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
        <div className="flex justify-center mt-4">
          <nav aria-label="Page navigation">
            <ul className="inline-flex -space-x-px">
              <li>
                <button
                  onClick={() => paginate(Math.max(currentPage - 1, 1))}
                  className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
                >
                  Previous
                </button>
              </li>
              {getPageNumbers().map((number) => (
                <li key={number}>
                  <button
                    onClick={() => paginate(number)}
                    className={`px-3 py-2 leading-tight ${number === currentPage
                      ? "text-blue-600 bg-blue-50 border-blue-300"
                      : "text-gray-500 bg-white border-gray-300"
                      } border hover:bg-gray-100 hover:text-gray-700`}
                  >
                    {number}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() =>
                    paginate(Math.min(currentPage + 1, totalPages))
                  }
                  className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

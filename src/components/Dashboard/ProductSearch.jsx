import { React, useEffect, useState } from "react";
import { RingLoader } from "react-spinners";

import axios from "axios";

export const ProductSearch = () => {
    const [isLoading, setIsLoading] = useState(true);

    // const URL = "http://localhost:5000"
    const URL = "https://tradevista-api-production.up.railway.app";

    const [dropdowns, setDropdowns] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const productsPerPage = 5;
    const pageNumbersToShow = 3;

    const [Products, setProducts] = useState([]);

    const toggleDropdown = (index) => {
        setDropdowns((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    const handleChangeStatus = (index, newStatus) => {
        const updatedProducts = [...Products];
        updatedProducts[index].status = newStatus;
        setProducts(updatedProducts);
        setDropdowns({});
    };

    const handleDelete = () => { };

    const handleOrder = (product, wholesaler) => {

    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredProducts = Products.filter(
        (Product) =>
            Product._id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            Product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            Product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            Product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
            Product.stockLocation.toLowerCase().includes(searchTerm.toLowerCase()) ||
            Product.wholesaler.toLowerCase().includes(searchTerm.toLowerCase())

    );

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(
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
        axios
            .get(`${URL}/products`)
            .then((result) => {
                const data = result.data;
                setTimeout(() => {
                    setProducts(data);
                    setIsLoading(false);
                }, 600);
            })
            .catch(() => { });
    });

    return (
        <div className="Product-container mt-20">
            {isLoading ? (
                <div className="relative flex justify-center items-center overflow-x-auto sm:rounded-lg p-4 h-64">
                    <RingLoader color="#1754e6" loading size={100} />
                </div>
            ) : (
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-gray-500 p-4 aptech">
                    <h1 className="mb-4 text-3xl font-bold text-black-900 ">
                        Products Table
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
                                placeholder="Search for Products..."
                            />
                        </div>
                    </div>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 bg-white border border-gray-200 rounded-lg shadow-sm ">
                        <thead className="text-xs text-blue-700 uppercase bg-green-50 dark:bg-green-700 dark:text-green-400">
                            <tr>
                                <th scope="col" className="p-4"></th>
                                <th scope="col" className="px-6 py-3">
                                    S No
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Product Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Product Description
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Seller
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Location
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentProducts.map((Product, index) => (
                                <tr
                                    key={index}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                >
                                    <td className="p-4"></td>
                                    <td className="px-6 py-3" style={{ color: "black" }}>
                                        {indexOfFirstProduct + index + 1}
                                    </td>
                                    <td className="px-6 py-3" style={{ color: "black" }}>
                                        {Product.name}
                                    </td>
                                    <td className="px-6 py-3" style={{ color: "black" }}>
                                        {Product.description}
                                    </td>
                                    <td className="px-6 py-3 relative">
                                        {Product.wholesaler.name}

                                        {/* <button
                      onClick={() => toggleDropdown(index)}
                      className="text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
                      style={{ color: "black" }}
                    >
                      Actions
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
                            onClick={() => handleChangeStatus(index, "Enable")}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          >
                            Enable
                          </button>
                          <button
                            onClick={() => handleChangeStatus(index, "Disable")}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          >
                            Disable
                          </button>
                        </div>
                      </div>
                    )} */}
                                    </td>
                                    <td className="px-6 py-3" style={{ color: "black" }}>
                                        {Product.price}
                                    </td>
                                    <td className="px-6 py-3" style={{ color: "black" }}>
                                        {Object.entries(Product.stockLocation).map(([city, quantity], idx) => (
                                            <div key={idx}>
                                                {city}: {quantity}
                                            </div>
                                        ))}
                                    </td>
                                    <td className="px-6 py-3">
                                        <button
                                            onClick={() => handleOrder(Product.id, Product.wholesaler._id)}
                                            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                        >
                                            Add to Order
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
            )}
        </div>
    );
};

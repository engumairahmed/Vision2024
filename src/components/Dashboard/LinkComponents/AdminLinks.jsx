import React from 'react'
import { Link } from "react-router-dom";


export const AdminLinks = () => {
    return (
        <ul className="space-y-2 font-medium pt-5">
            <li>
                <Link
                    to={"/dashboard"}
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 group active:bg-gray-100 dark:active:bg-gray-600"
                >
                    <svg
                        className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        style={{ color: "#1A56DB" }}
                    >
                        <path
                            fillRule="evenodd"
                            d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
                            clipRule="evenodd"
                        />
                    </svg>

                    <span className="ms-3 text-white hover:text-blue-500 font-bold">
                        Home Page
                    </span>
                </Link>
            </li>
            <li>
                <Link
                    to={"/dashboard/users"}
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group active:bg-gray-100 dark:active:bg-gray-600"
                >
                    <svg
                        className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        style={{ color: "#1A56DB" }}
                    >
                        <path
                            fillRule="evenodd"
                            d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H6Zm7.25-2.095c.478-.86.75-1.85.75-2.905a5.973 5.973 0 0 0-.75-2.906 4 4 0 1 1 0 5.811ZM15.466 20c.34-.588.535-1.271.535-2v-1a5.978 5.978 0 0 0-1.528-4H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-4.535Z"
                            clipRule="evenodd"
                        />
                    </svg>

                    <span className="ms-3 text-white hover:text-blue-500 font-bold">
                        User Management
                    </span>
                </Link>
            </li>
            <li>
                <Link
                    to={"/dashboard/orders"}
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group active:bg-gray-100 dark:active:bg-gray-600"
                >
                    <svg
                        className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        style={{ color: "#1A56DB" }}
                    >
                        <path
                            fillRule="evenodd"
                            d="M7 2a2 2 0 0 0-2 2v1a1 1 0 0 0 0 2v1a1 1 0 0 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7Zm3 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-1 7a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3 1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1Z"
                            clipRule="evenodd"
                        />
                    </svg>

                    <span className="ms-3 text-white hover:text-blue-500 font-bold">
                        Order Management
                    </span>
                </Link>
            </li>
            <li>
                <Link
                    to={"/dashboard/products"}
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group active:bg-gray-100 dark:active:bg-gray-600"
                >
                    <svg
                        className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        style={{ color: "#1A56DB" }}
                    >
                        <path
                            fillRule="evenodd"
                            d="M20 10H4v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8ZM9 13v-1h6v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z"
                            clipRule="evenodd"
                        />
                        <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2Z" />
                    </svg>

                    <span className="ms-3 text-white hover:text-blue-500 font-bold">
                        Product Management
                    </span>
                </Link>
            </li>
            <li>
                <Link
                    to={"/dashboard/transactions"}
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group active:bg-gray-100 dark:active:bg-gray-600"
                >
                    <svg
                        className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        style={{ color: "#1A56DB" }}
                    >
                        <path
                            fillRule="evenodd"
                            d="M7 6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v-4a3 3 0 0 0-3-3H7V6Z"
                            clipRule="evenodd"
                        />
                        <path
                            fillRule="evenodd"
                            d="M2 11a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7Zm7.5 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"
                            clipRule="evenodd"
                        />
                        <path d="M10.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
                    </svg>

                    <span className="ms-3 text-white hover:text-blue-500 font-bold">
                        Transaction History
                    </span>
                </Link>
            </li>
            <li>
                <Link
                    to={"/dashboard/analytics"}
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group active:bg-gray-100 dark:active:bg-gray-600"
                >
                    <svg
                        className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                        style={{ color: "#1A56DB" }}
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.1"
                            d="M4 4.5V19a1 1 0 0 0 1 1h15M7 10l4 4 4-4 5 5m0 0h-3.207M20 15v-3.207"
                        />
                    </svg>

                    <span className="ms-3 text-white hover:text-blue-500 font-bold">
                        Analytics
                    </span>
                </Link>
            </li>
            <li>
                <Link
                    to={"/dashboard/product-search"}
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group active:bg-gray-100 dark:active:bg-gray-600"
                >
                    <svg
                        className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                        style={{ color: "#1A56DB" }}
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.1"
                            d="M4 4.5V19a1 1 0 0 0 1 1h15M7 10l4 4 4-4 5 5m0 0h-3.207M20 15v-3.207"
                        />
                    </svg>

                    <span className="ms-3 text-white hover:text-blue-500 font-bold">
                        Search Product
                    </span>
                </Link>
            </li>
        </ul>
    )
}

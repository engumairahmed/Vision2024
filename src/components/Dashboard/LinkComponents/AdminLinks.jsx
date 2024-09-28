import React from "react";
import { Link } from "react-router-dom";
import {
  FaHouse,
  FaUsers,
  FaBox,
  FaMoneyBillWave,
  FaChartLine,
  
} from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { AiFillProfile } from "react-icons/ai";


export const AdminLinks = () => {
  return (
    <ul className="space-y-2 font-medium pt-5">
      <li>
        <Link
          to={"/dashboard"}
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 group active:bg-gray-100 dark:active:bg-gray-600"
        >
          <FaHouse color="#1A56DB" />

          <span className="ms-3 text-white hover:text-blue-500 font-bold">
            Home Page
          </span>
        </Link>
      </li>
      {/* <li>
        <Link
          to={"/dashboard/users"}
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group active:bg-gray-100 dark:active:bg-gray-600"
        >
          <FaUsers color="#1A56DB" />

          <span className="ms-3 text-white hover:text-blue-500 font-bold">
            User Management
          </span>
        </Link>
      </li> */}
      <li>
        <Link
          to={"/dashboard/orders"}
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group active:bg-gray-100 dark:active:bg-gray-600"
        >
          <AiFillProfile color="#1A56DB" />

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
          <FaBox color="#1A56DB" />
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
          <FaMoneyBillWave color="#1A56DB" />
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
          <FaChartLine color="#1A56DB" />
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
         <FaSearch color="#1A56DB" />
          <span className="ms-3 text-white hover:text-blue-500 font-bold">
            Search Product
          </span>
        </Link>
      </li>
    </ul>
    )
}


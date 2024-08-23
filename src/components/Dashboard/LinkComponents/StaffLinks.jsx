import React from "react";
import { Link } from "react-router-dom";
import { AiFillProfile } from "react-icons/ai";

export const StaffLinks = () => {
  return (
    <ul className="space-y-2 font-medium pt-5">
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

    </ul>
  );
};

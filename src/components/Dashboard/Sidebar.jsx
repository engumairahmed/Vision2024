import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import * as jwtdecode from "jwt-decode";
import { Logout } from "./Logout";
import { handleNavbarScroll } from "./NavbarScroll";
import { AdminLinks } from "./LinkComponents/AdminLinks";
import { RetailerLinks } from "./LinkComponents/RetailerLinks";
import { StaffLinks } from "./LinkComponents/StaffLinks";
import { WholesalerLinks } from "./LinkComponents/WholesalerLinks";
import { useAuth } from '../Auth/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import { FaArrowLeft } from 'react-icons/fa';



const roleComponentMap = {
  admin: AdminLinks,
  retailer: RetailerLinks,
  staff: StaffLinks,
  wholesaler: WholesalerLinks,
};

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [isLogoutModalVisible, setLogoutModalVisible] = useState(false);

  const { getRole, getName } = useAuth();

  const [role, setRole] = useState();
  const [isUser, setIsUser] = useState(false);

  const Name = getName();

  const ComponentToRender =
    roleComponentMap[role] || (() => <div>No role assigned</div>);

  const handleUserMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleUserClose = () => {
    if (isOpen) {
      setIsOpen(false);
    }    
  };

  const handleSidebarToggle = () => {
    setIsOpenSidebar(!isOpenSidebar);
  };
  const handleSidebarClose = () => {
    if (isOpenSidebar) {
      setIsOpenSidebar(false);
    }
  };

  const handleLogoutClick = () => {
    setLogoutModalVisible(true); // Show the modal
  };

  const handleCloseModal = () => {
    setLogoutModalVisible(false); // Hide the modal
  };

  useEffect(() => {
    handleNavbarScroll();
    let result = getRole();
    setRole(result);
  }, []);

  return (
    <div onClick={handleUserClose}>
      <nav className="navbar fixed top-0 z-40 w-full bg-dark">
        <div className="px-3 py-6 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                onClick={handleSidebarToggle}
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="relative flex items-center">
              <button
                type="button"
                className="flex items-center justify-center w-40 h-10 bg-gray-800 text-white rounded-full md:me-0 focus:ring-4 focus:ring-gray-600 dark:focus:ring-gray-600"
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-placement="bottom"
                onClick={handleUserMenuToggle}
              >
                <span className="text-center w-full">{Name}</span>
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://www.svgrepo.com/show/408429/user-person-profile-block-account-circle.svg"
                  alt="user photo"
                />
              </button>
              {isOpen && (
                <div
                  id="dropdown"
                  className="absolute right-0 top-full mt-2 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <Link
                        to={"profile"}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"setting"}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleLogoutClick}
                        className="block px-4 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600"
                      >
                        Logout{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div>{isLogoutModalVisible && <Logout onClose={handleCloseModal} />}</div>

      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-8 transition-transform ${
          isOpenSidebar ? "translate-x-0" : "-translate-x-full"
        } bg-gray-900 border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-Gray-900">
          <div className="logo pt-0">
            <Link to={"/"} className="flex ms-1 md:me-24">
              <img src="/Logo.png" className="h-9 me-3" alt="TradeVista Logo" />
              <span
                className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white"
                style={{ color: "white" }}
              >
                TradeVista
              </span>
            </Link>
            
          </div>

          <ComponentToRender />
          <button onClick={handleSidebarClose} className={isOpenSidebar? "mt-4":"lg:hidden"}><FaArrowLeft size={24} color="white" /></button>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        <div className="p-4 rounded-lg dark:border-gray-700">
          <Outlet />
          <ToastContainer/>
        </div>
      </div>
    </div>
  );
};

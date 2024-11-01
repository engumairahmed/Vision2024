import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";


export const UserManagement = () => {
  const [dropdowns, setDropdowns] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const usersPerPage = 5;

  const initialUsers = [
    { name: "John Doe", email: "john.doe@example.com", status: "Enable" },
    { name: "Jane Smith", email: "jane.smith@example.com", status: "Disable" },
    { name: "Jane Smith", email: "jane.smith@example.com", status: "Disable" },
    { name: "Jane Smith", email: "jane.smith@example.com", status: "Disable" },
    { name: "Jane Smith", email: "jane.smith@example.com", status: "Disable" },
    { name: "Jane Smith", email: "jane.smith@example.com", status: "Disable" },
    { name: "Jane Smith", email: "jane.smith@example.com", status: "Disable" },
    { name: "Jane Smith", email: "jane.smith@example.com", status: "Disable" },
    { name: "Jane Smith", email: "jane.smith@example.com", status: "Disable" },
    { name: "Jane Smith", email: "jane.smith@example.com", status: "Disable" },
    { name: "Jane Smith", email: "jane.smith@example.com", status: "Disable" },
    { name: "Jane Smith", email: "jane.smith@example.com", status: "Disable" },
    // Add more users here
  ];

  const [users, setUsers] = useState(initialUsers);

  const toggleDropdown = (index) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleChangeStatus = (index, newStatus) => {
    const updatedUsers = [...users];
    updatedUsers[index].status = newStatus;
    setUsers(updatedUsers);
    setDropdowns({});
  };

  const handleDelete = () => {};

  const handleUpdate = () => {
    // Add update logic here
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="user-container mt-20">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-gray-500 p-4 aptech">
        <h1 className="mb-4 text-3xl font-bold text-black-900 ">
          User's Table
        </h1>

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
              placeholder="Search for users..."
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
                User Name
              </th>
              <th scope="col" className="px-6 py-3">
                User Email
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="p-4"></td>
                <td className="px-6 py-3" style={{ color: "black" }}>
                  {indexOfFirstUser + index + 1}
                </td>
                <td className="px-6 py-3" style={{ color: "black" }}>
                  {user.name}
                </td>
                <td className="px-6 py-3" style={{ color: "black" }}>
                  {user.email}
                </td>
                <td className="px-6 py-3 relative">
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
                    style={{ color: "black" }}
                  >
                    {user.status}
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
        <div className="flex justify-center mt-4">
          <ul className="inline-flex -space-x-px text-base h-10">
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index}>
                <button
                  onClick={() => paginate(index + 1)}
                  className={`flex items-center justify-center px-4 h-10 leading-tight ${
                    index + 1 === currentPage
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

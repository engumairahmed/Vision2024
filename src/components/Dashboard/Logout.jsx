import React from "react";

export const Logout = () => {
  return (
    <div id="logoutModal" className="fixed inset-0 bg-gray-800 bg-opacity-70 flex justify-center items-center mt-20">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Ready To Leave?</h2>
        <p className="text-gray-600 mb-6 text-center">
          Select "Logout" below if you are ready to end your current session..
        </p>
        <div className="flex justify-between">
          <button
            className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition duration-150 ease-in-out"
            onClick={() => {}}
          >
            Cancel
          </button>
          <button
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition duration-150 ease-in-out"
            onClick={() => {}}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

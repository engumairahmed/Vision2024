import React, { useState } from "react";
import Change_Password from "./Change_password"

export const Settings = () => {
  const [isActive, setIsActive] = useState(true); 
  const [storeName, setStoreName] = useState("TradeVista");

  const handleStoreStatusChange = () => {
    setIsActive((prevState) => !prevState);
  };

  const handleStoreNameChange = (event) => {
    setStoreName(event.target.value);
  };
  return (
    <div>
    <div className="settings-container mt-20">
      <h1 className="text-2xl font-semibold mb-4 text-white">
        Account Settings
      </h1>

      <div className="bg-gray-500 p-4 rounded-lg mb-4">
        <h2 className="text-xl font-medium mb-2">Store Information</h2>
        <div className="flex items-center mb-4 text-white">
          <label htmlFor="store-name" className="w-1/4">
            Store Name:
          </label>
          <input
            id="store-name"
            type="text"
            value={storeName}
            onChange={handleStoreNameChange}
            className="bg-gray-700 border border-gray-600 text-white rounded-lg p-2 w-3/4"
          />
        </div>
        <div className="flex items-center text-white">
          <label htmlFor="store-status" className="w-1/4">
            Store Status:
          </label>
          <button
            id="store-status"
            onClick={handleStoreStatusChange}
            className={`p-2 rounded-lg ${
              isActive ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {isActive ? "Active" : "Inactive"}
          </button>
        </div>
      </div>
    </div>
    <Change_Password></Change_Password>
    </div>
    
  );
};

import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const RoleModal = ({ onClose, userToken }) => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState("");

  // Handle role selection and submission
  const handleRoleSelection = (role) => {
    setSelectedRole(role);
  };

  const handleConfirmRole = () => {
    if (selectedRole) {
      // Assuming the `userToken` is passed as a prop, which contains the Google login token or relevant information
      axios
        .post(`${import.meta.env.VITE_URL}/assign-role`, {
          token: userToken, // User token to identify the user
          role: selectedRole, // Selected role: "Wholesaler" or "Retailer"
        })
        .then((response) => {
          // Save the token to the cookies if required
          Cookies.set("authToken", response.data.token, { expires: 1 });
          navigate("/dashboard"); // Redirect to the dashboard after setting the role
        })
        .catch((error) => {
          console.error("Error assigning role:", error);
        });
    }
  };

  return (
    <div
      id="roleSelectionModal"
      className="fixed inset-0 z-50 bg-gray-800 bg-opacity-70 flex justify-center items-center"
    >
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Select Your Role</h2>
        <p className="text-gray-600 mb-6 text-center">
          Please select your role to proceed with the login.
        </p>
        <div className="flex justify-around mb-6">
          <button
            className={`px-6 py-3 rounded-lg font-semibold transition duration-150 ${
              selectedRole === "Wholesaler"
                ? "bg-blue-800 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            onClick={() => handleRoleSelection("Wholesaler")}
          >
            Wholesaler
          </button>
          <button
            className={`px-6 py-3 rounded-lg font-semibold transition duration-150 ${
              selectedRole === "Retailer"
                ? "bg-blue-800 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            onClick={() => handleRoleSelection("Retailer")}
          >
            Retailer
          </button>
        </div>
        <div className="flex justify-between">
          <button
            className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition duration-150 ease-in-out"
            onClick={onClose} // Close the modal on cancel
          >
            Cancel
          </button>
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-150 ease-in-out"
            onClick={handleConfirmRole} // Confirm the selected role
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleModal;

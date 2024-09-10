import React from "react";
import { useNavigate } from "react-router-dom";
import { TbLockSquareRoundedFilled } from "react-icons/tb";

export const Forbidden = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
        Unauthorized Access
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mb-8">
        You do not have permission to view this page without the user's permission.
      </p>
      <div className="bg-red-600 p-6 rounded-full mb-6 animate-pulse">
      <TbLockSquareRoundedFilled />
      </div>
      <p className="text-lg md:text-xl text-gray-400 mb-10">
        It seems you don't have the required permissions to access this content.
      </p>
      <button
        className="bg-red-600 text-white px-6 py-4 rounded-full hover:bg-red-700 transition duration-300"
        onClick={() => navigate("/dashboard")}
      >
        Go Back to Home Page
      </button>
    </div>
  );
};

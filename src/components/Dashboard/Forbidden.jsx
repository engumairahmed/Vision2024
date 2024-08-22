import React from "react";
import { useNavigate } from "react-router-dom";

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
        <svg
          className="w-[47px] h-[47px] text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z"
            clipRule="evenodd"
          />
        </svg>
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

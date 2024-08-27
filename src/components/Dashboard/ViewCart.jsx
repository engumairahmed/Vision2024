import React from "react";

export const ViewCart = () => {
  return (
    <div className="min-h-screen py-8 dark:bg-gray-900">
      <section className="max-w-screen-xl mx-auto px-4 py-8 sm:py-12">
        <h2 className="text-3xl font-bold text-blue-800 dark:text-red-400 mb-8">
          Shopping Cart
        </h2>

        <div className="space-y-8">
          {/* Cart Item */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center p-4 md:p-6">
              <div className="flex-shrink-0">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                  alt="Product"
                  className="h-20 w-20 rounded-lg dark:hidden"
                />
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                  alt="Product"
                  className="hidden h-20 w-20 rounded-lg dark:block"
                />
              </div>

              <div className="flex-1 ml-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  PC system All in One APPLE iMac (2023)
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  Apple M3, 24" Retina 4.5K, 8GB, SSD 256GB, 10-core GPU,
                  Keyboard layout INT
                </p>
                <div className="flex items-center mt-4">
                  <p className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    $1,499
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-between ml-4">
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center h-8 w-8 rounded-md border border-gray-300 bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
                  >
                    <svg
                      className="h-4 w-4 text-gray-900 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 2"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 1h16"
                      />
                    </svg>
                  </button>
                  <input
                    type="text"
                    id="quantity"
                    className="w-16 text-center border border-gray-300 bg-transparent text-sm font-medium text-gray-900 dark:border-gray-600 dark:text-white"
                    value="2"
                    readOnly
                  />
                  <button
                    type="button"
                    className="inline-flex items-center justify-center h-8 w-8 rounded-md border border-gray-300 bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
                  >
                    <svg
                      className="h-4 w-4 text-gray-900 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 1v16M1 9h16"
                      />
                    </svg>
                  </button>
                </div>
                <button
                  type="button"
                  className="mt-4 inline-flex items-center text-sm font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                  <svg
                    className="mr-1.5 h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18 17.94 6M18 18 6.06 6"
                    />
                  </svg>
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-right">
          <button
            type="button"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Confirm Order
          </button>
        </div>
      </section>
    </div>
  );
};

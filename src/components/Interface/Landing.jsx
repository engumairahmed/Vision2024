import React from "react";
import { Link } from "react-router-dom";
import FooterComp from "./FooterComp";
import { FaUsers } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";

function HomePage() {
  return (
    <>
      <div className="max-w-5xl mx-auto text-center relative px-4 sm:px-10 mt-16">
        <h1 className="lg:text-6xl md:text-6xl text-4xl font-bold mb-6 md:!leading-[80px]">
          Connecting Wholesalers with Retailers for Quality
          <br /> Tech Parts
        </h1>
        <p id="main_home_head" className="text-base text-gray-400">
          Empowering Your Business with Quality, Value, and Trust. Discover
          exclusive offers and competitive prices on all computer parts.
          Committed to providing excellent customer service and support.
        </p>

        <div className="mt-14 flex gap-x-8 gap-y-4 justify-center max-sm:flex-col">
          <button
            type="button"
            className="bg-transparent hover:bg-[#007bff] border border-[#007bff] px-6 py-3.5 rounded-md text-gray-100 transition-all"
          >
            <Link to={"/register"}>Start Your Journey</Link>
          </button>
        </div>
      </div>

      <div className="px-4 sm:px-10">
        <div className="mt-32 max-w-7xl mx-auto">
          <div className="mb-16 max-w-2xl text-center mx-auto">
            <h2 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6">
              Why Choose Trade Vista?
            </h2>
            <p id="main_home_head" className="text-gray-400">
              Discover the benefits of using our platform for all your computer
              parts needs.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 mt-16">
            <div className="text-center bg-[#111] px-6 py-8 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-12 mb-6 inline-block bg-gray-700 p-3 rounded-xl"
                viewBox="0 0 32 32"
              >
                <path
                  d="M28.068 12h-.128a.934.934 0 0 1-.864-.6.924.924 0 0 1 .2-1.01l.091-.091a2.938 2.938 0 0 0 0-4.147l-1.511-1.51a2.935 2.935 0 0 0-4.146 0l-.091.091A.956.956 0 0 1 20 4.061v-.129A2.935 2.935 0 0 0 17.068 1h-2.136A2.935 2.935 0 0 0 12 3.932v.129a.956.956 0 0 1-1.614.668l-.086-.091a2.935 2.935 0 0 0-4.146 0l-1.516 1.51a2.938 2.938 0 0 0 0 4.147l.091.091a.935.935 0 0 1 .185 1.035.924.924 0 0 1-.854.579h-.128A2.935 2.935 0 0 0 1 14.932v2.136A2.935 2.935 0 0 0 3.932 20h.128a.934.934 0 0 1 .864.6.924.924 0 0 1-.2 1.01l-.091.091a2.938 2.938 0 0 0 0 4.147l1.51 1.509a2.934 2.934 0 0 0 4.147 0l.091-.091a.936.936 0 0 1 1.035-.185.922.922 0 0 1 .579.853v.129A2.935 2.935 0 0 0 14.932 31h2.136A2.935 2.935 0 0 0 20 28.068v-.129a.956.956 0 0 1 1.614-.668l.091.091a2.935 2.935 0 0 0 4.146 0l1.511-1.509a2.938 2.938 0 0 0 0-4.147l-.091-.091a.935.935 0 0 1-.185-1.035.924.924 0 0 1 .854-.58h.128A2.935 2.935 0 0 0 31 17.068v-2.136A2.935 2.935 0 0 0 28.068 12ZM29 17.068a.933.933 0 0 1-.932.932h-.128a2.956 2.956 0 0 0-2.083 5.028l.09.091a.934.934 0 0 1 0 1.319l-1.511 1.509a.932.932 0 0 1-1.318 0l-.09-.091A2.957 2.957 0 0 0 18 27.939v.129a.933.933 0 0 1-.932.932h-2.136a.933.933 0 0 1-.932-.932v-.129a2.951 2.951 0 0 0-5.028-2.082l-.091.091a.934.934 0 0 1-1.318 0l-1.51-1.509a.934.934 0 0 1 0-1.319l.091-.091A2.956 2.956 0 0 0 4.06 18h-.128A.933.933 0 0 1 3 17.068v-2.136A.933.933 0 0 1 3.932 14h.128a2.956 2.956 0 0 0 2.083-5.028l-.09-.091a.933.933 0 0 1 0-1.318l1.51-1.511a.932.932 0 0 1 1.318 0l.09.091A2.957 2.957 0 0 0 14 4.061v-.129A.933.933 0 0 1 14.932 3h2.136a.933.933 0 0 1 .932.932v.129a2.956 2.956 0 0 0 5.028 2.082l.091-.091a.932.932 0 0 1 1.318 0l1.51 1.511a.933.933 0 0 1 0 1.318l-.091.091A2.956 2.956 0 0 0 27.94 14h.128a.933.933 0 0 1 .932.932Z"
                  data-original="#000000"
                />
                <path
                  d="M16 9a7 7 0 1 0 7 7 7.008 7.008 0 0 0-7-7Zm0 12a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Z"
                  data-original="#000000"
                />
              </svg>
              <h3 className="text-xl mb-4">Wide Selection</h3>
              <p className="text-gray-400">
                Access a vast range of computer parts. Whether you're looking
                for the latest graphics cards, processors, or accessories, Trade
                Vista has you covered with an extensive inventory.
              </p>
            </div>
            <div className="text-center bg-[#111] px-6 py-8 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-12 mb-6 inline-block bg-gray-700 p-3 rounded-xl"
                viewBox="0 0 682.667 682.667"
              >
                <defs>
                  <clipPath id="a" clipPathUnits="userSpaceOnUse">
                    <path d="M0 512h512V0H0Z" data-original="#000000" />
                  </clipPath>
                </defs>
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="40"
                  clipPath="url(#a)"
                  transform="matrix(1.33 0 0 -1.33 0 682.667)"
                >
                  <path
                    d="M256 492 60 410.623v-98.925C60 183.674 137.469 68.38 256 20c118.53 48.38 196 163.674 196 291.698v98.925z"
                    data-original="#000000"
                  />
                  <path
                    d="M178 271.894 233.894 216 334 316.105"
                    data-original="#000000"
                  />
                </g>
              </svg>
              <h3 className="text-xl mb-4">Easy Transactions</h3>
              <p className="text-gray-400">
                Smooth and secure buying process. Experience a hassle-free and
                secure checkout process, with multiple payment options and
                robust data protection measures.
              </p>
            </div>
            <div className="text-center bg-[#111] px-6 py-8 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-12 mb-6 inline-block bg-gray-700 p-3 rounded-xl"
                viewBox="0 0 512.001 512.001"
              >
                <path
                  d="M271.029 0c-33.091 0-61 27.909-61 61s27.909 61 61 61 60-27.909 60-61-26.909-61-60-61zm66.592 122c-16.485 18.279-40.096 30-66.592 30-26.496 0-51.107-11.721-67.592-30-14.392 15.959-23.408 36.866-23.408 60v15c0 8.291 6.709 15 15 15h151c8.291 0 15-6.709 15-15v-15c0-23.134-9.016-44.041-23.408-60zM144.946 460.404 68.505 307.149c-7.381-14.799-25.345-20.834-40.162-13.493l-19.979 9.897c-7.439 3.689-10.466 12.73-6.753 20.156l90 180c3.701 7.423 12.704 10.377 20.083 6.738l19.722-9.771c14.875-7.368 20.938-25.417 13.53-40.272zM499.73 247.7c-12.301-9-29.401-7.2-39.6 3.9l-82 100.8c-5.7 6-16.5 9.6-22.2 9.6h-69.901c-8.401 0-15-6.599-15-15s6.599-15 15-15h60c16.5 0 30-13.5 30-30s-13.5-30-30-30h-78.6c-7.476 0-11.204-4.741-17.1-9.901-23.209-20.885-57.949-30.947-93.119-22.795-19.528 4.526-32.697 12.415-46.053 22.993l-.445-.361-21.696 19.094L174.28 452h171.749c28.2 0 55.201-13.5 72.001-36l87.999-126c9.9-13.201 7.2-32.399-6.299-42.3z"
                  data-original="#000000"
                />
              </svg>
              <h3 className="text-xl mb-4">Trusted Wholesalers</h3>
              <p className="text-gray-400">
                Partnered with reliable suppliers. We carefully vet and partner
                with only the most reputable wholesalers to ensure you receive
                genuine and high-quality computer parts.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center mt-32">
          <div>
            <h2 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6">
              Popular Products
            </h2>
            <p id="main_home_head" className="text-gray-400">
              Explore a curated selection of our best-selling products that have
              won the hearts of customers. <br /> Find out what makes these
              favorites stand out!
            </p>
          </div>

          <div className="font-sans  px-4 py-8">
            <div className="mx-auto lg:max-w-6xl md:max-w-4xl">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <div className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                  <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img
                      src="/products/adapter1.jpg"
                      alt="product1"
                      className="h-full w-5/6 mx-auto block object-contain"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-sm font-bold text-gray-800">
                      Laptop Adapter
                    </h3>
                    <h4 className="text-base text-blue-600 font-bold mt-2">
                      $95.00
                    </h4>
                  </div>
                </div>

                <div className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                  <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img
                      src="/products/adapter2.jpg"
                      alt="product2"
                      className="h-full w-5/6 mx-auto block object-contain"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-sm font-bold text-gray-800">
                      Laptop Adapter
                    </h3>
                    <h4 className="text-base text-blue-600 font-bold mt-2">
                      $20.00
                    </h4>
                  </div>
                </div>

                <div className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                  <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img
                      src="https://readymadeui.com/images/laptop4.webp"
                      alt="product3"
                      className="h-full w-5/6 mx-auto block object-contain"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-sm font-bold text-gray-800">
                      Acer One 14 AMD
                    </h3>
                    <h4 className="text-base text-blue-600 font-bold mt-2">
                      $400.00
                    </h4>
                  </div>
                </div>

                <div className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                  <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img
                      src="/products/dc_jack_1.jpg"
                      alt="product4"
                      className="h-full w-5/6 mx-auto block object-contain"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-sm font-bold text-gray-800">
                      Lenovo DC Jack
                    </h3>
                    <h4 className="text-base text-blue-600 font-bold mt-2">
                      $11.00
                    </h4>
                  </div>
                </div>

                <div className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                  <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img
                      src="/products/keyboard2.jpg"
                      alt="product5"
                      className="h-full w-5/6 mx-auto block object-contain"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-sm font-bold text-gray-800">
                      Laptop Keyboard
                    </h3>
                    <h4 className="text-base text-blue-600 font-bold mt-2">
                      $90.00
                    </h4>
                  </div>
                </div>

                <div className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                  <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img
                      src="https://readymadeui.com/images/watch7.webp"
                      alt="product6"
                      className="h-full w-5/6 mx-auto block object-contain"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-sm font-bold text-gray-800">
                      Smart Watch
                    </h3>
                    <h4 className="text-base text-blue-600 font-bold mt-2">
                      $110.00
                    </h4>
                  </div>
                </div>

                <div className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                  <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img
                      src="https://readymadeui.com/images/watch8.webp"
                      alt="product7"
                      className="h-full w-5/6 mx-auto block object-contain"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-sm font-bold text-gray-800">
                      Smart Watch
                    </h3>
                    <h4 className="text-base text-blue-600 font-bold mt-2">
                      $50.00
                    </h4>
                  </div>
                </div>

                <div className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                  <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img
                      src="https://readymadeui.com/images/laptop2.webp"
                      alt="product8"
                      className="h-full w-5/6 mx-auto block object-contain"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-sm font-bold text-gray-800">
                      ASUS Vivobook 15
                    </h3>
                    <h4 className="text-base text-blue-600 font-bold mt-2">
                      $450.00
                    </h4>
                  </div>
                </div>

                <div className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                  <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img
                      src="/products/dc_jack_2.jpg"
                      alt="product1"
                      className="h-full w-5/6 mx-auto block object-contain"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-sm font-bold text-gray-800">DC Jack</h3>
                    <h4 className="text-base text-blue-600 font-bold mt-2">
                      $95.00
                    </h4>
                  </div>
                </div>

                <div className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                  <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img
                      src="/products/laptop_cpu_fan.jpg"
                      alt="product2"
                      className="h-full w-5/6 mx-auto block object-contain"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-sm font-bold text-gray-800">
                      Laptop CPU Fan
                    </h3>
                    <h4 className="text-base text-blue-600 font-bold mt-2">
                      $20.00
                    </h4>
                  </div>
                </div>

                <div className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                  <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img
                      src="https://readymadeui.com/images/laptop4.webp"
                      alt="product3"
                      className="h-full w-5/6 mx-auto block object-contain"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-sm font-bold text-gray-800">
                      Acer One 14 AMD
                    </h3>
                    <h4 className="text-base text-blue-600 font-bold mt-2">
                      $400.00
                    </h4>
                  </div>
                </div>

                <div className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                  <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img
                      src="https://readymadeui.com/images/watch5.webp"
                      alt="product4"
                      className="h-full w-5/6 mx-auto block object-contain"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-sm font-bold text-gray-800">
                      Irish Cream Dream
                    </h3>
                    <h4 className="text-base text-blue-600 font-bold mt-2">
                      $11.00
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6">
              Our Pricing Plans
            </h2>
            <p id="main_home_head" className="text-gray-400">
              Choose the plan that best suits your business needs and start
              connecting with wholesalers and retailers today!
            </p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-16 max-md:max-w-md max-md:mx-auto">
            <div className="hover:outline outline-blue-600 rounded relative overflow-hidden transition-all p-6">
              <div className="text-left">
                <h4 className="text-xl mb-4">Basic Plan</h4>
                <h3 className="text-4xl"> Free or a nominal fee</h3>
                <p className="mt-4 text-gray-400">
                  Get started with the essentials for free. Perfect for small
                  businesses looking to make their first connections.
                </p>
              </div>
              <div className="mt-8">
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    Limited product listings
                  </li>
                  <li className="flex items-center text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    Basic customer support
                  </li>
                  <li className="flex items-center text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    Access to a limited number of wholesaler/retailer profiles
                  </li>
                  <li className="flex items-center text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    Basic analytics
                  </li>
                </ul>
              </div>
              <button
                type="button"
                className="w-full px-6 py-3.5 rounded-md text-gray-100 bg-blue-700 hover:bg-blue-800 transition-all mt-10"
              >
                Get started today
              </button>
            </div>
            <div className="hover:outline outline-blue-600 rounded relative overflow-hidden transition-all p-6">
              <div className="text-left">
                <h4 className="text-xl mb-4">Standard Plan</h4>
                <h3 className="text-4xl">Moderate monthly fee</h3>
                <p className="mt-4 text-gray-400">
                  Enhance your business capabilities with more listings and
                  priority support. Ideal for growing businesses looking to
                  extend..
                </p>
              </div>
              <div className="mt-8">
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    Access to a larger number of wholesaler/retailer profiles
                  </li>
                  <li className="flex items-center text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    Priority customer support
                  </li>
                  <li className="flex items-center text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    Basic promotional tools
                  </li>

                  <li className="flex items-center text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    Enhanced analytics and reporting
                  </li>
                </ul>
              </div>
              <button
                type="button"
                className="w-full px-6 py-3.5 rounded-md text-gray-100 bg-blue-700 hover:bg-blue-800 transition-all mt-10"
              >
                Get started today
              </button>
            </div>
            <div className="hover:outline outline-blue-600 rounded relative overflow-hidden transition-all p-6">
              <div className="text-left">
                <h4 className="text-xl mb-4">Premium Plan</h4>
                <h3 className="text-4xl">Higher monthly fee</h3>
                <p className="mt-4 text-gray-400">
                  Unlock unlimited potential with comprehensive features and
                  dedicated support. Best for established businesses looking to
                  expand.
                </p>
              </div>
              <div className="mt-8">
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    Unlimited product listings
                  </li>
                  <li className="flex items-center text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    Dedicated customer support
                  </li>
                  <li className="flex items-center text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    Full access to all wholesaler/retailer profiles
                  </li>
                  <li className="flex items-center text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    Advanced promotional tools and marketing features
                  </li>
                </ul>
              </div>
              <button
                type="button"
                className="w-full px-6 py-3.5 rounded-md text-gray-100 bg-blue-700 hover:bg-blue-800 transition-all mt-10"
              >
                Get started today
              </button>
            </div>
          </div>
        </div>

        <div className="mt-32">
          <div className="mb-16 max-w-2xl text-center mx-auto">
            <h2 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6">
              {" "}
              Key Performance Metrics
            </h2>
            <p id="main_home_head" className="text-gray-400">
              Track and analyze essential metrics to optimize your website's
              performance and grow your business.
            </p>
          </div>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-12 lg:divide-x lg:divide-gray-300">
            <div className="text-center">
              <FaUsers className="fill-blue-600 w-10 h-10 inline-block" />
              <h3 className="text-4xl text-blue-600 mt-6">400+</h3>
              <p className="mt-4">Unique Visitors</p>
            </div>
            <div className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-blue-600 w-10 inline-block"
                viewBox="0 0 512 512"
              >
                <path
                  fillRule="evenodd"
                  d="M64.217 333.491h41.421c5.508 0 10 4.492 10 10v97.833c0 5.508-4.492 10-10 10H64.217c-5.508 0-10-4.492-10-10v-97.833c0-5.508 4.492-10 10-10zm155.471-61.737h-41.422c-5.508 0-10 4.492-10 10v159.571c0 5.508 4.492 10 10 10h41.422c5.508 0 10-4.492 10-10V281.754c0-5.508-4.493-10-10-10zm114.049-64.466h-41.421c-5.508 0-10 4.492-10 10v224.036c0 5.508 4.492 10 10 10h41.421c5.508 0 10-4.492 10-10V217.288c-.001-5.507-4.493-10-10-10zm72.625-57.992h41.421c5.508 0 10 4.492 10 10v282.028c0 5.508-4.492 10-10 10h-41.421c-5.508 0-10-4.492-10-10V159.296c0-5.508 4.492-10 10-10zm2.707-106.018a7.98 7.98 0 0 1-.812-15.938l49.121-2.666a7.98 7.98 0 0 1 8.307 9.094l.006.001-7.088 48.68a7.986 7.986 0 0 1-15.812-2.25l3.878-26.632C385.642 108.019 321.72 152.702 257.158 189.5c-69.131 39.402-138.98 69.744-206.779 93.355a7.976 7.976 0 0 1-5.25-15.062c66.943-23.313 135.906-53.269 204.154-92.167 63.527-36.208 126.449-80.188 186.56-133.799zM45.262 481.873h421.477c5.508 0 10 4.492 10 10v3.193c0 5.508-4.492 10-10 10H45.262c-5.508 0-10-4.492-10-10v-3.193c0-5.508 4.492-10 10-10zM139.587 6.935c-48.325 0-87.5 39.175-87.5 87.5s39.175 87.5 87.5 87.5 87.5-39.175 87.5-87.5c-.001-48.325-39.176-87.5-87.5-87.5zm-8 32.13v5.279c-5.474 1.183-10.606 3.537-14.768 6.92-6.626 5.387-10.827 13.21-10.353 22.965.476 9.817 5.372 16.4 12.186 20.849 5.887 3.844 13.093 5.827 19.733 6.917 5.206.855 10.757 2.201 14.95 4.733 3.261 1.969 5.71 4.838 6.23 9.127.072.595.111 1.013.117 1.26.08 3.359-1.536 5.926-3.962 7.767-3.135 2.379-7.564 3.785-12.005 4.324a33.57 33.57 0 0 1-3.172.254c-5.25.126-10.424-1.156-14.458-3.842-3.274-2.18-5.775-5.367-6.818-9.552a7.982 7.982 0 0 0-15.5 3.812c2.094 8.399 7.044 14.749 13.505 19.052 4.252 2.831 9.164 4.736 14.315 5.711v5.165a8 8 0 1 0 16-.001v-5.01c6.309-1.038 12.699-3.388 17.758-7.226 6.302-4.782 10.494-11.632 10.275-20.829a29.17 29.17 0 0 0-.179-2.76c-1.22-10.052-6.653-16.591-13.856-20.94-6.27-3.786-13.768-5.668-20.637-6.796-4.832-.793-9.912-2.13-13.607-4.543-2.767-1.806-4.752-4.416-4.937-8.224-.202-4.157 1.615-7.512 4.478-9.84 2.281-1.854 5.196-3.144 8.362-3.781a22.978 22.978 0 0 1 10.115.244c5.278 1.338 10.083 4.817 12.614 10.845a7.997 7.997 0 0 0 10.469 4.281 7.997 7.997 0 0 0 4.281-10.469c-4.701-11.196-13.65-17.664-23.489-20.158a37.3 37.3 0 0 0-1.646-.377v-5.161a8 8 0 1 0-16.001.004z"
                  clipRule="evenodd"
                  data-original="#000000"
                />
              </svg>
              <h3 className="text-4xl text-blue-600 mt-6">450+</h3>
              <p className="mt-4">Total Sales</p>
            </div>
            <div className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-blue-600 w-10 inline-block"
                viewBox="0 0 28 28"
              >
                <path
                  d="M18.56 16.94h-3.12l.65-2.16a2.58 2.58 0 0 0-1.66-3.21 1.41 1.41 0 0 0-1.81 1l-.1.42a8.61 8.61 0 0 1-2.26 4l-.57.56a1.56 1.56 0 0 0-1.21-.59h-.73a1.56 1.56 0 0 0-1.56 1.54v6.44a1.56 1.56 0 0 0 1.56 1.56h.73a1.55 1.55 0 0 0 1.33-.76l.14.07a6.55 6.55 0 0 0 2.91.69h3.59a3.58 3.58 0 0 0 3-1.6 6.34 6.34 0 0 0 1.07-3.53v-2.49a1.94 1.94 0 0 0-1.96-1.94zm-9.56 8a.56.56 0 0 1-.56.56h-.69a.56.56 0 0 1-.56-.56V18.5a.56.56 0 0 1 .56-.56h.73a.56.56 0 0 1 .52.56zm10.5-3.57a5.38 5.38 0 0 1-.9 3 2.59 2.59 0 0 1-2.15 1.15h-3.59a5.53 5.53 0 0 1-2.46-.58l-.4-.2V18.6l.92-.92a9.63 9.63 0 0 0 2.53-4.46l.1-.41a.43.43 0 0 1 .2-.26.4.4 0 0 1 .32 0 1.58 1.58 0 0 1 1 2l-.84 2.81a.5.5 0 0 0 .08.44.48.48 0 0 0 .4.2h3.79a.94.94 0 0 1 .94.94zM11 7.3l-.32 1.85a1.09 1.09 0 0 0 .44 1.09 1.11 1.11 0 0 0 .65.22 1.18 1.18 0 0 0 .52-.13L14 9.45l1.67.88a1.1 1.1 0 0 0 1.17-.09 1.09 1.09 0 0 0 .44-1.08L17 7.3 18.31 6a1.1 1.1 0 0 0 .29-1.14 1.12 1.12 0 0 0-.9-.76l-1.87-.27L15 2.12a1.12 1.12 0 0 0-2 0l-.83 1.69-1.87.27a1.12 1.12 0 0 0-.9.76A1.1 1.1 0 0 0 9.69 6zm-.6-2.23 2.13-.31a.49.49 0 0 0 .47-.27l1-1.93a.11.11 0 0 1 .2 0l1 1.93a.49.49 0 0 0 .38.27l2.13.31a.12.12 0 0 1 .09.08.11.11 0 0 1 0 .11l-1.54 1.5a.53.53 0 0 0-.15.45l.37 2.11a.09.09 0 0 1-.05.11.1.1 0 0 1-.12 0l-1.9-1a.47.47 0 0 0-.46 0l-1.91 1a.09.09 0 0 1-.11 0 .09.09 0 0 1-.05-.11l.37-2.11a.53.53 0 0 0-.15-.45l-1.54-1.5a.11.11 0 0 1 0-.11.12.12 0 0 1-.12-.08zm-3.06 8.18a1 1 0 0 0 1-1.19l-.27-1.52 1.12-1.09a1 1 0 0 0-.56-1.73L7.1 7.5l-.69-1.39a1.05 1.05 0 0 0-1.82 0L3.9 7.5l-1.53.22a1 1 0 0 0-.56 1.73l1.11 1.09-.27 1.52a1 1 0 0 0 .41 1 1 1 0 0 0 1.07.07l1.37-.72 1.37.72a1 1 0 0 0 .47.12zm-1.84-1.9a.46.46 0 0 0-.23.06l-1.63.82.36-1.78a.53.53 0 0 0-.2-.45L2.51 8.71l1.8-.26a.47.47 0 0 0 .37-.27l.83-1.63.81 1.63a.47.47 0 0 0 .37.27l1.8.29L7.2 10a.53.53 0 0 0-.15.45l.29 1.8-1.61-.84a.46.46 0 0 0-.23-.06zm20.95-2.94a1 1 0 0 0-.82-.69L24.1 7.5l-.69-1.39a1.05 1.05 0 0 0-1.82 0L20.9 7.5l-1.53.22a1 1 0 0 0-.56 1.73l1.11 1.09-.27 1.52a1 1 0 0 0 .41 1 1 1 0 0 0 1.07.07l1.37-.72 1.37.72a1 1 0 0 0 .47.12 1 1 0 0 0 1-1.19l-.27-1.52 1.11-1.09a1 1 0 0 0 .27-1.04zM24.2 10a.53.53 0 0 0-.15.45l.29 1.8-1.61-.84a.47.47 0 0 0-.46 0l-1.63.82.36-1.78a.53.53 0 0 0-.2-.45l-1.29-1.29 1.8-.26a.47.47 0 0 0 .37-.27l.83-1.63.81 1.63a.47.47 0 0 0 .37.27l1.8.29z"
                  data-name="Layer 2"
                  data-original="#000000"
                />
              </svg>
              <h3 className="text-4xl text-blue-600 mt-6">500+</h3>
              <p className="mt-4">Customer Satisfaction</p>
            </div>
            <div className="text-center">
              <GoClockFill className="fill-blue-600 w-9 h-10 inline-block" />
              <h3 className="text-4xl text-blue-600 mt-6">600+</h3>
              <p className="mt-4">System Uptime (in hours)</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;

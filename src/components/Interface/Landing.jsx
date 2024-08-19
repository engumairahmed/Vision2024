import React from 'react';
import { Link } from 'react-router-dom';
import FooterComp from './FooterComp';


function HomePage() {
  return (
    <>

      <div className="max-w-5xl mx-auto text-center relative px-4 sm:px-10 mt-16">
        <h1 className="lg:text-6xl md:text-6xl text-4xl font-bold mb-6 md:!leading-[80px]">Connecting Wholesalers with Retailers for Quality<br /> Tech Parts
        </h1>
        <p id='main_home_head' className="text-base text-gray-400">Empowering Your Business with Quality, Value,
          and Trust.
          Discover exclusive offers and competitive prices on all computer parts.
          Committed to providing excellent customer service and support.</p>


        <div className="mt-14 flex gap-x-8 gap-y-4 justify-center max-sm:flex-col">

          <button type='button'
            className="bg-transparent hover:bg-[#007bff] border border-[#007bff] px-6 py-3.5 rounded-md text-gray-100 transition-all"><Link to={'/register'}>Start Your Journey</Link></button>
        </div>
      </div>

      <div className="px-4 sm:px-10">
        <div className="mt-32 max-w-7xl mx-auto">
          <div className="mb-16 max-w-2xl text-center mx-auto">
            <h2 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6">Why Choose Trade Vista?</h2>
            <p id='main_home_head' className="text-gray-400">Discover the benefits of using our platform for all your computer parts needs.</p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 mt-16">
            <div className="text-center bg-[#111] px-6 py-8 rounded-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                className="w-12 mb-6 inline-block bg-gray-700 p-3 rounded-xl" viewBox="0 0 32 32">
                <path
                  d="M28.068 12h-.128a.934.934 0 0 1-.864-.6.924.924 0 0 1 .2-1.01l.091-.091a2.938 2.938 0 0 0 0-4.147l-1.511-1.51a2.935 2.935 0 0 0-4.146 0l-.091.091A.956.956 0 0 1 20 4.061v-.129A2.935 2.935 0 0 0 17.068 1h-2.136A2.935 2.935 0 0 0 12 3.932v.129a.956.956 0 0 1-1.614.668l-.086-.091a2.935 2.935 0 0 0-4.146 0l-1.516 1.51a2.938 2.938 0 0 0 0 4.147l.091.091a.935.935 0 0 1 .185 1.035.924.924 0 0 1-.854.579h-.128A2.935 2.935 0 0 0 1 14.932v2.136A2.935 2.935 0 0 0 3.932 20h.128a.934.934 0 0 1 .864.6.924.924 0 0 1-.2 1.01l-.091.091a2.938 2.938 0 0 0 0 4.147l1.51 1.509a2.934 2.934 0 0 0 4.147 0l.091-.091a.936.936 0 0 1 1.035-.185.922.922 0 0 1 .579.853v.129A2.935 2.935 0 0 0 14.932 31h2.136A2.935 2.935 0 0 0 20 28.068v-.129a.956.956 0 0 1 1.614-.668l.091.091a2.935 2.935 0 0 0 4.146 0l1.511-1.509a2.938 2.938 0 0 0 0-4.147l-.091-.091a.935.935 0 0 1-.185-1.035.924.924 0 0 1 .854-.58h.128A2.935 2.935 0 0 0 31 17.068v-2.136A2.935 2.935 0 0 0 28.068 12ZM29 17.068a.933.933 0 0 1-.932.932h-.128a2.956 2.956 0 0 0-2.083 5.028l.09.091a.934.934 0 0 1 0 1.319l-1.511 1.509a.932.932 0 0 1-1.318 0l-.09-.091A2.957 2.957 0 0 0 18 27.939v.129a.933.933 0 0 1-.932.932h-2.136a.933.933 0 0 1-.932-.932v-.129a2.951 2.951 0 0 0-5.028-2.082l-.091.091a.934.934 0 0 1-1.318 0l-1.51-1.509a.934.934 0 0 1 0-1.319l.091-.091A2.956 2.956 0 0 0 4.06 18h-.128A.933.933 0 0 1 3 17.068v-2.136A.933.933 0 0 1 3.932 14h.128a2.956 2.956 0 0 0 2.083-5.028l-.09-.091a.933.933 0 0 1 0-1.318l1.51-1.511a.932.932 0 0 1 1.318 0l.09.091A2.957 2.957 0 0 0 14 4.061v-.129A.933.933 0 0 1 14.932 3h2.136a.933.933 0 0 1 .932.932v.129a2.956 2.956 0 0 0 5.028 2.082l.091-.091a.932.932 0 0 1 1.318 0l1.51 1.511a.933.933 0 0 1 0 1.318l-.091.091A2.956 2.956 0 0 0 27.94 14h.128a.933.933 0 0 1 .932.932Z"
                  data-original="#000000" />
                <path d="M16 9a7 7 0 1 0 7 7 7.008 7.008 0 0 0-7-7Zm0 12a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Z"
                  data-original="#000000" />
              </svg>
              <h3 className="text-xl mb-4">Wide Selection</h3>
              <p className="text-gray-400">Access a vast range of computer parts. Whether you're looking for the latest graphics cards, processors, or accessories, Trade Vista has you covered with an extensive inventory.</p>

            </div>
            <div className="text-center bg-[#111] px-6 py-8 rounded-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                className="w-12 mb-6 inline-block bg-gray-700 p-3 rounded-xl" viewBox="0 0 682.667 682.667">
                <defs>
                  <clipPath id="a" clipPathUnits="userSpaceOnUse">
                    <path d="M0 512h512V0H0Z" data-original="#000000" />
                  </clipPath>
                </defs>
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                  stroke-width="40" clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                  <path
                    d="M256 492 60 410.623v-98.925C60 183.674 137.469 68.38 256 20c118.53 48.38 196 163.674 196 291.698v98.925z"
                    data-original="#000000" />
                  <path d="M178 271.894 233.894 216 334 316.105" data-original="#000000" />
                </g>
              </svg>
              <h3 className="text-xl mb-4">Easy Transactions</h3>
              <p className="text-gray-400">Smooth and secure buying process. Experience a hassle-free and secure checkout process, with multiple payment options and robust data protection measures.</p>
            </div>
            <div className="text-center bg-[#111] px-6 py-8 rounded-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                className="w-12 mb-6 inline-block bg-gray-700 p-3 rounded-xl" viewBox="0 0 512.001 512.001">
                <path
                  d="M271.029 0c-33.091 0-61 27.909-61 61s27.909 61 61 61 60-27.909 60-61-26.909-61-60-61zm66.592 122c-16.485 18.279-40.096 30-66.592 30-26.496 0-51.107-11.721-67.592-30-14.392 15.959-23.408 36.866-23.408 60v15c0 8.291 6.709 15 15 15h151c8.291 0 15-6.709 15-15v-15c0-23.134-9.016-44.041-23.408-60zM144.946 460.404 68.505 307.149c-7.381-14.799-25.345-20.834-40.162-13.493l-19.979 9.897c-7.439 3.689-10.466 12.73-6.753 20.156l90 180c3.701 7.423 12.704 10.377 20.083 6.738l19.722-9.771c14.875-7.368 20.938-25.417 13.53-40.272zM499.73 247.7c-12.301-9-29.401-7.2-39.6 3.9l-82 100.8c-5.7 6-16.5 9.6-22.2 9.6h-69.901c-8.401 0-15-6.599-15-15s6.599-15 15-15h60c16.5 0 30-13.5 30-30s-13.5-30-30-30h-78.6c-7.476 0-11.204-4.741-17.1-9.901-23.209-20.885-57.949-30.947-93.119-22.795-19.528 4.526-32.697 12.415-46.053 22.993l-.445-.361-21.696 19.094L174.28 452h171.749c28.2 0 55.201-13.5 72.001-36l87.999-126c9.9-13.201 7.2-32.399-6.299-42.3z"
                  data-original="#000000" />
              </svg>
              <h3 className="text-xl mb-4">Trusted Wholesalers</h3>
              <p className="text-gray-400">Partnered with reliable suppliers. We carefully vet and partner with only the most reputable wholesalers to ensure you receive genuine and high-quality computer parts.</p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center mt-32">
          <div>
            <h2 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6">Popular Products</h2>
            <p id='main_home_head' className="text-gray-400">Explore a curated selection of our best-selling products that have won the hearts of customers. <br /> Find out what makes these favorites stand out!</p>
          </div>

          <div id='img1' class="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full py-6 max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
            <div class="flex items-center gap-1 px-6">
              <h3 class="text-xl text-gray-800 font-bold flex-1">Backlit Keyboard</h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="18px" class="cursor-pointer fill-blue-600 shrink-0"
                viewBox="0 0 64 64">
                <path
                  d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                  data-original="#000000"></path>
              </svg>
            </div>

            <div class="min-h-[100px]">
              <img src="https://blog.logicalincrements.com/wp-content/uploads/2021/06/prebuilt2.jpg" />
            </div>

            <div class="px-6">
              <p class="text-sm text-gray-600 leading-relaxed">A backlit keyboard is a keyboard that contains a light underneath the keys. The backlight illuminates the l</p>

              <div class="mt-8 flex items-center flex-wrap gap-4">
                <h3 class="text-xl text-gray-800 font-bold flex-1">Rs. 6,000 </h3>

              </div>
            </div>
          </div>

          <div id='img2' class="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full py-6 max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
            <div class="flex items-center gap-1 px-6">
              <h3 class="text-xl text-gray-800 font-bold flex-1">Frost Gaming PC</h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="18px" class="cursor-pointer fill-blue-600 shrink-0"
                viewBox="0 0 64 64">
                <path
                  d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                  data-original="#000000"></path>
              </svg>
            </div>

            <div class="min-h-[100px]">
              <img src="https://blog.logicalincrements.com/wp-content/uploads/2021/06/prebuilt2.jpg" class="w-full my-2" />
            </div>

            <div class="px-6">
              <p class="text-sm text-gray-600 leading-relaxed">It's equipped with a GTX 1660 6GB with 16GB DDR4 RAM and 1TB SSD storage..</p>

              <div class="mt-8 flex items-center flex-wrap gap-4">
                <h3 class="text-xl text-gray-800 font-bold flex-1">Rs:120000</h3>

              </div>
            </div>
          </div>

          <div id='img3' class="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full py-6 max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
            <div class="flex items-center gap-1 px-6">
              <h3 class="text-xl text-gray-800 font-bold flex-1">HP i5 Laptop</h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="18px" class="cursor-pointer fill-blue-600 shrink-0"
                viewBox="0 0 64 64">
                <path
                  d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                  data-original="#000000"></path>
              </svg>
            </div>

            <div class="min-h-[100px]">
              <img src="https://blog.logicalincrements.com/wp-content/uploads/2021/06/prebuilt2.jpg" class="w-full my-2" />
            </div>

            <div class="px-6">
              <p class="text-sm text-gray-600 leading-relaxed">HP i5 laptops are suitable for budget-conscious customers who prefer power-p</p>

              <div class="mt-8 flex items-center flex-wrap gap-4">
                <h3 class="text-xl text-gray-800 font-bold flex-1">Rs:140,999 </h3>

              </div>
            </div>
          </div>



        </div>




        <div className="mt-32 max-w-7xl mx-auto">
          <div className="mb-16 max-w-2xl text-center mx-auto">
            <h2 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6">What Our Customers Say</h2>
            <p id='main_home_head' className="text-gray-400">Hear Firsthand Experiences from Our Valued Customers and Discover Why Trade Vista is Their Preferred Choice for Quality Computer Parts</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 max-md:justify-center text-center mt-16">
            <div>
              <div className="flex flex-col items-center">
                <img src="https://readymadeui.com/team-4.webp"
                  className="w-24 h-24 rounded-full shadow-xl border-2 border-white" />
                <div className="mt-4">
                  <h4 className="text-base">Laiba Waqar</h4>
                  <p className="text-xs text-blue-600 mt-2">CEO, Company</p>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-gray-400">The service was amazing. I never had to wait that long for my food. The staff was
                  friendly and attentive, and the delivery was impressively prompt.</p>
              </div>
              <div className="flex justify-center space-x-2 mt-4">
                <svg className="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center">
                <img src="https://readymadeui.com/team-5.webp"
                  className="w-24 h-24 rounded-full shadow-xl border-2 border-white" />
                <div className="mt-4">
                  <h4 className="text-base">Umair Ahmed</h4>
                  <p className="text-xs text-blue-600 mt-2">CEO, Company</p>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-gray-400">The service was amazing. I never had to wait that long for my food. The staff was
                  friendly and attentive, and the delivery was impressively prompt.</p>
              </div>
              <div className="flex justify-center space-x-2 mt-4">
                <svg className="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center">
                <img src="https://readymadeui.com/team-3.webp"
                  className="w-24 h-24 rounded-full shadow-xl border-2 border-white" />
                <div className="mt-4">
                  <h4 className="text-base">Palwasha Qasim</h4>
                  <p className="text-xs text-blue-600 mt-2">CEO, Company</p>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-gray-400">The service was amazing. I never had to wait that long for my food. The staff was
                  friendly and attentive, and the delivery was impressively prompt.</p>
              </div>
              <div className="flex justify-center space-x-2 mt-4">
                <svg className="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6">Our Pricing Plans</h2>
            <p id='main_home_head' className="text-gray-400">Choose the plan that best suits your business needs and start connecting with wholesalers and retailers today!</p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-16 max-md:max-w-md max-md:mx-auto">
            <div className="hover:outline outline-blue-600 rounded relative overflow-hidden transition-all p-6">
              <div className="text-left">
                <h4 className="text-xl mb-4">Basic Plan</h4>
                <h3 className="text-4xl"> Free or a nominal fee</h3>
                <p className="mt-4 text-gray-400">Get started with the essentials for free. Perfect for small businesses looking to make their first connections.</p>


              </div>
              <div className="mt-8">
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17"
                      className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000" />
                    </svg>
                    Limited product listings
                  </li>
                  <li className="flex items-center text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17"
                      className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000" />
                    </svg>
                    Basic customer support
                  </li>
                  <li className="flex items-center text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17"
                      className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000" />
                    </svg>
                    Access to a limited number of wholesaler/retailer profiles
                  </li>
                  <li className="flex items-center text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17"
                      className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000" />
                    </svg>
                    Basic analytics
                  </li>

                </ul>
              </div>
              <button type="button"
                className="w-full px-6 py-3.5 rounded-md text-gray-100 bg-blue-700 hover:bg-blue-800 transition-all mt-10">Get
                started today</button>
            </div>
            <div className="hover:outline outline-blue-600 rounded relative overflow-hidden transition-all p-6">
              <div className="text-left">
                <h4 className="text-xl mb-4">Standard Plan</h4>
                <h3 className="text-4xl">Moderate monthly fee</h3>
                <p className="mt-4 text-gray-400">Enhance your business capabilities with more listings and
                  priority support. Ideal for growing businesses..</p>
              </div>
              <div className="mt-8">
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17"
                      className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000" />
                    </svg>
                    Access to a larger number of wholesaler/retailer profiles
                  </li>
                  <li className="flex items-center text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17"
                      className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000" />
                    </svg>
                    Priority customer support
                  </li>
                  <li className="flex items-center text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17"
                      className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000" />
                    </svg>
                    Basic promotional tools
                  </li>

                  <li className="flex items-center text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17"
                      className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000" />
                    </svg>
                    Enhanced analytics and reporting
                  </li>
                </ul>
              </div>
              <button type="button"
                className="w-full px-6 py-3.5 rounded-md text-gray-100 bg-blue-700 hover:bg-blue-800 transition-all mt-10">Get
                started today</button>
            </div>
            <div className="hover:outline outline-blue-600 rounded relative overflow-hidden transition-all p-6">
              <div className="text-left">
                <h4 className="text-xl mb-4">Premium Plan</h4>
                <h3 className="text-4xl">Higher monthly fee</h3>
                <p className="mt-4 text-gray-400">Unlock unlimited potential with comprehensive features and dedicated support.
                  Best for established businesses looking to expand.</p>
              </div>
              <div className="mt-8">
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17"
                      className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000" />
                    </svg>
                    Unlimited product listings
                  </li>
                  <li className="flex items-center text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17"
                      className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000" />
                    </svg>
                    Dedicated customer support
                  </li>
                  <li className="flex items-center text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17"
                      className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000" />
                    </svg>
                    Full access to all wholesaler/retailer profiles
                  </li>
                  <li className="flex items-center text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17"
                      className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000" />
                    </svg>
                    Advanced promotional tools and marketing features
                  </li>

                </ul>
              </div>
              <button type="button"
                className="w-full px-6 py-3.5 rounded-md text-gray-100 bg-blue-700 hover:bg-blue-800 transition-all mt-10">Get
                started today</button>
            </div>
          </div>
        </div>


        <div className="mt-32">
          <div className="mb-16 max-w-2xl text-center mx-auto">
            <h2 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6"> Key Performance Metrics</h2>
            <p id='main_home_head' className="text-gray-400">Track and analyze essential metrics to optimize your website's performance and grow your business.</p>
          </div>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-12 lg:divide-x lg:divide-gray-300">
            <div className="text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-600 w-10 inline-block" viewBox="0 0 512 512">
                <path
                  d="M437 268.152h-50.118c-6.821 0-13.425.932-19.71 2.646-12.398-24.372-37.71-41.118-66.877-41.118h-88.59c-29.167 0-54.479 16.746-66.877 41.118a74.798 74.798 0 0 0-19.71-2.646H75c-41.355 0-75 33.645-75 75v80.118c0 24.813 20.187 45 45 45h422c24.813 0 45-20.187 45-45v-80.118c0-41.355-33.645-75-75-75zm-300.295 36.53v133.589H45c-8.271 0-15-6.729-15-15v-80.118c0-24.813 20.187-45 45-45h50.118c4.072 0 8.015.553 11.769 1.572a75.372 75.372 0 0 0-.182 4.957zm208.59 133.589h-178.59v-133.59c0-24.813 20.187-45 45-45h88.59c24.813 0 45 20.187 45 45v133.59zm136.705-15c0 8.271-6.729 15-15 15h-91.705v-133.59a75.32 75.32 0 0 0-.182-4.957 44.899 44.899 0 0 1 11.769-1.572H437c24.813 0 45 20.187 45 45v80.119z"
                  data-original="#000000" />
                <path
                  d="M100.06 126.504c-36.749 0-66.646 29.897-66.646 66.646-.001 36.749 29.897 66.646 66.646 66.646 36.748 0 66.646-29.897 66.646-66.646s-29.897-66.646-66.646-66.646zm-.001 103.292c-20.207 0-36.646-16.439-36.646-36.646s16.439-36.646 36.646-36.646 36.646 16.439 36.646 36.646-16.439 36.646-36.646 36.646zM256 43.729c-49.096 0-89.038 39.942-89.038 89.038s39.942 89.038 89.038 89.038 89.038-39.942 89.038-89.038c0-49.095-39.942-89.038-89.038-89.038zm0 148.076c-32.554 0-59.038-26.484-59.038-59.038 0-32.553 26.484-59.038 59.038-59.038s59.038 26.484 59.038 59.038c0 32.554-26.484 59.038-59.038 59.038zm155.94-65.301c-36.748 0-66.646 29.897-66.646 66.646.001 36.749 29.898 66.646 66.646 66.646 36.749 0 66.646-29.897 66.646-66.646s-29.897-66.646-66.646-66.646zm0 103.292c-20.206 0-36.646-16.439-36.646-36.646.001-20.207 16.44-36.646 36.646-36.646 20.207 0 36.646 16.439 36.646 36.646s-16.439 36.646-36.646 36.646z"
                  data-original="#000000" />
              </svg>
              <h3 className="text-4xl text-blue-600 mt-6">400+</h3>
              <p className="mt-4">Unique Visitors</p>
            </div>
            <div className="text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-600 w-10 inline-block" viewBox="0 0 512 512">
                <path fill-rule="evenodd"
                  d="M64.217 333.491h41.421c5.508 0 10 4.492 10 10v97.833c0 5.508-4.492 10-10 10H64.217c-5.508 0-10-4.492-10-10v-97.833c0-5.508 4.492-10 10-10zm155.471-61.737h-41.422c-5.508 0-10 4.492-10 10v159.571c0 5.508 4.492 10 10 10h41.422c5.508 0 10-4.492 10-10V281.754c0-5.508-4.493-10-10-10zm114.049-64.466h-41.421c-5.508 0-10 4.492-10 10v224.036c0 5.508 4.492 10 10 10h41.421c5.508 0 10-4.492 10-10V217.288c-.001-5.507-4.493-10-10-10zm72.625-57.992h41.421c5.508 0 10 4.492 10 10v282.028c0 5.508-4.492 10-10 10h-41.421c-5.508 0-10-4.492-10-10V159.296c0-5.508 4.492-10 10-10zm2.707-106.018a7.98 7.98 0 0 1-.812-15.938l49.121-2.666a7.98 7.98 0 0 1 8.307 9.094l.006.001-7.088 48.68a7.986 7.986 0 0 1-15.812-2.25l3.878-26.632C385.642 108.019 321.72 152.702 257.158 189.5c-69.131 39.402-138.98 69.744-206.779 93.355a7.976 7.976 0 0 1-5.25-15.062c66.943-23.313 135.906-53.269 204.154-92.167 63.527-36.208 126.449-80.188 186.56-133.799zM45.262 481.873h421.477c5.508 0 10 4.492 10 10v3.193c0 5.508-4.492 10-10 10H45.262c-5.508 0-10-4.492-10-10v-3.193c0-5.508 4.492-10 10-10zM139.587 6.935c-48.325 0-87.5 39.175-87.5 87.5s39.175 87.5 87.5 87.5 87.5-39.175 87.5-87.5c-.001-48.325-39.176-87.5-87.5-87.5zm-8 32.13v5.279c-5.474 1.183-10.606 3.537-14.768 6.92-6.626 5.387-10.827 13.21-10.353 22.965.476 9.817 5.372 16.4 12.186 20.849 5.887 3.844 13.093 5.827 19.733 6.917 5.206.855 10.757 2.201 14.95 4.733 3.261 1.969 5.71 4.838 6.23 9.127.072.595.111 1.013.117 1.26.08 3.359-1.536 5.926-3.962 7.767-3.135 2.379-7.564 3.785-12.005 4.324a33.57 33.57 0 0 1-3.172.254c-5.25.126-10.424-1.156-14.458-3.842-3.274-2.18-5.775-5.367-6.818-9.552a7.982 7.982 0 0 0-15.5 3.812c2.094 8.399 7.044 14.749 13.505 19.052 4.252 2.831 9.164 4.736 14.315 5.711v5.165a8 8 0 1 0 16-.001v-5.01c6.309-1.038 12.699-3.388 17.758-7.226 6.302-4.782 10.494-11.632 10.275-20.829a29.17 29.17 0 0 0-.179-2.76c-1.22-10.052-6.653-16.591-13.856-20.94-6.27-3.786-13.768-5.668-20.637-6.796-4.832-.793-9.912-2.13-13.607-4.543-2.767-1.806-4.752-4.416-4.937-8.224-.202-4.157 1.615-7.512 4.478-9.84 2.281-1.854 5.196-3.144 8.362-3.781a22.978 22.978 0 0 1 10.115.244c5.278 1.338 10.083 4.817 12.614 10.845a7.997 7.997 0 0 0 10.469 4.281 7.997 7.997 0 0 0 4.281-10.469c-4.701-11.196-13.65-17.664-23.489-20.158a37.3 37.3 0 0 0-1.646-.377v-5.161a8 8 0 1 0-16.001.004z"
                  clip-rule="evenodd" data-original="#000000" />
              </svg>
              <h3 className="text-4xl text-blue-600 mt-6">450+</h3>
              <p className="mt-4">Total Sales</p>
            </div>
            <div className="text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-600 w-10 inline-block" viewBox="0 0 28 28">
                <path
                  d="M18.56 16.94h-3.12l.65-2.16a2.58 2.58 0 0 0-1.66-3.21 1.41 1.41 0 0 0-1.81 1l-.1.42a8.61 8.61 0 0 1-2.26 4l-.57.56a1.56 1.56 0 0 0-1.21-.59h-.73a1.56 1.56 0 0 0-1.56 1.54v6.44a1.56 1.56 0 0 0 1.56 1.56h.73a1.55 1.55 0 0 0 1.33-.76l.14.07a6.55 6.55 0 0 0 2.91.69h3.59a3.58 3.58 0 0 0 3-1.6 6.34 6.34 0 0 0 1.07-3.53v-2.49a1.94 1.94 0 0 0-1.96-1.94zm-9.56 8a.56.56 0 0 1-.56.56h-.69a.56.56 0 0 1-.56-.56V18.5a.56.56 0 0 1 .56-.56h.73a.56.56 0 0 1 .52.56zm10.5-3.57a5.38 5.38 0 0 1-.9 3 2.59 2.59 0 0 1-2.15 1.15h-3.59a5.53 5.53 0 0 1-2.46-.58l-.4-.2V18.6l.92-.92a9.63 9.63 0 0 0 2.53-4.46l.1-.41a.43.43 0 0 1 .2-.26.4.4 0 0 1 .32 0 1.58 1.58 0 0 1 1 2l-.84 2.81a.5.5 0 0 0 .08.44.48.48 0 0 0 .4.2h3.79a.94.94 0 0 1 .94.94zM11 7.3l-.32 1.85a1.09 1.09 0 0 0 .44 1.09 1.11 1.11 0 0 0 .65.22 1.18 1.18 0 0 0 .52-.13L14 9.45l1.67.88a1.1 1.1 0 0 0 1.17-.09 1.09 1.09 0 0 0 .44-1.08L17 7.3 18.31 6a1.1 1.1 0 0 0 .29-1.14 1.12 1.12 0 0 0-.9-.76l-1.87-.27L15 2.12a1.12 1.12 0 0 0-2 0l-.83 1.69-1.87.27a1.12 1.12 0 0 0-.9.76A1.1 1.1 0 0 0 9.69 6zm-.6-2.23 2.13-.31a.49.49 0 0 0 .47-.27l1-1.93a.11.11 0 0 1 .2 0l1 1.93a.49.49 0 0 0 .38.27l2.13.31a.12.12 0 0 1 .09.08.11.11 0 0 1 0 .11l-1.54 1.5a.53.53 0 0 0-.15.45l.37 2.11a.09.09 0 0 1-.05.11.1.1 0 0 1-.12 0l-1.9-1a.47.47 0 0 0-.46 0l-1.91 1a.09.09 0 0 1-.11 0 .09.09 0 0 1-.05-.11l.37-2.11a.53.53 0 0 0-.15-.45l-1.54-1.5a.11.11 0 0 1 0-.11.12.12 0 0 1-.12-.08zm-3.06 8.18a1 1 0 0 0 1-1.19l-.27-1.52 1.12-1.09a1 1 0 0 0-.56-1.73L7.1 7.5l-.69-1.39a1.05 1.05 0 0 0-1.82 0L3.9 7.5l-1.53.22a1 1 0 0 0-.56 1.73l1.11 1.09-.27 1.52a1 1 0 0 0 .41 1 1 1 0 0 0 1.07.07l1.37-.72 1.37.72a1 1 0 0 0 .47.12zm-1.84-1.9a.46.46 0 0 0-.23.06l-1.63.82.36-1.78a.53.53 0 0 0-.2-.45L2.51 8.71l1.8-.26a.47.47 0 0 0 .37-.27l.83-1.63.81 1.63a.47.47 0 0 0 .37.27l1.8.29L7.2 10a.53.53 0 0 0-.15.45l.29 1.8-1.61-.84a.46.46 0 0 0-.23-.06zm20.95-2.94a1 1 0 0 0-.82-.69L24.1 7.5l-.69-1.39a1.05 1.05 0 0 0-1.82 0L20.9 7.5l-1.53.22a1 1 0 0 0-.56 1.73l1.11 1.09-.27 1.52a1 1 0 0 0 .41 1 1 1 0 0 0 1.07.07l1.37-.72 1.37.72a1 1 0 0 0 .47.12 1 1 0 0 0 1-1.19l-.27-1.52 1.11-1.09a1 1 0 0 0 .27-1.04zM24.2 10a.53.53 0 0 0-.15.45l.29 1.8-1.61-.84a.47.47 0 0 0-.46 0l-1.63.82.36-1.78a.53.53 0 0 0-.2-.45l-1.29-1.29 1.8-.26a.47.47 0 0 0 .37-.27l.83-1.63.81 1.63a.47.47 0 0 0 .37.27l1.8.29z"
                  data-name="Layer 2" data-original="#000000" />
              </svg>
              <h3 className="text-4xl text-blue-600 mt-6">500+</h3>
              <p className="mt-4">Customer Satisfaction</p>
            </div>
            <div className="text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-600 w-10 inline-block" viewBox="0 0 512 512">
                <path
                  d="M477.797 290.203c0 59.244-23.071 114.942-64.963 156.834S315.244 512 256 512s-114.942-23.071-156.834-64.963-64.963-97.59-64.963-156.834c0-39.621 10.579-78.512 30.595-112.468 19.419-32.944 47.178-60.48 80.276-79.63 7.646-4.427 17.437-1.814 21.861 5.836 4.426 7.648 1.813 17.437-5.836 21.861-53.882 31.175-88.951 87.036-94.189 148.4H84.6c8.837 0 16 7.163 16 16s-7.163 16-16 16H66.884C74.594 398.12 148.083 471.609 240 479.319v-17.717c0-8.837 7.163-16 16-16s16 7.163 16 16v17.717c91.917-7.71 165.406-81.199 173.116-173.116h-17.717c-8.837 0-16-7.163-16-16s7.163-16 16-16h17.69c-5.238-61.364-40.307-117.227-94.19-148.4-7.648-4.425-10.262-14.212-5.836-21.861 4.425-7.648 14.214-10.261 21.861-5.836 33.098 19.148 60.857 46.685 80.277 79.63 20.016 33.955 30.596 72.846 30.596 112.467zm-253.173-220.2 15.259-15.259-.258 71.899c-.031 8.837 7.106 16.025 15.942 16.058h.059c8.81 0 15.967-7.126 15.999-15.942l.259-72.248 15.492 15.492c3.124 3.124 7.219 4.687 11.313 4.687s8.189-1.563 11.313-4.687c6.248-6.248 6.248-16.379 0-22.627L267.313 4.687c-6.248-6.248-16.379-6.248-22.627 0l-42.689 42.689c-6.248 6.248-6.248 16.379 0 22.627s16.379 6.248 22.627 0zM272 174.358v64.628c16.74 5.24 29.977 18.478 35.218 35.217h50.493c8.837 0 16 7.163 16 16s-7.163 16-16 16h-50.493c-6.823 21.795-27.202 37.655-51.218 37.655-29.585 0-53.654-24.069-53.654-53.655 0-24.015 15.86-44.394 37.654-51.217v-64.628c0-8.837 7.163-16 16-16s16 7.163 16 16zm5.655 115.845c0-11.94-9.715-21.654-21.655-21.654s-21.654 9.714-21.654 21.654 9.714 21.655 21.654 21.655 21.655-9.714 21.655-21.655z"
                  data-original="#000000" />
              </svg>
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
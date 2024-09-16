import React from 'react'
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";



function Product() {
  return (
    <>

          <div className="max-w-5xl mx-auto text-center relative px-4 sm:px-10 mt-16">
            <h1 className="lg:text-6xl md:text-6xl text-4xl  font-bold mb-6 md:!leading-[80px]">Explore Our Products
            </h1>
            <p id='main_home_head' className="text-base text-gray-400">Discover a wide range of quality products tailored to meet your every need. From the latest arrivals to best-selling favorites, find everything you're looking for in one place.</p>
          </div>

          <div className="max-w-5xl mx-auto text-center relative px-4 sm:px-10 mt-16">
            <h4 className="lg:text-5xl md:text-3xl text-3xl text-blue-400 font-bold mb-6 md:!leading-[80px]">Featured Products
            </h4>
          </div>


          <div className="font-[sans-serif] py-4 mx-auto lg:max-w-6xl max-w-lg md:max-w-full">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">

                <div className="p-6">
                  

                  <div className="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img src="/products/laptop_cpu_fan.jpg" alt="Product 1" className="h-full w-full object-contain" />
                  </div>
                </div>

                <div className="text-center bg-gray-300 p-6">
                  <h3 className="text-lg font-bold text-gray-800">Espresso Elegante</h3>
                  <h4 className="text-lg text-gray-800 font-bold mt-6">$10 <strike
                    className="text-gray-400 ml-2 font-medium">$15</strike>
                  </h4>

                  <button type="button"
                    className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-[#007bff] text-base text-white font-semibold rounded-xl">
                    <FaShoppingCart color="white" />
                    Add to cart</button>
                </div>
              </div>

              <div className="bg-white rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
                <div className="p-6">
                  

                  <div className="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img src="/products/adapter2.jpg" alt="Product 2" className="h-full w-full object-contain" />
                  </div>
                </div>

                <div className="text-center bg-gray-300 p-6">
                  <h3 className="text-lg font-bold text-gray-800">Mocha Madness</h3>
                  <h4 className="text-lg text-gray-800 font-bold mt-6">$12 <strike
                    className="text-gray-400 ml-2 font-medium">$17</strike>
                  </h4>

                  <button type="button"
                    className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-[#007bff] text-base text-white font-semibold rounded-xl">
                    <FaShoppingCart color="white" />
                    Add to cart</button>
                </div>
              </div>

              <div className="bg-white rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">

                <div className="p-6">
                  
                  <div className="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img src="/products/dc_jack_2.jpg" alt="Product 3" className="h-full w-full object-contain" />
                  </div>
                </div>
                <div className="text-center bg-gray-300 p-6">
                  <h3 className="text-lg font-bold text-gray-800">Lenovo DC Jack</h3>
                  <h4 className="text-lg text-gray-800 font-bold mt-6">$14 <strike
                    className="text-gray-400 ml-2 font-medium">$19</strike>
                  </h4>
                  <button type="button"
                    className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-[#007bff] text-base text-white font-semibold rounded-xl">
                    <FaShoppingCart color="white" />
                    Add to cart</button>
                </div>
              </div>

              <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">

                <div className="p-6">
                  
                  <div className="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img src="https://readymadeui.com/images/coffee4.webp" alt="Product 3" className="h-full w-full object-contain" />
                  </div>
                </div>
                <div className="text-center bg-gray-300 p-6">
                  <h3 className="text-lg font-bold text-gray-800">Hazelnut Heaven Blend</h3>
                  <h4 className="text-lg text-gray-800 font-bold mt-6">$12 <strike
                    className="text-gray-400 ml-2 font-medium">$17</strike>
                  </h4>
                  <button type="button"
                    className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-[#007bff] text-base text-white font-semibold rounded-xl">
                    <FaShoppingCart color="white" />
                    Add to cart</button>
                </div>
              </div>

              <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">

                <div className="p-6">
                  
                  <div className="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img src="https://readymadeui.com/images/coffee5.webp" alt="Product 3" className="h-full w-full object-contain" />
                  </div>
                </div>
                <div className="text-center bg-gray-300 p-6">
                  <h3 className="text-lg font-bold text-gray-800">Vanilla Velvet Brew</h3>
                  <h4 className="text-lg text-gray-800 font-bold mt-6">$15 <strike
                    className="text-gray-400 ml-2 font-medium">$20</strike>
                  </h4>
                  <button type="button"
                    className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-[#007bff] text-base text-white font-semibold rounded-xl">
                    <FaShoppingCart color="white" />
                    Add to cart</button>
                </div>
              </div>

              <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">

                <div className="p-6">
                  
                  <div className="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img src="https://readymadeui.com/images/coffee6.webp" alt="Product 3" className="h-full w-full object-contain" />
                  </div>
                </div>
                <div className="text-center bg-gray-300 p-6">
                  <h3 className="text-lg font-bold text-gray-800">Double Shot Symphony</h3>
                  <h4 className="text-lg text-gray-800 font-bold mt-6">$14 <strike
                    className="text-gray-400 ml-2 font-medium">$19</strike>
                  </h4>
                  <button type="button"
                    className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-[#007bff] text-base text-white font-semibold rounded-xl">
                    <FaShoppingCart color="white" />
                    Add to cart</button>
                </div>
              </div>

              <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">

                <div className="p-6">
                  
                  <div className="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img src="https://readymadeui.com/images/coffee7.webp" alt="Product 3" className="h-full w-full object-contain" />
                  </div>
                </div>
                <div className="text-center bg-gray-300 p-6">
                  <h3 className="text-lg font-bold text-gray-800">Irish Cream Dream</h3>
                  <h4 className="text-lg text-gray-800 font-bold mt-6">$11 <strike
                    className="text-gray-400 ml-2 font-medium">$16</strike>
                  </h4>
                  <button type="button"
                    className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-[#007bff] text-base text-white font-semibold rounded-xl">
                    <FaShoppingCart color="white" />
                    Add to cart</button>
                </div>
              </div>

              <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">

                <div className="p-6">
                  
                  <div className="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img src="https://readymadeui.com/images/coffee8.webp" alt="Product 3" className="h-full w-full object-contain" />
                  </div>
                </div>
                <div className="text-center bg-gray-300 p-6">
                  <h3 className="text-lg font-bold text-gray-800">Coconut Bliss Coffee</h3>
                  <h4 className="text-lg text-gray-800 font-bold mt-6">$13 <strike
                    className="text-gray-400 ml-2 font-medium">$18</strike>
                  </h4>
                  <button type="button"
                    className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-[#007bff] text-base text-white font-semibold rounded-xl">
                    <FaShoppingCart color="white" />
                    Add to cart</button>
                </div>
              </div>

              <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">

                <div className="p-6">
                  
                  <div className="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img src="https://readymadeui.com/images/coffee1.webp" alt="Product 1" className="h-full w-full object-contain" />
                  </div>
                </div>
                <div className="text-center bg-gray-300 p-6">
                  <h3 className="text-lg font-bold text-gray-800">Espresso Elegante</h3>
                  <h4 className="text-lg text-gray-800 font-bold mt-6">$10 <strike
                    className="text-gray-400 ml-2 font-medium">$15</strike>
                  </h4>
                  <button type="button"
                    className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-[#007bff] text-base text-white font-semibold rounded-xl">
                    <FaShoppingCart color="white" />
                    Add to cart</button>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto text-center relative px-4 sm:px-10 mt-16">
            <h4 className="lg:text-5xl md:text-3xl text-3xl text-blue-400 font-bold mb-6 md:!leading-[80px]">New Arrivals
            </h4>
          </div>


          <div className="font-sans py-4 mx-auto lg:max-w-6xl md:max-w-4xl max-sm:max-w-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 gap-12">

              <div className="bg-gray-100 p-3 rounded-lg group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
                <div className="w-full h-[300px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                  <img src="https://readymadeui.com/images/sunglass7.webp" alt="product1"
                    className="h-full w-full object-contain" />
                </div>

                <div className="absolute mx-auto left-0 right-0 -bottom-80 group-hover:bottom-2 bg-white w-11/12 p-3 rounded-lg transition-all duration-300">
                  <div className="text-center">
                    <h3 className="text-base font-bold text-gray-800">White Sun Glass</h3>
                    <h4 className="text-lg text-blue-600 font-bold mt-2">$35.00</h4>
                  </div>

                  <div className="flex justify-center space-x-1 mt-4">
                    <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
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

              <div className="bg-gray-100 p-3 rounded-lg group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
                <div className="w-full h-[300px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                  <img src="https://readymadeui.com/images/product14.webp" alt="product2"
                    className="h-full w-full object-contain" />
                </div>

                <div className="absolute mx-auto left-0 right-0 -bottom-80 group-hover:bottom-2 bg-white w-11/12 p-3 rounded-lg transition-all duration-300">
                  <div className="text-center">
                    <h3 className="text-base font-bold text-gray-800">Echo Elegance</h3>
                    <h4 className="text-lg text-blue-600 font-bold mt-2">$20.00</h4>
                  </div>

                  <div className="flex justify-center space-x-1 mt-4">
                    <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
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

              <div className="bg-gray-100 p-3 rounded-lg group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
                <div className="w-full h-[300px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                  <img src="https://readymadeui.com/images/laptop4.webp" alt="product3"
                    className="h-full w-full object-contain" />
                </div>

                <div className="absolute mx-auto left-0 right-0 -bottom-80 group-hover:bottom-2 bg-white w-11/12 p-3 rounded-lg transition-all duration-300">
                  <div className="text-center">
                    <h3 className="text-base font-bold text-gray-800">Acer One 14 AMD</h3>
                    <h4 className="text-lg text-blue-600 font-bold mt-2">$400.00</h4>
                  </div>

                  <div className="flex justify-center space-x-1 mt-4">
                    <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
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

              <div className="bg-gray-100 p-3 rounded-lg group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
                <div className="w-full h-[300px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                  <img src="https://readymadeui.com/images/coffee2.webp" alt="product4"
                    className="h-full w-full object-contain" />
                </div>

                <div className="absolute mx-auto left-0 right-0 -bottom-80 group-hover:bottom-2 bg-white w-11/12 p-3 rounded-lg transition-all duration-300">
                  <div className="text-center">
                    <h3 className="text-base font-bold text-gray-800">Irish Cream Dream</h3>
                    <h4 className="text-lg text-blue-600 font-bold mt-2">$11.00</h4>
                  </div>

                  <div className="flex justify-center space-x-1 mt-4">
                    <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
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

              <div className="bg-gray-100 p-3 rounded-lg group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
                <div className="w-full h-[300px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                  <img src="https://readymadeui.com/images/coffee7.webp" alt="product5"
                    className="h-full w-full object-contain" />
                </div>

                <div className="absolute mx-auto left-0 right-0 -bottom-80 group-hover:bottom-2 bg-white w-11/12 p-3 rounded-lg transition-all duration-300">
                  <div className="text-center">
                    <h3 className="text-base font-bold text-gray-800">Mocha Madness</h3>
                    <h4 className="text-lg text-blue-600 font-bold mt-2">$10.00</h4>
                  </div>

                  <div className="flex justify-center space-x-1 mt-4">
                    <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
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

              <div className="bg-gray-100 p-3 rounded-lg group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
                <div className="w-full h-[300px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                  <img src="https://readymadeui.com/images/sunglass6.webp" alt="product6"
                    className="h-full w-full object-contain" />
                </div>

                <div className="absolute mx-auto left-0 right-0 -bottom-80 group-hover:bottom-2 bg-white w-11/12 p-3 rounded-lg transition-all duration-300">
                  <div className="text-center">
                    <h3 className="text-base font-bold text-gray-800">Black Sun Glass</h3>
                    <h4 className="text-lg text-blue-600 font-bold mt-2">$70.00</h4>
                  </div>

                  <div className="flex justify-center space-x-1 mt-4">
                    <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
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

              <div className="bg-gray-100 p-3 rounded-lg group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
                <div className="w-full h-[300px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                  <img src="https://readymadeui.com/images/product12.webp" alt="product7"
                    className="h-full w-full object-contain" />
                </div>

                <div className="absolute mx-auto left-0 right-0 -bottom-80 group-hover:bottom-2 bg-white w-11/12 p-3 rounded-lg transition-all duration-300">
                  <div className="text-center">
                    <h3 className="text-base font-bold text-gray-800">Urban Sneakers</h3>
                    <h4 className="text-lg text-blue-600 font-bold mt-2">$20.00</h4>
                  </div>

                  <div className="flex justify-center space-x-1 mt-4">
                    <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
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

              <div className="bg-gray-100 p-3 rounded-lg group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
                <div className="w-full h-[300px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                  <img src="https://readymadeui.com/images/laptop2.webp" alt="product8"
                    className="h-full w-full object-contain" />
                </div>

                <div className="absolute mx-auto left-0 right-0 -bottom-80 group-hover:bottom-2 bg-white w-11/12 p-3 rounded-lg transition-all duration-300">
                  <div className="text-center">
                    <h3 className="text-base font-bold text-gray-800">ASUS Vivobook 15</h3>
                    <h4 className="text-lg text-blue-600 font-bold mt-2">$450.00</h4>
                  </div>

                  <div className="flex justify-center space-x-1 mt-4">
                    <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          </div>

          <div className="max-w-5xl mx-auto text-center relative px-4 sm:px-10 mt-16">
            <h4 className="lg:text-5xl md:text-3xl text-3xl text-blue-400 font-bold mb-6 md:!leading-[80px]">Best Sellers Products
            </h4>
          </div>


          <div className="font-sans  px-4 py-8">
            <div className="mx-auto lg:max-w-6xl md:max-w-4xl">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">

                <div className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                  <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img src="https://readymadeui.com/images/watch1.webp" alt="product1"
                      className="h-full w-5/6 mx-auto block object-contain" />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-sm font-bold text-gray-800">French Timex</h3>
                    <h4 className="text-base text-blue-600 font-bold mt-2">$95.00</h4>
                  </div>
                </div>

                <div className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                  <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img src="https://readymadeui.com/images/product14.webp" alt="product2"
                      className="h-full w-5/6 mx-auto block object-contain" />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-sm font-bold text-gray-800">Echo Elegance</h3>
                    <h4 className="text-base text-blue-600 font-bold mt-2">$20.00</h4>
                  </div>
                </div>

                <div className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                  <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img src="https://readymadeui.com/images/laptop4.webp" alt="product3"
                      className="h-full w-5/6 mx-auto block object-contain" />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-sm font-bold text-gray-800">Acer One 14 AMD</h3>
                    <h4 className="text-base text-blue-600 font-bold mt-2">$400.00</h4>
                  </div>
                </div>

                <div className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                  <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img src="https://readymadeui.com/images/watch4.webp" alt="product4"
                      className="h-full w-5/6 mx-auto block object-contain" />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-sm font-bold text-gray-800">Irish Cream Dream</h3>
                    <h4 className="text-base text-blue-600 font-bold mt-2">$11.00</h4>
                  </div>
                </div>

                <div className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                  <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img src="https://readymadeui.com/images/coffee7.webp" alt="product5"
                      className="h-full w-5/6 mx-auto block object-contain" />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-sm font-bold text-gray-800">Luxury desk clock</h3>
                    <h4 className="text-base text-blue-600 font-bold mt-2">$90.00</h4>
                  </div>
                </div>

                <div className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                  <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img src="https://readymadeui.com/images/watch7.webp" alt="product6"
                      className="h-full w-5/6 mx-auto block object-contain" />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-sm font-bold text-gray-800">Smart Watch</h3>
                    <h4 className="text-base text-blue-600 font-bold mt-2">$110.00</h4>
                  </div>
                </div>

                <div className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                  <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img src="https://readymadeui.com/images/watch8.webp" alt="product7"
                      className="h-full w-5/6 mx-auto block object-contain" />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-sm font-bold text-gray-800">Creative Wall Clock</h3>
                    <h4 className="text-base text-blue-600 font-bold mt-2">$50.00</h4>
                  </div>
                </div>

                <div className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                  <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img src="https://readymadeui.com/images/laptop2.webp" alt="product8"
                      className="h-full w-5/6 mx-auto block object-contain" />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-sm font-bold text-gray-800">ASUS Vivobook 15</h3>
                    <h4 className="text-base text-blue-600 font-bold mt-2">$450.00</h4>
                  </div>
                </div>

                <div className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                  <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img src="https://readymadeui.com/images/watch3.webp" alt="product1"
                      className="h-full w-5/6 mx-auto block object-contain" />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-sm font-bold text-gray-800">French Timex</h3>
                    <h4 className="text-base text-blue-600 font-bold mt-2">$95.00</h4>
                  </div>
                </div>

                <div className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                  <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img src="https://readymadeui.com/images/product14.webp" alt="product2"
                      className="h-full w-5/6 mx-auto block object-contain" />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-sm font-bold text-gray-800">Echo Elegance</h3>
                    <h4 className="text-base text-blue-600 font-bold mt-2">$20.00</h4>
                  </div>
                </div>

                <div className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                  <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img src="https://readymadeui.com/images/laptop4.webp" alt="product3"
                      className="h-full w-5/6 mx-auto block object-contain" />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-sm font-bold text-gray-800">Acer One 14 AMD</h3>
                    <h4 className="text-base text-blue-600 font-bold mt-2">$400.00</h4>
                  </div>
                </div>

                <div className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                  <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img src="https://readymadeui.com/images/watch5.webp" alt="product4"
                      className="h-full w-5/6 mx-auto block object-contain" />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-sm font-bold text-gray-800">Irish Cream Dream</h3>
                    <h4 className="text-base text-blue-600 font-bold mt-2">$11.00</h4>
                  </div>
                </div>

              </div>
            </div>
          </div>

    </>
  )
}

export default Product;


import React from 'react'
import { Link } from 'react-router-dom';

const FooterComp = () => {
    return (
        <footer className="bg-[#111] px-4 sm:px-10 py-12 mt-32">
            <div className="lg:max-w-[50%] mx-auto text-center">
                <h2 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6">Stay Updated</h2>
                <p className="text-blue-400">Subscribe to our newsletter and stay up to date with the latest news,
                    updates, and exclusive offers.</p>
                <div className="bg-[#444] flex px-2 py-1 rounded-md text-left mt-10">
                    <input type='email' placeholder='Enter your email' className="w-full outline-none bg-transparent pl-2" />
                    <button type='button'
                        className="px-6 py-3 rounded-md text-gray-100 bg-blue-700 hover:bg-blue-800 transition-all ml-auto">Subscribe</button>
                </div>
            </div>
            <hr className="border-gray-400 my-12" />
            <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                    <h4 className="text-lg mb-6">About Trade Vista</h4>
                    <p className="text-gray-400 mb-2">Learn more about our mission to connect wholesalers and retailers in the computer <br />parts industry,
                        and discover how we can <br /> help your business grow.</p>
                </div>
                <div>
                    <h4 className="text-lg mb-6">Quick Links</h4>
                    <ul className="space-y-4">
                        <li><Link to={'/about-us'} className="text-gray-400 hover:text-blue-600 transition-all">About Us</Link></li>
                        <li><a href="javascript:void(0)" className="text-gray-400 hover:text-blue-600 transition-all">Contact Us
                        </a></li>
                        <li><a href="javascript:void(0)" className="text-gray-400 hover:text-blue-600 transition-all">
                            FAQ</a></li>

                    </ul>
                </div>
                <div>
                    <h4 className="text-lg mb-6">Products</h4>
                    <ul className="space-y-4">
                        <li><a href="javascript:void(0)" className="text-gray-400 hover:text-blue-600 transition-all">Computer Parts</a>
                        </li>
                        <li><a href="javascript:void(0)" className="text-gray-400 hover:text-blue-600 transition-all">New Arrivals</a>
                        </li>
                        <li><a href="javascript:void(0)" className="text-gray-400 hover:text-blue-600 transition-all">Best Sellers</a>
                        </li>
                        <li><a href="javascript:void(0)" className="text-gray-400 hover:text-blue-600 transition-all">Discounts</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg mb-6"> Customer Service</h4>
                    <ul className="space-y-4">
                        <li><a href="javascript:void(0)" className="text-gray-400 hover:text-blue-600 transition-all">Privacy Policy</a>
                        </li>
                        <li><a href="javascript:void(0)" className="text-gray-400 hover:text-blue-600 transition-all">Terms & Conditions
                        </a></li>
                        <li><a href="javascript:void(0)" className="text-gray-400 hover:text-blue-600 transition-all">Help Center</a></li>

                    </ul>
                </div>
                <div class="footer-bottom">
                    <p id='footer'>© 2024 Trade Vista. All rights reserved.</p>

                </div>
            </div>
        </footer>
    )
}

export default FooterComp

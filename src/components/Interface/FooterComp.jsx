import React from 'react'
import { Link } from 'react-router-dom';

const FooterComp = () => {
    return (
        <footer className="bg-[#111] px-4 sm:px-4 py-12 mt-32">
            
            <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                <div>
                    <h4 className="text-lg mb-6">About Trade Vista</h4>
                    <p className="text-gray-400 mb-2">Learn more about our mission to connect wholesalers and retailers in the computer <br />parts industry,
                        and discover how we can <br /> help your business grow.</p>
                </div>
                <div>
                    <h4 className="text-lg mb-6">Quick Links</h4>
                    <ul className="space-y-4">
                        <li><Link to={'/about-us'} className="text-gray-400 hover:text-blue-600 transition-all">About Us</Link></li>
                        <li><Link to={'/contact-us'} className="text-gray-400 hover:text-blue-600 transition-all">Contact Us
                        </Link></li>
                        <li><Link to={'/faq'} className="text-gray-400 hover:text-blue-600 transition-all">FAQ</Link></li>


                    </ul>
                </div>
                <div>
                    <h4 className="text-lg mb-6">Products</h4>
                    <ul className="space-y-4">
                        <li><Link to={''} className="text-gray-400 hover:text-blue-600 transition-all">Computer Parts</Link>
                        </li>
                        <li><Link to={''} className="text-gray-400 hover:text-blue-600 transition-all">New Arrivals</Link>
                        </li>
                        <li><Link to={''} className="text-gray-400 hover:text-blue-600 transition-all">Best Sellers</Link>
                        </li>
                        <li><Link to={''} className="text-gray-400 hover:text-blue-600 transition-all">Discounts</Link></li>
                    </ul>
                </div>
                <div >
                    <h4 className="text-lg mb-6"> Customer Service</h4>
                    <ul className="space-y-4">
                        <li><Link to={''} className="text-gray-400 hover:text-blue-600 transition-all">Privacy Policy</Link>
                        </li>
                        <li><Link to={''} className="text-gray-400 hover:text-blue-600 transition-all">Terms & Conditions
                        </Link></li>
                        <li><Link to={''} className="text-gray-400 hover:text-blue-600 transition-all">Help Center</Link></li>

                    </ul>
                </div>
                
            </div>
            <div className="footer-bottom" id="footerBottom">
                    <p id='footerContent'>© 2024 Trade Vista. All rights reserved.</p>
                </div>
        </footer>
    )
}

export default FooterComp

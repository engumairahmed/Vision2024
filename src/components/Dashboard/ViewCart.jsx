import axios from "axios";
import React,{useState,useEffect} from "react";
import { FaPlus,FaMinus,FaTimes  } from 'react-icons/fa';
import Cookies from "js-cookie";
import { useAuth } from '../Auth/AuthContext';


export const ViewCart = ({user}) => {
  const User = user;
  const URL = import.meta.env.VITE_URL

  const {getUserId} = useAuth();
  const [userId, setId]=useState();
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
        console.log(User.id);
        let id=User.id;
        
    axios.get(`${URL}/view-cart/${id}`)
      .then(response => {
        setCartItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching cart items:', error);
      });
  });
  return (
    <div className="min-h-screen py-8 dark:bg-gray-900">
      <section className="max-w-screen-xl mx-auto px-4 py-8 sm:py-12">
        <h2 className="text-3xl font-bold text-white dark:text-red-400 mb-8">
          Shopping Cart
        </h2>
       
       {/* {cartItems.map(wholesalerGroup => (
        <div key={wholesalerGroup._id}>
          <h3>{wholesalerGroup.wholesaler.name}</h3>
          <ul>
            {wholesalerGroup.items.map(item => (
              <li key={item._id}>
                {item.productDetails.name} - Quantity: {item.quantity}
              </li>
            ))}
          </ul>
        </div>
      ))} */}
      
      <div>
        <h2 className="text-2xl font-bold text-white dark:text-red-400 mb-8">
      
        </h2>
        <div className="space-y-8">
          <div className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center p-4 md:p-6">
              <div className="flex-shrink-0">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                  alt="Product"
                  className=" h-20 w-20 rounded-lg dark:block"
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
                    <FaMinus size={16} />
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
                    <FaPlus size={16} />
                  </button>
                </div>
                <button
                  type="button"
                  className="mt-4 inline-flex items-center text-sm font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                    <FaTimes size={16} />
                  
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
        </div>
        {/* {cartItems.map(wholesalerGroup=>(
            {wholesalerGroup.wholesaler.name}
        ))} */}
      </section>
    </div>
  );
};

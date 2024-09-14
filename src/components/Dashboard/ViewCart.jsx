import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaPlus, FaMinus, FaTimes } from 'react-icons/fa';
import Cookies from "js-cookie";
import * as jwt from "jwt-decode"
import { useAuth } from '../Auth/AuthContext';


export const ViewCart = ({ user }) => {
  // const [User, setUser] = useState(user);
  const User = user;
  const URL = import.meta.env.VITE_URL

  const { getUserId } = useAuth();
  const id = getUserId();
  const [userId, setId] = useState(id);
  const [cartItems, setCartItems] = useState([])

  const handleSubmit = (wholesalerId) => {
    const order = cartItems.find(order => order.wholesaler._id === wholesalerId);

    const orderData = {
      wholesalerId,
      id,
      items: order.items.map(item => ({
        productId: item.product,
        quantity: item.quantity
      }))
    };

    console.log(orderData);
    

    // axios.post(`${URL}/confirm-order`, orderData)
    //   .then(response => {
    //     console.log('Order confirmed:', response.data);
    //     // Optionally, remove the confirmed items from the cart or show a success message
    //     const updatedCart = cartItems.filter(cartOrder => cartOrder.wholesaler._id !== wholesalerId);
    //     setCartItems(updatedCart);
    //   })
    //   .catch(error => {
    //     console.error('Error confirming order:', error);
    //   });
  };

  const updateQuantity = (orderIndex, itemIndex, newQuantity) => {

    const updatedCart = [...cartItems];

    updatedCart[orderIndex].items[itemIndex].quantity = newQuantity;

    setCartItems(updatedCart);

    const itemId = updatedCart[orderIndex].items[itemIndex].product;

    axios.put(`${URL}/update-cart-quantity`, { userId, itemId, newQuantity })
      .then()
      .catch(error => {
        console.error('Error updating quantity:', error);
      });
  };

  const calculateTotalPrice = (order) => {
    return order.items.reduce((total, item) => {
      const productDetail = order.productDetails.find(product => product._id === item.product);
      const itemPrice = productDetail?.price || 0;
      return total + (itemPrice * item.quantity);
    }, 0);
  };

  const removeItem = (orderIndex, itemIndex)=>{
    const updatedCart = [...cartItems];
  }

  useEffect(() => {

    const token = Cookies.get('authToken');
    if (token) {
      const decoded = jwt.jwtDecode(token);
      setId(decoded.id);     
    }

    setId(id);
    
    axios.get(`${URL}/view-cart/${id}`)
      .then(response => {
        setCartItems(response.data);
        console.log(response.data);

      })
      .catch(error => {
        console.error('Error fetching cart items:', error);
      });
  }, [User]);
  return (
    <div className="min-h-screen py-8 dark:bg-gray-900">
      <section className="max-w-screen-xl mx-auto px-4 py-8 sm:py-12">
        <h2 className="text-3xl font-bold text-white dark:text-red-400 mb-8">
          Shopping Cart
        </h2>

        {cartItems.map((order, orderIndex) => (
            <div key={order.wholesaler._id} className="mt-8 mb-8">
              <h2 className="text-2xl font-bold text-white dark:text-red-400 mb-8">
                Wolesaler: {order.wholesaler.name}
              </h2>
              {order.items.map((item, itemIndex) => {
                // Find the matching product details from order.productDetails array
                const productDetail = order.productDetails.find(
                  (product) => product._id === item.product
                );

                return (
                  <div key={itemIndex} className="mt-3">
                    <div className="space-y-8">
                      <div className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex items-center p-4 md:p-6">
                          <div className="flex-shrink-0">
                            <img
                              src={productDetail ? URL + productDetail.image : 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg'}
                              alt={productDetail?.name || 'Product Image'}
                              className=" h-20 w-20 rounded-lg dark:block"
                            />
                          </div>

                          <div className="flex-1 ml-4">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                              {'Product: ' + productDetail?.name + ' | Brand: ' + productDetail?.brand + ' | Type: ' + productDetail?.category || 'Product Name'}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mt-1">
                              {productDetail?.description || 'Product Description'}
                            </p>
                            <div className="flex items-center mt-4">
                              <p className="text-xl font-bold text-gray-900 dark:text-gray-100">
                                Rs.{productDetail?.price || '0'}
                              </p>
                            </div>
                          </div>

                          <div className="flex flex-col items-center justify-between ml-4">
                            <div className="flex items-center space-x-2">
                              <button
                                type="button"
                                className="inline-flex items-center justify-center h-8 w-8 rounded-md border border-gray-300 bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
                                onClick={() => {
                                  if (item.quantity > 1) {
                                    updateQuantity(orderIndex, itemIndex, item.quantity - 1);
                                  }
                                }}
                              >
                                <FaMinus size={16} />
                              </button>
                              <input
                                type="number"
                                id="quantity"
                                className="w-16 text-center border border-gray-300 bg-transparent text-sm font-medium text-gray-900 dark:border-gray-600 dark:text-white"
                                value={item.quantity}
                                readOnly
                              />
                              <button
                                type="button"
                                className="inline-flex items-center justify-center h-8 w-8 rounded-md border border-gray-300 bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
                                onClick={() =>
                                  updateQuantity(orderIndex, itemIndex, item.quantity + 1)
                                }
                              >
                                <FaPlus size={16} />
                              </button>
                            </div>
                            <button
                              type="button"
                              className="mt-4 inline-flex items-center text-sm font-medium text-red-600 dark:text-red-500 hover:underline"
                              onClick={()=>{}}
                            >
                              <FaTimes size={16} />

                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                );
              })}
              <div className="space-y-8 mt-2">
                <div className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex items-center p-4 md:p-6">


                    <div className="flex-1 ml-4">
                      <div className="flex items-center">
                        <p className="text-xl font-bold text-gray-900 dark:text-gray-100">
                        Total Amount of {order.wholesaler.name}: Rs. {calculateTotalPrice(order).toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <button
                        type="button"
                        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={() => handleSubmit(order.wholesaler._id)}
                      >
                        Confirm Order
                      </button>
                    </div>
                  </div>

                </div>

              </div>


            </div>
        ))}
      </section>
    </div>
  );
};

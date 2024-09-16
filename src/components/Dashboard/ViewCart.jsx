import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaPlus, FaMinus, FaTimes } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import Cookies from "js-cookie";
import * as jwt from "jwt-decode";
import { useAuth } from '../Auth/AuthContext';
import { toast } from "react-toastify";

export const ViewCart = ({ user }) => {

  const User = user;
  const URL = import.meta.env.VITE_URL;

  const { getUserId } = useAuth();
  const id = getUserId();
  const [userId, setId] = useState(id);
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPaymentModes, setSelectedPaymentModes] = useState({});

  const handleSubmit = (wholesalerId) => {
    const order = cartItems.find(order => order.wholesaler._id === wholesalerId);
    const retailerId = id;
    const paymentMode = selectedPaymentModes[wholesalerId] || 'Not Selected';

    const orderData = {
      wholesalerId,
      retailerId,
      items: order.items.map(item => ({
        productId: item.product,
        quantity: item.quantity
      })),
      paymentMode
    };

    axios.post(`${URL}/create-order`, orderData)
      .then(response => {
        toast.success("Order created successfully");
        console.log('Order confirmed:', response.data);
        const updatedCart = cartItems.filter(cartOrder => cartOrder.wholesaler._id !== wholesalerId);
        setCartItems(updatedCart);
      })
      .catch(error => {
        console.error('Error confirming order:', error);
      });
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

  const fetchData = async () => {
    try {
      const response = await axios.get(`${URL}/view-cart/${id}`);
      setCartItems(response.data);
      setIsLoading(response.data.length <= 0);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const removeItem = (orderIndex, itemIndex) => {
    const itemId = cartItems[orderIndex].items[itemIndex].product;

    axios.delete(`${URL}/remove-cart-item`, { data: { userId, itemId } })
      .then(() => {
        fetchData();
      })
      .catch(error => {
        console.error('Error removing item from cart:', error);
      });
  };

  const handlePaymentModeChange = (wholesalerId, paymentMode) => {
    setSelectedPaymentModes(prevState => ({
      ...prevState,
      [wholesalerId]: paymentMode
    }));
  };

  useEffect(() => {
    const token = Cookies.get('authToken');
    if (token) {
      const decoded = jwt.jwtDecode(token);
      setId(decoded.id);
    }
    fetchData();
  }, [User]);

  return (
    <div className="min-h-screen py-8 dark:bg-gray-900">
      {isLoading ? (
        <div className="mt-8 mb-8">
          <h2 className="text-2xl font-bold text-white dark:text-red-400 mb-8">Shopping Cart</h2>
          <div className="mt-3">
            <div className="space-y-8">
              <div className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="flex items-center p-4 md:p-6">
                  <div className="flex-shrink-0">
                    <BsCart4 size={50} className="animate:pulse" />
                  </div>
                  <div className="flex-1 ml-4">
                    <div className="flex items-center mt-4">
                      <p className="text-xl font-bold text-gray-900 dark:text-gray-100 animate:pulse">
                        Your cart is empty
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-between ml-4">
                    <div className="text-right">
                      <Link
                        to={'/dashboard/product-search'}
                        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        View Products
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <section className="max-w-screen-xl mx-auto px-4 py-8 sm:py-12">
          <h2 className="text-3xl font-bold text-white dark:text-red-400 mb-8">Shopping Cart</h2>

          {cartItems.map((order, orderIndex) => (
            <div key={order.wholesaler._id} className="mt-8 mb-8">
              <h2 className="text-2xl font-bold text-white dark:text-red-400 mb-8">
                Wholesaler: {order.wholesaler.name}
              </h2>
              {order.items.map((item, itemIndex) => {
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
                              className="h-20 w-20 rounded-lg dark:block"
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
                              onClick={() => removeItem(orderIndex, itemIndex)}
                            >
                              <FaTimes size={16} /> Remove
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
                    <div className="flex-1 ml-2">
                      <div className="flex items-center">
                        <p className="text-xl font-bold text-gray-900 dark:text-gray-100">
                          Total Amount of {order.wholesaler.name}: Rs. {calculateTotalPrice(order).toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <div className="flex-1 text-left mr-2">
                      <select
                        value={selectedPaymentModes[order.wholesaler._id] || ''}
                        onChange={(e) => handlePaymentModeChange(order.wholesaler._id, e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
                        required
                      >
                        <option value="">Select Payment Mode</option>
                        <option value="credit">Credit</option>
                        <option value="cash">Cash</option>
                      </select>
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
      )}
    </div>
  );
};

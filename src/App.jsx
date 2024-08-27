import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './index.css'
// import './assets/responsive_nav'
import HomePage from './components/Interface/Landing'
import AboutUs from './components/Interface/About'
import Product from './components/Interface/Product'
import ContactUs from './components/Interface/ContactUs'
import LoginForm from './components/Auth/login'
import SignupForm from './components/Auth/Signup'
import ForgotPassword from './components/Auth/ForgotPassword'
import ResetPassword from './components/Auth/Reset'
import EmailVerification from './components/Auth/Email_verification'
import Layout from './components/Interface/Layout'
import { Sidebar } from './components/Dashboard/Sidebar'
import { Home } from './components/Dashboard/Home'

import { UserManagement } from './components/Dashboard/UserManagement'
import { ProductManagement } from './components/Dashboard/ProductManagement'
import { TransactionHistory } from './components/Dashboard/TransactionHistory'
import { OrderManagement } from './components/Dashboard/OrderManagement'
import { Analytics } from './components/Dashboard/Analytics'
import { Profile } from './components/Dashboard/Profile'
import { Settings } from './components/Dashboard/Settings'
import { Logout } from './components/Dashboard/Logout'
import ProtectedRoute from './ProtectedRoute'
import { Forbidden } from './components/Dashboard/Forbidden'
import Faq from './components/Interface/Faq'
import { ProductSearch } from './components/Dashboard/ProductSearch'
import ProductView from './components/Interface/ProductView'
import { OrderManagement2 } from './components/Dashboard/Orders'
import { ViewProduct } from './components/Dashboard/ViewProduct'
import { ViewCart } from './components/Dashboard/ViewCart'

function App() {

  return (

    <Routes>

      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/products" element={<Product />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/product-view" element={<ProductView />} />


      </Route>

      {/* Auth Routes */}

      <Route path='/login' element={<LoginForm />}></Route>
      <Route path='/register' element={<SignupForm />}></Route>
      <Route path='/forgot-password' element={<ForgotPassword />}></Route>
      <Route path='/reset-password' element={<ResetPassword />}></Route>
      <Route path='/email-verification' element={<EmailVerification />}></Route>

      {/* Dashboard Routes */}

      <Route path='/dashboard' element={
        <ProtectedRoute>
          <Sidebar />
        </ProtectedRoute>
      }>
        <Route index element={<Home />}></Route>
        <Route path='users' element={<UserManagement />}></Route>
        <Route path='orders' element={<OrderManagement />}></Route>
        <Route path='orders/retailer' element={<OrderManagement2 />}></Route>
        <Route path='products/add' element={ 
          <ProtectedRoute roles={['admin','wholesaler','staff']}>
            <ProductManagement/>
          </ProtectedRoute>
        }>
        </Route>
        <Route path='products/view' element={<ViewProduct></ViewProduct>}></Route>
        <Route path='shopping-cart' element={<ViewCart></ViewCart>}></Route>
        <Route path='product-search' element={<ProductSearch/>}></Route>
        <Route path='transactions' element={<TransactionHistory />}></Route>
        <Route path='analytics' element={<Analytics />}></Route>
        <Route path='profile' element={<Profile />}></Route>
        <Route path='setting' element={<Settings />}></Route>
        <Route path='logout' element={<Logout />}></Route>
        <Route path='forbidden' element={<Forbidden/>}></Route>
      </Route>
    </Routes>

  )

}

export default App


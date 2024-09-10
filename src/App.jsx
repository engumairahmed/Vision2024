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
import { useAuth } from './components/Auth/AuthContext'
import { MsgComp } from './components/Auth/MsgComp'
import { ResetPassError } from './components/Auth/ResetPassError'
import { NotFound } from './components/Interface/NotFound'

function App() {

  const { getUser } = useAuth();
  const user = getUser();
  
  

  return (

    <Routes>
      <Route path="/" element={<Layout />}>
      <Route path='*' element={<NotFound/>}></Route>
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
      <Route path='/reset-password/:token' element={<ResetPassword />}></Route>
      <Route path='/reset-password' element={<ForgotPassword />}></Route>
      <Route path='/email-verification' element={<EmailVerification />}></Route>
      <Route path='/message' element={<MsgComp/>}></Route>
      <Route path='/reset-password-error' element={<ResetPassError/>}></Route>

      {/* Dashboard Routes */}

      <Route path='/dashboard' element={
        <ProtectedRoute>
          <Sidebar />
        </ProtectedRoute>
      }>
        <Route index element={<Home />}></Route>
        <Route path='users' element={<UserManagement />}></Route>
        <Route path='orders' element={<OrderManagement />}></Route>

        <Route path='retailer/orders' element={
          <ProtectedRoute roles={'retailer'}>
            <OrderManagement2 />
          </ProtectedRoute>} />

        <Route path='products/add' element={
          <ProtectedRoute roles={['admin', 'wholesaler', 'staff']}>
            <ProductManagement user={user}/>
          </ProtectedRoute>
        } />

        <Route path='shopping-cart' element={<ViewCart user={user}/>}/>
        <Route path='products/view' element={<ViewProduct user={user}/>}/>
        <Route path='product-search' element={<ProductSearch user={user} />} />
        <Route path='transactions' element={<TransactionHistory />} />
        <Route path='analytics' element={<Analytics />} />
        <Route path='profile' element={<Profile />} />
        <Route path='setting' element={<Settings />} />
        <Route path='logout' element={<Logout />} />
        <Route path='forbidden' element={<Forbidden />} />
        <Route path='*' element={<NotFound/>}></Route>
      </Route>
    </Routes>

  )

}

export default App


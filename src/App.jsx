import React from 'react'
import  HomePage  from './components/Interface/Landing'
import { Routes, Route } from 'react-router-dom'
// import TestFile from './components/TestFile'
import  AboutUs  from './components/Interface/About'
import  Product  from './components/Interface/Product'
import  ContactUs  from './components/Interface/ContactUs'
import LoginForm from './components/Auth/login'
import SignupForm from './components/Auth/Signup'
import ForgotPassword from './components/Auth/ForgotPassword'
import ResetPassword from './components/Auth/Reset'
import EmailVerification from './components/Auth/Email_verification'
import Layout from './components/Interface/Layout'

function App() {

  return (
    
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Route>
        {/* Auth Routes */}

        <Route path='/login' element={<LoginForm/>}></Route>
        <Route path='/register' element={<SignupForm/>}></Route>
        <Route path='/forgot-password' element={<ForgotPassword/>}></Route>
        <Route path='/reset-password' element={<ResetPassword/>}></Route>
        <Route path='/email-verification' element={<EmailVerification/>}></Route>
      </Routes>
    
  )
  
}

export default App


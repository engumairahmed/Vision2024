import React, { useState } from 'react';

 function ResetPassword() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  return (
    <div>
      <div className="bg-black  font-[sans-serif]">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="max-w-md w-full">
         
          <div className="p-8 rounded-2xl bg-white shadow">
          <div id='sign' className="mb-5 p-2  flex flex-col items-center">
                                <div className='bg-black w-22 border-3 rounded-lg flex justify-center'>
                                    <a href="/">
                                        <img src="/Logo.png" alt="TradeVista" className='w-20' />
                                    </a>
                                </div>
                            </div>
          
            <h2 className="text-gray-800 text-center text-3xl font-bold">Reset Paasssword</h2>
            <form className="mt-8 space-y-4">
               
            <div>
        <label className="text-gray-800 text-sm mb-2 block">Password</label>
        <div className="relative flex items-center">
          <input
            name="password"
            type={passwordVisible ? "text" : "password"}
            required
            className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
            placeholder="Enter password"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#bbb"
            stroke="#bbb"
            className="w-4 h-4 absolute right-4 cursor-pointer"
            viewBox="0 0 128 128"
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            {passwordVisible ? (
              <path d="M64 12C37.945 12 14.536 27.586 2.64 51.5a4 4 0 000 3.888C14.536 84.414 37.945 100 64 100c26.055 0 49.464-15.586 61.36-39.5a4 4 0 000-3.888C113.464 27.586 90.055 12 64 12zm0 76c-12.705 0-24-10.017-24-24 0-12.705 10.017-24 24-24 12.705 0 24 10.017 24 24 0 12.705-10.017 24-24 24zM64 56c-4.414 0-8 3.586-8 8 0 4.414 3.586 8 8 8 4.414 0 8-3.586 8-8 0-4.414-3.586-8-8-8z" />
            ) : (
              <path d="M64 12C37.945 12 14.536 27.586 2.64 51.5a4 4 0 000 3.888C14.536 84.414 37.945 100 64 100c26.055 0 49.464-15.586 61.36-39.5a4 4 0 000-3.888C113.464 27.586 90.055 12 64 12zm0 76c-12.705 0-24-10.017-24-24 0-12.705 10.017-24 24-24 12.705 0 24 10.017 24 24 0 12.705-10.017 24-24 24zM64 56c-4.414 0-8 3.586-8 8 0 4.414 3.586 8 8 8 4.414 0 8-3.586 8-8 0-4.414-3.586-8-8-8z" />
            )}
          </svg>
        </div>
      </div>

      <div className="mt-4">
        <label className="text-gray-800 text-sm mb-2 block">Confirm Password</label>
        <div className="relative flex items-center">
          <input
            name="confirmPassword"
            type={confirmPasswordVisible ? "text" : "password"}
            required
            className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
            placeholder="Enter confirm password"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#bbb"
            stroke="#bbb"
            className="w-4 h-4 absolute right-4 cursor-pointer"
            viewBox="0 0 128 128"
            onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
          >
            {confirmPasswordVisible ? (
              <path d="M64 12C37.945 12 14.536 27.586 2.64 51.5a4 4 0 000 3.888C14.536 84.414 37.945 100 64 100c26.055 0 49.464-15.586 61.36-39.5a4 4 0 000-3.888C113.464 27.586 90.055 12 64 12zm0 76c-12.705 0-24-10.017-24-24 0-12.705 10.017-24 24-24 12.705 0 24 10.017 24 24 0 12.705-10.017 24-24 24zM64 56c-4.414 0-8 3.586-8 8 0 4.414 3.586 8 8 8 4.414 0 8-3.586 8-8 0-4.414-3.586-8-8-8z" />
            ) : (
              <path d="M64 12C37.945 12 14.536 27.586 2.64 51.5a4 4 0 000 3.888C14.536 84.414 37.945 100 64 100c26.055 0 49.464-15.586 61.36-39.5a4 4 0 000-3.888C113.464 27.586 90.055 12 64 12zm0 76c-12.705 0-24-10.017-24-24 0-12.705 10.017-24 24-24 12.705 0 24 10.017 24 24 0 12.705-10.017 24-24 24zM64 56c-4.414 0-8 3.586-8 8 0 4.414 3.586 8 8 8 4.414 0 8-3.586 8-8 0-4.414-3.586-8-8-8z" />
            )}
          </svg>
        </div>
      </div>

              <div className="!mt-8">
                <button type="button" className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}


export default ResetPassword ;


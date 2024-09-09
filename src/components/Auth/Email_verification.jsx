import axios from 'axios';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { PulseLoader } from 'react-spinners'

const EmailVerification = () => {

  const URL = import.meta.env.VITE_URL

  const [email, setEmail] = useState();
  const [isError, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await axios.post(`${URL}/new-verification-link`, { email })
      .then(
        (res) => {
          toast.success('Verification link has been sent to your email', { autoClose: 2000 })
          setError(null)
          setIsLoading(false);
        }
      )
      .catch(
        err => {
          setError(err.response.data.msg)
          setIsLoading(false);

        }
      )
  }

  return (


    <body className="max-w-[1920px] mx-auto" style={{ background: 'black', color: 'white' }}>
      <div className="bg-black text-white-100 text-[15px]" >

        <div className="font-[sans-serif]">
          <div className="min-h-screen  flex fle-col items-center justify-center py-6 px-4">
            <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
              <div className="border border-white-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="mb-8">
                    <h3 className="text-white-800 text-2xl font-extrabold">Verify Your Email Address</h3>
                    <p className="text-white-500 text-sm mt-4 leading-relaxed">Please check your email for a verification link. Click the link to verify your account and continue.</p>
                  </div>
                  <div>
                    <label className="text-xs block mb-2" htmlFor='email'>Email Address</label>
                    <div className="relative flex items-center">
                      <input name="email" type="email" onChange={(e) => { setEmail(e.target.value); setError(null) }} required className="w-full text-gray-900 text-sm border-2 rounded-lg border-gray-300 focus:border-gray-800 px-2 py-3 outline-none" placeholder="Email" id='email' />
                      <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 682.667 682.667">
                        <defs>
                          <clipPath id="a" clipPathUnits="userSpaceOnUse">
                            <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                          </clipPath>
                        </defs>
                        <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                          <path fill="none" strokeMiterlimit="10" strokeWidth="40" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" data-original="#000000"></path>
                          <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" data-original="#000000"></path>
                        </g>
                      </svg>
                    </div>
                    {isError ? <div className='text-red-600 mt-1'>{isError}</div> : <div></div>}
                  </div>
                  <div className="!mt-8">
                  
                      {isLoading ?<button type="button" className="w-full shadow-xl py-5 px-4 text-sm tracking-wide rounded-lg text-white bg-dark " disabled> <div className="flex justify-center items-center">
                        <PulseLoader color="white" loading={true} size={10} />
                      </div></button> : <button type="submit" className="w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">Resend Verification Email</button>
                    }
                    
                      
                  </div>

                  <p className="text-sm !mt-8 text-center text-white-800">Didn't receive the email? Check your spam folder or try again. </p>
                  <ToastContainer />
                </form>
              </div>
              <div className="lg:h-[500px] md:h-[600px] max-md:mt-8">
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/employee-have-sent-email-and-receives-confirmation-10632767-8572953.png?f=webp" className="w-full h-full max-md:w-4/5 mx-auto block object-cover" alt="Dining Experience" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </body>

  )
}

export default EmailVerification

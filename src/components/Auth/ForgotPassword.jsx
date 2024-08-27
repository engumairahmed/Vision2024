import React from 'react'
import { Link } from 'react-router-dom';


export default function ForgotPassword() {
    return (
        <div>
            <div className="font-[sans-serif] bg-gray-900 md:h-screen">
                <div className="grid md:grid-cols-2 items-center gap-8 h-full">
                    <div className="max-md:order-1 p-4 image-container">
                        <img
                            src="https://cdni.iconscout.com/illustration/premium/thumb/forgot-password-4718234-3916134.png?f=webp"
                            className="lg:max-w-[80%] w-full h-full object-contain block mx-auto animated-image"
                            alt="login-image"
                        />
                    </div>

                    <div className="flex items-center md:p-8 p-6 bg-white md:rounded-tl-[55px] md:rounded-bl-[55px] h-full">
                        <form className="max-w-lg w-full mx-auto">
                            <div id='sign' className="mb-20 flex flex-col items-center">
                                <div className='bg-black w-22 border-3 rounded-lg flex justify-center'>
                                    <a href="/">
                                        <img src="/Logo.png" alt="TradeVista" className='w-20' />
                                    </a>
                                </div>
                            </div>
                            <div id="sign" className="mb-12">
                                <h3 className="text-blue-800 text-4xl font-extrabold">Forgot Your Password?</h3>
                                <p className="text-gray-800 text-sm mt-4 ">Enter your email address below and we'll send you a link to reset your password.</p>
                            </div>
                            <div>
                                <label className="text-gray-800 text-xs block mb-2">Email Address</label>
                                <div className="relative flex items-center">
                                    <input name="email" type="text" required className="w-full text-sm border-2 rounded-lg border-gray-300 focus:border-gray-800 px-2 py-3 outline-none" placeholder="Email" />
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 682.667 682.667">
                                        <defs>
                                            <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                                <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                                            </clipPath>
                                        </defs>
                                        <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                                            <path fill="none" stroke-miterlimit="10" stroke-width="40" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" data-original="#000000"></path>
                                            <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" data-original="#000000"></path>
                                        </g>
                                    </svg>
                                </div>
                            </div>



                            <div className="mt-12">
                                <button type="button" className="w-full py-3 px-6 text-sm font-semibold tracking-wider rounded-full text-white bg-blue-800 bg-[#00808] focus:outline-none">
                                    <Link to={'/reset'}>Submit</Link></button>
                            </div>


                            <div className="flex flex-wrap items-center justify-center gap-4 mt-6">

                                <div>
                                    <Link className="text-blue-600 font-semibold text-sm hover:underline" to={'/login'}>
                                        Back to Login</Link>

                                </div>
                            </div>




                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

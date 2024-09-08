import React from 'react'
import { Link } from 'react-router-dom'

export const MsgComp = () => {
  return (
    <body className="max-w-[1920px] mx-auto" style={{ background: 'black', color: 'white' }}>
        <div className="bg-black text-white-100 text-[15px]" >

          <div className="font-[sans-serif]">
            <div className="min-h-screen  flex fle-col items-center justify-center py-6 px-4">
              <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
                <div className="border border-white-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
                  <form className="space-y-4">
                    <div className="mb-8">
                      <h3 className="text-white-800 text-2xl font-extrabold">Follow the link in your email to reset your password</h3>
                      <p className="text-white-500 text-sm mt-4 leading-relaxed">Please check your email for a verification link. Click the link to verify your account and continue.</p>
                    </div>
                    <div className="!mt-8">
                      <Link to={'/forgot-password'} className="w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                      Resend Password reset link</Link>
                    </div>

                    <p className="text-sm !mt-8 text-center text-white-800">Didn't receive the email? Check your spam folder or try again. </p>
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

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { RingLoader } from "react-spinners";
import { ToastContainer, toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as Yup from 'yup';


function ResetPassword() {

  const URL = import.meta.env.VITE_URL

  const [passwordVisible, setPasswordVisible] = useState(false);

  const [isValid, setIsValid] = useState(false);

  const { token } = useParams();

  const navigate = useNavigate();


  const validationSchema = Yup.object({
    password: Yup.string()
      .min(8, 'password must contain 8 or more characters.')
      // .minLowercase(1, 'password must contain at least 1 lower case letter')
      // .minUppercase(1, 'password must contain at least 1 upper case letter')
      // .minNumbers(1, 'password must contain at least 1 number')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required')
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Submit");
      
      axios
        .post(`${URL}/reset-password/${token}`, values)
        .then((result) => {
          console.log(values);
          
          toast.success("Success Notification !");
          setTimeout(() => {
            navigate("/message");
          }, 1000);
        })
        .catch((error) => {
          console.log(error);
          
          if (error.response) {
            formik.setErrors({ ...formik.errors });
          } else if (error.request) {
            toast.error('No response received from the server.', { theme: 'dark' });
          } else {
            toast.error('Something went wrong.', { theme: 'dark' });
          }
        });
    }
  });

  useEffect(() => {
    axios.get(`${URL}/verify-token/${token}`)
      .then((response) => {
        if (response.status == 404) {
          setTimeout(() => {
            navigate("/reset-password-error", { replace: true });
          }, 1000)
        } else {
          setIsValid(true);
        }
      })
      .catch((e) => {
        setTimeout(() => {
          navigate("/reset-password-error", { replace: true });
        }, 1000)
      })
  })
  return (
    <div className='bg-black'>
      {!isValid ? (
        <div className="bg-black fixed inset-0 flex justify-center items-center">
          <RingLoader color="#1754e6" loading size={100} />
        </div>
      )
        :
        (
          <div className="bg-black  font-[sans-serif]">
            <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
              <div className="max-w-md w-full">

                <div className="p-8 rounded-2xl bg-white shadow">
                  <div id='sign' className="mb-5 p-2  flex flex-col items-center">
                    <div className='bg-black w-22 border-3 rounded-lg flex justify-center'>
                      <Link to={"/"}>
                        <img src="/Logo.png" alt="TradeVista" className='w-20' />
                      </Link>
                    </div>
                  </div>

                  <h2 className="text-gray-800 text-center text-3xl font-bold">Reset Paasssword</h2>
                  <form className="mt-8 space-y-4" onSubmit={formik.handleSubmit}>

                    <div>
                      <label className="text-gray-800 text-sm mb-2 block">Password</label>
                      <div className="relative flex items-center">
                        <input
                          name="password"
                          type={passwordVisible ? "text" : "password"}
                          required
                          value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}
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
                      {formik.touched.password && formik.errors.password ? (
                        <div className="text-red-600 text-xs mt-1">{formik.errors.password}</div>
                      ) : null}
                    </div>

                    <div className="mt-4">
                      <label className="text-gray-800 text-sm mb-2 block">Confirm Password</label>
                      <div className="relative flex items-center">
                        <input
                          name="confirmPassword"
                          type={passwordVisible ? "text" : "password"}
                          required
                          value={formik.values.confirmPassword} onChange={formik.handleChange} onBlur={formik.handleBlur}
                          className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                          placeholder="Enter confirm password"
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
                      <div>
                        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                          <div className="text-red-600 text-xs mt-1">{formik.errors.confirmPassword}</div>
                        ) : null}
                      </div>
                    </div>

                    <div className="!mt-8">
                      <button type="submit" className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                        Submit
                      </button>
                    </div>
                    <ToastContainer/>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}


    </div>
  )
}


export default ResetPassword;


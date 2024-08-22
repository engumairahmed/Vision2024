import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios, { AxiosError } from "axios";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function SignupForm() {

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  // cost URL = "http://localhost:5000"
const URL = "https://tradevista-api-production.up.railway.app"

  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Full Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'password must contain 8 or more characters with at least one of each: uppercase, lowercase and number')
      // .minLowercase(1, 'password must contain at least 1 lower case letter')
      // .minUppercase(1, 'password must contain at least 1 upper case letter')
      // .minNumbers(1, 'password must contain at least 1 number')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
    role: Yup.string()
      .oneOf(['wholesaler', 'retailer'], 'Role is required')
      .required('Role is required')
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: ''
    },
    validationSchema,
    onSubmit: (values) => {
      axios
        .post(`${URL}/register`, values)
        .then((result) => {
          toast.success("Success Notification !");
          setTimeout(() => {
            navigate("/email-verification");
          }, 1000);
        })
        .catch((error) => {
          console.log(error.response.data.msg);
          if (error.response) {
            formik.setErrors({ ...formik.errors, email: error.response.data.msg });
          } else if (error.request) {
            console.log(error.request);
            toast.error('No response received from the server.', { theme: 'dark' });
          } else {
            console.log('Error', error.message);
            toast.error('Something went wrong.', { theme: 'dark' });
          }
        });
    }
  });

  return (
    <>
      <div className="font-[sans-serif] bg-gray-900 md:h-screen">
        <div className="grid md:grid-cols-2 items-center gap-8 h-full">
          <div className="max-md:order-1 p-4 image-container">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/login-3305943-2757111.png"
              className="lg:max-w-[80%] w-full h-full object-contain block mx-auto animated-image"
              alt="login-image"
            />
          </div>
          <div className="flex items-center md:p-8 p-6 bg-white md:rounded-tl-[55px] md:rounded-bl-[55px] h-full">            
            <form className="max-w-lg w-full mx-auto" onSubmit={formik.handleSubmit}>
              <div id='sign' className="mb-20">
                <h3 className="text-blue-800 text-4xl font-extrabold">Signup</h3>
                <p className="text-gray-800 text-sm mt-2 ">Already have an account ?<Link className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap" to={'/login'}>Login here</Link></p>
              </div>
              <div id='inputs'>
                <div className="mt-2" >
                  <label className="text-gray-800 text-xs block ">Full Name</label>
                  <div className="relative flex items-center">
                    <input name="name" type="text" className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-[#004d40] px-2 py-3 outline-none" placeholder="Full Name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 24 24">
                      <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                      <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                    </svg>
                  </div>
                  {formik.touched.name && formik.errors.name ? (
                    <div className="text-red-600 text-xs mt-1">{formik.errors.name}</div>
                  ) : null}
                </div>
                <br />

                <div className="mt-0">
                  <label className="text-gray-800 text-xs block ">Email</label>
                  <div className="relative flex items-center">
                    <input name="email" type="text" className="w-full text-sm border-b border-gray-300 focus:border-gray-800 px-2 py-3 outline-none" placeholder="Email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
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
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-red-600 text-xs mt-1">{formik.errors.email}</div>
                  ) : null}
                </div>

                {/* <div className="mt-4">
                  <label className="text-gray-800 text-xs block ">Password</label>
                  <div className="relative flex items-center">
                    <input name="password" type="password" className="w-full text-sm border-b border-gray-300 focus:border-gray-800 px-2 py-3 outline-none" placeholder="Password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2 cursor-pointer" viewBox="0 0 128 128">
                      <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                    </svg>
                  </div>
                  {formik.touched.password && formik.errors.password ? (
                    <div className="text-red-600 text-xs mt-1">{formik.errors.password}</div>
                  ) : null}
                </div>

                <div className="mt-4">
                  <label className="text-gray-800 text-xs block ">Confirm Password</label>
                  <div className="relative flex items-center">
                    <input name="confirmPassword" type="password" className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-[#004d40] px-2 py-3 outline-none" placeholder="Confirm password" value={formik.values.confirmPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2 cursor-pointer" viewBox="0 0 128 128">
                      <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                    </svg>
                  </div>
                  {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                    <div className="text-red-600 text-xs mt-1">{formik.errors.confirmPassword}</div>
                  ) : null}
                </div> */}

                
<div className="mt-4">
        <label className="text-gray-800 text-xs block">Password</label>
        <div className="relative flex items-center">
          <input
            name="password"
            type={passwordVisible ? "text" : "password"}
            className="w-full text-sm border-b border-gray-300 focus:border-gray-800 px-2 py-3 outline-none"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#bbb"
            stroke="#bbb"
            className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
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
        <label className="text-gray-800 text-xs block">Confirm Password</label>
        <div className="relative flex items-center">
          <input
            name="confirmPassword"
            type={confirmPasswordVisible ? "text" : "password"}
            className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-[#004d40] px-2 py-3 outline-none"
            placeholder="Confirm password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#bbb"
            stroke="#bbb"
            className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
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
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <div className="text-red-600 text-xs mt-1">{formik.errors.confirmPassword}</div>
        ) : null}
      </div>

                <div className="mt-3">
                  <label className="text-gray-800 text-xs block mb-2">Register As</label>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center">
                      <input type="radio" id="wholesaler" name="role" value="wholesaler" className="text-[#004d40] focus:ring-[#004d40]" checked={formik.values.role === 'wholesaler'}
                        onChange={formik.handleChange} />
                      <span className="ml-2 text-sm text-gray-800">Wholesaler</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" id="retailer" name="role" value="retailer" className="text-[#004d40] focus:ring-[#004d40]" checked={formik.values.role === 'retailer'}
                        onChange={formik.handleChange} />
                      <span className="ml-2 text-sm text-gray-800">Retailer</span>
                    </label>
                  </div>
                  {formik.touched.role && formik.errors.role ? (
                    <div className="text-red-600 text-xs mt-1">{formik.errors.role}</div>
                  ) : null}
                </div>
              </div>

              <div className="mt-6">
                <button type="submit" className="w-full py-3 px-6 text-sm font-semibold tracking-wider rounded-full text-white bg-blue-800  focus:outline-none">
                  Signup
                </button>
              </div>

              <div className="my-2 flex items-center gap-4">
                <hr className="w-full border-gray-300" />
                <p className="text-sm text-gray-800 text-center">or</p>
                <hr className="w-full border-gray-300" />
              </div>

              <button type="button" className="w-full flex items-center justify-center gap-4 py-3 px-6 text-sm font-semibold tracking-wider text-gray-800 border border-gray-300 rounded-full bg-gray-50 hover:bg-gray-100 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" className="inline" viewBox="0 0 512 512">
                  <path fill="#fbbd00"
                    d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                    data-original="#fbbd00" />
                  <path fill="#0f9d58"
                    d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                    data-original="#0f9d58" />
                  <path fill="#31aa52"
                    d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                    data-original="#31aa52" />
                  <path fill="#3c79e6"
                    d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                    data-original="#3c79e6" />
                  <path fill="#cf2d48"
                    d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                    data-original="#cf2d48" />
                  <path fill="#eb4132"
                    d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                    data-original="#eb4132" />
                </svg>
                Continue with google
              </button>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>


    </>
  );
}

export default SignupForm;

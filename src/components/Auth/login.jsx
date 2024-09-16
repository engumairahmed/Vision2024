import { React, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import * as jwt from 'jwt-decode'
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { FcGoogle } from 'react-icons/fc';

function LoginForm() {

  const URL = import.meta.env.VITE_URL

  const [passwordsVisible, setPasswordsVisible] = useState(false);

  const [ user, setUser ] = useState([]);
  const [ profile, setProfile ] = useState([]);

  const googleLogin = useGoogleLogin({
      onSuccess: (codeResponse) => {
        setUser(codeResponse)
        console.log(codeResponse);
        
        const decoded=jwt.decode(codeResponse.access_token)
        console.log(decoded);
        
        // Cookies.set("authToken", codeResponse.access_token, { expires: 1 })
      },
      onError: (error) => console.log('Login Failed:', error)
  });

  const login = (values)=>{
    axios
        .post(`${URL}/login`, values)
        .then((result) => {
          const token = result.data.token
          Cookies.set("authToken", token, { expires: 1 })
          setTimeout(() => {
            navigate("/dashboard");
          }, 500);
        })
        .catch((error) => {
          if (error.response.status === 404) {
            toast.error(error.response.data.msg, { theme: 'dark' });
            formik.setErrors({ ...formik.errors, email: error.response.data.msg });
          } else if (error.response.status === 401) {
            console.log(error.request);
            toast.error(error.response.data.msg, { theme: 'dark' });
          } else if (error.response.status === 403) {
            toast.error(error.response.data.msg, { theme: 'dark' });
            setTimeout(() => {
              navigate('/email-verification')
            }, 1000);
          } else {
            console.log('Error', error.message);
            toast.error('Something went wrong.', { theme: 'dark' });
          }
        });
  }


  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required'),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema,
    onSubmit: (values) => {
      login(values);
    }
  });

  const logOut = () => {
    googleLogout();
    setProfile(null);
};

  useEffect(() => {
    if (Cookies.get('authToken')) {
      navigate('/dashboard');
    }
      if (user) {
        console.log(user);
        
          axios
              .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                  headers: {
                      Authorization: `Bearer ${user.access_token}`,
                      Accept: 'application/json'
                  }
              })
              .then((res) => {
                  setProfile(res.data);
                  console.log(profile);
                  console.log(user);
                  
                  
              })
              .catch((err) => console.log(err));
      }
  },[user])


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


              <div id='sign' className="mb-20 flex flex-col items-center mb-6">
                <div className='bg-black w-22 border-3 rounded-lg flex justify-center'>
                  <Link to={'/'}>
                    <img src="/Logo.png" alt="TradeVista" className='w-20' />
                  </Link>
                </div>
                <h3 className="text-blue-800 text-4xl font-extrabold">Login</h3>
                <p className="text-gray-800 text-sm mt-4 ">Don't have an account ? <Link className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap" to={'/register'}>Register here</Link></p>
              </div>

              <div>
                <label className="text-gray-800 text-xs block mb-2">Email</label>
                <div className="relative flex items-center">
                  <input name="email" type="email" autoComplete='on' className="w-full text-sm border-2 border-gray-300 rounded-lg outline-none focus:border-gray-800 px-2 py-3" placeholder="Email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
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

              <div className="mt-6">
                <label className="text-gray-800 text-xs block mb-2">Password</label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type={passwordsVisible ? "text" : "password"}
                    className="w-full text-sm border-2 rounded-lg border-gray-300 focus:border-gray-800 px-2 py-3 outline-none"
                    placeholder="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#bbb"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    onClick={() => setPasswordsVisible(!passwordsVisible)}
                  >
                    {passwordsVisible ? (
                      // Show Icon (Eye)
                      <path d="M1.73 12a10.94 10.94 0 0 1 21.94 0c-1.19 4.42-5.22 8-9.99 8-2.73 0-5.21-1.06-7.07-2.93m7.07-5.07a3 3 0 1 0-4.24-4.24" />
                    ) : (
                      // Hide Icon (Eye Off)
                      <path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-5.52 0-10-3.92-11.49-9 1.19-4.42 5.22-8 9.99-8 2.73 0 5.21 1.06 7.07 2.93M1 1l22 22" />
                    )}
                  </svg>
                </div>
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-600 text-xs mt-1">{formik.errors.password}</div>
                ) : null}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                <div className="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <label htmlFor="remember-me" className="text-gray-800 ml-3 block text-sm">
                    Remember me
                  </label>
                </div>
                <div>
                  <Link className="text-blue-600 font-semibold text-sm hover:underline" to={'/forgot-password'}>
                    Forgot Password? </Link>

                </div>
              </div>

              <div className="mt-12">
                <button type="submit" className="w-full py-3 px-6 text-sm font-semibold tracking-wider rounded-full text-white bg-blue-800 bg-[#00808] focus:outline-none">
                  Login</button>
              </div>

              <div className="my-6 flex items-center gap-4">
                <hr className="w-full border-gray-300" />
                <p className="text-sm text-gray-800 text-center">or</p>
                <hr className="w-full border-gray-300" />
              </div>

              <button type="button" className="w-full flex items-center justify-center gap-4 py-3 px-6 text-sm font-semibold tracking-wider text-gray-800 border border-gray-300 rounded-full bg-gray-50 hover:bg-gray-100 focus:outline-none"
               onClick={() => googleLogin()}>
              <FcGoogle size={22}/>
              Continue with google
            </button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>




    </>

  );
}

export default LoginForm;

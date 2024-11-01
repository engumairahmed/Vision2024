import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { TbEyeFilled } from "react-icons/tb";
import { TbEyeClosed } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import Cookies from "js-cookie";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";



function SignupForm() {
  const [passwordsVisible, setPasswordsVisible] = useState(false);

  const URL = import.meta.env.VITE_URL;

  const navigate = useNavigate();

  const handleGoogleLogin = async (codeResponse) => {
    try {
      const { name, email } = codeResponse.profileObj; // Extract user info from Google response
      const response = await axios.post(`${URL}/register-with-google`, { name, email, password: "dummyPassword", role: "retailer" })
        .then(
          (res) => {
            console.log(res.data.verificationToken);
            
            Cookies.set("authToken", res.data.verificationToken, { expires: 1 }); // Store JWT token
            toast.success("Google login successful!");
            navigate("/dashboard");
          }
        )
        .catch(
          (err)=>{
            console.log(err);
            
            toast.error("Google login failed. Please try again.", { theme: "dark" });
          }
        );

    } catch (error) {
      handleError(error);
    }
  };

  const handleError = (error) => {
    if (error.response) {
      formik.setErrors({
        ...formik.errors,
        email: error.response.data.msg || "An error occurred",
      });
    } else if (error.request) {
      toast.error("No response received from the server.", { theme: "dark" });
    } else {
      toast.error("Something went wrong.", { theme: "dark" });
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setUser(codeResponse);

      // const decoded = jwt.decode(codeResponse.access_token);

      // Cookies.set("authToken", codeResponse.access_token, { expires: 1 })
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  const validationSchema = Yup.object({
    name: Yup.string().required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(
        8,
        "password must contain 8 or more characters with at least one of each: uppercase, lowercase and number"
      )
      // .minLowercase(1, 'password must contain at least 1 lower case letter')
      // .minUppercase(1, 'password must contain at least 1 upper case letter')
      // .minNumbers(1, 'password must contain at least 1 number')
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    role: Yup.string()
      .oneOf(["wholesaler", "retailer"], "Role is required")
      .required("Role is required"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "",
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
          if (error.response) {
            formik.setErrors({
              ...formik.errors,
              email: error.response.data.msg,
            });
          } else if (error.request) {
            toast.error("No response received from the server.", {
              theme: "dark",
            });
          } else {
            toast.error("Something went wrong.", { theme: "dark" });
          }
        });
    },
  });

  useEffect(() => {
    if (Cookies.get("authToken")) {
      navigate("/dashboard");
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
            <form
              className="max-w-lg w-full mx-auto"
              onSubmit={formik.handleSubmit}
            >
              <div id="sign" className="mb-20 flex flex-col items-center">
                <div className="bg-black w-22 border-3 rounded-lg flex justify-center">
                  <Link to={"/"}>
                    <img src="/Logo.png" alt="TradeVista" className="w-20" />
                  </Link>
                </div>
                <h3 className="text-blue-800 text-4xl font-extrabold">
                  Signup
                </h3>
                <p className="text-gray-800 text-sm mt-2 ">
                  Already have an account ?
                  <Link
                    className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                    to={"/login"}
                  >
                    Login here
                  </Link>
                </p>
              </div>
              <div id="inputs">
                <div className="mt-2">
                  <label
                    htmlFor="name"
                    className="text-gray-800 text-xs block "
                  >
                    Full Name
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="name"
                      id="name"
                      type="text"
                      autoComplete="on"
                      className="w-full bg-transparent text-sm border-2 rounded-lg border-gray-300 focus:border-[#004d40] px-2 py-3 outline-none"
                      placeholder="Full Name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <FaUser className="w-[18px] h-[18px] absolute right-2"
                      style={{ color: "#bbb" }} />
                  </div>
                  {formik.touched.name && formik.errors.name ? (
                    <div className="text-red-600 text-xs mt-1">
                      {formik.errors.name}
                    </div>
                  ) : null}
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="email"
                    className="text-gray-800 text-xs block "
                  >
                    Email
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="email"
                      id="email"
                      type="text"
                      autoComplete="on"
                      className="w-full text-sm border-2 rounded-lg border-gray-300 focus:border-gray-800 px-2 py-3 outline-none"
                      placeholder="Email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <MdEmail
                      className="w-[18px] h-[18px] absolute right-2"
                      style={{ color: "#bbb" }}
                    />
                  </div>
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-red-600 text-xs mt-1">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>

                <div className="mt-4">
                  <label className="text-gray-800 text-xs block">
                    Password
                  </label>
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
                    {passwordsVisible ? (
                      <TbEyeFilled
                        className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                        onClick={() => setPasswordsVisible(!passwordsVisible)}
                        style={{ color: "#9CA3AF" }} // Set the color to gray
                      />
                    ) : (
                      <TbEyeClosed
                        className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                        onClick={() => setPasswordsVisible(!passwordsVisible)}
                        style={{ color: "#9CA3AF" }} // Set the color to gray
                      />
                    )}
                  </div>
                  {formik.touched.password && formik.errors.password ? (
                    <div className="text-red-600 text-xs mt-1">
                      {formik.errors.password}
                    </div>
                  ) : null}
                </div>

                {/* Confirm Password Field */}
                <div className="mt-4">
                  <label className="text-gray-800 text-xs block">
                    Confirm Password
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="confirmPassword"
                      type={passwordsVisible ? "text" : "password"}
                      className="w-full bg-transparent text-sm border-2 rounded-lg border-gray-300 focus:border-[#004d40] px-2 py-3 outline-none"
                      placeholder="Confirm password"
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {passwordsVisible ? (
                      <TbEyeFilled
                        className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                        onClick={() => setPasswordsVisible(!passwordsVisible)}
                        style={{ color: "#9CA3AF" }} // Set the color to gray
                      />
                    ) : (
                      <TbEyeClosed
                        className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                        onClick={() => setPasswordsVisible(!passwordsVisible)}
                        style={{ color: "#9CA3AF" }} // Set the color to gray
                      />
                    )}
                  </div>
                  {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword ? (
                    <div className="text-red-600 text-xs mt-1">
                      {formik.errors.confirmPassword}
                    </div>
                  ) : null}
                </div>

                <div className="mt-3">
                  <label className="text-gray-800 text-xs block mb-2">
                    Register As
                  </label>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        id="wholesaler"
                        name="role"
                        value="wholesaler"
                        className="text-[#004d40] focus:ring-[#004d40]"
                        checked={formik.values.role === "wholesaler"}
                        onChange={formik.handleChange}
                      />
                      <span className="ml-2 text-sm text-gray-800">
                        Wholesaler
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        id="retailer"
                        name="role"
                        value="retailer"
                        className="text-[#004d40] focus:ring-[#004d40]"
                        checked={formik.values.role === "retailer"}
                        onChange={formik.handleChange}
                      />
                      <span className="ml-2 text-sm text-gray-800">
                        Retailer
                      </span>
                    </label>
                  </div>
                  {formik.touched.role && formik.errors.role ? (
                    <div className="text-red-600 text-xs mt-1">
                      {formik.errors.role}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full py-3 px-6 text-sm font-semibold tracking-wider rounded-full text-white bg-blue-800  focus:outline-none"
                >
                  Signup
                </button>
              </div>

              <div className="my-2 flex items-center gap-4">
                <hr className="w-full border-gray-300" />
                <p className="text-sm text-gray-800 text-center">or</p>
                <hr className="w-full border-gray-300" />
              </div>
              <button
                type="button"
                className="w-full flex items-center justify-center gap-4 py-3 px-6 text-sm font-semibold tracking-wider text-gray-800 border border-gray-300 rounded-full bg-gray-50 hover:bg-gray-100 focus:outline-none"
                onClick={() => googleLogin({ onSuccess: handleGoogleLogin })}
              >
                <FcGoogle size={22} />
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

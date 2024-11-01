import { Formik, Field, Form, ErrorMessage } from "formik";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { TbEyeClosed, TbEyeFilled } from "react-icons/tb";
import { ToastContainer, toast } from 'react-toastify';
import * as Yup from "yup";
import axios from "axios";

const ChangePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string().required("Old Password is required"),
  newPassword: Yup.string()
    .required("New Password is required")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
});

 const Change_password = () => {
  const [passwordsVisible, setPasswordsVisible] = useState(false);
  const token = Cookies.get('authToken');
  const navigate = useNavigate();
  const viteURL = import.meta.env.VITE_URL

  return (
    <Formik
      initialValues={{
        oldPassword: "",
        newPassword: "",
        authToken:  token
      }}
      validationSchema={ChangePasswordSchema}
      onSubmit={(values) => {
        axios.put(`${viteURL}/update-password`, values)
        .then((result) => {
          const token = result.data.token;
          Cookies.set("authToken", token, values.remember ? { expires: 7 } : {});
          toast.success("Password Updated !");
          // resetForm();
        })
        .catch((error) => {
          toast.error(error.response.data.msg, { theme: "dark" });
         
        });
      }}
    >
      {() => (
        <div className="flex items-center justify-center p-5">
          <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-md">
            <h1 className="text-blue-900 text-3xl font-bold mb-6 text-center">
              Change Password
            </h1>
            <Form className="space-y-4">
          {/* Old Password Field */}
          <div className="relative z-0 w-full group">
            <Field
              type={passwordsVisible ? "text" : "password"}
              name="oldPassword"
              id="oldPassword"
              className="block py-2 px-0 pr-10 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="oldPassword"
              className="peer-focus:font-medium absolute text-sm italic text-blue-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Old Password
            </label>
            <div className="absolute right-2 top-2 cursor-pointer">
              {passwordsVisible ? (
                <TbEyeFilled
                  onClick={() => setPasswordsVisible(!passwordsVisible)}
                  style={{ color: "#9CA3AF" }}
                  className="w-[18px] h-[18px]"
                />
              ) : (
                <TbEyeClosed
                  onClick={() => setPasswordsVisible(!passwordsVisible)}
                  style={{ color: "#9CA3AF" }}
                  className="w-[18px] h-[18px]"
                />
              )}
            </div>
            <ErrorMessage
              name="oldPassword"
              component="div"
              className="text-sm text-red-600 mt-1"
            />
          </div>

          {/* New Password Field */}
          <div className="relative z-0 w-full group">
            <Field
              type={passwordsVisible ? "text" : "password"}
              name="newPassword"
              id="newPassword"
              className="block py-2 px-0 pr-10 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="newPassword"
              className="peer-focus:font-medium absolute text-sm italic text-blue-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              New Password
            </label>
            <div className="absolute right-2 top-2 cursor-pointer">
              {passwordsVisible ? (
                <TbEyeFilled
                  onClick={() => setPasswordsVisible(!passwordsVisible)}
                  style={{ color: "#9CA3AF" }}
                  className="w-[18px] h-[18px]"
                />
              ) : (
                <TbEyeClosed
                  onClick={() => setPasswordsVisible(!passwordsVisible)}
                  style={{ color: "#9CA3AF" }}
                  className="w-[18px] h-[18px]"
                />
              )}
            </div>
            <ErrorMessage
              name="newPassword"
              component="div"
              className="text-sm text-red-600 mt-1"
            />
          </div>

          {/* Confirm Password Field */}
          <div className="relative z-0 w-full group">
            <Field
              type={passwordsVisible ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              className="block py-2 px-0 pr-10 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="confirmPassword"
              className="peer-focus:font-medium absolute text-sm italic text-blue-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Confirm Password
            </label>
            <div className="absolute right-2 top-2 cursor-pointer">
              {passwordsVisible ? (
                <TbEyeFilled
                  onClick={() => setPasswordsVisible(!passwordsVisible)}
                  style={{ color: "#9CA3AF" }}
                  className="w-[18px] h-[18px]"
                />
              ) : (
                <TbEyeClosed
                  onClick={() => setPasswordsVisible(!passwordsVisible)}
                  style={{ color: "#9CA3AF" }}
                  className="w-[18px] h-[18px]"
                />
              )}
            </div>
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="text-sm text-red-600 mt-1"
            />
          </div>

          <div className="text-center mt-6 flex justify-center space-x-4">
            <button
              type="button"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => navigate("/dashboard/profile")}
            >
              View Profile
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Change Password
            </button>
          </div>
          <ToastContainer />
        </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Change_password;
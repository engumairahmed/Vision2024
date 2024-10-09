import React, { useState } from "react";
import { MdMailOutline } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import {
  SlSocialFacebook,
  SlSocialLinkedin,
  SlSocialInstagram,
} from "react-icons/sl";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import styles

function ContactUs() {
  const viteURL = import.meta.env.VITE_URL;
  const [userType, setUserType] = useState(""); // State to track user type

  // Form validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{11}$/, "Phone number must be 11 digits")
      .required("Phone number is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  // Formik initialization
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        // Include userType in the form submission
        await axios.post(`${viteURL}/contact-us`, {
          ...values,
          userType, // Add userType here
        });
        toast.success("Message sent successfully!"); // Show success toast
        resetForm(); // Reset the form upon success
        setUserType(""); // Reset user type after submission
      } catch (error) {
        console.error("Error submitting the form:", error);
        toast.error("Please select a user type (Wholesaler or Retailer)."); // Show error toast
      }
    },
  });

  return (
    <>
      <div className="mt-6 max-w-6xl max-lg:max-w-3xl mx-auto bg-gray-900 rounded-lg">
        <div className="grid lg:grid-cols-2 items-center gap-14 sm:p-8 p-4 font-[sans-serif]">
          <div>
            <h1 id="contact" className="text-6xl font-bold text-white">
              Contact Us
            </h1>
            <p
              id="cont_text"
              className="text-sm text-blue-300 mt-4 leading-relaxed"
            >
              Have some big idea or brand to develop and need help? <br /> Then
              reach out we'd love to hear about you and provide help.
            </p>

            <ul className="mt-12 space-y-8">
              <li className="flex items-center">
                <MdMailOutline style={{ width: "17px", height: "17px" }} />
                <a href="javascript:void(0)" className="text-white text-sm ml-4">
                  info@example.com
                </a>
              </li>
              <li className="flex items-center">
                <LuPhone style={{ width: "17px", height: "17px" }} />
                <a href="javascript:void(0)" className="text-white text-sm ml-4">
                  +158 996 888
                </a>
              </li>
              <li className="flex items-center">
                <GrLocation style={{ width: "17px", height: "17px" }} />
                <a href="javascript:void(0)" className="text-white text-sm ml-4">
                  123 Street 256 House
                </a>
              </li>
            </ul>

            <ul className="flex mt-12 space-x-4">
              <li className="bg-blue-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="javascript:void(0)">
                  <SlSocialFacebook style={{ width: "18px", height: "18px" }} />
                </a>
              </li>
              <li className="bg-blue-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="javascript:void(0)">
                  <SlSocialLinkedin style={{ width: "18px", height: "18px" }} />
                </a>
              </li>
              <li className="bg-blue-900  h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="javascript:void(0)">
                  <SlSocialInstagram style={{ width: "18px", height: "18px" }} />
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="text-sm font-semibold text-gray-800">
              I'm interested in...
            </p>

            <div className="space-y-4 max-lg:mt-4">
              <button
                type="button"
                className={`px-4 py-2 rounded-lg ${userType === "Wholesaler" ? 'bg-blue-600' : 'bg-blue-900'} text-white text-sm tracking-wider font-medium outline-none border-2 mr-4`}
                onClick={() => setUserType("Wholesaler")} // Set user type to Wholesaler
              >
                Wholesaler
              </button>
              <button
                type="button"
                className={`px-4 py-2 rounded-lg ${userType === "Retailer" ? 'bg-blue-600' : 'bg-blue-900'} text-white text-sm tracking-wider font-medium outline-none border-2`}
                onClick={() => setUserType("Retailer")} // Set user type to Retailer
              >
                Retailer
              </button>
            </div>

            <form className="mt-8 space-y-4" onSubmit={formik.handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-blue"
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500">{formik.errors.name}</p>
              )}

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-blue"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500">{formik.errors.email}</p>
              )}

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formik.values.phone}
                onChange={formik.handleChange}
                className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-blue"
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className="text-red-500">{formik.errors.phone}</p>
              )}

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formik.values.subject}
                onChange={formik.handleChange}
                className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-blue"
              />
              {formik.touched.subject && formik.errors.subject && (
                <p className="text-red-500">{formik.errors.subject}</p>
              )}

              <textarea
                name="message"
                placeholder="Message"
                value={formik.values.message}
                onChange={formik.handleChange}
                rows="3"
                className="w-full rounded-lg px-4 text-gray-800 text-sm pt-3 outline-blue"
              ></textarea>
              {formik.touched.message && formik.errors.message && (
                <p className="text-red-500">{formik.errors.message}</p>
              )}

              <button
                type="submit"
                className="text-white bg-blue-900 tracking-wide rounded-lg text-sm px-4 py-3 flex items-center justify-center w-full !mt-6"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </>
  );
}

export default ContactUs;

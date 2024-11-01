import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Cookies from "js-cookie";
import * as jwt from "jwt-decode";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useAuth } from "../Auth/AuthContext";

const ProfileSchema = Yup.object().shape({
  fullname: Yup.string().required("Full Name is required"),
  organizationname: Yup.string().required("Organization Name is required"),
  country: Yup.string().required("Country is required"),
  city: Yup.string().required("City is required"),
  fulladdress: Yup.string().required("Full Address is required"),
});

export const Profile = () => {

  const viteURL = import.meta.env.VITE_URL;

  const { getUserId } = useAuth();
  const userId = getUserId();

  const [profilePic, setProfilePic] = useState(null);
  const [user, setUser] = useState(null);
  const [initialValuesPro, setInitialValues] = useState({
    fullname: "",
    organizationname: "",
    country: "",
    city: "",
    fulladdress: "",
  });

  const navigate = useNavigate();

  const handlePicUpload = (e, setFieldValue) => {
    if (e.target.files[0]) {
      const file = e.target.files[0]; // Get the file
      setProfilePic(URL.createObjectURL(file)); // Set preview
      setFieldValue("image", file);
    }
  };

  const fetchData = async (email) => {
    await axios
      .post(`${viteURL}/profile`, { email: email })
      .then((response) => {
        const userData = response.data.user;
        
        setUser(userData);

        setInitialValues({
          fullname: response.data.user?.name || "",
          organizationname: response.data.user?.organization || "",
          country: response.data.user?.country || "",
          city: response.data.user?.city || "",
          fulladdress: response.data.user?.address || "",
        });

        setProfilePic(viteURL+response.data.user?.picture || "")        

      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  };

  useEffect(() => {
    const authToken = Cookies.get("authToken");
    const decodedToken = jwt.jwtDecode(authToken);
    const email = decodedToken.email;
    fetchData(email);
  }, []);

  return (
    <Formik
      initialValues={initialValuesPro}
      validationSchema={ProfileSchema}
      enableReinitialize={true}
      onSubmit={(values) => {
        try {
          const formData = new FormData();
          formData.append("fullname", values.fullname);
          formData.append("organizationname", values.organizationname);
          formData.append("country", values.country);
          formData.append("city", values.city);
          formData.append("fulladdress", values.fulladdress);
          formData.append("userId", userId);
          formData.append("image", values.image);

          if (profilePic) {
            formData.append("profilePic", profilePic);
          }

          axios
            .put(`${viteURL}/profile/update`, formData)
            .then((response) => {
              toast.success("Updated");
            })
            .catch((error) => {
              console.error("Error updating profile", error);
              toast.error("Error updating profile");
            });
        } catch (error) {
          console.error("Error updating profile", error);
        }
      }}
    >
      {(formik) => (
        <div className="min-h-screen flex items-center justify-center p-5 mt-2">
          <div className="p-6 bg-white bg-gray-400 rounded-lg shadow-lg w-full max-w-3xl">
            <h1 className="text-blue-900 text-3xl font-bold mb-6 text-center">
              Profile Page
            </h1>
            <div className="flex flex-col items-center mb-4">
              <div
                className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-600"
                style={{ borderColor: "#233876" }}
              >
                {profilePic ? (
                  <img
                    src={profilePic}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <span className="text-600 text-blue-900">Logo Here</span>
                  </div>
                )}
              </div>
            </div>

            <form
              onSubmit={formik.handleSubmit}
              className="space-y-4"
              encType="multipart/form-data"
            >
              <input
                type="file"
                accept="image/*"
                name="image"
                onChange={(e) => handlePicUpload(e, formik.setFieldValue)}
                className="mb-4"
              />

              <div className="relative z-0 w-full group">
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  className="block py-2 px-0 w-full text-sm font-bold text-blue-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                  placeholder=" "
                  value={formik.values.fullname}
                  onChange={formik.handleChange}
                />
                <label
                  htmlFor="fullname"
                  className="peer-focus:font-medium absolute text-sm text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Full Name
                </label>
                {formik.errors.fullname && (
                  <div className="text-sm text-red-700 mt-1">
                    {formik.errors.fullname}
                  </div>
                )}
              </div>

              <div className="relative z-0 w-full group">
                <input
                  type="text"
                  name="organizationname"
                  id="organizationname"
                  className="block py-2 px-0 w-full text-sm font-bold text-blue-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                  placeholder=" "
                  value={formik.values.organizationname}
                  onChange={formik.handleChange}
                />
                <label
                  htmlFor="organizationname"
                  className="peer-focus:font-medium absolute text-sm text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Organization Name
                </label>
                {formik.errors.organizationname && (
                  <div className="text-sm text-red-700 mt-1">
                    {formik.errors.organizationname}
                  </div>
                )}
              </div>

              <div className="grid md:grid-cols-2 md:gap-4">
                <div className="relative z-0 w-full group">
                  <input
                    type="text"
                    name="country"
                    id="country"
                    className="block py-2 px-0 w-full text-sm font-bold text-blue-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                    placeholder=" "
                    value={formik.values.country}
                    onChange={formik.handleChange}
                  />
                  <label
                    htmlFor="country"
                    className="peer-focus:font-medium absolute text-sm text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Country
                  </label>
                  {formik.errors.country && (
                    <div className="text-sm text-red-700 mt-1">
                      {formik.errors.country}
                    </div>
                  )}
                </div>
                <div className="relative z-0 w-full group">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    className="block py-2 px-0 w-full text-sm font-bold text-blue-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                    placeholder=" "
                    value={formik.values.city}
                    onChange={formik.handleChange}
                  />
                  <label
                    htmlFor="city"
                    className="peer-focus:font-medium absolute text-sm text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    City
                  </label>
                  {formik.errors.city && (
                    <div className="text-sm text-red-700 mt-1">
                      {formik.errors.city}
                    </div>
                  )}
                </div>
              </div>

              <div className="relative z-0 w-full group">
                <input
                  type="text"
                  name="fulladdress"
                  id="fulladdress"
                  className="block py-2 px-0 w-full text-sm font-bold text-blue-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                  placeholder=" "
                  value={formik.values.fulladdress}
                  onChange={formik.handleChange}
                />
                <label
                  htmlFor="fulladdress"
                  className="peer-focus:font-medium absolute text-sm text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Full Address
                </label>
                {formik.errors.fulladdress && (
                  <div className="text-sm text-red-700 mt-1">
                    {formik.errors.fulladdress}
                  </div>
                )}
              </div>

              <div className="flex justify-between mt-8">
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-blue-900 rounded-md"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
          <ToastContainer />
        </div>
      )}
    </Formik>
  );
};

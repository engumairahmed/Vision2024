import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { FaImage , FaCloudUploadAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import * as jwt from 'jwt-decode';
import { useAuth } from "../Auth/AuthContext";


export const ProductManagement = ({ user }) => {

  const { getUserId } = useAuth();
  const userId = getUserId();

  const navigate = useNavigate();


  const [authToken, setToken] = useState();
  const [decodedToken, setDecodedToken] = useState();

  const token = Cookies.get('authToken');

  const deco = jwt.jwtDecode(token);

  const newId = deco.id


  const [User, setUser] = useState(user);
  const [imagePreview, setImagePreview] = useState(null);
  const [id, setUserId] = useState(newId);

  const viteURL = import.meta.env.VITE_URL

  const validationSchema = Yup.object({
    name: Yup.string().required("Product name is required"),
    brand: Yup.string().required("Brand is required"),
    category: Yup.string()
      .required("Category is required")
      .notOneOf([""], "Category is required"),
    price: Yup.number().required("Price is required"),
    quantity: Yup.number().required("Quantity is required"),
    description: Yup.string(),
    image: Yup.mixed()
      .required("Image is required")
      .test("fileSize", "File size is too large", (value) => {
        return value && value.size <= 5 * 1024 * 1024; // 5MB
      })
      .test("fileType", "Unsupported File Format", (value) => {
        return (
          value && ["image/jpeg", "image/png", "image/jpg"].includes(value.type)
        );
      }),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      brand: "",
      category: "",
      price: "",
      quantity: "",
      description: "",
      image: "",
      id:id,
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('brand', values.brand);
      formData.append('category', values.category);
      formData.append('price', values.price);
      formData.append('quantity', values.quantity);
      formData.append('description', values.description);
      formData.append('image', values.image);
      formData.append('id', values.id);
      setImagePreview(null)


      axios.post(`${viteURL}/add-product`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(() => {

          toast.info("Product added!");
          resetForm();
        })
        .catch((error) => {
          toast.error(error.message);
        })
    }

  });



  useEffect(() => {
    const token = Cookies.get('authToken');
    if (token) {
      const decoded = jwt.jwtDecode(token);
      setDecodedToken(decoded);
      setToken(token);
      setUserId(decoded.id);     
    }
  },[token]);

  return (
    <div className="product-container p-8 w-100 mt-10 ">
      <section className="bg-gray-500 dark:bg-gray-900 p-8 rounded-lg shadow-md">
        <h2 className="mb-4 text-3xl font-bold text-black">
          Add Products
        </h2>
        <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium dark:text-white text-white"
              >
                Product Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product part name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-500 text-sm">{formik.errors.name}</div>
              ) : null}
            </div>

            <div className="w-full">
              <label
                htmlFor="brand"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-white"
              >
                Brand
              </label>
              <input
                type="text"
                name="brand"
                id="brand"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Product brand"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.brand}
              />
              {formik.touched.brand && formik.errors.brand ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.brand}
                </div>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-white"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.category}
              >
                <option value="">Select category</option>
                <option value="battery">Laptop Battery</option>
                <option value="screen">Laptop Screen</option>
                <option value="fan">Fan</option>
                <option value="keyboard">Laptop Keyboard</option>
                <option value="hinges">Laptop Hinges</option>
                <option value="body">Laptop Body</option>
              </select>
              {formik.touched.category && formik.errors.category ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.category}
                </div>
              ) : null}
            </div>

            <div className="w-full">
              <label
                htmlFor="quantity"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-white"
              >
                Quantity
              </label>
              <input
                type="number"
                min={0}
                name="quantity"
                id="quantity"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Product quantity"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.quantity}
              />
              {formik.touched.quantity && formik.errors.quantity ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.quantity}
                </div>
              ) : null}
            </div>

            <div className="w-full">
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-white"
              >
                Price
              </label>
              <input
                type="number"
                min={0}
                name="price"
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="999"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.price}
              />
              {formik.touched.price && formik.errors.price ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.price}
                </div>
              ) : null}
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-white"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Product description"
                rows="2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
              ></textarea>
              {formik.touched.description && formik.errors.description ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.description}
                </div>
              ) : null}
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="image"
                className="block mb-2 text-xl text-center font-medium text-gray-100 dark:text-white"
              >
                Product Image
              </label>

              {/* Container for both image preview and upload button */}
              <div className="flex items-center justify-center p-6 border-gray-300 border-dashed rounded-lg dark:border-gray-600 bg-gray-500 dark:bg-gray-700 h-48 space-x-6">
                {/* Preview Image Section */}
                <div className="flex items-center justify-center bg-gray-300 w-32 h-32 border-2 border-gray-300 border-solid rounded-lg">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      <FaImage className="w-8 h-8"/>
                    </span>
                  )}
                </div>

                {/* Upload Button Section */}
                <div className="flex flex-col items-center justify-center border-2 border-solid border-gray-500 bg-gray-300 h-32 w-32 rounded-lg">
                  <input
                    type="file"
                    name="image"
                    id="image"
                    className="hidden"
                    onChange={(event) => {
                      const file = event.currentTarget.files[0];
                      formik.setFieldValue("image", file);
                      setImagePreview(URL.createObjectURL(file));
                    }}
                  />
                  <label
                    htmlFor="image"
                    className="flex flex-col items-center cursor-pointer"
                  >
                    <FaCloudUploadAlt className="w-8 h-8" color="#69707f"/>
                    <span className="text-gray-500 dark:text-gray-400 text-sm text-center">
                      Click to upload photo
                    </span>
                    <span className="text-sm text-gray-400 dark:text-gray-500">
                      Max size: 5MB
                    </span>
                  </label>
                  {formik.values.image && (
                    <span className="text-sm text-gray-600 mt-2 dark:text-gray-400">
                      {formik.values.image.name}
                    </span>
                  )}
                </div>
              </div>

              {/* Error message */}
              {formik.touched.image && formik.errors.image ? (
                <div className="text-red-500 text-sm mt-2">
                  {formik.errors.image}
                </div>
              ) : null}
            </div>

          </div>
          <div className="flex items-center justify-center">
          <button
            type="submit"
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Add Product
            </span>
          </button>
          </div>
        </form>
      </section>
    </div>
  );
};

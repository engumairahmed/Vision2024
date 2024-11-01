import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import * as jwt from "jwt-decode";
import { useAuth } from "../Auth/AuthContext";

export const AddTransaction = () => {
  const { getUserId } = useAuth();
  const userId = getUserId();
  const navigate = useNavigate();

  const [receivers, setReceivers] = useState([]);
  const viteURL = import.meta.env.VITE_URL;

  const token = Cookies.get("authToken");

  const validationSchema = Yup.object({
    sender: Yup.string().required("Sender is required"),
    receiver: Yup.string().required("Receiver is required"),
    transactionId: Yup.string().required("Transaction ID is required"),
    paymentMode: Yup.string()
      .oneOf(["Cash", "EasyPaisa", "JazzCash", "BankAccount", "Credit"], "Invalid payment mode")
      .required("Transaction type is required"),
    debitAmount: Yup.number().min(0, "Amount must be at least 0"),
    creditAmount: Yup.number().min(0, "Amount must be at least 0"),
  }).test("debitOrCredit", "Either debitAmount or creditAmount must be specified", (values) => {
    return values.debitAmount || values.creditAmount;
  });

  const formik = useFormik({
    initialValues: {
      authToken: token,
      receiver: "",
      transactionId: "",
      paymentMode: "",
      debitAmount: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      axios
        .post(`${viteURL}/add-transaction`, values)
        .then(() => {
          toast.info("Transaction added!");
          resetForm();
        })
        .catch((error) => {
          toast.error(error.message);
        });
    },
  });

  const fetchData = async (token) => {
    try {
      const response = await axios.post(`${viteURL}/receivers`, { authToken: token });
      setReceivers(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    const token = Cookies.get("authToken");
    if (token) {
      const decoded = jwt.jwtDecode(token);
      formik.setFieldValue("sender", decoded.id);
      fetchData(token);
    }
  }, []);

  return (
    <div className="transaction-container p-8 w-100 mt-10">
      <section className="bg-gray-500 dark:bg-gray-900 p-8 rounded-lg shadow-md">
        <h2 className="mb-4 text-3xl font-bold text-gray-900">
          Create New Transaction
        </h2>
        <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Receiver
              </label>
              <select
                name="receiver"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.receiver}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option value="">Select Receiver</option>
                {receivers.map((receiver) => (
                  <option key={receiver._id} value={receiver._id}>
                    {receiver.name}
                  </option>
                ))}
              </select>
              {formik.touched.receiver && formik.errors.receiver && (
                <div className="text-red-500 text-sm">{formik.errors.receiver}</div>
              )}
            </div>

            {/* Transaction ID Input */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Transaction ID
              </label>
              <input
                type="text"
                name="transactionId"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.transactionId}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              />
              {formik.touched.transactionId && formik.errors.transactionId && (
                <div className="text-red-500 text-sm">{formik.errors.transactionId}</div>
              )}
            </div>

            {/* Payment Mode and Amount Inputs */}
            {/* Payment Mode */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Payment Mode
              </label>
              <select
                name="paymentMode"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.paymentMode}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option value="">Select Type</option>
                <option value="Cash">Cash</option>
                <option value="EasyPaisa">EasyPaisa</option>
                <option value="JazzCash">Jazz Cash</option>
                <option value="BankAccount">Bank Account</option>
                <option value="Credit">Credit</option>
              </select>
              {formik.touched.paymentMode && formik.errors.paymentMode && (
                <div className="text-red-500 text-sm">{formik.errors.paymentMode}</div>
              )}
            </div>

            {/* Debit and Credit Amount Inputs */}
            <div className="w-full">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Amount
              </label>
              <input
                type="number"
                name="debitAmount"
                min="0"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.debitAmount}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              />
              {formik.touched.debitAmount && formik.errors.debitAmount && (
                <div className="text-red-500 text-sm">{formik.errors.debitAmount}</div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-center mt-4">
            <button
              type="submit"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Add Transaction
              </span>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

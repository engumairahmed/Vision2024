import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaImage, FaCloudUploadAlt } from "react-icons/fa";
import { toast } from "react-toastify";

export const UpdateProd = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState(null); // For selected image
  const [imagePreview, setImagePreview] = useState(null); // To preview image
  const navigate = useNavigate();

  // Fetch product data based on the ID
  useEffect(() => {
    try {
      axios
        .get(`http://localhost:5000/product/${id}`)
        .then((result) => {
          setName(result.data.product.name);
          setCategory(result.data.product.category);
          setBrand(result.data.product.brand);
          setDescription(result.data.product.description);
          setPrice(result.data.product.price);
          setQuantity(result.data.product.quantity);
          setImage(result.data.product.image);
          setImagePreview(`http://localhost:5000${result.data.product.image}`);
          console.log(result.data.product);
        })
        .catch((err) => {
          console.error("Failed to fetch product data:", err);
        });
    } catch (error) {
      console.error("Failed to fetch product data:", error);
    }
  }, [id]);

  // Handle image change and preview
  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    setImage(selectedFile);

    // Create an image preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    }
  };

  // Handle form submission
  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("category", category);
    formData.append("brand", brand);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("quantity", quantity);
    if (image) {
      formData.append("image", image);      
    }

    try {
      await axios.put(`http://localhost:5000/update-products/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then(()=>{
        toast.success("Product updated successfully");
        navigate('/dashboard/products');
      }
      )
    } catch (error) {
      console.error("Failed to update product:", error);
      alert("Failed to update product");
    }
  };

  return (
    <div className="product-container p-8 w-100 mt-10">
      <section className="bg-gray-500 dark:bg-gray-900 p-8 rounded-lg shadow-md">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 text-black">
          Update Product
        </h2>
        <form onSubmit={handleUpdate} encType="multipart/form-data">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="Type product name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="brand"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Brand
              </label>
              <input
                type="text"
                id="brand"
                value={brand}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="Product brand"
                onChange={(e) => setBrand(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Category
              </label>
              <select
                id="category"
                value={category}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select category</option>
                <option value="battery">Laptop Battery</option>
                <option value="screen">Laptop Screen</option>
                <option value="fan">Fan</option>
                <option value="keyboard">Laptop Keyboard</option>
              </select>
            </div>

            <div className="w-full">
              <label
                htmlFor="quantity"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Quantity
              </label>
              <input
                type="number"
                min={0}
                id="quantity"
                value={quantity}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="Product quantity"
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Price
              </label>
              <input
                type="number"
                min={0}
                id="price"
                value={price}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="999"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <textarea
                id="description"
                value={description}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="Product description"
                rows="2"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="image"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Image
              </label>
              <div className="flex items-center justify-center p-6 border-gray-300 border-dashed rounded-lg dark:border-gray-600 bg-gray-500 dark:bg-gray-700 h-48 space-x-6">
                {/* Image preview */}
                <div className="flex items-center justify-center bg-gray-300 w-32 h-32 border-2 border-gray-300 rounded-lg">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <FaImage className="w-8 h-8 text-gray-500" />
                  )}
                </div>
                {/* Upload button */}
                <div className="flex flex-col items-center justify-center border-2 border-gray-500 bg-gray-300 h-32 w-32 rounded-lg">
                  <input
                    type="file"
                    id="image"
                    className="hidden"
                    onChange={handleImageChange}
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
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="btn-primary text-white bg-blue-700 hover:bg-blue-800 rounded-lg px-5 py-2.5"
            >
              Update Product
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default UpdateProd;
